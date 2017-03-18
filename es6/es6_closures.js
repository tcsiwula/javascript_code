/*
https://www.youtube.com/watch?v=CQqwU2Ixu-U&feature=iv&src_vid=ImwrezYhw4w&annotation_id=video%3Abadde613-c788-4917-b36d-4673386838f5

docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

closures:
functions are functions and closures
the function body has access to global variables defined outside of current function

*/







/*
// ---------------------------------------
//    example1 run: node es6_closures.js
// ---------------------------------------

// global variable
var name = 'tim siwula'

// declare function
function sayHello(){
  console.log('Hello '+ name + '!')
}


// if you were to reassign name here
// this value would be used
// it reads the name at runtime, not copied
name = 'Batman'

sayHello() // call sayHello
// no args, directly references tim,
//because functions are closures
// ---------------------------------------
*/


/*
    // ---------------------------------------
    //    example2 run: node es6_closures.js
    // ---------------------------------------


    function sendRequest(){
      var requestID = '123'

      // jquery ajax function
      $.ajax({
        url:  '/myUrl',
        success: function(response) {
          alert('Request ' + requestID + ' returned')
      }
    })
    }





*/
