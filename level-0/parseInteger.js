function parseInteger(str) {
  if (typeof str !== "string") return NaN;

  let result = 0;
  let sign = 1;

  let started = false;
  let hasDigits = false;

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    if (!started && ch === " ") continue;

    if (!started && (ch === "-" || ch === "+")) {
      started = true;
      if (ch === "-") sign = -1;
      continue;
    }

    const code = str.charCodeAt(i);
    if (code >= 48 && code <= 57) {
      started = true;
      hasDigits = true;
      result = result * 10 + (code - 48);
      continue;
    }

    if (hasDigits) break;

    return NaN;
  }

  if (!hasDigits) return NaN;

  return sign * result;
}

// tests
console.log(parseInteger("10")); // 10
console.log(parseInteger("-10")); // -10
console.log(parseInteger("+10")); // 10
console.log(parseInteger("   12")); // 12
console.log(parseInteger("10px")); // 10
console.log(parseInteger("  -7abc")); // -7
console.log(parseInteger("abc")); // NaN
console.log(parseInteger("   ")); // NaN
console.log(parseInteger("")); // NaN
console.log(parseInteger("-")); // NaN
console.log(parseInteger("+")); // NaN
