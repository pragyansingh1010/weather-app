function cToF(c) {
  return c * 9 / 5 + 32;
}

console.assert(cToF(0) === 32);
console.assert(cToF(100) === 212);
console.assert(cToF(-40) === -40);
console.log('Weather temperature conversion passed');
