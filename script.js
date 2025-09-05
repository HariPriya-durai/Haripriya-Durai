<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Chatbot</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        #chat-container {
            width: 400px;
            max-width: 90%;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: #fff;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        #chat-box {
            height: 300px;
            padding: 10px;
            overflow-y: auto;
            border-bottom: 1px solid #ccc;
        }

        #chat-box p {
            margin: 5px 0;
        }

        #input-container {
            display: flex;
        }

        #user-input {
            flex: 1;
            padding: 10px;
            border: none;
            border-top: 1px solid #ccc;
            outline: none;
        }

        #send-btn {
            padding: 10px;
            border: none;
            background-color: #007bff;
            color: white;
            cursor: pointer;
        }

        #send-btn:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div id="chat-container">
        <div id="chat-box"></div>
        <div id="input-container">
            <input type="text" id="user-input" placeholder="Type a message...">
            <button id="send-btn" onclick="sendMessage()">Send</button>
        </div>
    </div>

    <script>
        function sendMessage() {
            let input = document.getElementById("user-input").value;
            let chatBox = document.getElementById("chat-box");

            if (input.trim() === "") return;

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

            // Clear input and scroll
            document.getElementById("user-input").value = "";
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        // Optional: allow Enter key to send message
        document.getElementById("user-input").addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                sendMessage();
            }
        });
    </script>
</body>
</html>
