const output = document.getElementById("output");

const lines = [
    "> Initializing system...",
    "",
    "> Connecting to secure network...",
    "[SUCCESS]",
    "",
    "> Target IP: 192.168.1.1",
    "",
    "> Cracking password...",
    "[████████████████] 100%",
    "",
    "> ACCESS GRANTED"
];

let index = 0;

function typeLine() {
    if(index < lines.length){
        output.textContent += lines[index] + "\n";
        index++;

        setTimeout(typeLine, 700);
    } else {
        document.getElementById("nukeBtn").style.display = "block";
    }
}

typeLine();

document.getElementById("nukeBtn").onclick = () => {
    document.body.innerHTML = `
        <h1 style="color:lime;font-family:monospace;">
            Nice try 😂
        </h1>
    `;
};
