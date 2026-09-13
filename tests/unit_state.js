function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

console.assert(toCelsius(32) === 0);
console.assert(Math.round(toCelsius(212)) === 100);
console.assert(Math.round(toCelsius(50)) === 10);
console.log('Weather temperature tests passed');
