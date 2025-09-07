// ====== SLIDER ======
const slides = document.querySelectorAll('.about-slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active', 'slide-in-right', 'slide-out-left', 'slide-in-left', 'slide-out-right');
    if(i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  const prevIndex = currentIndex;
  currentIndex = (currentIndex + 1) % slides.length;
  slides[prevIndex].classList.add('slide-out-left');
  slides[currentIndex].classList.add('slide-in-right', 'active');
}

function prevSlide() {
  const prevIndex = currentIndex;
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[prevIndex].classList.add('slide-out-right');
  slides[currentIndex].classList.add('slide-in-left', 'active');
}

// Initialize
showSlide(currentIndex);

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
      reply = "You can reach me at: your@email.com";
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
