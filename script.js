// Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send this data to a server
            // For now, we'll just log it and show a success message
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('header nav a, .footer-links a, .btn-container a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if the href is a section ID
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Resume download button functionality
    const resumeButton = document.querySelector('.about-text .btn');
    
    if (resumeButton) {
        resumeButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Replace 'resume.pdf' with the actual path to your resume file
            const resumePath = 'files/resume.pdf';
            
            // Create a temporary link element
            const link = document.createElement('a');
            link.href = resumePath;
            link.download = 'Mahalakshmi_Resume.pdf';
            
            // Append to body, click it to trigger download, then remove
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});