"use strict"

// 1.1. if   պայմանի օպերատորի օգնությամբ գրել պայման,առ այն որ փոփոխական age-ը գտնվում է
// 14 և 57(ներառյալ)թվերի միջակայքում։


// var age=prompt("insert one number","5");
// if(age> 14 && age <=57) {
//     console.log("right");
// }
// else{
//     console.log("wrong");
// }

// 2.if   պայմանի օպերատորի օգնությամբ գրել պայման,առ այն որ փոփոխական age-ը չի գտնվում
// 14 և 57(ներառյալ)թվերի միջակայքում։

// var age=prompt("insert one number","5");
// if(age< 14 || age>=57) {
//     console.log("right");
// }
// else{
//     console.log("oops");
// }

// 3.
// if (-1 || 0) {
//     alert(“Hello World !!!”);
// }

// 4.
// 4. Ինչ արժեք կվերադարձնվի վերջին գործողության արդյունքում։
// var i = 3;
// while (i) {
//     alert( i-- ); }
//     answer 1

// 5. for ցիկլի օգնությամբ արտատպել 0-ից 10 թվերի միջակայքում ընկած զույգ թվերը։
// var x =+prompt("insert one number", "1");
// for(x=0; x<= 10; x++) {
//     if (x % 2 == 0) {
//         console.log(x + 'is even');
//     }
//     else{
//         console.log("its odd");
//     }
// }


// 6. for ցիկլի օգնությամբ արտատպել 0-ից 10 թվերի միջակայքում ընկած կենտ թվերը։

// var x =+prompt("insert a number", "5");
// for(x=0; x<=10; x++) {
//     if(!x%2==0) {
//         console.log("this number is odd");
//     }
//     else {
//         console.log("it's even");
//     }
// }

// 7.for (var i = 0; i < 3; i++) {
//     alert( "номер " + i + "!" );
// }
// var i = 0;
// while(i<3) {
//     alert("номер " + i + "!" );
//     i++;
// }
//

// task9
// function comparison() {
//     var x = +prompt("insert one number", '5'),
//         y = +prompt("insert second number", '9');
//     if(x<y){
//         console.log(x + " " +"is smaller than" + " " + y);
//     }
//     else if(x===y){
//         console.log("both are equal");
//     }
//     else {
//         console.log(y+ " " + "is smaller than" + " "  + x);
//     }
// }
// comparison();

// 2nd option

// function comparison() {
//     var x = +prompt("insert one number", '5'),
//         y = +prompt("insert second number", '9'),
//         g=+prompt("insert second number", '9');
//     console.log(Math.min(x, y, g));
// }
// comparison();


// task 10
//  function cardType() {
//      var num = +prompt("insert card's number", "0245");
//      if (num != null) {
//          switch (num) {
//              case 1245:
//                  console.log("Its VISA");
//                  break;
//              case 2508:
//                  console.log("Its Mastercard");
//                  break;
//              default:
//                  console.log("Try again");
//          }
//      }
//      return num
//  }
// cardType()

// task 11

// function func1(text) {
//     var x = prompt("insert something", "blahblah");
//     var i = x.length;
//     for (i = 0; i < x.length; i++) {
//         console.log(text.charCodeAt(i));
//     }
//     function func2() {
//         {
//             var g = i;
//             for (g = 0; g < i; g++) {
//                 alert(Math.min(g));
//             }
//         }
//     }
// }
// func1("Gohar is coding!");

function something(n) {
    n = prompt("you are free to write anything","14");
    if(!isNaN(n) && n!==null)
    {
        console.log("your number is" + " " + n);
        if ((parseFloat(n)) || (parseInt(n)) && isFinite(n)) {
            console.log("You put the write thing"+ " " + n);
        }
    }
    else if (isNaN(n)) {
        do {
            n = prompt("try again");
        }
        while(isNaN(n));
    }

    else {
        alert("Try again later");
    }
}
something();

