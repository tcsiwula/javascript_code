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
