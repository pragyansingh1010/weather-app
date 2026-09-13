function toCelsius(value, unit) {
  if (!Number.isFinite(value)) return null;
  if (unit === 'C') return value;
  if (unit === 'F') return (value - 32) * 5 / 9;
  if (unit === 'K') return value - 273.15;
  return null;
}

console.assert(toCelsius(0, 'C') === 0);
console.assert(toCelsius(32, 'F') === 0);
console.assert(Math.round(toCelsius(273.15, 'K')) === 0);
console.assert(toCelsius(20, 'X') === null);
console.log('Weather unit tests passed');
