// function Add //
// function is a named block of code that performs a specific task //
//  function add (){
//      let num1 = 20;
//      let num2 = 30;
//      let ans = num1 + num2;
//      // helps the function to expose something outside of itself //
//      return ans; 
 //}
 // this is a function call also technically refered to as a function invocation (to invoke)
// add(); 
// console.log(add());

// function evenNum(){
//     for (num = 0; num <= 100; num += 10);{
//         if ( num % 2 == 0);{
//             console.log(num)
//         }
//     }
// }
// evenNum();

function netPay(){
    var gross = 1000000;
    var Tax = 1000000 * 0.3;
    var actualPay = gross - Tax;
     return actualPay;
}

// console.log (netPay());

function welfare(){
    let groupFare = 50000;
    let takeHome = netPay() - groupFare;
    console.log(takeHome);
}
welfare();


