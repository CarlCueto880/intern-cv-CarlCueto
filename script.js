console.log("script loaded");

// 🌙 / ☀️ THEME TOGGLE (CSS-based)
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});

// ABOUT SECTION TOGGLE
const toggleBtn = document.getElementById("toggleAbout");
const aboutContent = document.getElementById("aboutContent");

toggleBtn.addEventListener("click", () => {
  if (aboutContent.style.display === "none") {
    aboutContent.style.display = "block";
    toggleBtn.textContent = "⬇️";
  } else {
    aboutContent.style.display = "none";
    toggleBtn.textContent = "⬆️";
  }
});

// SMOOTH SCROLLING FOR NAVIGATION LINKS
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// CONTACT FORM HANDLING
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  
  // Simulate form submission (in real scenario, this would send to a server)
  formStatus.textContent = "Sending message...";
  formStatus.className = "";
  
  // Simulate a delay for sending
  setTimeout(() => {
    formStatus.textContent = `Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon!`;
    formStatus.className = "success";
    
    // Reset form
    contactForm.reset();
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      formStatus.textContent = "";
      formStatus.className = "";
    }, 5000);
  }, 1000);
});