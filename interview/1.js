/*
 1. Write a function to print out the contents of an array,
 one element at a time, waiting one second between each entry.
 Don't use globals or setInterval, and try not to mutate the array.
 Bonus points for not using a ton of memory with a large array.
*/

let myArray = ['January', 'February', 'March'];

function printData(data){
  let i,j;
  for(i =0; i < data.length; i++)
  {
    console.log(myArray[i]);

    for(j=0; j< 1000000000;j++){}//1,000,000,000
  }
}

printData(myArray);

// /*
//  1. Write a function to print out the contents of an array,
//  one element at a time, waiting one second between each entry.
//  Don't use globals or setInterval, and try not to mutate the array.
//  Bonus points for not using a ton of memory with a large array.
//  */
//
// let myArray = ['January', 'February', 'March','January', 'February', 'Marcrh'];
//
// function printData(data){
//   var tim;
//
//   // for (var i =0; i < data.length; i++){
//   //   // let const var
//   //   //let x = i;
//   //   setTimeout((function(x){
//   //     return ()=>{ console.log(data[x]) }
//   //   })(i), 1000 * (i+1))
//   // }
//
//   data.forEach((x, i) => {
//     setTimeout(function(){
//       console.log(x)
//     }, 1000 * (i+1))
//   })
// }
//
//
// printData(myArray);
//

