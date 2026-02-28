const text =
  "Hello <@Kate />, you did your work well and I sent you 1000 USDT. <@Dmitrty /> was working at the weekend so I sent you 350 USDT. <@Max /> won 160 USDT";

function countBalance(message) {
  const result = {};

  let currentUser = "";
  let readingName = false;
  let expectingAmount = false;

  let amount = 0;
  let inAmount = false;

  for (let i = 0; i < message.length; i++) {
    const code = message.charCodeAt(i);

    if (!readingName && code === 60) {
      const next = i + 1 < message.length ? message.charCodeAt(i + 1) : -1;
      if (next === 64) {
        readingName = true;
        currentUser = "";
        i++;
        continue;
      }
    }

    if (readingName) {
      if (code === 32 || code === 47 || code === 62) {
        readingName = false;
        expectingAmount = true;
        continue;
      }

      let c = code;
      if (c >= 65 && c <= 90) c += 32;
      currentUser += String.fromCharCode(c);
      continue;
    }

    if (expectingAmount) {
      const isDigit = code >= 48 && code <= 57;

      if (isDigit) {
        inAmount = true;
        amount = amount * 10 + (code - 48);
        continue;
      }

      if (inAmount) {
        result[currentUser] = (result[currentUser] || 0) + amount;
        amount = 0;
        inAmount = false;
        expectingAmount = false;
      }
    }
  }

  if (expectingAmount && inAmount) {
    result[currentUser] = (result[currentUser] || 0) + amount;
  }

  return result;
}

console.log(countBalance(text)); // { kate: 1000, dmitrty: 350, max: 600 }
