//fizzBuzz algorithm

function fizzBuzz(number) { 
  
   for(var i = 1; i <= number; i++) {
			if (i % 15 === 0) console.log( i + ' fizz buzz');
      else if (i % 3 === 0) console.log( i + ' fizz');
      else if (i % 5 === 0) console.log( i + ' buzz');
      else console.log(i);
     
   }
  
}

fizzBuzz(20);