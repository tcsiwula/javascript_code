/*
variable hoisting:
var
let
const
block functions
summary: define all variables at the top of the function.
 */

/*      example 1
 compiler automatically hoists your variables to global
 compiler interpretted code as this.
 var a = undefined;
 var b = undefined;
*/

function hoistingOneOuter()
{
  a = 0;
  hoistingOneInner();

  function hoistingOneInner()
  {
    b = 2;
  }
}
hoistingOneOuter();


/*      example 2
 throws error, 2, 3 or undefined?
 compiler interpretted code as this.
 var bar = undefined;
*/

var foo = 2;
if(true){
  var bar = 1;
}
console.log(foo + bar); // 3


/*      example 3
 what happens here?
 compiler interpretted code as this.
 var name = undefined;
 */
console.log(name); //undefined
var name = "tim";


/*      example 4
 trap variables inside functions only
 es5 variables are function scoped
 */
var a = 1;
function run(){
  var a = 2;
  console.log(a); // 2
}
run();
console.log(a); // 1



/*      example 5
 function hoisting
 compiler interpretted code as this.
 var funcExp = undefined;
 */

// function declaration hoisted here
function funcDecl(){
  // ...
}

// function expression - name hoisted, var assignment not until here
var funcExp = function(){
  // ...
};








