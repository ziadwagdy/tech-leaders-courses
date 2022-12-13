// each file is a module 
// destructure a module 
import { Student, sayHi } from "./Student.js"
import Description from "./Description.js"

let s1 = new Student("Yassin", 12);
console.log(s1.getName());

console.log(sayHi());
Description(s1.getName())