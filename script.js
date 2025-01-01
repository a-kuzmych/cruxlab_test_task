function countValidPasswords(input) {
  const lines = input.split("\n");
  let validPasswordCount = 0;

  lines.forEach((line) => {
    const [rule, password] = line.split(": "); // separate rule and password
    const [letter, range] = rule.split(" "); // separate range and letter
    const [min, max] = range.split("-").map(Number); // separate minimum and maximum

    const charCount = [...password].filter(
      (char) => char === letter
    ).length;

    if (charCount >= min && charCount <= max) {
      validPasswordCount++;
    }
  });

  return validPasswordCount;
}

function checkPasswords() {
  const input = document.getElementById("input").value.trim();
  const result = countValidPasswords(input);
  document.getElementById(
    "result"
  ).textContent = `Valid passwords: ${result}`;
}
