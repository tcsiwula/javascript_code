/* let example 1
 let definitions
 like var
 not constant
 */
let def = 1;
def = 3;

/* let example 2 -- scope is local not global
 bar is not defined error
 */

let foo = 2;
if(true){
  let bar = 1;
}
console.log(foo + bar); // undefined error

/* let example 3 -- block scoping

 */
let a = 0;
if(true){
  let a = 1;
  console.log("inner a = ", a); // 1
}
console.log("outer a = ", a); // 0

/* let example 4 -- curly braces are new scope

 */
let meow = "meow";
switch(meow){
  case "meow":
    let c = 2;
    break;
}

while(true){
  let d = 0;
}

/* let example 5 -- temporal dead zone

 */
function doSomething(){
  console.log(a);
  let a = 1;
  console.log(a);
}
