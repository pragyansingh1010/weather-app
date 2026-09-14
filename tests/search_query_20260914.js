function normalizeCity(city) {
  return city.trim();
}

console.assert(normalizeCity(' Mohali ') === 'Mohali');
console.assert(normalizeCity('Delhi') === 'Delhi');
console.assert(normalizeCity('   ') === '');
console.log('Weather search rules passed');
