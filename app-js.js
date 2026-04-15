// app.js — Quiz logic (depends on questions.js being loaded first)

// ===== STATE =====
let selectedTopics = new Set();
let quizQuestions = [];
let currentIdx = 0;
let answers = {};
let score = 0;

const topicNames = [...new Set(QUESTIONS.map(q => q.topic))];

// ===== INITIALISE TOPIC SELECTOR =====
function init() {
  document.getElementById('totalQCount').textContent = QUESTIONS.length;
  const grid = document.getElementById('topicGrid');
  grid.innerHTML = '';

  topicNames.forEach(t => {
    const count = QUESTIONS.filter(q => q.topic === t).length;
    const div = document.createElement('div');
    div.className = 'topic-card' + (selectedTopics.has(t) ? ' selected' : '');
    div.dataset.topic = t;
    div.onclick = () => toggleTopic(t, div);
    div.innerHTML = `
      <div class="topic-code">${t.split('–')[0].trim()}</div>
      <div class="topic-name">${t.split('–').slice(1).join('–').trim() || t}</div>
      <div class="topic-count">${count} questions</div>
      <div class="topic-check">✓</div>
    `;
    grid.appendChild(div);
  });
}

function toggleTopic(t, div) {
  if (selectedTopics.has(t)) {
    selectedTopics.delete(t);
    div.classList.remove('selected');
  } else {
    selectedTopics.add(t);
    div.classList.add('selected');
  }
  updateStartBtn();
}

function selectAll() {
  topicNames.forEach(t => selectedTopics.add(t));
  init();
  updateStartBtn();
}

function selectNone() {
  selectedTopics.clear();
  init();
  updateStartBtn();
}

function updateStartBtn() {
  document.getElementById('startBtn').disabled = selectedTopics.size === 0;
}

// ===== START QUIZ =====
function startQuiz() {
  let pool = QUESTIONS.filter(q => selectedTopics.has(q.topic));

  if (document.getElementById('modeSelect').value === 'random') {
    pool = pool.sort(() => Math.random() - 0.5);
  }

  const countVal = document.getElementById('qCountSelect').value;
  if (countVal !== 'all') pool = pool.slice(0, parseInt(countVal));

  quizQuestions = pool;
  answers = {};
  score = 0;
  currentIdx = 0;

  document.getElementById('topicView').style.display = 'none';
  document.getElementById('quizView').style.display = 'block';
  document.getElementById('homeBtn').style.display = 'block';
  document.getElementById('headerScore').style.display = 'block';

  updateHeaderScore();
  buildNavGrid();
  renderQuestion();
}

// ===== QUESTION NAVIGATOR =====
function buildNavGrid() {
  const grid = document.getElementById('qNavGrid');
  grid.innerHTML = '';
  quizQuestions.forEach((q, i) => {
    const btn = document.createElement('button');
    btn.className = 'q-nav-btn' + (i === currentIdx ? ' current' : '');
    btn.textContent = i + 1;
    btn.id = 'nav-' + i;
    btn.onclick = () => { currentIdx = i; renderQuestion(); };
    grid.appendChild(btn);
  });
}

function updateNavGrid() {
  quizQuestions.forEach((q, i) => {
    const btn = document.getElementById('nav-' + i);
    if (!btn) return;
    btn.className = 'q-nav-btn';
    if (i === currentIdx) btn.classList.add('current');
    if (answers[i] !== undefined) {
      btn.classList.add(
        answers[i] === quizQuestions[i].answer ? 'answered-correct' : 'answered-wrong'
      );
    }
  });
}

// ===== RENDER QUESTION =====
function renderQuestion() {
  const q = quizQuestions[currentIdx];
  const total = quizQuestions.length;
  const answered = Object.keys(answers).length;

  document.getElementById('progressFill').style.width = ((answered / total) * 100) + '%';
  document.getElementById('progressLabel').textContent = `${answered}/${total}`;
  document.getElementById('currentTopic').textContent = q.topic;
  document.getElementById('qNumber').textContent = `Question ${currentIdx + 1} of ${total}`;
  document.getElementById('qText').textContent = q.q;

  const grid = document.getElementById('optionsGrid');
  grid.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  const chosen = answers[currentIdx];
  const revealed = chosen !== undefined;

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    if (revealed) {
      btn.disabled = true;
      if (i === q.answer) btn.classList.add('correct');
      else if (i === chosen && i !== q.answer) btn.classList.add('wrong');
      else btn.classList.add('dimmed');
    }
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;
    if (!revealed) btn.onclick = () => selectAnswer(i);
    grid.appendChild(btn);
  });

  const expBox = document.getElementById('explanationBox');
  expBox.innerHTML = revealed
    ? `<div class="explanation-box"><strong>Explanation</strong>${q.exp}</div>`
    : '';

  document.getElementById('prevBtn').disabled = currentIdx === 0;
  document.getElementById('nextBtn').disabled = currentIdx === total - 1;

  const allAnswered = Object.keys(answers).length === total;
  document.getElementById('finishBtn').style.display = allAnswered ? 'block' : 'none';

  updateNavGrid();
  updateHeaderScore();
}

