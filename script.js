document.addEventListener("DOMContentLoaded", () => {

  /* ====== ABOUT ME TOGGLE ====== */
  const boxContent = {
    1: `<h3>About Me</h3>
        <p>I am a resilient and confident individual, driven by curiosity for technology.
        My creative thinking helps me approach challenges from unique angles.
        I thrive in dynamic environments and constantly seek growth opportunities.</p>`,
    2: `<h3>Personal Interests</h3>
        <p>I love cooking, art, and painting. I’m also an avid reader of Ravinder Singh and Harry Potter.
        Traveling and connecting with nature keeps me inspired and grounded.</p>`,
    3: `<h3>Education</h3>
        <p>Final-year B.Tech student in Computer Science and Engineering at P.R.I.S.T. University, graduating 2026.
        <br>CGPA: 8.2/10 <br>10th: 97% <br>12th: 85%</p>`,
    4: `<h3>Career Goals</h3>
        <p>Goal is to work in a global tech team, contributing to innovative projects that make a real impact.
        I am always learning and exploring new skills.</p>`
  };

  window.toggleBox = function(box) {
    document.querySelectorAll('.about-box.expanded').forEach(b => {
      if (b !== box) {
        b.classList.remove('expanded');
        const d = b.querySelector('.details'); if(d) d.remove();
      }
    });

    if(box.classList.contains('expanded')){
      box.classList.remove('expanded');
      const d = box.querySelector('.details'); if(d) d.remove();
    } else {
      box.classList.add('expanded');
      const id = box.getAttribute('data-id');
      const details = document.createElement('div');
      details.className = 'details';
      details.innerHTML = boxContent[id] || '<p>No details provided.</p>';
      box.appendChild(details);
    }
  };

  /* ====== PROJECT SLIDER ====== */
  const slider = document.querySelector('.project-slider');
  const slides = document.querySelectorAll('.project-slide');
  const dots = document.querySelectorAll('.dot');
  const leftBtn = document.querySelector('.nav-btn.left');
  const rightBtn = document.querySelector('.nav-btn.right');
  let currentSlide = 0;
  let autoInterval = null;
  const totalSlides = slides.length;

  function updateSlider() {
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    dots.forEach((dot,i) => dot.classList.toggle('active', i === currentSlide));
  }

  function showSlide(index) {
    if(index >= totalSlides) currentSlide = 0;
    else if(index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;
    updateSlider();
  }

  if(leftBtn) leftBtn.addEventListener('click', () => { showSlide(currentSlide-1); restartAuto(); });
  if(rightBtn) rightBtn.addEventListener('click', () => { showSlide(currentSlide+1); restartAuto(); });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => { showSlide(idx); restartAuto(); });
  });

  function startAuto() {
    stopAuto();
    autoInterval = setInterval(() => { showSlide(currentSlide + 1); }, 5000);
  }
  function stopAuto() { if(autoInterval) clearInterval(autoInterval); }
  function restartAuto() { stopAuto(); startAuto(); }

  showSlide(0);
  startAuto();

  /* ====== CHATBOT ====== */
  const chatBox = document.getElementById('chat-box');
  const userInput = document.getElementById('user-input');
  const sendBtn = document.getElementById('send-btn');

  function sendMessage() {
    const input = userInput.value.trim();
    if(!input) return;

    chatBox.innerHTML += `<p><b>You:</b> ${input}</p>`;

    let reply = "Sorry, I didn’t understand that.";
    if(/hello|hi/i.test(input)) reply = "Hi there! How can I help you today?";
    else if(/about/i.test(input)) reply = "I am Haripriya Durai, a creative developer passionate about technology!";
    else if(/contact/i.test(input)) reply = "You can reach me at haririya00@gmail.com or call +91 7708808414.";

    chatBox.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
    userInput.value = "";
  }

  sendBtn.addEventListener('click', sendMessage);
  userInput.addEventListener('keypress', e => { if(e.key === 'Enter') sendMessage(); });

});
