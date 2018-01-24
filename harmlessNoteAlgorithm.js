
//Harmless Ransom Note algorithm

//check if there are enought words in magazine to create note

//es6 version

const notes = 'this is a note for you from a secret admirer';

const magazine = 'puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice for you';

function harmlessRansomNote(notes, magazine) { 
  
  return notes.split(" ").every(function(note) {
  		return magazine.split(" ").find(function(mag) {
      			return note === mag;
      });
  });
  
}

harmlessRansomNote(notes, magazine);

//old version

//O(n) + O(m) time complexity or O(n+m)
function harmlessRansomNote(noteText, magazineText) { 
  
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');
  var magazineObj = {};
  
  magazineArr.forEach( word => {
    if(!magazineObj[word]) 
    magazineObj[word] = 0;
    magazineObj[word]++;
    
  });
  
  var noteIsPossible = true;
  noteArr.forEach(word => {
    if(magazineObj[word]) {
       magazineObj[word]--;
      if(magazineObj[word] < 0) noteIsPossible = false;
    }
    else noteIsPossible = false;
  });
  
  console.log(magazineObj);
  console.log(noteIsPossible);
}


harmlessRansomNote(noteText, magazineText);

