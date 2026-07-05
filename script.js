function startReview(){

    const name = document.getElementById("studentName").value;
    const section = document.getElementById("studentSection").value;

    if(name==="" || section===""){
        alert("Please enter your Name and Grade & Section.");
        return;
    }

    localStorage.setItem("studentName",name);
    localStorage.setItem("studentSection",section);

    document.getElementById("chat").innerHTML=`
        <h2>Welcome, ${name}! 👋</h2>

        <p><b>Grade & Section:</b> ${section}</p>

        <hr>

        <h3>Ask me anything about EPAS!</h3>

        <input id="userQuestion"
        placeholder="Example: What is Ohm's Law?">

        <br><br>

        <button onclick="askAI()">
        Ask EPAS AI
        </button>

        <div id="answer" style="margin-top:25px;"></div>
    `;
}

function askAI(){

    const q=document.getElementById("userQuestion").value.toLowerCase();

    let answer="Sorry, I don't know that yet. More EPAS lessons will be added soon.";

    if(q.includes("ohm")){
        answer="Ohm's Law states that Voltage = Current × Resistance (V = I × R).";
    }

    if(q.includes("resistor")){
        answer="A resistor limits the flow of electrical current in a circuit.";
    }

    if(q.includes("series")){
        answer="In a series circuit, components are connected one after another in a single path.";
    }

    document.getElementById("answer").innerHTML=
    "<h3>🤖 EPAS AI</h3><p>"+answer+"</p>";

}
