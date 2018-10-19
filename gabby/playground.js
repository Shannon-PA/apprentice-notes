function Object(name) {
    this.name = name;
    this.greet = () => {
        console.log(this.name);
    }
}

let myObject = new Object("Potato");

console.log(myObject.name);
myObject.greet();