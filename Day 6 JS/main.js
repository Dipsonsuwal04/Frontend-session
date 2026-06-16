// Loops in JS
// for loops 
// while loops
// do while lopps

// for(initialization;CSSConditionRule;increment/decrement){
//     code to be executed
// }
// for(i=0; i<=10; i=i-1) {
//     console.log(i)     0 1 . . . . 10 false = terminate
// }

// while loop
// let i= 11;   false termination
// while (i<10){
//     console.log(i);
//     i++;
// }

// do while loop
// let i=11;
// do{
//     console.log(i);    i=11 result=11
//     i++;                i=12
// }while(i<10);            12<10 false

// task

// write a program to authorize user with atm pin using while 
// condition 

// 

// if else 

    let userpin = "1234";
    let enteredpin = ""
while(enteredpin != userpin){

        enteredpin = Number(prompt("Enter your pin"))

        if(enteredpin !== userpin){
            console.log("invalid pin")
        }

    }
    console.log("Access granted!!")

    