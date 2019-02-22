var response, returnByFunction;
var responseString ='';

function askQuestions(){
  try {
    alert('Hi there. You will get multiple questions to guess things about me. Enter 0, if you want to close this anytime');
    response = parseInt(prompt('What is my age?'));
    returnByFunction = findMy('Age',16,response);
    alert(returnByFunction);

    response = parseFloat(prompt('What is my Height (in feets)?'));
    returnByFunction = findMy('Height',5.4,response);
    alert(returnByFunction);

    response = parseFloat(prompt('What is my Weight (in lbs)?'));
    returnByFunction = findMy('Weight',180,response);
    alert(returnByFunction);

    response = prompt('Do you want to know more about me? Answer Y or N');
    if (response.toUpperCase() === 'Y') {
      alert('Okay great. This is our national animal. Guess my country based on the sound');
      var audio = new Audio('https://www.freesoundeffects.com/mp3_466248.mp3');
      audio.play();
      responseString= prompt('What\'s my country?');
      returnByFunction = findMyDetails('Country','INDIA',responseString);
      alert(returnByFunction);
      response= prompt('Do you want to know more about me? Answer Y or N');
    }

    if (response.toUpperCase() === 'Y') {
      alert('visit www.myinfo.com');
    }
  }catch(err) {
    throw new Error('End - Guessing Game. Bye!!!' + err);
  }
  alert('Have a wonderful day. Visit again');
}

function findMy(attribute,expected,actual ){
  var i = 0;
  var deviation = 0;
  var allow = 'Y';

  if(actual === 0) {throw new Error('End - Guessing Game. Bye!!!');}

  //Allow to guess upto 3 times
  while(i <= 3){

    //Exit from loop if user takes more than 3 chances
    if (i === 3) {
      return 'You have taken more than 3 chances. Good try though. My ' + attribute + ' is ' + expected;
    }

    allow = checkForInvalidValue(actual);
    if(allow === 'N') {
      actual = prompt('What? a ' + actual + '?.You can guess better than that. Give a try again');
    } else {
      deviation = actual/expected;
      if (deviation > 1) {
        actual = prompt('Your answer is '+ deviation + ' folds larger. Guess my ' + attribute + ' again');
      } else if ((deviation === 1) && i === 0) {
        return 'Lucky guess or what? You are correct on first attempt';
      } else if (deviation === 1) {
        return 'Your answer is correct. My '+ attribute + ' is ' + actual;
      } else if (deviation < 1) {
        actual = prompt('Your answer is '+ deviation + ' folds smaller. Guess my ' + attribute + ' again');
      }
    }
    i = i + 1;
  }
}

function findMyDetails(attribute,expected,actual ){
  var i = 0;
  var allow = 'Y';

  if(actual === 0) {throw new Error('End - Guessing Game. Bye!!!');}
  //Allow to guess upto 3 times
  while(i <= 3){

    //Exit from loop if user takes more than 3 chances
    if (i === 3) {
      return 'You have taken more than 3 chances. Good try though. My ' + attribute + ' is ' + expected;
    }

    allow = checkForInvalidString(actual);
    alert (allow);
    if(allow === 'break') {return null;}
    else if(allow === 'N') {
      actual = prompt('What? a ' + actual + '?.You can guess better than that. Give a try again');
    } else if (actual.toUpperCase() === expected) {
      return 'Lucky guess or what? You are correct on first attempt';
    } else if(i=== 1){
      actual = prompt('Give it another try. It\'s an Asian country and fondly called as sub-continent for a reason');
    } else if(i=== 2){
      actual = prompt('Give it another try. People Speak 158 languages and our cousine is famous for spices');
    }
    i = i + 1;
  }
}

function checkForInvalidValue (actual) {
  if(actual === 0 || isNaN(actual) ) {
    return 'N';
  } else { return 'Y';}
}

function checkForInvalidString (actual) {
  if(actual.trim() ==='' ) {
    return 'N';
  } else { return 'Y';}
}
