// reference type
let object1 = { value: 10 };
let object2 = object2;
let object3 = { value: 10 };

// context
const object4 = {
    a: function () {
        console.log(this)
}
}

// instantiation
class Player {
    constructor(name, type) {
        console.log(this)
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I'm ${name} and am ${type}`)
    }
}
class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log(`wizard`, this);
    }
    play() {
        console.log(`yesss, I'm ${type}`);
    }
}
const wizard1 = new Player('Moses', 'boss');
const wizard2 = new Player('Blossom', 'friend');