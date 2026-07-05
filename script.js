const API_KEY = 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;

function startReview() {
  const name = document.getElementById("studentName").value;
  const section = document.getElementById("studentSection").value;

  if (!name || !section) {
    alert("Please enter your Name and Grade & Section.");
    return;
  }

  document.getElementById("chat").innerHTML = `
    <h2>Welcome, ${name}! 👋</h2>
    <p>${section}</p>

    <div id="messages" style="margin:20px 0;"></div>

    <input id="userQuestion" placeholder="Ask any EPAS question...">
    <br><br>
    <button onclick="askAI()">Send</button>
  `;
}

async function askAI() {
  const question = document.getElementById("userQuestion").value;
  const messages = document.getElementById("messages");

  messages.innerHTML += `<p><b>👤 You:</b> ${question}</p>`;
  messages.innerHTML += `<p id="loading"><b>🤖 EPAS AI:</b> Thinking...</p>`;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: "You are EPAS AI. You help Grade 12 students in the Philippines study Electronic Products Assembly and Servicing (EPAS). Give accurate, educational answers."
          },
          {
            role: "user",
            content: question
          }
        ]
      })
    });

    const data = await response.json();

    document.getElementById("loading").remove();

    messages.innerHTML += `<p><b>🤖 EPAS AI:</b> ${data.choices[0].message.content}</p>`;
  } catch (err) {
    document.getElementById("loading").innerHTML =
      "<b>🤖 EPAS AI:</b> Error connecting to AI.";
  }
}
