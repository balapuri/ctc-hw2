$(document).ready(function(){ 
	
 //INSERT CODE HERE

 //QUESTION 1
 
	function Dog () {
	}
	Dog.prototype.bark = function(){
            return "woof";
    };
	function ShibaInu (){
		Dog.call(this);
	}
	ShibaInu.prototype = new Dog();
	ShibaInu.prototype.constructor = ShibaInu;
	ShibaInu.prototype.bark = function(){
		return "much wow very javascript";};
		
	var dog = new Dog();
	dog.bark();
	var s = new ShibaInu();
	s.bark();
	console.log(s instanceof ShibaInu);
	console.log(s instanceof Dog);

 //QUESTION 3
 
 $(".secondbutton").click(function(){
	$(".secondheading").html("Tigers are the best!!!");
	$(".secondbutton").css("background-color", "turquoise");
 });

 //QUESTION 4
 $("#task4 .button").click(function(){
	$("#hipcat").css("-webkit-filter", "blur(3px) hue-rotate(60deg)");
 });

 //QUESTION 5
 $(".car .button").click(function(){
	$(".wheel").css("-webkit-animation-name", "spin");
	$(".spincar").css("-webkit-animation-play-state", "running");
	$(".wheel").css("-webkit-animation-play-state", "running");
});

 //QUESTION 6
 $(".nyancat").css("left", "100px");
 $(".nyancat").animate({"left": "100%"}, 3000);
 $(".rainbows").animate({"width": "90%"}, 3000);
 
});