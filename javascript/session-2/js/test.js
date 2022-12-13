// function first(){ 
//     console.log("Hello, JavaScript");
//     console.log("Hello, JavaScript");
//     console.log("Hello, JavaScript");
//     console.log("Hello, JavaScript");
//     console.log("Hello, JavaScript");
// }

// function second(){ 
//     first(); 
//     first(); 
//     first(); 
// }

// function third() {
//     second(); 
//     second(); 
//     second(); 
// }
// // Function Hoisting
// main(); 

// function main(){
//     third(); 
//     third(); 
// }

// x = "15"
// convert a vlue into a number 
// x = +x

// convert a vlue into a number 
// and negate it 
// x = -x 

// console.log(x + 2);

// valu1 ?? value2 
// return the second value. 
// if the first value is null 
// x = null 
// const y = x ?? 5
// console.log(y);

// username = null 
// const name = username ?? "please enter your name"
// console.log(name);

// Function first-class citizens 

// function sum(a, b){ 
//     return a + b; 
// }

// let result = add; 
// console.log(result);

// passing a functin as an argument 
// function average(a, b, findSum){ 
//   console.log(findSum);
// }

// avg = average(10, 20, sum)
// console.log(avg);

function myProgram(){
    return function sayHello(username){ 
        console.log( "Hello " + username );
    }
}

console.log(myProgram()("Zeyad"));