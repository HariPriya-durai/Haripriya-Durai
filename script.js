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
  document.addEventListener("DOMContentLoaded", () => {

  const chatBox = document.getElementById('chat-box');
  const userInput = document.getElementById('user-input');
  const sendBtn = document.getElementById('send-btn');
  const whatsappIcon = document.getElementById('whatsapp-link');

  // ===== Prefilled Questions =====
  document.querySelectorAll('#chat-quick-questions button').forEach(btn => {
    btn.addEventListener('click', () => {
      userInput.value = btn.getAttribute('data-question');
      sendMessage();
    });
  });

  // ===== Send Message Function =====
  function sendMessage() {
    const input = userInput.value.trim();
    if(!input) return;

    addMessage(input, 'user-msg');
    userInput.value = "";

    // Typing simulation
    const botMsg = document.createElement('div');
    botMsg.className = 'chat-message bot-msg';
    botMsg.innerHTML = 'Typing...';
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
      let reply = "Sorry, I didn’t understand that.";

      if(/name/i.test(input)) reply = "I am Haripriya Durai, a creative developer!";
      else if(/skills/i.test(input)) reply = "I know Python, Java, HTML, CSS, JavaScript, React and more!";
      else if(/personal/i.test(input)) reply = "I love cooking, art, painting, reading, and traveling.";
      else if(/languages/i.test(input)) reply = "I am fluent in English, Tamil, and Hindi.";
      else if(/projects/i.test(input)) reply = "I have worked on Chatbot App, Mini e-commerce site, Portfolio website, AI Testing framework.";
      else if(/contact/i.test(input)) reply = "You can reach me at haririya00@gmail.com or call +91 7708808414.";
      else if(/live chat/i.test(input)){
        reply = "Click the WhatsApp icon to start live chat!";
        whatsappIcon.style.display = 'block';
      }
      else if(/schedule/i.test(input)){
        reply = "Please select a suitable date and time to schedule a call.";
        document.getElementById('scheduleModal').style.display = 'block';
      }

      botMsg.innerHTML = reply;
      chatBox.scrollTop = chatBox.scrollHeight;

    }, 800);
  }

  // ===== Helper: Add Message =====
  function addMessage(text, className){
    const msg = document.createElement('div');
    msg.className = `chat-message ${className}`;
    msg.textContent = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  sendBtn.addEventListener('click', sendMessage);
  userInput.addEventListener('keypress', e => { if(e.key === 'Enter') sendMessage(); });

  // ===== Schedule Modal =====
  const modal = document.getElementById('scheduleModal');
  const closeBtn = document.querySelector('.modal .close');
  closeBtn.addEventListener('click', () => modal.style.display = 'none');

  document.getElementById('schedule-submit').addEventListener('click', () => {
    const datetime = document.getElementById('schedule-time').value;
    if(datetime){
      alert(`Thank you! Your call is scheduled at ${datetime}`);
      modal.style.display = 'none';
    }
  });

  // Close modal if clicked outside
  window.addEventListener('click', e => {
    if(e.target === modal) modal.style.display = 'none';
  });

});
