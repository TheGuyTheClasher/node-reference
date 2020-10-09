class Person {
    constructor(name, age) {
        this.name = 'john doe',
            this.age = 30
    }

    greetings() {
        console.log('my name is: ' + this.name)
        console.log('and my age is: ' + this.age)
    }
}

module.exports = Person;
