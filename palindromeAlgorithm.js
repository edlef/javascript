//Is Palindrome algorithm


//a word or expression that spells the same backwards and forwards
//return true or false if given string is a Palindrome or encodeURIComponent

//Is Palindrome algorithm

//a word or expression that spells the same backwards and forwards
//return true or false if given string is a Palindrome or encodeURIComponent

const string = "Madam I'm Adam";

function isPalindrome(string) { 
  
  string = string.toLowerCase();
  var characterArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstwxyz'.split('');
  
  var lettersArray = [];
  characterArr.forEach(char => {
    if(validCharacters.indexOf(char) > -1)
    lettersArray.push(char);
  });
  
  if(lettersArray.join('') === lettersArray.reverse().join(''))
  return true;
  else
  return false;
  
}

isPalindrome(string);
