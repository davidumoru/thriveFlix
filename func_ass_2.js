let fooDoo = []
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    //console.log("Doo Foo");
    fooDoo[i] = "Doo Foo";
  } else if (i % 3 === 0) {
    //console.log("Doo");
    fooDoo[i] = "Doo";
  } else if (i % 5 === 0) {
    //console.log("Foo");
    fooDoo[i] = "Foo";
  } else {
    //console.log(i);
    fooDoo[i] = i;
  }
}
console.log(fooDoo.splice(1));

// Factorial of 20
let factorial = 1;
for (let i = 1; i <= 20; i++) {
  factorial *= i;
}
console.log("Factorial of 20:", factorial);

// Multiples of 2 till 12
let multiples = [];
for (let i = 1; i <= 12; i++) {
  multiples[i] = i * 2;
}
console.log("Multiples of 2 till 12:", multiples.splice(1));
