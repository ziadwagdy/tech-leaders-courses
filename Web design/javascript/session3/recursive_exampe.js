// function pow(b, p) {
//   let result = 1;

//   for (let i = 0; i < p; i++) {
//     result *= b;
//   }

//   return result; 
// }

function pow(b, p) {
    if (p == 1){
        return b; 
    }else { 
        return b * pow(b, p - 1); 
    }
}
console.log(pow(2,5)); // 8
