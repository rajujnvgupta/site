
var i = 0;
var nameOfUser = "john";

//  var txt = "Happy Birthday " + nameOfUser  + " you are " + age  + ", years old! You were born on this day, in the year " + dateOfBirth + ".";
var txt = "Happy Birthday" + " Happy";
var s = 100;

function myFunction() {
  var x, text;
  // Get the value of the input field with id="numb"
  x = document.getElementById("numb").value;
  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 1 || x > 10){
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  i = 0;
  if(i < txt.length()){
		document.getElementById("demo").innerHTML += txt.charAt(i);
		i++;
		// setTimeout(typerwriter, s);
	}
}

function typerwriter(){
	if(i < txt.length){
		document.getElementById("demo").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typerwriter, s);
	}	
}
