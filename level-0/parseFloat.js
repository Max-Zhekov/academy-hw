function parseFloatSimple(str) {
  if (typeof str !== "string") return NaN;

  let sign = 1;
  let result = 0;

  let afterDot = false;
  let div = 1;
  let started = false;
  let hasDigit = false;

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    const code = str.charCodeAt(i);

    if (!started && ch === " ") continue;

    if (!started && (ch === "-" || ch === "+")) {
      started = true;
      if (ch === "-") sign = -1;
      continue;
    }

    if (ch === "." && !afterDot) {
      started = true;
      afterDot = true;
      continue;
    }

    if (code >= 48 && code <= 57) {
      started = true;
      hasDigit = true;

      const digit = code - 48;
      if (!afterDot) {
        result = result * 10 + digit;
      } else {
        div *= 10;
        result = result + digit / div;
      }
      continue;
    }

    break;
  }

  return hasDigit ? sign * result : NaN;
}

// tests
console.log(parseFloatSimple("10.5")); // 10.5
console.log(parseFloatSimple("-10.5")); // -10.5
console.log(parseFloatSimple("  +3.14")); // 3.14
console.log(parseFloatSimple("10px")); // 10
console.log(parseFloatSimple("abc")); // NaN
console.log(parseFloatSimple(".5")); // 0.5
console.log(parseFloatSimple("1.")); // 1
console.log(parseFloatSimple("")); // NaN
console.log(parseFloatSimple("   ")); // NaN
