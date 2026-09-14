function validHumidity(value) {
  return Number.isFinite(value) && value >= 0 && value <= 100;
}

console.assert(validHumidity(0));
console.assert(validHumidity(50));
console.assert(validHumidity(100));
console.assert(!validHumidity(-1));
console.assert(!validHumidity(101));
console.log('Humidity bounds passed');
