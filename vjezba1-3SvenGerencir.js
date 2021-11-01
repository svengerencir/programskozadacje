/*
INPUT = "({[([)]})"
OUTPUT = f(INPUT) //"({[()]})"
*/
function zagrade(s) {
  let tester = "";
  if (s[0] == ")" || s[0] == "]" || s[0] == "}") return false;
  tester = tester.concat(s[0]);
  for (let i = 1; i < s.length; i++) {
    if (
      (s[i] == ")" && tester[tester.length - 1] == "[") ||
      (s[i] == ")" && tester[tester.length - 1] == "{") ||
      (s[i] == "]" && tester[tester.length - 1] == "(") ||
      (s[i] == "]" && tester[tester.length - 1] == "{") ||
      (s[i] == "}" && tester[tester.length - 1] == "(") ||
      (s[i] == "}" && tester[tester.length - 1] == "[")
    ) {
      if (i > tester.length - i) {
        tester = tester.slice(0, tester.length - 1);
        tester = tester.concat(s[i]);
      }
    } else {
      tester = tester.concat(s[i]);
    }
  }
  return tester;
}
console.log(zagrade("({[([)]})"));
