/* ====== ABOUT ME SLIDER ====== */
const slideTrack = document.querySelector('.slide-track');
const slides = document.querySelectorAll('.about-slide');
let currentIndex = 0;

function updateSlider() {
  const slideWidth = slides[0].offsetWidth + 20; // slide width + margin
  slideTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1;
  }
  updateSlider();
}

window.addEventListener('resize', updateSlider);

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
