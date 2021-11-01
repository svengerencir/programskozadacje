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
      return false;
    }
    if (
      (s[i] == ")" && tester[tester.length - 1] == "(") ||
      (s[i] == "]" && tester[tester.length - 1] == "[") ||
      (s[i] == "}" && tester[tester.length - 1] == "{")
    ) {
      tester = tester.slice(0, tester.length - 1);
    } else {
      tester = tester.concat(s[i]);
    }
  }
  return tester.length ? false : true;
}
console.log(zagrade("[()]()()"));
console.log(zagrade("{[((()))]}"));
console.log(zagrade("({)}"));
