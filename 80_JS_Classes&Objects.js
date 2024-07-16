console.log("Classes & Objects");

// let animal = {
//     eats: true
// }

// let rabbit = {
//     jumps: true
// }

// rabbit.__proto__ = animal // Inheritence

class Animal {
    constructor (name) {
        this.name = name
        console.log("Constructor Created");
    }

    eats() {
        console.log(`${this.name} Eats`);
    }

    jumps() {
        console.log(`${this.name} Jumps`);
    }

    runs () {
        console.log(`${this.name} Runs`);
    }
}

let Bunny = new Animal ("Bunny")
Bunny.runs();
Bunny.eats();
Bunny.jumps();

// Inheritence in JS

class Lion extends Animal {
    constructor(name) {
        super(name)
        console.log("Constructor Called");
    }

    roar() {
        console.log(`${this.name} Roars`);
    }

    // Method Overriding
    eat() {
        console.log(`${this.name} Only Meat Khata Hai`);
    }
}

let Simba = new Lion("Simba")
Simba.roar()
Simba.eat()

// Check if an object is of a class

console.log(Simba instanceof Lion)
console.log(Simba instanceof Animal)
console.log(Bunny instanceof Lion)