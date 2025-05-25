function compareResumes() {
  const input = document.getElementById('resumeInput');
  const output = document.getElementById('output');

  if (input.files.length === 0) {
    alert("Please upload at least one resume!");
    return;
  }

  output.innerHTML = `
    <div class="loader"></div>
    <p>Analyzing ${input.files.length} resume(s)... please wait.</p>
  `;

  const formData = new FormData();
  for (let file of input.files) {
    formData.append('resumes', file);
  }

  fetch('http://127.0.0.1:5000/compare-resumes', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      console.log("Received:", data);  // Debug log
      output.innerHTML = "";

      data.forEach(item => {
        if (item.name) {
          output.innerHTML += `
            <div class="card">
              <h3>${item.name}</h3>
              <p><strong>Email:</strong> ${item.email}</p>
              <p><strong>Phone:</strong> ${item.phone}</p>
              <p><strong>Skills:</strong> ${item.skills.length ? item.skills.join(', ') : 'Not Found'}</p>
              <p><strong>Projects:</strong> ${item.projects.length ? item.projects.join(', ') : 'Not Found'}</p>
              <p><strong>Summary:</strong> ${item.summary}</p>
            </div>
          `;
        }

        if (item.comparison) {
          output.innerHTML += `
            <div class="ai-summary">
              <h3>AI Comparison Summary:</h3>
              <p>${item.comparison}</p>
            </div>
          `;
        }
      });
    })
    .catch(error => {
      console.error("Error:", error);
      output.innerHTML = '<p style="color:red;">Something went wrong. Please try again.</p>';
    });
}