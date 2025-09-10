function submitQuiz() {
  const answers = {
    q1: "b", // Mars
    q2: "b", // J.K. Rowling
    q3: "c", // Tokyo
    q4: "a", // Oxygen
    q5: "b"  // Blue Whale
  };
  
  let score = 0;
  let resultHTML = "";
  
  for (let q in answers) {
    let selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected) {
      if (selected.value === answers[q]) {
        score++;
        resultHTML += `<p class="correct">✔ Question ${q.substring(1)}: Correct!</p>`;
      } else {
        resultHTML += `<p class="incorrect">✘ Question ${q.substring(1)}: Wrong (Correct: option ${answers[q].toUpperCase()})</p>`;
      }
    } else {
      resultHTML += `<p class="incorrect">⚠ Question ${q.substring(1)}: Not answered (Correct: option ${answers[q].toUpperCase()})</p>`;
    }
  }
  
  resultHTML = `<h2>You scored ${score} out of 5 🎯</h2>` + resultHTML;
  document.getElementById("result").innerHTML = resultHTML;
}