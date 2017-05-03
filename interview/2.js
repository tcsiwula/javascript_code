/*
      2. Write a curried function that can be called like foo(x,y,z)
         or foo(x)(y)(z)
 */

function fx(x){return x;}
function fy(y){return y;}
function fz(z){return z;}

function xyz(x,y,z)
{
  if(y == undefined && z == undefined)
  {
    return fx(x);
  }
  else if(z == undefined)
  {
    return fx(x) + fy(y);
  }
  else if(y == undefined)
  {
    return fx(x);
  }
  else {
    return fx(x) + fy(y) + fz(z);
  }
}

console.log("xyz(1,2,3) = ", xyz(1,2,3));
console.log("xyz(1,3) = ", xyz(1,3));
console.log("xyz(1) = ", xyz(1));
console.log("xyz(100)(20)(20) = ", xyz(100)(20)(20));


// /*
//  2. Write a curried function that can be called like foo(x,y,z)
//  or foo(x)(y)(z)
//  */
//
// function fx(x){return x;}
// function fy(y){return y;}
// function fz(z){return z;}
//
// function xyz(x,y,z)
// {
//   // arguments
//   // call & apply
//   if(y == undefined && z == undefined)
//   {
//     return fx(x);
//   }
//   else if(z == undefined)
//   {
//     return fx(x) + fy(y);
//   }
//   else if(y == undefined)
//   {
//     return fx(x);
//   }
//   else {
//     return fx(x) + fy(y) + fz(z);
//   }
// }
//
// console.log("xyz(1,2,3) = ", xyz(1,2,3));
// console.log("xyz(1,3) = ", xyz(1,3));
// console.log("xyz(1) = ", xyz(1));
// console.log("xyz(100)(20)(20) = ", xyz(100)(20)(20));