function selectAnswer(i) {
  if (answers[currentIdx] !== undefined) return;
  answers[currentIdx] = i;
  if (i === quizQuestions[currentIdx].answer) score++;
  updateHeaderScore();
  renderQuestion();
  // Auto-advance after short delay
  if (currentIdx < quizQuestions.length - 1) {
    setTimeout(() => { currentIdx++; renderQuestion(); }, 1100);
  }
}

function navigate(dir) {
  const newIdx = currentIdx + dir;
  if (newIdx < 0 || newIdx >= quizQuestions.length) return;
  currentIdx = newIdx;
  renderQuestion();
}

function updateHeaderScore() {
  document.getElementById('headerScoreVal').textContent = `${score}/${quizQuestions.length}`;
}

// ===== RESULTS =====
function finishQuiz() {
  document.getElementById('quizView').style.display = 'none';
  document.getElementById('resultsView').style.display = 'block';

  const total = quizQuestions.length;
  const pct = Math.round((score / total) * 100);

  const scoreEl = document.getElementById('resultScore');
  scoreEl.textContent = pct + '%';
  scoreEl.className = 'result-score ' + (pct >= 80 ? 'great' : pct >= 60 ? 'ok' : 'poor');

  document.getElementById('resultLabel').textContent =
    pct >= 80 ? 'Excellent — Ready for the interview!' :
    pct >= 60 ? 'Good — Keep studying!' :
    'Needs more work — Review your notes';

  document.getElementById('statCorrect').textContent = score;
  document.getElementById('statWrong').textContent = total - score;
  document.getElementById('statTotal').textContent = total;

  // Topic breakdown
  const topicStats = {};
  quizQuestions.forEach((q, i) => {
    if (!topicStats[q.topic]) topicStats[q.topic] = { correct: 0, total: 0 };
    topicStats[q.topic].total++;
    if (answers[i] === q.answer) topicStats[q.topic].correct++;
  });

  let html = '<div class="breakdown-title">Topic Breakdown</div>';
  Object.entries(topicStats).forEach(([topic, stats]) => {
    const p = Math.round((stats.correct / stats.total) * 100);
    const col = p >= 80 ? 'var(--green)' : p >= 60 ? 'var(--gold)' : 'var(--red)';
    html += `
      <div class="breakdown-row">
        <div class="breakdown-name">${topic.split('–').pop().trim()}</div>
        <div class="breakdown-bar-track">
          <div class="breakdown-bar-fill" style="width:${p}%;background:${col}"></div>
        </div>
        <div class="breakdown-pct" style="color:${col}">${p}%</div>
      </div>`;
  });
  document.getElementById('topicBreakdown').innerHTML = html;
}

function reviewWrong() {
  const wrongIdxs = Object.keys(answers)
    .filter(i => answers[i] !== quizQuestions[i].answer)
    .map(Number);

  if (wrongIdxs.length === 0) { alert('No wrong answers to review! 🎉'); return; }

  quizQuestions = wrongIdxs.map(i => quizQuestions[i]);
  answers = {};
  score = 0;
  currentIdx = 0;

  document.getElementById('resultsView').style.display = 'none';
  document.getElementById('quizView').style.display = 'block';
  buildNavGrid();
  renderQuestion();
}

function goHome() {
  document.getElementById('quizView').style.display = 'none';
  document.getElementById('resultsView').style.display = 'none';
  document.getElementById('topicView').style.display = 'block';
  document.getElementById('homeBtn').style.display = 'none';
  document.getElementById('headerScore').style.display = 'none';
  init();
}

// ===== BOOT =====
selectAll();
init();
updateStartBtn();
