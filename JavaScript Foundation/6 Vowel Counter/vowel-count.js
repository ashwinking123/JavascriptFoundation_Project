let name = 'Ashwin Shende';
let vowels = 'aeiouAEIOU';
let count = 0;

for (let i = 0; i < name.length; i++) {
  if (vowels.includes(name[i])) {
    count++;
  }
}

console.log(`The name ${name} has ${count} vowels.`);