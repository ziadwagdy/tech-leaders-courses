// OOP 
class User {
    constructor(name, age){
        this.name = name;
        this.age  = age;  
        
    }

    // getters and setters 
    get name(){ 
        return this._name;
    }

    get age(){ 
        return this._age;
    }

    set name(value){ 
        // validation 
        if (value.length < 4) { 
            alert("Nameis too short");
            return; 
        }
        this._name = value; 
    }

    set age(value){ 
        this._age = value; 
    }

    sayHi(){ 
        alert(`Hi, my name is ${this.name} and I am ${this.age} years old`);
    }
}

// create an object 
let user1 = new User("Yassin", 12);
// user1.sayHi();
user1._name = "Ahmed"; // set 
console.log(user1._name); // get 
console.log(user1._age);
console.log(typeof User);


// valid
let x = 5; 
x = 7; 

console.log(x);

const PI = 22/7;
// PI = 22/8; 
