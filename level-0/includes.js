function includes(text, matchStr, index = 0) {
  if (typeof text !== "string" || typeof matchStr !== "string") return false;

  if (index < 0) index = 0;
  if (index > text.length) return false;

  if (matchStr.length === 0) return true;
  if (matchStr.length > text.length - index) return false;

  let j = 0;

  for (let i = index; i < text.length; i++) {
    if (text[i] === matchStr[j]) {
      j++;

      if (j === matchStr.length) return true;
      continue;
    }

    i = i - j;
    j = 0;
  }

  return false;
}

const tests = [
  ["hello world", "world", 0],
  ["hello world", "world", 7],
  ["hello world", "", 5],
  ["hello world", "lo", 0],
  ["hello world", "lo", 4],
  ["abc", "abcd", 0],
  ["abc", "a", -10],
  ["abc", "a", 10],
];

for (const [text, matchStr, index] of tests) {
  const custom = includes(text, matchStr, index);
  const native = text.includes(matchStr, index);
  console.log(`text: "${text}", match: "${matchStr}", index: ${index}`);
  console.log(`custom: ${custom}, native: ${native}`);
  console.log("---");
}
