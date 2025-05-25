from flask import Flask, request, jsonify
from flask_cors import CORS
import fitz  # PyMuPDF
import re
from sentence_transformers import SentenceTransformer, util

app = Flask(__name__)
CORS(app)

model = SentenceTransformer('all-MiniLM-L6-v2')  # Already installed model

def extract_text_from_pdf(pdf_file):
    doc = fitz.open(stream=pdf_file.read(), filetype="pdf")
    text = ""
    for page in doc:
        text += page.get_text()
    return text

def extract_basic_info(text):
    name = text.split('\n')[0]
    email = re.search(r'[\w\.-]+@[\w\.-]+', text)
    phone = re.search(r'\+?\d[\d \-]{8,13}\d', text)
    return {
        "name": name.strip(),
        "email": email.group(0) if email else "Not Found",
        "phone": phone.group(0) if phone else "Not Found"
    }

def extract_skills(text):
    common_skills = ["Python", "Java", "C++", "SQL", "HTML", "CSS", "JavaScript", "React", "Django", "Machine Learning"]
    return [skill for skill in common_skills if skill.lower() in text.lower()]

def extract_projects(text):
    lines = text.split('\n')
    return [line.strip() for line in lines if 'project' in line.lower() or 'developed' in line.lower()][:3]

def generate_summary(name, skills, projects):
    skill_str = ', '.join(skills) if skills else "various technologies"
    project_str = ', '.join(projects[:2]) if projects else "multiple domains"
    return (
        f"{name} is a skilled individual with experience in {skill_str}. "
        f"They have worked on projects such as {project_str}. "
        f"The candidate demonstrates technical capabilities and a growth mindset."
    )

@app.route('/compare-resumes', methods=['POST'])
def compare_resumes():
    results = []
    summaries = []
    files = request.files.getlist('resumes')

    for file in files:
        text = extract_text_from_pdf(file)
        info = extract_basic_info(text)
        skills = extract_skills(text)
        projects = extract_projects(text)
        summary = generate_summary(info['name'], skills, projects)

        results.append({
            "name": info['name'],
            "email": info['email'],
            "phone": info['phone'],
            "skills": skills,
            "projects": projects,
            "summary": summary
        })
        summaries.append(summary)

    # AI-based comparison if 2 resumes uploaded
    if len(summaries) == 2:
        emb1 = model.encode(summaries[0], convert_to_tensor=True)
        emb2 = model.encode(summaries[1], convert_to_tensor=True)
        similarity_score = util.cos_sim(emb1, emb2).item()
        results.append({
            "comparison": f"Semantic Similarity Score between resumes: {similarity_score:.2f}"
        })

    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)