// setup constructor to take name and age (default to 0)
// getDescription - Andrew Mead is 26 year(s) old.

class Person {
    constructor(name = 'Anonymous', age) {
        this.name = name;
        this.age = age;
    }
    getGreating() {
        // return 'Hi, I am ' + this.name + "!";
        return `Hi, I am ${this.name}, ${this.age} year(s) old!`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name,age); // to access the constructore of class Person
        this.major = major;
    }

    hasMajor() {
        return !!this.major; // true if this.major has value
    }

    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

const me = new Student('Quynh Nguyen',26, 'IT');
console.log(me.getDescription());
// console.log("getDescription: ", me.getDescription('Quynh Nguyen',26));

// const other = new Student('Quynh Nguyen',26, 'IT');
// console.log(other.getDescription());

// const student = new Student('quynh nguyen', 26, 'Math');
// console.log(student);

// Traveler -> Person
// Add support for homeLocation
// Overide getGreeting
// 1. Hi. I am Quynh Nguyen. I'm visiting from HCM. -> Has homeLocation 
// 2. Hi. I am Quynh Nguyen -> if no homeLocation

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreating() {
        let greeting = super.getGreating();
        if(this.hasHomeLocation()){
            return greeting += ` I'm visting from ${this.homeLocation}.`;
        }
    }
}

const traveler = new Traveler('Quynh Nguyen', 26, 'HCM');
console.log(traveler.getGreating());