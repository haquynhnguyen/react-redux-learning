// argument object - no longer bound with arrow functions

// count - setup default props value to 0
const add = (a,b) => {
    return a + b;
}

console.log(add(55,1,1001));

// this keyword - no longer bound

const user = {
    name : 'quynh',
    cities : ['HCM', 'Da Nang', 'Ha Noi'],
    printPlacesLived() { // es6
        // map can return an array
        return this.cities.map(city => this.name + 'has lived in ' +  city);

        // forEach check each item in array
        // this.cities.forEach(city => {
        //     console.log(this.name + 'has lived in ' + city);
        // });
    }
}
console.log(user.printPlacesLived());

// challenge 
const multiplier = {
    numbers : [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map(num => "Result: " + this.multiplyBy * num);
    }
}

console.log(multiplier.multiply());