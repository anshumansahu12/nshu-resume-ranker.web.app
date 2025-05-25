const availableSkills = [
  // IT & Software
  'Python', 'Java', 'C++', 'JavaScript', 'HTML', 'CSS', 'React', 'Angular', 'Vue.js',
  'Node.js', 'Express.js', 'Flutter', 'Dart', 'Firebase', 'MySQL', 'MongoDB', 'SQL',
  'Linux', 'Git', 'GitHub', 'DevOps', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP',
  'Cybersecurity', 'Nmap', 'Wireshark', 'Ethical Hacking', 'Penetration Testing',
  'Machine Learning', 'Deep Learning', 'NLP', 'AI', 'Data Science', 'Data Analysis',
  'Power BI', 'Tableau', 'Excel', 'MATLAB', 'R Programming', 'web development', 'mobile development',
  'game development', 'blockchain', 'IoT', 'AR', 'VR', 'UI/UX Design', 'Photoshop',
  'Illustrator', 'Figma', 'Adobe XD', 'After Effects', 'Premiere Pro', '3D Modeling',
  'Unity', 'Unreal Engine', 'Blender', 'AutoCAD', 'SolidWorks', 'PLC Programming',
  'Robotics', 'Embedded Systems', 'Networking', 'TCP/IP', 'DNS', 'DHCP', 'VPN',
  'Firewall', 'Load Balancing', 'Web Security', 'Pen Testing', 'Vulnerability Assessment',
  'Incident Response', 'Forensics', 'Malware Analysis', 'Threat Intelligence',
  'Cryptography', 'Blockchain Development', 'Smart Contracts', 'Ethereum', 'Solidity',
  'Hyperledger', 'Cryptocurrency', 'Bitcoin', 'Ethereum', 'Ripple', 'Litecoin',
  'Digital Marketing', 'SEO', 'SEM', 'PPC', 'Content Marketing', 'Social Media Marketing',
  'Email Marketing', 'Affiliate Marketing', 'Google Analytics', 'Google Ads',
  'Facebook Ads', 'Instagram Marketing', 'LinkedIn Marketing', 'Twitter Marketing',
  'YouTube Marketing', 'Influencer Marketing', 'Branding', 'Public Relations',
  'Event Management', 'Market Research', 'Competitive Analysis', 'Customer Segmentation',
  'Lead Generation', 'Sales Funnel', 'Conversion Rate Optimization', 'A/B Testing',
  'Email Campaigns', 'Webinars', 'Podcasts', 'Content Creation', 'Blogging',
  'Copywriting', 'Technical Writing', 'Creative Writing', 'Content Strategy',
  'Content Curation', 'Social Media Management', 'Community Management', 'Customer Support',
  'Customer Relationship Management', 'Salesforce', 'HubSpot', 'Zoho CRM',
  'Microsoft Dynamics', 'SAP', 'Oracle', 'ERP Systems', 'Supply Chain Management',
  'Inventory Management', 'Logistics', 'Warehouse Management', 'Transportation Management',
  'Fleet Management', 'Procurement', 'Vendor Management', 'Contract Management',
  'Risk Management', 'Compliance', 'Quality Assurance', 'Quality Control',
  'Lean Manufacturing', 'Six Sigma', 'Kaizen', 'Total Quality Management',
  'Project Management', 'Agile', 'Scrum', 'Kanban', 'Waterfall', 'PRINCE2',
  'PMI', 'PMP', 'Project Scheduling', 'Risk Assessment', 'Stakeholder Management',
  'Resource Allocation', 'Budgeting', 'Cost Management', 'Time Management',
  'Performance Measurement', 'Change Management', 'Conflict Resolution',

  // Non-IT Skills
  'Communication', 'Teamwork', 'Leadership', 'Problem Solving', 'Critical Thinking',
  'Time Management', 'Public Speaking', 'Customer Service', 'Sales', 'Marketing',
  'Finance', 'Accounting', 'HR Management', 'Teaching', 'Counseling', 'Project Management',
  'Content Writing', 'Creative Writing', 'Graphic Design', 'Photoshop', 'Illustrator',
  'Video Editing', 'Photography', 'Event Planning', 'Foreign Languages', 'Logistics',
  'Supply Chain Management', 'Operations', 'Legal Knowledge', 'Medical Knowledge',
    'C', 'C++', 'C#', 'JavaScript', 'TypeScript', 'Go', 'Rust', 'Ruby', 'PHP',
    'Kotlin', 'Swift', 'Objective-C', 'Dart', 'Flutter', 'React', 'Vue.js', 'Angular', 'Svelte',
    'Node.js', 'Express.js', 'Next.js', 'Nuxt.js', 'Redux', 'jQuery',
  
    // --- Backend & Databases ---
    'MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Firebase', 'Redis', 'Cassandra', 'Oracle', 'MariaDB',
    'GraphQL', 'REST API', 'gRPC', 'Socket.io',
  
    // --- DevOps & Cloud ---
    'Linux', 'Ubuntu', 'Shell Scripting', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'AWS', 'GCP', 'Azure',
    'Terraform', 'Ansible', 'CloudFormation',
  
    // --- Security ---
    'Cybersecurity', 'Network Security', 'Ethical Hacking', 'Penetration Testing', 'Nmap', 'Wireshark',
    'Metasploit', 'Burp Suite', 'OWASP', 'SOC Analysis', 'Kali Linux', 'Cryptography', 'SSL/TLS',
    'Vulnerability Assessment', 'Incident Response', 'Forensics', 'Malware Analysis',
    'Threat Intelligence', 'SIEM', 'Firewall Configuration', 'Intrusion Detection',
    'Data Loss Prevention', 'Identity and Access Management', 'Security Auditing',
    'Security Information and Event Management', 'Incident Management', 'Disaster Recovery',
    'Business Continuity Planning', 'Risk Management', 'Compliance', 'GDPR', 'HIPAA',
    'PCI DSS', 'ISO 27001', 'SOC 2', 'NIST', 'CIS Controls', 'FISMA',
    'CISA', 'CISM', 'CEH', 'CISSP', 'Security+',
    'Certified Ethical Hacker', 'Certified Information Systems Auditor', 'Certified Information Security Manager',
    'Certified Information Systems Security Professional', 'CompTIA Security+', 'Certified Cloud Security Professional',
    'Certified Information Privacy Professional', 'Certified in Risk and Information Systems Control',
    'Certified Information Security Manager', 'Certified in the Governance of Enterprise IT', 'Certified in Risk and Information Systems Control',
    'Certified in the Governance of Enterprise IT', 'Certified in Risk and Information Systems Control',
    'Certified in the Governance of Enterprise IT', 'Certified in Risk and Information Systems Control',
  
    // --- Data Science & AI ---
    'Data Analysis', 'Data Science', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch',
    'Deep Learning', 'Machine Learning', 'NLP', 'Computer Vision', 'Keras', 'Matplotlib', 'Seaborn',
    'Hugging Face', 'OpenCV', 'YOLO', 'LangChain', 'LLM Fine-Tuning', 'Data Visualization',
    'Data Mining', 'Data Cleaning', 'Feature Engineering', 'Statistical Analysis', 'Predictive Modeling',
    'Time Series Analysis', 'Big Data', 'Hadoop', 'Spark', 'Apache Kafka', 'ETL',
    'Data Warehousing', 'Data Lakes', 'Business Intelligence', 'Power BI', 'Tableau', 'Looker',
    'Google Data Studio', 'Excel', 'R', 'MATLAB', 'Statistics', 'Linear Regression',
    'Logistic Regression', 'Decision Trees', 'Random Forest', 'Support Vector Machines',
    'Neural Networks', 'Natural Language Processing', 'Clustering', 'Dimensionality Reduction',
    'Anomaly Detection', 'Reinforcement Learning', 'Generative Adversarial Networks',
    'Transfer Learning', 'Model Deployment', 'Model Monitoring', 'Model Evaluation',
    'Model Interpretability', 'Feature Importance', 'Hyperparameter Tuning', 'Grid Search',
    'Random Search', 'Bayesian Optimization', 'A/B Testing', 'Experiment Design',
    'Statistical Testing', 'Hypothesis Testing', 'P-Value', 'Confidence Interval',
    'T-Test', 'Chi-Squared Test', 'ANOVA', 'Regression Analysis', 'Correlation',
  
    // --- Web & Design ---
    'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'UI/UX Design',
    'Responsive Design', 'Wireframing', 'Canva', 'Sketch', 'InVision', 'Prototyping', 'User Research',
    'User Testing', 'A/B Testing', 'Usability Testing', 'Information Architecture',
    'Interaction Design', 'Visual Design', 'Branding', 'Typography', 'Color Theory',
    'Icon Design', 'Logo Design', 'Print Design', 'Packaging Design', 'Web Design',
    'Mobile App Design', 'Landing Page Design', 'E-commerce Design', 'Email Design',
    'Social Media Design', 'Infographic Design', 'Presentation Design', 'Motion Graphics',
    'Animation', '3D Design', 'Augmented Reality', 'Virtual Reality', 'Game Design',
    'Game Development', 'Unity', 'Unreal Engine', 'Blender', '3D Modeling', '2D Animation',
    'Character Design', 'Environment Design', 'Level Design', 'Game Mechanics', 'Game Physics', 
    'Game AI', 'Game Monetization', 'Game Marketing', 'Game Publishing', 'Game Testing',
    'Game Localization', 'Game Community Management', 'Game Analytics', 'Game Streaming',
    'Game Development', 'Game Engines', 'Game Programming', 'Game Art', 'Game Sound Design',
  
    // --- Mobile Development ---
    'Android', 'iOS', 'Flutter', 'React Native', 'SwiftUI', 'Jetpack Compose', 'Xcode', 'Android Studio',
    'Kotlin', 'Swift', 'Objective-C', 'Java', 'Dart', 'Firebase', 'Realm', 'SQLite',
    'REST API', 'GraphQL', 'Mobile UI Design', 'Mobile UX Design', 'Mobile App Testing',
    'Mobile App Deployment', 'App Store Optimization', 'Google Play Store', 'Apple App Store',
    'Mobile Analytics', 'Mobile Performance Optimization', 'Mobile Security', 'Mobile Accessibility',
    'Mobile Monetization', 'In-App Purchases', 'Ad Networks', 'Push Notifications',
    'Mobile User Engagement', 'Mobile User Retention', 'Mobile User Acquisition',
    'Mobile User Feedback', 'Mobile User Research', 'Mobile User Testing', 'Mobile User Interviews',
    'Mobile User Surveys', 'Mobile User Personas', 'Mobile User Journeys', 'Mobile User Flows',
    'Mobile User Stories', 'Mobile User Scenarios', 'Mobile User Experience Design',
    'Mobile User Interface Design', 'Mobile User Interaction Design', 'Mobile User Experience Research',
  
    // --- Game Development ---
    'Unity', 'Unreal Engine', 'Blender', 'Godot', 'Game Design', '2D Animation', '3D Modeling', 
    'Game Physics', 'Game AI', 'Game Mechanics', 'Game Monetization', 'Game Marketing',
    'Game Publishing', 'Game Testing', 'Game Localization', 'Game Community Management',
    'Game Analytics', 'Game Streaming', 'Game Development', 'Game Engines', 'Game Programming',
    'Game Art', 'Game Sound Design', 'Game Prototyping', 'Game Level Design', 'Game Character Design',
    'Game Environment Design', 'Game Storytelling', 'Game Narrative Design', 'Game Scripting', 
    'Game Animation', 'Game Visual Effects', 'Game Audio Design', 'Game Music Composition',
    'Game Voice Acting', 'Game Motion Capture', 'Game Performance Capture', 'Game Cinematics',
    'Game Cutscenes', 'Game Storyboarding', 'Game Concept Art', 'Game Character Animation',
  
    // --- Business & Management ---
    'Project Management', 'Scrum', 'Agile', 'Kanban', 'Jira', 'Asana', 'Trello', 'Notion',
    'Time Management', 'Leadership', 'Problem Solving', 'Critical Thinking', 'Strategic Planning',
    'Business Analysis', 'Market Research', 'Competitive Analysis', 'SWOT Analysis',
    'Business Development', 'Sales', 'Negotiation', 'Customer Relationship Management',
    'Salesforce', 'HubSpot', 'Zoho CRM', 'Microsoft Dynamics', 'SAP', 'Oracle',
    'ERP Systems', 'Supply Chain Management', 'Inventory Management', 'Logistics',
    'Warehouse Management', 'Transportation Management', 'Fleet Management', 'Procurement',
    'Vendor Management', 'Contract Management', 'Risk Management', 'Compliance',
    'Quality Assurance', 'Quality Control', 'Lean Manufacturing', 'Six Sigma', 'Kaizen',
    'Total Quality Management', 'Change Management', 'Conflict Resolution', 'Stakeholder Management',
    'Resource Allocation', 'Budgeting', 'Cost Management', 'Time Management',
    'Performance Measurement', 'Business Process Improvement', 'Business Process Reengineering',
    'Business Process Automation', 'Business Process Mapping', 'Business Process Modeling', 
    'Business Process Analysis', 'Business Process Design', 'Business Process Management',
  
    // --- Marketing & Communication ---
    'Digital Marketing', 'SEO', 'Content Writing', 'Copywriting', 'Email Marketing', 'Affiliate Marketing',
    'Google Ads', 'Facebook Ads', 'Instagram Marketing', 'Public Speaking', 'Branding', 'Communication',
    'Social Media Management', 'Community Management', 'Customer Support', 'Customer Service',
    'Market Research', 'Competitive Analysis', 'Customer Segmentation', 'Lead Generation',
    'Sales Funnel', 'Conversion Rate Optimization', 'A/B Testing', 'Webinars', 'Podcasts',
    'Content Creation', 'Blogging', 'Technical Writing', 'Creative Writing', 'Content Strategy',
    'Content Curation', 'Social Media Marketing', 'Influencer Marketing', 'Event Management',
    'Public Relations', 'Press Releases', 'Media Relations', 'Crisis Management',
    'Corporate Communication', 'Internal Communication', 'External Communication',
    'Stakeholder Communication', 'Investor Relations', 'Brand Management', 'Product Marketing',
    'Email Campaigns', 'Landing Page Optimization', 'E-commerce Marketing', 'Affiliate Marketing',
    'Online Reputation Management', 'Search Engine Marketing', 'Pay-Per-Click Advertising',
    'Social Media Advertising', 'Content Marketing', 'Video Marketing', 'Influencer Marketing',
    'Mobile Marketing', 'Email Marketing', 'Affiliate Marketing', 'Online Community Management',
    'Online Customer Service', 'Online Customer Support', 'Online Customer Engagement',
    'Online Customer Experience', 'Online Customer Journey', 'Online Customer Feedback',
    'Online Customer Reviews', 'Online Customer Satisfaction', 'Online Customer Loyalty',
    'Online Customer Retention', 'Online Customer Acquisition', 'Online Customer Segmentation',
  
    // --- Finance & Accounting ---
    'Accounting', 'Bookkeeping', 'Financial Analysis', 'Excel', 'Tally', 'SAP', 'QuickBooks', 'Budgeting',
    'Auditing', 'Taxation', 'Investment Management',
    'Financial Reporting', 'Cash Flow Management', 'Financial Modeling', 'Risk Management', 
    'Cost Accounting', 'Management Accounting', 'Financial Planning', 'Payroll Management',
    'Accounts Payable', 'Accounts Receivable', 'Financial Statements', 'Balance Sheet',
    'Income Statement', 'Cash Flow Statement', 'General Ledger', 'Trial Balance',
    'Financial Ratios', 'Key Performance Indicators', 'Variance Analysis', 'Budget Variance',
  
    // --- Human Resources ---
    'Recruitment', 'HR Management', 'Employee Engagement', 'Payroll Processing', 'Performance Reviews',
    'Onboarding', 'Conflict Resolution',
    'Employee Relations', 'Talent Acquisition', 'Training and Development', 'HR Policies',
    'HR Compliance', 'Employee Benefits', 'Compensation Management', 'Workforce Planning',
    'Succession Planning', 'Organizational Development', 'Change Management', 'Employee Retention',
    'Employee Satisfaction', 'Employee Surveys', 'HR Analytics', 'HR Metrics', 'HR Reporting',
    'HR Information Systems', 'Applicant Tracking Systems', 'Performance Management Systems',
    'Learning Management Systems', 'Talent Management Systems', 'Employee Self-Service Portals',
    'Time and Attendance Systems', 'Payroll Systems', 'Benefits Administration Systems',
    'Compensation Management Systems', 'Recruitment Marketing', 'Employer Branding',
  
    // --- Healthcare & Medical ---
    'Nursing', 'Medical Coding', 'EMR Systems', 'Patient Care', 'Anatomy', 'Pharmacology',
    'Healthcare Administration', 'Surgery Assistance',
    'Medical Research', 'Clinical Trials', 'Patient Management', 'Healthcare Compliance',
    'Telemedicine', 'Health Informatics', 'Medical Billing', 'Healthcare Analytics',
    'Health Insurance', 'Patient Advocacy', 'Healthcare Quality Improvement',
    'Healthcare Policy', 'Public Health', 'Epidemiology', 'Biostatistics', 'Health Promotion', 
    'Disease Prevention', 'Health Education', 'Community Health', 'Global Health',
  
    // --- Engineering & Manufacturing ---
    'Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering', 'AutoCAD', 'SolidWorks',
    '3D Printing', 'PLC Programming', 'Manufacturing Systems',
    'Quality Control', 'Lean Manufacturing', 'Six Sigma', 'Process Improvement',
    'Project Management', 'Engineering Design', 'Mechanical Design', 'Electrical Design',
    'Civil Design', 'Structural Engineering', 'Geotechnical Engineering', 'Environmental Engineering',
    'Chemical Engineering', 'Materials Science', 'Manufacturing Processes', 'Robotics',
    'Embedded Systems', 'Control Systems', 'Thermodynamics', 'Fluid Mechanics', 'Heat Transfer',
    'Vibration Analysis', 'Signal Processing', 'Image Processing', 'Data Acquisition',
    'Instrumentation', 'Automation', 'Mechatronics', 'Industrial Engineering',
    'Manufacturing Engineering', 'Production Engineering', 'Quality Assurance', 'Quality Management',
  
    // --- Education & Teaching ---
    'Teaching', 'Lesson Planning', 'Curriculum Development', 'Online Tutoring', 'Classroom Management',
    'Assessment Design',
    'Educational Technology', 'E-learning', 'Instructional Design', 'Special Education',
    'Child Development', 'Adult Education', 'Language Teaching', 'Test Preparation',
    'Academic Advising', 'Student Counseling', 'Educational Leadership', 'Educational Administration',
    'Educational Research', 'Education Policy', 'Education Management', 'Teacher Training',
    'Professional Development', 'Educational Assessment', 'Educational Psychology',
    'Educational Assessment', 'Educational Measurement', 'Educational Evaluation',
    'Educational Statistics', 'Educational Research Methods', 'Qualitative Research',
    'Quantitative Research', 'Mixed Methods Research', 'Action Research', 'Case Study Research',  
    'Experimental Research', 'Survey Research', 'Longitudinal Research', 'Cross-Sectional Research',
  
    // --- Legal & Compliance ---
    'Legal Research', 'Contract Management', 'Litigation Support', 'Compliance', 'Legal Writing',
  
    // --- Creative & Multimedia ---
    'Video Editing', 'After Effects', 'Premiere Pro', 'Photography', 'Storyboarding', 'Voice Over',
    'Music Production', 'Animation', 'Podcast Editing',
    'Graphic Design', '3D Animation', '2D Animation', 'Character Animation', 'Motion Graphics',
    'Visual Effects', 'Sound Design', 'Audio Editing', 'Color Grading', 'Scriptwriting',
    'Content Creation', 'Content Strategy', 'Content Marketing', 'Social Media Content',
    'Brand Storytelling', 'Creative Direction', 'Art Direction', 'Creative Writing',
    'Copywriting', 'Content Curation', 'Content Management', 'Content Distribution',
    'Content Promotion', 'Content Optimization', 'Content Analytics', 'Content Performance',
    'Content Engagement', 'Content Retention', 'Content Monetization', 'Content Licensing',
  
    // --- Logistics & Supply Chain ---
    'Supply Chain Management', 'Inventory Control', 'Warehouse Management', 'Fleet Management',
    'Logistics Planning',
    'Transportation Management', 'Procurement', 'Vendor Management', 'Contract Negotiation',
    'Demand Planning', 'Forecasting', 'Logistics Optimization', 'Distribution Management',
    'Shipping and Receiving', 'Customs Compliance', 'Freight Forwarding', 'Import/Export',
    'Supply Chain Analytics', 'Supply Chain Optimization', 'Supply Chain Risk Management',
  
    // --- Soft Skills ---
    'Communication', 'Teamwork', 'Leadership', 'Empathy', 'Creativity', 'Adaptability', 'Work Ethic',
    'Emotional Intelligence', 'Collaboration', 'Flexibility',
    'Problem Solving', 'Critical Thinking', 'Time Management', 'Conflict Resolution',
    'Decision Making', 'Negotiation', 'Persuasion', 'Networking', 'Active Listening',
    'Interpersonal Skills', 'Presentation Skills', 'Public Speaking', 'Customer Service',
    'Sales Skills', 'Relationship Building', 'Cultural Awareness', 'Diversity and Inclusion',
    'Mentoring', 'Coaching', 'Feedback', 'Motivation', 'Stress Management',
    'Self-Discipline', 'Self-Motivation', 'Goal Setting', 'Time Management', 'Prioritization',
    'Attention to Detail', 'Analytical Thinking', 'Research Skills', 'Organizational Skills',
    'Planning', 'Scheduling', 'Task Management', 'Project Management', 'Resource Management',
    'Budget Management', 'Cost Control', 'Quality Assurance', 'Quality Control',
  
    // --- Languages ---
    'English', 'Hindi', 'Spanish', 'French', 'German', 'Mandarin', 'Japanese', 'Korean', 'Arabic', 
    'Russian', 'Portuguese', 'Italian', 'Dutch', 'Turkish', 'Swedish', 'Norwegian', 'Danish',
    'Finnish', 'Polish', 'Czech', 'Hungarian', 'Romanian', 'Bulgarian', 'Greek',
    'Thai', 'Vietnamese', 'Indonesian', 'Malay', 'Filipino', 'Swahili', 'Zulu',
    'Afrikaans', 'Hindi', 'Bengali', 'Punjabi', 'Gujarati', 'Tamil', 'Telugu',
    'Marathi', 'Malayalam', 'Kannada', 'Urdu', 'Arabic', 'Farsi', 'Turkish',
    'Hebrew', 'Ukrainian', 'Serbian', 'Croatian', 'Bosnian', 'Slovak', 'Slovenian',
    'Lithuanian', 'Latvian', 'Estonian', 'Icelandic', 'Welsh', 'Irish', 'Scottish Gaelic',
    'Basque', 'Catalan', 'Galician', 'Corsican', 'Sardinian', 'Maltese', 'Scottish Gaelic',
    'Irish Gaelic', 'Manx', 'Cornish', 'Breton', 'Welsh', 'Scottish Gaelic',
    'Irish Gaelic', 'Manx', 'Cornish', 'Breton', 'Welsh', 'Scottish Gaelic',
  
    // --- Others ---
    'Typing', 'MS Office', 'Google Workspace', 'Notion', 'Slack', 'Zoom', 'Customer Service',
    'Technical Support', 'Data Entry', 'Transcription' , 'Virtual Assistant', 'Remote Work',
    'Time Tracking', 'Task Management', 'Project Collaboration', 'Online Research',
    'Online Surveys', 'Online Data Collection', 'Online Market Research', 'Online Focus Groups',
  'MS Office', 'Google Workspace', 'Notion', 'Slack', 'Zoom', 'Remote Work',
  'Virtual Assistant', 'Data Entry', 'Transcription', 'Online Research', 'Time Tracking',
  'ms word', 'ms excel', 'ms powerpoint', 'google docs', 'google sheets',
  'google slides', 'google drive', 'google calendar', 'google meet', 'google hangouts',
  'google chat', 'google forms', 'google sites', 'google keep', 'google tasks',
  'google groups', 'google classroom', 'google analytics', 'google ads',
  
];

