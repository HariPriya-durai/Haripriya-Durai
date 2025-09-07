function sendQuickMessage(type) {
  const inputField = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  let reply = '';

  switch(type) {
    case 'skills':
      reply = "I have experience in Python, JavaScript, HTML, CSS, SQL.";
      break;
    case 'experience':
      reply = "Worked at Company XYZ as Software Engineer 2020–Present.";
      break;
    case 'education':
      reply = "B.Tech Computer Science, CGPA 8.2/10 at PRIST University.";
      break;
    case 'contact':
      reply = "You can reach me at +91 7708808414 or haririya00@gmail.com.";
      break;
  }

  chatBox.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}
