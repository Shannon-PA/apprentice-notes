debugger;
function Animal(name){
    let secret2 = "not a "
    let message = "secret"; 
    let blank = "blank";
    this.setName = (newName) => {
        name = newName;
    };
    this.getName = () => {
        return name;
    };
    this.getMessage = () => {
        return secret2 + message;
    }
}

const myAnimal = new Animal("Steve");

console.log(myAnimal.getName());

myAnimal.setName("Wonderbird");

console.log(myAnimal.getName());

console.log(myAnimal.getMessage());

console.log(Math.pow(3, 4));