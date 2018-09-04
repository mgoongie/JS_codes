// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     speak(noise) {
//         console.log(`i make` + noise)
//     }
//
//     canWalk() {
//         let canWalk = 100;
//     }
//
//     jump() {}
//
//     heal() {}
//
// }
// class Cat extends Animal {
//
// }

 class Fibonacci {
    constructor(firstNum, secondNum) {
        let result = "";
        if( firstNum === 0 && secondNum===0) {
            result = 0;
        }
        else if (firstNum ===1 || secondNum===1 ) {
            result = 1;
        }
        else {result = (fisrtNum -1) + (secondNum -2)}
    }
     }


// function fib(a) {
//     if(a===0) {
//         return 0;
//     }
//     else if(a===1) {
//         return 1;
//     }
//     else {
//         return fib(a-1)+ fib(a-2);
//     }
// }
// fib(10);