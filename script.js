// ====== SLIDER ======
const aboutSlides = document.querySelectorAll('.about-slide');
const projectSlides = document.querySelectorAll('.project-slide');
let currentAbout = 0;
let currentProject = 0;

function showSlide(type, index) {
  let slides = type === 'about' ? aboutSlides : projectSlides;
  slides.forEach((slide, i) => {
    slide.classList.remove('active', 'slide-in-right', 'slide-out-left', 'slide-in-left', 'slide-out-right');
    if(i === index) slide.classList.add('active');
  });
}

function nextSlide(type) {
  let slides = type === 'about' ? aboutSlides : projectSlides;
  let currentIndex = type === 'about' ? currentAbout : currentProject;
  const prevIndex = currentIndex;
  currentIndex = (currentIndex + 1) % slides.length;
  slides[prevIndex].classList.add('slide-out-left');
  slides[currentIndex].classList.add('slide-in-right', 'active');
  if(type === 'about') currentAbout = currentIndex;
  else currentProject = currentIndex;
}

function prevSlide(type) {
  let slides = type === 'about' ? aboutSlides : projectSlides;
  let currentIndex = type === 'about' ? currentAbout : currentProject;
  const prevIndex = currentIndex;
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[prevIndex].classList.add('slide-out-right');
  slides[currentIndex].classList.add('slide-in-left', 'active');
  if(type === 'about') currentAbout = currentIndex;
  else currentProject = currentIndex;
}

// Initialize
showSlide('about', currentAbout);
showSlide('projects', currentProject);

// ====== CHATBOT ======
function sendMessage() {
  const inputField = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  let input = inputField.value.trim();
  if(input === "") return;

  chatBox.innerHTML += `<p><b>You:</b> ${input}</p>`;
  
  let reply = "Sorry, I didn’t understand that.";
  let lowerInput = input.toLowerCase();

  if (lowerInput.includes("skills")) {
      reply = "I have experience in Python, JavaScript, HTML, CSS, and SQL.";
  } else if (lowerInput.includes("experience")) {
      reply = "I worked at Company XYZ as a Software Engineer from 2020–Present.";
  } else if (lowerInput.includes("education")) {
      reply = "I hold a Bachelor’s Degree in XYZ from University Name.";
  } else if (lowerInput.includes("contact")) {
      reply = "You can reach me at: +91 7708808414";
  } else if (lowerInput.includes("hello")) {
      reply = "Hi there! Ask me about my skills, experience, or contact info.";
  }

  chatBox.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;
  inputField.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Button click event
document.getElementById("send-btn").addEventListener("click", sendMessage);

// Enter key event
document.getElementById("user-input").addEventListener("keypress", function(e){
  if(e.key === "Enter") sendMessage();
});
