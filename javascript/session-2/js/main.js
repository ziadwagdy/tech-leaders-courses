const p = document.getElementById("par");


const checkboxes = document.getElementsByName("language"); 
console.log(checkboxes.length);

checkboxes.forEach(element => {
   console.log(element);
});

const inputs = document.getElementsByTagName("input"); 
console.log(inputs);

// Select elemets by 
//  CSS Selectors 
//  Class names -> VIP!! 