const skillInput = document.getElementById('skillInput');
const skillSuggestions = document.getElementById('skillSuggestions');
const skillTagsBox = document.getElementById('skillTags');
const resumeUpload = document.getElementById('resumeUpload');
const fileList = document.getElementById('fileList');
const analyzeBtn = document.getElementById('analyzeBtn');
const results = document.getElementById('results');

let selectedSkills = [];

// Fuse.js setup for fuzzy search
const fuse = new Fuse(availableSkills, {
  threshold: 0.4,
  includeScore: true,
});

function updateSkillTags() {
  skillTagsBox.innerHTML = '';
  selectedSkills.forEach(skill => {
    const tag = document.createElement('span');
    tag.className = 'skill-tag';
    tag.textContent = skill;
    tag.onclick = () => {
      selectedSkills = selectedSkills.filter(s => s !== skill);
      updateSkillTags();
    };
    skillTagsBox.appendChild(tag);
  });
}

skillInput.addEventListener('input', () => {
  const input = skillInput.value.trim();
  skillSuggestions.innerHTML = '';

  if (input.length === 0) return;

  const results = fuse.search(input);
  results.slice(0, 5).forEach(result => {
    const div = document.createElement('div');
    div.textContent = result.item;
    div.onclick = () => {
      if (!selectedSkills.includes(result.item)) {
        selectedSkills.push(result.item);
        updateSkillTags();
        skillInput.value = '';
        skillSuggestions.innerHTML = '';
      }
    };
    skillSuggestions.appendChild(div);
  });
});

resumeUpload.addEventListener('change', () => {
  fileList.innerHTML = '';
  Array.from(resumeUpload.files).forEach(file => {
    const li = document.createElement('li');
    li.textContent = file.name;
    fileList.appendChild(li);
  });
});

analyzeBtn.addEventListener('click', () => {
  const jobDescriptionText = document.getElementById('jobDescription').value.trim();
  if (!selectedSkills.length || !resumeUpload.files.length || !jobDescriptionText) {
    alert("Please fill all fields.");
    return;
  }

  const formData = new FormData();
  formData.append('skills', JSON.stringify(selectedSkills));
  formData.append('job_description', jobDescriptionText);

  Array.from(resumeUpload.files).forEach(file => {
    formData.append('resumes', file);
  });

  fetch("http://localhost:5000/api/rank", {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    let output = "<ul>";
    data.forEach(item => {
      output += `<li><strong>${item.filename}</strong>: Match Score - ${item.score}%<br><em>${item.feedback}</em></li>`;
    });
    output += "</ul>";
    results.innerHTML = output;
  })
  .catch(err => {
    console.error(err);
    results.innerHTML = "<p>Error analyzing resumes.</p>";
  });
});