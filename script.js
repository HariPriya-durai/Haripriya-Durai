//* ====== ABOUT ME SLIDER ====== */
const slideTrack = document.querySelector('.slide-track');
const slides = document.querySelectorAll('.about-slide');
let currentIndex = 0;

function updateSlider() {
  slideTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

/* Hover to preview next slide */
slides.forEach((slide, index) => {
  slide.addEventListener('mouseenter', () => {
    if (index < slides.length - 1) {
      slideTrack.style.transform = `translateX(-${(index + 1) * 100}%)`;
    }
  });
  slide.addEventListener('mouseleave', () => {
    updateSlider();
  });
});

updateSlider();


/* ====== CHATBOT ====== */
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

function sendMessage() {
  const input = userInput.value.trim();
  if (!input) return;

  chatBox.innerHTML += `<p><b>You:</b> ${input}</p>`;

  let reply = "Sorry, I didn’t understand that.";
  if (/hello|hi/i.test(input)) reply = "Hi there! How can I help you today?";
  else if (/about/i.test(input)) reply = "I am Haripriya Durai, a creative developer passionate about technology!";
  else if (/contact/i.test(input)) reply = "You can reach me at haririya00@gmail.com or call +91 7708808414.";

  chatBox.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;
  userInput.value = "";
}

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') sendMessage();
});

