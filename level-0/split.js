function split(text, divider) {
  const result = [];
  let current = "";

  if (divider === "") {
    for (let i = 0; i < text.length; i++) {
      result.push(text[i]);
    }
    return result;
  }

  for (let i = 0; i < text.length; i++) {
    let matched = true;

    for (let j = 0; j < divider.length; j++) {
      if (text[i + j] !== divider[j]) {
        matched = false;
        break;
      }
    }

    if (matched) {
      result.push(current);
      current = "";
      i += divider.length - 1;
    } else {
      current += text[i];
    }
  }

  result.push(current);

  return result;
}

const splitTests = [
  { text: "a,b,c", divider: ",", expected: ["a", "b", "c"] },
  { text: "a--b--c--d", divider: "--", expected: ["a", "b", "c", "d"] },
  { text: "abc", divider: "", expected: ["a", "b", "c"] },
  { text: "abc", divider: "x", expected: ["abc"] },
  { text: "", divider: ",", expected: [""] },
  { text: ",start", divider: ",", expected: ["", "start"] },
  { text: "end,", divider: ",", expected: ["end", ""] },
  { text: "one,,,two", divider: ",,", expected: ["one", ",two"] },
  { text: "aaaa", divider: "aa", expected: ["", "", ""] },
  { text: "no divider here", divider: "z", expected: ["no divider here"] },
  {
    text: "repeat--repeat--repeat",
    divider: "--",
    expected: ["repeat", "repeat", "repeat"],
  },
];

for (const { text, divider, expected } of splitTests) {
  const custom = split(text, divider);
  const native = text.split(divider);
  console.log(`text: "${text}", divider: "${divider}"`);
  console.log(`custom: [${custom.join(", ")}], native: [${native.join(", ")}]`);
  console.log("---");
}
