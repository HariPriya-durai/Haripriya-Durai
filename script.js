function sendMessage() {
  let input = document.getElementById("user-input").value;
  let chatBox = document.getElementById("chat-box");

  // Show user message
  if (input.trim() === "") return;
  chatBox.innerHTML += `<p><b>You:</b> ${input}</p>`;

  // Bot reply logic
  let reply = "Sorry, I didn’t understand that.";
  if (input.toLowerCase().includes("skills")) {
    reply = "I have experience in Python, JavaScript, HTML, CSS, and SQL.";
  } else if (input.toLowerCase().includes("experience")) {
    reply = "I worked at Company XYZ as a Software Engineer from 2020–Present.";
  } else if (input.toLowerCase().includes("education")) {
    reply = "I hold a Bachelor’s Degree in XYZ from University Name.";
  } else if (input.toLowerCase().includes("contact")) {
    reply = "You can reach me at: your@email.com";
  } else if (input.toLowerCase().includes("hello")) {
    reply = "Hi there! Ask me about my skills, experience, or contact info.";
  }

  // Show bot reply
  chatBox.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;
  document.getElementById("user-input").value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
