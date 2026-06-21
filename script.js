function calculateGrade() {
  const studentName = document.getElementById("studentName").value.trim();
  const assignment = Number(document.getElementById("assignment").value);
  const cat = Number(document.getElementById("cat").value);
  const exam = Number(document.getElementById("exam").value);
  const resultText = document.getElementById("resultText");

  if (studentName === "") {
    resultText.innerHTML = `<span class="fail">Please enter the student's name.</span>`;
    return;
  }

  if (
    isNaN(assignment) || isNaN(cat) || isNaN(exam) ||
    assignment < 0 || assignment > 100 ||
    cat < 0 || cat > 100 ||
    exam < 0 || exam > 100
  ) {
    resultText.innerHTML = `<span class="fail">Please enter valid marks between 0 and 100.</span>`;
    return;
  }

  const finalScore = (assignment * 0.3) + (cat * 0.2) + (exam * 0.5);

  let grade;
  let remark;
  let statusClass;

  if (finalScore >= 70) {
    grade = "A";
    remark = "Excellent performance";
    statusClass = "pass";
  } else if (finalScore >= 60) {
    grade = "B";
    remark = "Very good performance";
    statusClass = "pass";
  } else if (finalScore >= 50) {
    grade = "C";
    remark = "Good performance";
    statusClass = "pass";
  } else if (finalScore >= 40) {
    grade = "D";
    remark = "Fair performance";
    statusClass = "pass";
  } else {
    grade = "F";
    remark = "Needs improvement";
    statusClass = "fail";
  }

  resultText.innerHTML = `
    Student Name: <strong>${studentName}</strong><br>
    Assignment Contribution: <strong>${(assignment * 0.3).toFixed(2)}</strong><br>
    CAT Contribution: <strong>${(cat * 0.2).toFixed(2)}</strong><br>
    Exam Contribution: <strong>${(exam * 0.5).toFixed(2)}</strong><br>
    Final Score: <strong>${finalScore.toFixed(2)}%</strong><br>
    Grade: <strong>${grade}</strong><br>
    Remark: <span class="${statusClass}">${remark}</span>
  `;
}

function clearForm() {
  document.getElementById("studentName").value = "";
  document.getElementById("assignment").value = "";
  document.getElementById("cat").value = "";
  document.getElementById("exam").value = "";
  document.getElementById("resultText").innerHTML = "Your result will appear here.";
}