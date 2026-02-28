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

const tests = [
  "10",
  "-10",
  "+10",
  "   12",
  "10px",
  "  -7abc",
  "abc",
  "   ",
  "",
  "-",
  "+",
];

for (const str of tests) {
  const custom = parseInteger(str);
  const native = parseInt(str);

  console.log(`value: ${str}`);
  console.log(`custom: ${custom}, native: ${native}`);
  console.log("---");
}
