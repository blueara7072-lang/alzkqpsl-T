function calculatePercent() {
  const total = parseFloat(document.getElementById("total").value);
  const percent = parseFloat(document.getElementById("percent").value);
  if (isNaN(total) || isNaN(percent)) {
    document.getElementById("percentResult").innerText = "⚠️ 숫자를 입력하세요.";
    return;
  }
  const result = (total * percent) / 100;
  document.getElementById("percentResult").innerText =
    `${total}의 ${percent}% = ${result.toLocaleString()} 입니다.`;
}

function calculateMedical() {
  const salary = parseFloat(document.getElementById("salary").value);
  const medical = parseFloat(document.getElementById("medical").value);
  if (isNaN(salary) || isNaN(medical)) {
    document.getElementById("medicalResult").innerText = "⚠️ 숫자를 입력하세요.";
    return;
  }
  const threshold = salary * 0.03;
  let deductible = medical - threshold;
  if (deductible < 0) deductible = 0;
  const taxCredit = deductible * 0.15;
  document.getElementById("medicalResult").innerText =
    `공제대상 의료비: ${deductible.toLocaleString()}원\n세액공제액(15%): ${taxCredit.toLocaleString()}원`;
}
