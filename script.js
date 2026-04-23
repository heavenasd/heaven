
Here is your complete production script.js:

const questions = [
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "5"],
    correct: 1
  },
  {
    question: "Capital of France?",
    answers: ["Berlin", "Madrid", "Paris"],
    correct: 2
  }
];
let current = 0;
let score = 0;
let answered = false;
const quizEl = document.getElementById("quiz");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
function loadQuestion() {
  answered = false;
  nextBtn.style.display = "none";
  const q = questions[current];
  quizEl.innerHTML = `
    <h2>${q.question}</h2>
    <div class="answers">
      ${q.answers
        .map(
          (a, i) =>
            `<button class="answer-btn" data-index="${i}">${a}</button>`
        )
        .join("")}
    </div>
  `;
  document.querySelectorAll(".answer-btn").forEach(btn => {
    btn.addEventListener("click", selectAnswer);
  });
}
function selectAnswer(e) {
  if (answered) return;
  answered = true;
  const selected = Number(e.target.dataset.index);
  const correct = questions[current].correct;
  document.querySelectorAll(".answer-btn").forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) {
      btn.style.backgroundColor = "#4CAF50";
      btn.style.color = "#fff";
    } else if (i === selected) {
      btn.style.backgroundColor = "#f44336";
      btn.style.color = "#fff";
    }
  });
  if (selected === correct) score++;
  nextBtn.style.display = "block";
}
nextBtn.addEventListener("click", () => {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});
function showResult() {
  quizEl.innerHTML = "";
  nextBtn.style.display = "none";
  resultEl.innerHTML = `
    <h2>Your Score: ${score} / ${questions.length}</h2>
    <button onclick="restartQuiz()">Restart</button>
  `;
}
function restartQuiz() {
  current = 0;
  score = 0;
  resultEl.innerHTML = "";
  loadQuestion();
}
loadQuestion();
