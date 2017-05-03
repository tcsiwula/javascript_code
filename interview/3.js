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