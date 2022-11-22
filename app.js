console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}

// Exercise 2 && 3 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; 1 < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    } else {
        if (i % 3 == 0) {
            console.log("FIZZ");
        }

        if (i % 5 == 0) {
            console.log("BUZZ");
        }
    }
}

let i = 1;

while (i <= 100) {
    let output = "";

    if (i % 3 == 0) {
        output = "FIZZ";
    }

    if (i % 5 == 0) {
        output += "BUZZ";
    }

    console.log(`${i} ${output}`);

    i++;
}

let x = 1;

do {
    let output = "";

    if (i % 3 == 0) {
        output = "FIZZ";
    }

    if (i % 5 == 0) {
        output += "BUZZ";
    }

    console.log(`${i} ${output}`);

    i++;
} while (x <= 100);

// Exercise 4

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 1; i <= n; i++) {
    if (i == value) {
        console.log(`Found ${value}!`);
        break;
    }

    if (i == n) {
        console.log(`Did not find ${value} within 1-${n}...`);
    }
}

// Exercise 5 Custom Fizz Buzz

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1); 

for (let i = start; i <= end; i++) {
    let output = "";
     
    if (i % fizzDivisor == 0) {
        output += "FIZZ";
    }

    if (i % buzzDivisor == 0) {
        output += "Buzz";
    }
    
    console.log(`${i} ${output}`);
}