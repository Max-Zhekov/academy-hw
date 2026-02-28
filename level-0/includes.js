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

// tests
console.log(includes("hello world", "world", 0)); // true
console.log(includes("hello world", "world", 7)); // false
console.log(includes("hello world", "", 5)); // true
console.log(includes("hello world", "lo", 0)); // true
console.log(includes("hello world", "lo", 4)); // false
console.log(includes("abc", "abcd", 0)); // false
console.log(includes("abc", "a", -10)); // true
console.log(includes("abc", "a", 10)); // false
