// Object in JavaScript
// Data Types  : number, string, boolean, Array
// What if?
let user = {
  // attributes
  age: "",
  country: "",
  "first name": "",
  "last name": "",
  address: {
    address1: "",
    address2: "",
  },
  // methods
  getName() {
    return this["first name"] + " " + this["last name"];
  },
  logIn() {
    return `user ${user.getName()} is logged in`;
  },
};

// set the data
user["first name"] = "Yassin";
user["last name"] = "Mohamed";
user.age = 12;
// get the data
console.log(user.getName());
