const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// Use forEach to console log each name
  console.log('Use forEach to console log each name') 
names.forEach(name => {

  console.log(name);
});

console.log('\n'); 

// Use forEach to console log each name with a matching province
console.log('Use forEach to console log each name with a matching province') 
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

console.log('\n'); 

//Using map, convert province names to uppercase
console.log('Using map, convert province names to uppercase') 
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

console.log('\n'); 

//Create a new array with the amount of characters in each name
console.log('Create a new array with the amount of characters in each name') 
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

console.log('\n'); 

// Using sort, sort provinces alphabetically
console.log(' Using sort, sort provinces alphabetically') 
const sortedProvinces = provinces.slice().sort();
console.log(sortedProvinces);

console.log('\n'); 

// Use filter to remove provinces with the word "Cape" and count the remaining provinces
console.log('Use filter to remove provinces with the word "Cape" and count the remaining provinces') 
const filteredProvinces = provinces.filter(province => !province.includes("Cape"));
console.log(filteredProvinces.length);

console.log('\n'); 

// Create a boolean array indicating if a name contains an 'S' character
console.log('Create a boolean array indicating if a name contains an S character') 
const containsS = names.map(name => name.includes('S'));
console.log(containsS);

console.log('\n'); 

// Exercise 8: Using reduce, create an object mapping names to provinces
console.log('Using reduce, create an object mapping names to provinces') 
const nameToProvince = names.reduce((result, name, index) => {
  result[name] = provinces[index];
  return result;
}, {});
console.log(nameToProvince);

console.log('\n'); 

