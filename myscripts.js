
var i = 0;
var options = ["I hope you have a wonderfull day, Shreya:). and you dreams comes true this years", "Age is just a number representing how long the world has been enjoying you.", "Now you are 32 years old! Sorry 22 year :). You were born on this day, in 1998", "Tell me Exact number, How old You are :), I know 7 may 1998 is just for Educational Purpose :). Any way number doesn't matter here :) .", "You think you’re something special because it’s your birthday today? You’re something special every day! :)", "I figured out, what’s the most challenging thing to do. I think it’s the counting of your wrinkles. Finding one is impossible. It is my bad, i don't even have your PHOTOS"];
var len = options.length;
var idx = Math.floor(Math.random() * len);
var txt1 = options[idx];
var txt = txt1.toUpperCase();
var s = 100; //timer delay

function typerwriter(){
	if(i < txt.length){
		document.getElementById("demo").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typerwriter, s);
	}	
}
