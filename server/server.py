from flask import Flask, request, jsonify
from flask_cors import CORS
import fitz  # PyMuPDF
from sentence_transformers import SentenceTransformer, util
import re

app = Flask(__name__)
CORS(app)

model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')

def extract_text_from_pdf(pdf_file):
    text = ""
    doc = fitz.open(stream=pdf_file.read(), filetype="pdf")
    for page in doc:
        text += page.get_text()
    return text

def extract_links_from_pdf(pdf_file):
    doc = fitz.open(stream=pdf_file.read(), filetype="pdf")
    links = []
    for page in doc:
        for link in page.get_links():
            uri = link.get("uri", "")
            if uri:
                links.append(uri)
    return links

def extract_contact_info(text, pdf_file):
    email_match = re.search(r'[\w\.-]+@[\w\.-]+\.\w+', text)
    phone_match = re.search(r'(\+?\d{1,3}[-.\s]?)?(\d{10})', text)

    # Extract embedded links
    pdf_file.seek(0)
    links = extract_links_from_pdf(pdf_file)
    linkedin = next((link for link in links if "linkedin.com/in" in link), "Not found")
    github = next((link for link in links if "github.com" in link), "Not found")

    email = email_match.group() if email_match else "Not found"
    phone = phone_match.group() if phone_match else "Not found"

    return email, phone, linkedin, github

def extract_name(text):
    lines = text.strip().split("\n")
    for line in lines:
        if line.strip() and len(line.split()) <= 4 and not any(word in line.lower() for word in ["email", "phone", "contact"]):
            return line.strip()
    return "Name not found"

def extract_projects(text):
    lines = text.split("\n")
    project_keywords = ["project", "projects", "major project", "minor project", "academic project"]
    projects = []
    capture = False
    for line in lines:
        if any(keyword in line.lower() for keyword in project_keywords):
            capture = True
            continue
        if capture:
            if line.strip() == "" or re.match(r"^[A-Z][a-z]+.*:$", line.strip()):
                break
            projects.append(line.strip())
            if len(projects) >= 3:
                break
    return " | ".join(projects) if projects else "No projects found"

def extract_matched_skills(text, skills):
    return [skill for skill in skills if re.search(rf'\b{re.escape(skill)}\b', text, re.IGNORECASE)]

def calculate_match_score(text, job_description, skills):
    matches = sum(1 for skill in skills if skill.lower() in text.lower())
    score = (matches / len(skills)) * 60 if skills else 0

    embeddings = model.encode([text, job_description])
    semantic_similarity = util.cos_sim(embeddings[0], embeddings[1]).item()
    score += semantic_similarity * 40

    return round(score, 2), semantic_similarity

def generate_feedback(text, job_description, score, similarity, skills, email, phone, linkedin, github):
    name = extract_name(text)
    projects = extract_projects(text)
    matched_skills = extract_matched_skills(text, skills)
    missing_skills = list(set(skills) - set(matched_skills))

    if score >= 70:
        verdict = "✅ Recommended for Hiring"
        verdict_color = "#4CAF50"
        verdict_msg = "The candidate has strong project experience and relevant skills."
    elif score >= 40:
        verdict = "⚠️ Consider for Interview"
        verdict_color = "#FFC107"
        verdict_msg = "The candidate demonstrates moderate alignment with the job requirements."
    else:
        verdict = "❌ Not Suitable"
        verdict_color = "#F44336"
        verdict_msg = "The resume lacks alignment with the job description and contains limited relevant content."

    summary = f"""
<div style="font-family:Arial, sans-serif; line-height:1.6; border:1px solid #ccc; border-radius:10px; padding:15px; background:#f9f9f9;">
  <h2 style="color:#333;">📄 Candidate Analysis Report</h2>
  <p><strong>👤 Name:</strong> {name}</p>
  <p><strong>📧 Email:</strong> {email}</p>
  <p><strong>📱 Phone:</strong> {phone}</p>
  <p><strong>🔗 LinkedIn:</strong> {linkedin}</p>
  <p><strong>💻 GitHub:</strong> {github}</p>
  <p><strong>📊 Match Score:</strong> {score}%</p>
  <p><strong>✅ Matched Skills:</strong> <span style="color:green;">{', '.join(matched_skills) if matched_skills else "None"}</span></p>
  <p><strong>❌ Missing Skills:</strong> <span style="color:red;">{', '.join(missing_skills) if missing_skills else "None"}</span></p>
  <p><strong>🚀 Project Highlights:</strong> {projects}</p>
  <hr style="margin:15px 0;">
  <h3 style="color:{verdict_color};">{verdict}</h3>
  <p>{verdict_msg}</p>
</div>
"""
    return summary.strip()

@app.route('/api/rank', methods=['POST'])
def rank_resumes():
    skills = request.form.get("skills")
    job_description = request.form.get("job_description")
    resume_files = request.files.getlist("resumes")

    if not skills or not job_description or not resume_files:
        return jsonify({"error": "Missing fields"}), 400

    try:
        skills = eval(skills)
    except:
        return jsonify({"error": "Invalid skills format"}), 400

    results = []
    for file in resume_files:
        file.stream.seek(0)
        text = extract_text_from_pdf(file.stream)
        file.stream.seek(0)
        email, phone, linkedin, github = extract_contact_info(text, file.stream)
        score, similarity = calculate_match_score(text, job_description, skills)
        feedback = generate_feedback(text, job_description, score, similarity, skills, email, phone, linkedin, github)
        results.append({
            "filename": file.filename,
            "score": score,
            "feedback": feedback
        })

    results.sort(key=lambda x: x["score"], reverse=True)
    return jsonify(results)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)