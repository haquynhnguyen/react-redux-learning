var nameVar = "Quynh";
var nameVar = "Mike";
console.log("test: ",nameVar);

let nameLet = "Jone"; // => can't redefined it; only reassigned it;
nameLet = 'Julie';
console.log("Name Let: ", nameLet);

const nameConst = "Quynh Nguyen"; // => can't redefined and reassigned
console.log("nameConst: ", nameConst);

// block scoping 
var fullName = "Quynh Nguyen";
let firstName; 

if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

// console.log(firstName); => fail with let and const variable