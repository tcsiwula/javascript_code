/*
https://www.youtube.com/watch?v=ImwrezYhw4w


req: closures



factory functions:
replace classes
more clear code
functions that create objects and return them
dont have to use 'this' keyword or 'bind'
more memory compared to classes,
unless LOTS (>10k per/frame) of objects, use ff not classes
class is twice as fast to create

(10,000 objs of ff to classes only saves 2 milliseconds)





*/



/*
// ---------------------------------------
//    example1 run: node es6_closures.js
// ---------------------------------------


// BAD example that breaks
// because this refrences something elsewhere

const classInstance = new myClass()
classInstance.talk()

// a click handler that IS BROKEN USING CLASSES
$('button.myButton')
  .click(classInstance.talk)  // references dom element not sniffles, not this, breaks
  .click(classInstance.talk.bind(classInstance))  // use .bind to fix that
  .click( _ => classInstance.talk() )  // or wrap in function


  // GOOD example -- factory function

  // dog function (factory)
  const dog = () => {

    // private to the dog only
    const sound = 'woof'

    return {
      // function talk, has access to the private sound
      talk: () => console.log(sound)
  }
}
const sniffles = dog()
sniffles.talk()







// ---------------------------------------
*/
