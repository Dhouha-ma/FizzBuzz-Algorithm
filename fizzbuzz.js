/* 
  
FizzBuzz Algorithm 
  
A function that takes 1 parameter (num) and log out to the console all the numbers from 1 to num 
For each number, if the number is divisible by 3 => log Fizz 
if the number is divisible by 5 => log Buzz 
if the number is divisible by 3 and 5  => log FizzBuzz 
  
*/ 
  
function fizzbuzz (num){ 
  for (var i=1; i<= num; i++) { 
    if ((i % 3 === 0 ) && (i % 5 === 0 )) { 
      console.log ('FizzBuzz'); 
    } 
    else if (i % 3 === 0 ) { 
      console.log ('Fizz'); 
    } 
    else if (i % 5 === 0 ) { 
      console.log ('Buzz'); 
    } 
    else 
      console.log (i); 
    } 
} 
  
fizzbuzz(20); 