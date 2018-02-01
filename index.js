function shout(string) {
return string.toUpperCase();  
}

function whisper(string) {
return string.toLowerCase();
}

function logShout(string) {
  console.log('HELLO');
}

function logWhisper(string) {
  console.log('hello');
}

function sayHiToGrandma(string) {
  if(string === string.toLowerCase()){
    return "I can't hear you!";
  }

  if(string === string.toUpperCase()){
<<<<<<< HEAD
    return "YES INDEED!";
  }
  
  if(string === 'I love you, Grandma.') {
    return 'I love you, too.';
  }
  
  return "Are you eating enough?";
}
=======
    return "YES INDEED!"
  }
  
  if(string ===  'I love you, Grandma.') {
    return 'I love you, too.'
  }
>>>>>>> 9c488b808dd6100b9c205a451bf1f17af52b65dd

  

