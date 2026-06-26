const Winner = document.getElementById("winner");
const ComputerChoice = document.getElementById("computer-choice");
const UserChoice = document.getElementById("user-choice");

const choices = ["rock", "paper", "scissors"];
const computerChoice = choices[Math.floor(Math.random() * choices.length)];

const userChoice = (choice) => {
    // Ab computer ki choice user ke select karne ke BAAD dikhegi
    ComputerChoice.innerHTML = `Computer chose: <u>${computerChoice}</u>`;
    UserChoice.innerHTML = `You chose: <u>${choice}</u>`;

    if (choice === computerChoice) {
        Winner.innerHTML = "It's a tie!";
        Winner.style.width = "100%";
    } else if (
        (choice === "rock"     && computerChoice === "scissors") ||
        (choice === "paper"    && computerChoice === "rock")     ||
        (choice === "scissors" && computerChoice === "paper")
    ) {
        Winner.innerHTML = "You win!";
        Winner.style.width = "100%";
    } else {
        Winner.innerHTML = "Computer wins!";
        Winner.style.width = "100%"; // Computer jeet gaya toh text red ho jaaye
    }

    // Buttons disable karo
    document.querySelectorAll("button").forEach(btn => btn.disabled = true);

    // Reload button banao
    const reloadBtn = document.createElement("button");
    reloadBtn.innerHTML = "🔄 Play Again";
    reloadBtn.classList.add("play-again-btn");
    reloadBtn.onclick = () => location.reload();

    // Apne HTML mein jo bhi container ho wahan daalo
    Winner.parentElement.appendChild(reloadBtn);
};