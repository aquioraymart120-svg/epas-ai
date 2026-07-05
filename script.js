console.log("⚡ EPAS AI Loaded!");

function sendMessage() {
    const input = document.getElementById("userInput");
    const chat = document.getElementById("chat");

    if (!input || !chat || input.value.trim() === "") return;

    const userMessage = document.createElement("p");
    userMessage.innerHTML = "<strong>You:</strong> " + input.value;

    const aiMessage = document.createElement("p");
    aiMessage.innerHTML = "<strong>EPAS AI:</strong> This feature is coming soon! 🤖";

    chat.appendChild(userMessage);
    chat.appendChild(aiMessage);

    input.value = "";
}
