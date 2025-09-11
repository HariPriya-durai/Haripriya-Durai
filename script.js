document.addEventListener('DOMContentLoaded', () => {

  /* ===== ABOUT ME CONTENT ===== */
  const boxContent = {
    education: `<p>I am pursuing Computer Science and Engineering at XYZ University.</p>`,
    skills: `<p>Skilled in Python, JavaScript, React, HTML, CSS, and problem solving.</p>`,
    hobbies: `<p>I enjoy cooking, art, and reading novels in my free time.</p>`
  };

  const aboutBoxes = document.querySelectorAll('.about-box');

  aboutBoxes.forEach(box => {
    box.addEventListener('click', () => toggleExpand(box));
    box.addEventListener('mouseenter', () => {
      if (!box.classList.contains('expanded')) toggleExpand(box);
    });
    box.addEventListener('mouseleave', () => {
      if (box.classList.contains('expanded')) toggleExpand(box);
    });
  });

  function toggleExpand(box) {
    document.querySelectorAll('.about-box.expanded').forEach(b => {
      if (b !== box) {
        b.classList.remove('expanded');
        const d = b.querySelector('.details');
        if (d) d.remove();
      }
    });

    if (box.classList.contains('expanded')) {
      box.classList.remove('expanded');
      const d = box.querySelector('.details');
      if (d) d.remove();
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
          case 'skills': response = "I work with Python, JavaScript, React, HTML/CSS, and love problem solving."; break;
          case 'projects': response = "I’ve built a chatbot, e-commerce site, and portfolio website."; break;
          case 'contact': response = "You can email me at haririya00@gmail.com or call +91 7708808414."; break;
          default: response = "Thanks for reaching out!"; break;
        }
        addMessage(response, 'bot-msg');
      }, 600);
    });
  });

});
