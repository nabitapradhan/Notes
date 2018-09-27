"use strict";
console.log("Hello");

//Word jumble

String.prototype.Scramble =function(){
	var str=this;
	var arr= str.split("");
	var jumbled="";
	while(arr.length>0){
		var random=Math.floor(Math.random()*arr.length)
		jumbled += arr[random];
		arr.splice(random,1);

	}
	console.log(jumbled);
}
var ourString="fish";
ourString.Scramble();
var newArray=[];

