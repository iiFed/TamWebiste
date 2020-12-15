window.onload = init;
function init(){
   var ol = document.getElementById('Online')
   var FTF = document.getElementById('Face')
   var pay = document.getElementById('Payment')
   ol.style.opacity= 0;
  FTF.style.opacity= 0;
   pay.style.opacity= 0;
   	var Mcard = document.getElementById('MasterCard')
var Diner = document.getElementById('Diners')
var Visa = document.getElementById('Visa')
var Dis = document.getElementById('Discover')
var AmEx = document.getElementById('AmEx')

Mcard.style.opacity= 0;
Diner.style.opacity= 0;
Visa.style.opacity= 0;
Dis.style.opacity= 0;
AmEx.style.opacity= 0;

}

var submitAnswer = function() {

  var radios = document.getElementsByName('choice');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
  }
  
  if (val == "" ) {
    alert('please select choice answer');
  } else if (val == "Online" ) {
    online()
  } else if (val == "Face To Face" ) {
    ftf()
  }
};
var online = function() {
  var ol = document.getElementById('Online')
   var FTF = document.getElementById('Face')
   ol.style.opacity= 1;
  FTF.style.opacity= 0;
}
var ftf = function() {
 var ol = document.getElementById('Online')
   var FTF = document.getElementById('Face')
   ol.style.opacity= 0;
  FTF.style.opacity= 1;
}


var submitAnswer = function() {

  var radios = document.getElementsByName('choice');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
  }
  
  if (val == "" ) {
    alert('please select choice answer');
  } else if (val == "Online" ) {
    online()
  } else if (val == "Face To Face" ) {
    ftf()
  }
};
var online = function() {
  var ol = document.getElementById('Online')
   var FTF = document.getElementById('Face')
   ol.style.opacity= 1;
  FTF.style.opacity= 0;
}
var ftf = function() {
 var ol = document.getElementById('Online')
   var FTF = document.getElementById('Face')
   ol.style.opacity= 0;
  FTF.style.opacity= 1;
}


// Online stuff

var submitOnlineAnswer = function() {

  var radios = document.getElementsByName('choice2');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
  }
  
  if (val == "" ) {
    alert('please select choice answer');
  } else if (val == "Zoom" ) {
    Zoom()
  } else if (val == "Meet" ) {
    Meet()
  }
};


var Zoom = function() {
 var notes = document.getElementById('notes').innerHTML = 'COST: $300 \nMETHOD: ONLINE \nSERVICE: ZOOM MEETING';
   var pay = document.getElementById('Payment')
   pay.style.opacity= 1;
}
var Meet = function() {
var notes = document.getElementById('notes').innerHTML = 'COST: $250 \nMETHOD: ONLINE \nSERVICE: GOOGLE MEET';
   var pay = document.getElementById('Payment')
   pay.style.opacity= 1;
}



// Face to Face stuff

var submitFTFAnswer = function() {

  var radios = document.getElementsByName('choice3');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
  }
  
  if (val == "" ) {
    alert('please select choice answer');
  } else if (val == "Ama" ) {
    Ama()
  } else if (val == "China" ) {
    China()
  }
};


var Ama = function() {
 var notes = document.getElementById('notes').innerHTML = 'COST: $450 \nMETHOD: FACE TO FACE \nLOCATION: AMAZON RAIN FOREST';
   var pay = document.getElementById('Payment')
   pay.style.opacity= 1;
}
var China = function() {
var notes = document.getElementById('notes').innerHTML = 'COST: $450 \nMETHOD: FACE TO FACE \nLOCATION: CHINA';
   var pay = document.getElementById('Payment')
   pay.style.opacity= 1;
}




var submitOrder = function() {
window.location.replace("https://blue-typhoon-forgery.glitch.me/submitted.html");

};