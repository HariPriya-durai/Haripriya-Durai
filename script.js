document.addEventListener("DOMContentLoaded", () => {

  /* ===== ABOUT ME TOGGLE ===== */
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

  const aboutBoxes = document.querySelectorAll('.about-box');
  aboutBoxes.forEach(box => {
    box.addEventListener('click', () => {
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
    });
  });

  /* ===== PROJECT SLIDER ===== */
  const slider = document.querySelector('.project-slider');
  const slides = document.querySelectorAll('.project-slide');
  const dots = document.querySelectorAll('.dot');
  const leftBtn = document.querySelector('.nav-btn.left');
  const rightBtn = document.querySelector('.nav-btn.right');
  let currentSlide = 0;
  let autoInterval;
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

  function startAuto() {
    stopAuto();
    autoInterval = setInterval(() => showSlide(currentSlide+1), 5000);
  }

  function stopAuto() { if(autoInterval) clearInterval(autoInterval); }
  function restartAuto() { stopAuto(); startAuto(); }

  leftBtn.addEventListener('click', () => { showSlide(currentSlide-1); restartAuto(); });
  rightBtn.addEventListener('click', () => { showSlide(currentSlide+1); restartAuto(); });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => { showSlide(idx); restartAuto(); });
  });

  window.addEventListener('resize', updateSlider);

  showSlide(0);
  startAuto();

  /* ===== CHATBOX ===== */
  const chatIcon = document.getElementById('chat-icon');
  const chatBoxContainer = document.getElementById('chat-box-container');
  const closeChat = document.getElementById('close-chat');
  const messages = document.getElementById('chat-messages');
  const options = document.querySelectorAll('#quick-options button');

  chatIcon.addEventListener('click', () => chatBoxContainer.classList.toggle('show'));
  closeChat.addEventListener('click', () => chatBoxContainer.classList.remove('show'));

  const answers = {
    name: "I am Haripriya Durai, your digital assistant!",
    skills: "I know Python, Java, HTML, CSS, JavaScript, React...",
    personal: "I love cooking, art, painting, reading, traveling.",
    languages: "I speak English, Tamil, and Hindi.",
    projects: "Chatbot App, Mini e-commerce site, Portfolio Website, AI Testing Framework.",
    contact: "You can reach me at haririya00@gmail.com or +91 7708808414.",
    other: "redirect"
  };

  options.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-answer');
      if(key === 'other'){
        window.open("https://wa.me/917708808414?text=Hi%20Haripriya!", "_blank");
        addMessage("Redirecting you to WhatsApp...", "bot-msg");
      } else {
        addMessage(btn.textContent, "user-msg");
        setTimeout(() => addMessage(answers[key], "bot-msg"), 500);
      }
    });
  });

  function addMessage(text, cls){
    const msg = document.createElement('div');
    msg.className = `chat-message ${cls}`;
    msg.textContent = text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

});
