let level = 1;
let coins = 0;
let correctAnswer = 0;

document.getElementById("playerName").innerText =
  localStorage.getItem("name");

generateQuestion();

function generateQuestion() {
  let a = Math.floor(Math.random() * 10) + 1;
  let b = Math.floor(Math.random() * 10) + 1;
  correctAnswer = a + b;
  document.getElementById("question").innerText =
    `What is ${a} + ${b}?`;
}

function checkAnswer() {
  let userAnswer = document.getElementById("answer").value;

  if (userAnswer == correctAnswer) {
    coins += 10;
    level++;
  }

  document.getElementById("coins").innerText = coins;
  document.getElementById("level").innerText = level;
  document.getElementById("answer").value = "";

  if (level > 10) {
    localStorage.setItem("coins", coins);
    window.location.href = "certificate.html";
  } else {
    generateQuestion();
  }
}



