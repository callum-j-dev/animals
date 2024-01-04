class Animal {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    speak() {
        console.log(`${this._name} makes a noise`);
    }
}

class Fantastic extends Animal {
    constructor(name, element) {
        super(name);
        this._element = element;
    }

    get element() {
        return this._element;
    }

    magic() {
        console.log(`${this._name} exudes ${this._element}`);
    }
}

class Dragon extends Fantastic {
    constructor(name, element) {
        super(name, element);
    }

    magic() {
        console.log(`${this._name} breathes ${this._element}!`);
    }

    speak() {
        console.log(`All belongs to ${this._name}!`);
    }
}

class Unicorn extends Fantastic {
    constructor(name, element, color) {
        super(name, element);
        this._color = color;
    }

    get color() {
        return this._color;
    }

    magic() {
        console.log(`${this._name} sprinkles ${this._color} ${this._element} everywhere!`);
    }

    speak() {
        console.log(`${this._name} says hello!`);
    }
}
