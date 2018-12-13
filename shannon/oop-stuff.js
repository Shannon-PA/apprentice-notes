class human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(`Hi, my name is ${this.name}`)
  }
}

var marco = new human("Marco", 18);
var dominic = new human("Dom", 17)
marco.sayName();
dominic.sayName();