document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Skills data
    const skills = [
        { name: 'Networking', level: 50 },
        { name: 'Java', level: 70 },
        { name: 'Python', level: 80 },
        { name: 'SQL', level: 85 },
        { name: 'Computer Operations', level: 100 },
        { name: 'Learning', level: 100 }
    ];
    
    // Projects data
    const projects = [
        {
            title: 'Hybrid Data Security Models',
            description: 'A comparative study combining encryption with steganography for enhanced data confidentiality.',
            technologies: 'Java, Encryption, Cryptography, Swing',
            links: [
                { text: 'GitHub repo', url: 'https://github.com/aleeyutk/final-year-project' },
                { text: 'View Paper', url: 'projects/MYProject.pdf' }
            ]
        },
        {
            title: 'Simple Java Banking System',
            description: 'Console-based banking system with core Java and SQL. Supports account creation, deposits, withdrawals.',
            technologies: 'Java, JDBC, SQL',
            links: [
                { text: 'GitHub', url: 'https://github.com/aleeyutk/java-projects' }
            ]
        },
        {
            title: 'Expense Tracker',
            description: 'A command-line Java application that helps track and categorize daily expenses.',
            technologies: 'Java, JDBC, SQL',
            links: [
                { text: 'GitHub', url: 'https://github.com/aleeyutk/ExpenseTracker' }
            ]
        }
    ];
    
    // Populate skills
    const skillsContainer = document.querySelector('.skills-container');
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill';
        skillElement.innerHTML = `
            <div class="skill-name">${skill.name}</div>
            <div class="progress-bar">
                <div class="progress-fill" style="--target-width: ${skill.level}%">${skill.level}%</div>
            </div>
        `;
        skillsContainer.appendChild(skillElement);
    });
    
    // Populate projects
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        
        let linksHTML = '';
        project.links.forEach(link => {
            linksHTML += `<a href="${link.url}" target="_blank">${link.text}</a> | `;
        });
        linksHTML = linksHTML.slice(0, -3); // Remove last separator
        
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p><strong>Tech:</strong> ${project.technologies}</p>
            <div class="project-links">${linksHTML}</div>
        `;
        projectsGrid.appendChild(projectElement);

        
        document.querySelector('.projects-grid').classList.add('debug');

    });
    
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = {
        name: contactForm.name.value,
        email: contactForm.email.value,
        message: contactForm.message.value
    };
    
    try {
        const response = await fetch('/.netlify/functions/sendEmail', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        const data = await response.json();
        
        if (response.ok) {
            formStatus.textContent = data.message || 'Message sent successfully!';
            formStatus.style.color = 'green';
            contactForm.reset();
        } else {
            throw new Error(data.error || 'Failed to send');
        }
    } catch (error) {
        formStatus.textContent = error.message;
        formStatus.style.color = 'red';
    }
    
    setTimeout(() => {
        formStatus.textContent = '';
    }, 5000);
}); 
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.getElementById('toggle-preview').addEventListener('click', function() {
    const preview = document.querySelector('.resume-preview');
    preview.classList.toggle('active');
    this.innerHTML = preview.classList.contains('active') ? 
        '<i class="fas fa-eye-slash"></i> Hide Preview' : 
        '<i class="fas fa-eye"></i> Show Preview';
});
// Add to script.js
const themeToggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Set initial theme
function setTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Check localStorage or prefered scheme
const currentTheme = localStorage.getItem('theme') || 
                    (prefersDark.matches ? 'dark' : 'light');
setTheme(currentTheme === 'dark');

// Toggle theme
themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'dark';
    setTheme(isDark);
});

// Watch for system theme changes
prefersDark.addListener(e => {
    setTheme(e.matches);
});
// When creating project cards in JavaScript:
projectElement.innerHTML = `
    <h3 style="color: var(--text-color)">${project.title}</h3>
    <p style="color: var(--text-color)">${project.description}</p>
    <p><strong style="color: var(--text-color)">Tech:</strong> ${project.technologies}</p>
    <div class="project-links">${linksHTML}</div>
`;
