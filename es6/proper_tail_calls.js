// proper tail recursion is a property of the asymptotic space complexity of a language's runtime behavior.
// That is in improperly tail recursive languages, control can consume unbounded amounts of space for programs
// that, when run in properly tail recursive languages, only require a constant amount of space.

// run: node proper_tail_calls.js

function foo(num) {
  try{
    return foo( (num ||0) +1);
  }
  catch(e){return num;}
}
console.log("\n Number of calls before crash: " + foo() + " \n");




// PTC Vocab -- string -- tail position:
// - tail: the last instruction to fire before the return statement
// -- instruction "Hi" is in tail position
//
function greet(number)
{
  return "Hi";
}

// PTC Vocab -- method call -- tail position:
// - tail: the last instruction to fire before the return statement
// -- instruction "Hi" is in tail position
//
function greet()
{
  return getGreetingInEnglish(); // tail position and tail call
}

function getGreetingInEnglish(){
  return 'Hi';                // tail position but not tail call
}

// two tail positions, two tail calls
function resultsHandler(err, results, callback)
{
  if(err){
    return callback(true);
  }
  return callback(false, results);
}

// close call, looks like tail call, but is not
// has to return the result of closeCall(), then add 1
// which has to keep a stack
function closeCall()
{
  return 1 + closeCall();
}

// es5 proper tail call
function fibES5(x,y, limit, index) {
  if(arguments.length == 1)
  {
    if(x)
      return fibES5(0,1,x,1);
    return 0;
  }else{
    if(index< limit)
      return fibES5(y,(x+y), limit, ++index);
    return y;
  }
}
console.log("fibES5(3) = " + fibES5(3));
console.log("fibES5(10) = " + fibES5(10));
console.log("fibES5(13000) = " + fibES5(13000));


// es6 proper tail call
// only work in strict mode
// optimize code so that Tail position is a tail call
function fibES6(x, y, limit, index) {
  if(arguments.length == 1)
  {
    if(x)
      return fibES6(0,1,x,1);
    return 0;
  }else{
    if(index< limit)
      return fibES6(y,(x+y), limit, ++index);
    return y;
  }
}
console.log("fibES6(3) = " + fibES6(3));
console.log("fibES6(10) = " + fibES6(10));
console.log("fibES6(13000) = " + fibES6(13000));






























