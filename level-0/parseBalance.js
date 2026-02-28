const text = "My wallet balance is 14960 USDT";

function parseBalance(message) {
  if (typeof message !== "string") return NaN;

  let value = 0;
  let started = false;
  let hasDigits = false;

  for (let i = 0; i < message.length; i++) {
    const code = message.charCodeAt(i);

    if (code >= 48 && code <= 57) {
      started = true;
      hasDigits = true;
      value = value * 10 + (code - 48);
    } else {
      if (started) break;
    }
  }

  return hasDigits ? value : NaN;
}

console.log(parseBalance(text)); // 14960
