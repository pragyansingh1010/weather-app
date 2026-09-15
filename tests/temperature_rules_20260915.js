function validTemperature(value) {
  return Number.isFinite(value);
}

console.assert(validTemperature(25));
console.assert(validTemperature(-10));
console.assert(!validTemperature(NaN));
