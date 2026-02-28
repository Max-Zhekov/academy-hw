function isObject(data) {
  return Object.prototype.toString.call(data) === "[object Object]";
}

console.log(isObject({}));
console.log(isObject([]));
console.log(isObject(new Object()));
console.log(isObject(null));
console.log(isObject(new Date()));
console.log(isObject(new WeakMap()));
console.log(isObject(() => {}));
