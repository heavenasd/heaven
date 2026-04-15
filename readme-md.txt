# Wizz Air Interview Prep Quiz

A browser-based multiple-choice quiz covering the key ATPL/Wizz Air interview topics.  
No build tools, no dependencies — just open `index.html` in any browser.

## 📁 File Structure

```
wizz-quiz/
├── index.html      # HTML structure & layout
├── style.css       # All styles & CSS variables
├── questions.js    # Question bank (loaded first)
├── app.js          # Quiz logic
└── README.md
```

## 📚 Topics Covered

| Code | Topic | Questions |
|------|-------|-----------|
| 010 | Air Law | 26 |
| 021 | Aircraft General Knowledge | 15 |
| 022 | Instrumentation | 11 |
| 031 | Mass & Balance | 9 |
| 032 | Performance | 15 |
| 033 | Flight Planning | 12 |
| 040 | Human Performance | 10 |
| 050 | Meteorology | 19 |
| 061 | General Navigation | 10 |
| 062 | Radio Navigation | 10 |
| 070 | Operational Procedures | 17 |
| 080 | Principles of Flight | 16 |
| — | Wizz Air Data | 6 |

**Total: 176 questions**

## 🚀 Running Locally

```bash
git clone https://github.com/YOUR_USERNAME/wizz-quiz.git
cd wizz-quiz
open index.html   # macOS
# or just double-click index.html on Windows/Linux
```

## 🌐 Hosting on GitHub Pages

1. Push to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch → main → / (root)**
4. Your quiz will be live at `https://YOUR_USERNAME.github.io/wizz-quiz/`

## ✏️ Adding Questions

Edit `questions.js` and add an object to the `QUESTIONS` array:

```js
{
  topic: "050 – Meteorology",        // must match an existing topic string
  q: "Your question text here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answer: 0,                         // 0-indexed correct answer
  exp: "Explanation shown after answering."
}
```

## Features

- Select any combination of topics
- Sequential or random question order
- 20 / 40 / 60 / All question count options
- Instant feedback with explanations
- Question navigator panel
- Per-topic results breakdown
- Review wrong answers mode
- Fully responsive (mobile-friendly)
