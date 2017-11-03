const square = function (x) {
    return x * x;
}

// const squareArrow = x => {
//     return x * x;
// }

const squareArrow = x => x * x

// console.log(square(8));
console.log(squareArrow(2));

// Challenge - Use Arrow function
// getFirstName('Mike Smith') -> "Mike"

const fullName = "Mike Smith";
const getFirstName = fullName => fullName.split(' ')[0];

console.log("getFirstName: ",getFirstName(fullName));