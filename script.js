document.addEventListener("DOMContentLoaded", () => {
  /* ===== ABOUT ME TOGGLE (Click + Hover) ===== */
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
    box.addEventListener('click', () => toggleExpand(box));
    box.addEventListener('mouseenter', () => { if (!box.classList.contains('expanded')) toggleExpand(box); });
    box.addEventListener('mouseleave', () => { if (box.classList.contains('expanded')) toggleExpand(box); });
  });

  function toggleExpand(box) {
    document.querySelectorAll('.about-box.expanded').forEach(b => {
      if (b !== box) {
        b.classList.remove('expanded');
        const d = b.querySelector('.details'); if (d) d.remove();
      }
    });

    if (box.classList.contains('expanded')) {
      box.classList.remove('expanded');
      const d = box.querySelector('.details'); if (d) d.remove();
    } else {
      box.classList.add('expanded');
      const id = box.getAttribute('data-id');
      const details = document.createElement('div');
      details.className = 'details';
      details.innerHTML = boxContent[id] || '<p>No details provided.</p>';
      box.appendChild(details);
    }
  }

  /* ===== PROJECT SLIDER ===== */
  const slider = document.querySelector('.project-slider');
  const slides = document.querySelectorAll('.project-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.nav-btn.left');
  const nextBtn = document.querySelector('.nav-btn.right');

  let currentSlide = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    currentSlide = index;
  }

  nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
  prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => showSlide(i)));

  setInterval(() => showSlide(currentSlide + 1), 5000);
  showSlide(0);

  /* ===== CHATBOT ===== */
  const chatIcon = document.getElementById('chat-icon');
  const chatBox = document.getElementById('chat-box-container');
  const closeChat = document.getElementById('close-chat');
  const chatMessages = document.getElementById('chat-messages');
  const quickOptions = document.querySelectorAll('#quick-options button');

  chatIcon.addEventListener('click', () => chatBox.classList.toggle('show'));
  closeChat.addEventListener('click', () => chatBox.classList.remove('show'));

  function addMessage(msg, type) {
    const div = document.createElement('div');
    div.className = `chat-message ${type}`;
    div.textContent = msg;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  quickOptions.forEach(btn => {
    btn.addEventListener('click', () => {
      const answerType = btn.getAttribute('data-answer');
      addMessage(btn.textContent, 'user-msg');
      setTimeout(() => {
        let response = '';
        switch (answerType) {
          case 'name': response = "Hi! I'm Haripriya Durai, a Computer Science student."; break;
          case 'skills': response = "I work with Python, JavaScript,
