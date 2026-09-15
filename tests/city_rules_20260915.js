function validCity(city) {
  return city.trim().length > 0;
}

console.assert(validCity('Delhi'));
console.assert(!validCity('   '));
