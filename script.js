function sendMessage() {
    const inputField = document.getElementById("user-input");
    let input = inputField.value.trim();
    let chatBox = document.getElementById("chat-box");

    if (input === "") return;

    // Show user message
    chatBox.innerHTML += `<p><b>You:</b> ${input}</p>`;

    // Bot reply logic
    let reply = "Sorry, I didn’t understand that.";
    let lowerInput = input.toLowerCase();

    if (lowerInput.includes("skills")) {
        reply = "I have experience in Python, JavaScript, HTML, CSS, and SQL.";
    } else if (lowerInput.includes("experience")) {
        reply = "I worked at Company XYZ as a Software Engineer from 2020–Present.";
    } else if (lowerInput.includes("education")) {
        reply = "I hold a Bachelor’s Degree in XYZ from University Name.";
    } else if (lowerInput.includes("contact")) {
        reply = "You can reach me at: your@email.com";
    } else if (lowerInput.includes("hello")) {
        reply = "Hi there! Ask me about my skills, experience, or contact info.";
    }

    // Show bot reply
    chatBox.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;

    // Clear input and auto-scroll
    inputField.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Button click event
document.getElementById("send-btn").addEventListener("click", sendMessage);

// Enter key event
document.getElementById("user-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
