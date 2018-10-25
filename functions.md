- Functions run when we call their name like this: 
```
  bob();
```
- Functions can return something with the 'return' keyword:
```
  function bob() {
    return "hi";
  }
```

- Functions can accept parameters that can be used in the function:
  ```
  Bob (someParameter) {
    console.log(someParameter)
  }
  ```
- Once a function executes a 'return' statement, the function is done and will not execute anything after the return statement.
```
function bob() {]
  return "hi";
  console.log("Woah!"); // <This line will never execute>
}
```
