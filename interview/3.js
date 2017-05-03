/*
 3.  Implement a promise library so that I could say
 var p = new SiwulaPromise(foo).then(bar).then(baz).catch(err)
 where foo, bar, baz, and err are all functions
 */

function SiwulaPromise(foo){
  return new Promise((resolve, reject) => {
    resolve(foo());
  })
};


let foo = function(bar){
  return new Promise((resolve, reject) => {
    resolve(bar());
  });
};

let bar = function(baz){
  return new Promise((resolve, reject) => {
    resolve(baz());
  });
};


let baz = function(err){
  return new Promise((resolve, reject) => {
    resolve(err());
  })
};

let err = function(err){
  return new Promise((resolve, reject) => {
    resolve('all done');
  }).catch(function (err) {
    console.log("err = ", err);
  })};


let example = new SiwulaPromise(foo).then(bar).then(baz).catch(err);
console.log('example = ', example);




// add(100)(20)(20)
//
//
// function add (){
//   // if I have 3 args, return sum
//   let args = [...arguments]
//
//   if (args.length === 3){
//     return args.reduce((a, b)=>{return a + b})
//   }
//   // else return a function that has some args bound
//   return add.bind(null, ...args)
// }
//
// console.log(add(10, 2, 3))
// console.log(add(1)(20)(3))

// /*
//       2. Write a curried function that can be called like foo(x,y,z)
//          or foo(x)(y)(z)
//  */

// function fx(x){return x;}
// function fy(y){return y;}
// function fz(z){return z;}

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

// console.log("xyz(1,2,3) = ", xyz(1,2,3));
// console.log("xyz(1,3) = ", xyz(1,3));
// console.log("xyz(1) = ", xyz(1));
// console.log("xyz(100)(20)(20) = ", xyz(100)(20)(20));
