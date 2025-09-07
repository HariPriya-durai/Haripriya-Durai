/* ====== MODAL LOGIC ====== */
const modal = document.getElementById("aboutModal");
const modalText = document.getElementById("modal-text");

const fullContent = {
  1: `
    <h3>About Me</h3>
    <p>I am a resilient and confident individual, driven by a deep curiosity for technology.
    My creative thinking helps me approach challenges from unique angles. I thrive in dynamic environments
    and constantly seek growth opportunities.</p>
  `,
  2: `
    <h3>Personal Interests</h3>
    <p>I love cooking, art, and painting. I’m also an avid reader of Ravinder Singh and the magical world of Harry Potter.
    Traveling and connecting with nature keeps me inspired and grounded.</p>
  `,
  3: `
    <h3>Education</h3>
    <p>I am a final-year B.Tech student in Computer Science and Engineering at P.R.I.S.T. University, graduating in 2026.
    <br> CGPA: 8.2/10 <br> 10th: 97% (2016) <br> 12th: 85% (2018).</p>
  `,
  4: `
    <h3>Career Goals</h3>
    <p>My goal is to work in a global tech team, contributing to innovative projects that make a real impact.
    I am always learning and exploring new skills in this vast digital ocean.</p>
  `
};

function openModal(slideIndex) {
  modalText.innerHTML = fullContent[slideIndex];
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

/* Close when clicking outside modal */
window.onclick = function(e) {
  if (e.target === modal) {
    closeModal();
  }
};

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


