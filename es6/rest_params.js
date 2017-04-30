"use strict";

/* rest parameters example 1
    es6
*/
function restParametersOne(first, last, ...other){
  console.log(other.join(' '));
}
restParametersOne('first', 'last', 'hello', 'my', 'name', 'is kitty!!!');

/* rest parameters example 2
 es5
 */
function restParametersTwo(){
  var output = "";
  for(var i = 0; i < arguments.length; i++){
    output += arguments[i];
  }
  console.log(output);

  // or
  var outputTwo = Array.prototype.join.call(arguments, " ");
  console.log(outputTwo);
}
restParametersTwo('first', 'last', 'hello', 'my', 'name', 'is kitty!!!');

/* rest parameters example 3
 difference between rest and arguments
 rest - only includes non-specified arguments
 arguments - includes all arguments, regardless
 */
function argument(name){
  console.log(name, arguemnts);
}
function rest(name, ...other){
  console.log(name, other);
}
argument('first', 'last', 'hello', 'my', 'name', 'is kitty!!!');
rest('first', 'last', 'hello', 'my', 'name', 'is kitty!!!');


