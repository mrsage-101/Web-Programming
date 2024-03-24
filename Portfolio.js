document.addEventListener("DOMContentLoaded", function() {
    // Get the contact button
    const contactBtn = document.getElementById('contactbtn');
  
    // Add click event listener to the contact button
    contactBtn.addEventListener('click', function(event) {
      event.preventDefault();
  
      // Get the contact section
      const contactSection = document.getElementById('Contacts');
  
      // Scroll smoothly to the contact section
      contactSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Get the skills and projects buttons
    const aboutBtn = document.getElementById('aboutbtn');
    const skillBtn = document.getElementById('skillbtn');
    const projectBtn = document.getElementById('projectbtn');
  
    // Function to scroll smoothly to a section
    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  
    // Add click event listeners to the skills and projects buttons
    aboutBtn.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToSection('About');
    });
  
    skillBtn.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToSection('Skills');
    });

    projectBtn.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection('Projects');
      });
  });