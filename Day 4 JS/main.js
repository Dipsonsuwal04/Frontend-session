// function without parameters
// function greet(){
//     console.log("Hello, Ajay Sir!!")
// }
// greet()
// greet()
// greet()
// greet()
// greet()

// arrow function
//    const function-name=() => {
//     code to be executed

//    }
// const greet = () => {
//     console.log("Hello , Ajay sir !!")
// }

// greet()
// greet()

// const greet = (name) => {
//     console.log("Hello" + name)
// }

// greet("Ajay Sir");
// greet("Dipson");
// greet("Shreenie");
// greet("Sumitra mam")

// const sum = (a,b) => {
//     result = a + b;
//     console.log(result)

// }
// sum(10,5)
// sum(99, 100)

// task
// Q1.Write a program to find out the final price of the products using 10%
// discount rate using function with two parameters .

// callback function
function sayHello(name, callback){
    console.log("Hello :" + name);
    callback()
}
function goodbye() {
    console.log("Good Bye!!")
}
sayHello("Ajay sir!!", goodbye)

