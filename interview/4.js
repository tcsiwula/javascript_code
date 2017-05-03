/*
    4. Implement fizzbuzz (draw a list of integers 1-100 and
      colorize the elements by whether they're divisible by 3, 5, 3 &5,
      or none of the above)
 */

function fizzBuzz()
{
  var i;
  for(i = 0; i<100; i++)
  {
    if(i %3 == 0 && i % 5 == 0)
    {
      console.log('\x1b[30m',i)
    }
    else if(i %3 == 0){
      console.log('\x1b[31m',i)
    }
    else if(i %5 == 0){
      console.log('\x1b[32m',i)
    }
    else
    {
      console.log('\x1b[33m',i)
    }
  }
}

fizzBuzz();


/*
 3.  Implement a promise library so that I could say
 var p = new SiwulaPromise(foo).then(bar).then(baz).catch(err)
 where foo, bar, baz, and err are all functions
 */

class SiwulaPromise{
  constructor (){

  }
  then (){

  }

  catch(){

  }
}

let p = new SiwulaPromise(() => {})

// function SiwulaPromise(foo){
//   return new Promise((resolve, reject) => {
//     resolve(foo());
//   })
// };


// let foo = function(bar){
//   return new Promise((resolve, reject) => {
//     resolve(bar());
//   });
// };

// let bar = function(baz){
//   return new Promise((resolve, reject) => {
//     resolve(baz());
//   });
// };


// let baz = function(err){
//   return new Promise((resolve, reject) => {
//     resolve(err());
//   })
// };

// let err = function(err){
//   return new Promise((resolve, reject) => {
//     resolve('all done');
//   }).catch(function (err) {
//     console.log("err = ", err);
//   })};


let example = new SiwulaPromise(foo).then(bar).then(baz).catch(err);
console.log('example = ', example);
