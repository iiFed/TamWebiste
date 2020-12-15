
window.onload = init;
function init(){
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



function keypress() {
 var searchTimeout;
const ccardnumber = document.getElementById('ccardnumber2')
const field = ccardnumber.innerText;
 if (field.value == "" || field.value === null) {
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
 else { 
 document.getElementById('ccardnumber2').onkeypress = function () {
    if (searchTimeout != undefined) clearTimeout(searchTimeout);
    searchTimeout = setTimeout(callServerScript, 250,ccardnumber.value);
};
 
 }
}


function clearned(field){
 if (field.value === "" || field.value === null) {
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
}



function callServerScript(number) {
	console.log("typed")
    var cc = getCreditCardType(number)
	console.log(cc);
	if (cc === "mastercard"){
					var Mcard = document.getElementById('MasterCard')
var Diner = document.getElementById('Diners')
var Visa = document.getElementById('Visa')
var Dis = document.getElementById('Discover')
var AmEx = document.getElementById('AmEx')

		Mcard.style.opacity= 1;
Diner.style.opacity= 0;
Visa.style.opacity= 0;
Dis.style.opacity= 0;
AmEx.style.opacity= 0;
	}
	if (cc === "visa"){
					var Mcard = document.getElementById('MasterCard')
var Diner = document.getElementById('Diners')
var Visa = document.getElementById('Visa')
var Dis = document.getElementById('Discover')
var AmEx = document.getElementById('AmEx')
		Mcard.style.opacity= 0;
Diner.style.opacity= 0;
Visa.style.opacity= 1;
Dis.style.opacity= 0;
AmEx.style.opacity= 0;
	}
	if (cc === "discover"){
					var Mcard = document.getElementById('MasterCard')
var Diner = document.getElementById('Diners')
var Visa = document.getElementById('Visa')
var Dis = document.getElementById('Discover')
var AmEx = document.getElementById('AmEx')
		Mcard.style.opacity= 0;
Diner.style.opacity= 0;
Visa.style.opacity= 0;
Dis.style.opacity= 1;
AmEx.style.opacity= 0;
	}
	if (cc === "diners"){
					var Mcard = document.getElementById('MasterCard')
var Diner = document.getElementById('Diners')
var Visa = document.getElementById('Visa')
var Dis = document.getElementById('Discover')
var AmEx = document.getElementById('AmEx')

		Mcard.style.opacity= 0;
Diner.style.opacity= 1;
Visa.style.opacity= 0;
Dis.style.opacity= 0;
AmEx.style.opacity= 0;
	}
	if (cc === "amex"){
					var Mcard = document.getElementById('MasterCard')
var Diner = document.getElementById('Diners')
var Visa = document.getElementById('Visa')
var Dis = document.getElementById('Discover')
var AmEx = document.getElementById('AmEx')
		Mcard.style.opacity= 0;
Diner.style.opacity= 0;
Visa.style.opacity= 0;
Dis.style.opacity= 0;
AmEx.style.opacity= 1;
	}
	if (cc === "unknown"){
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
	
}

function getCreditCardType(accountNumber)
{

  //start without knowing the credit card type
  var result = "unknown";

  //first check for MasterCard
  if (/^5[1-5][0-9]{14}/.test(accountNumber))
  {
    result = "mastercard";
  }
 else if (/^36/.test(accountNumber))
  {
    result = "diners";
  }
  else if (/^38/.test(accountNumber))
  {
    result = "diners";
  }
  //then check for Visa
  else if (/^4[0-9]{12}(?:[0-9]{3})?/.test(accountNumber))
  {
    result = "visa";
  }
 else if (/^6(?:011|5[0-9][0-9])[0-9]{12}/.test(accountNumber))
  {
    result = "discover";
  }
  //then check for AmEx
  else if (/^3/.test(accountNumber))
  {
    result = "amex";
  }

  return result;
}