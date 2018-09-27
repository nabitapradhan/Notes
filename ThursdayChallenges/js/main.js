"use strict";
/*console.log("Hello");
*/
//Word jumble

/*String.prototype.Scramble =function(){
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
*/
//Game

/*function HigherOrLower(){
	var num=Math.floor(Math.random()*20)+1;
	console.log(num);
	var count=1;
	var guess=window.prompt("Please enter a number between 1 and 20");
	while(guess!=num){
		if(isNaN(guess))
			guess=window.prompt("Please enter a number");
		if(guess==null){
			return;
		}
	else if(guess<num)
	{
		alert("Too low");
		 guess=window.prompt("Please enter your no again");
		 count++;
	}
	else if(guess>num){
		alert("Too high");
		guess=window.prompt("Please enter your no again");
		count++;
	}
	}
		alert("Congrats " + count+ " attempts");
		if(count>=1 && count<=3){
			alert("Great");
		}	
		else if(count>=4 && count<=6){
			alert("Not bad");
		}
		else if(count>=7 && count <= 9){
			alert("Not good");
		}
		else{
			alert("Bad");
		}
	
}

HigherOrLower();*/
/*
var color=window.prompt("Please enter a color:");
$("#change").click(function(){
	($("#change").css("background-color")== "tomato" ){
	}
});*/

//Palindrome checker

/*function Palindrome(str){
 	var arr=[];
    var revarr =[];
    str = str.toLowerCase();
    for(var i=0;i<str.length;i++){
    	arr.push(str.charAt(i));
    }
    	revarr=arr.reverse();
    	var str1= revarr.join("");
    
    if(str1==str){
    	return true;
    }else{
    	return false;
    }

 }
console.log(Palindrome("racecar")); 

*/
var chars=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	function ValidateEmail(str){
		str=str.toLowerCase();
		if(str.charAt(0)=="@" )
		{
			return false;	
		}
		var arr1=str.split("@");
		if(arr1.length!=2)
		{
			return false;
		}
		if(arr1[0].includes("."))
		{
			return false;
		}
		if(!arr1[1].includes("."))
		{
			return false; 
		}
		for(var i=0;i<26;i++){
			if(str.endsWith(chars[i]))
			
				return true;
			}
			return false;
		

	}
function EmailAlert()
{
	if(ValidateEmail(document.getElementById("emailId").value))
	{
		alert("Good");
	}
	else
	{
		alert("Please enter a valid email address");
	}
}

var arr=["@","{","#","$","%"];
var num=["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
function CheckPass()
{
	var check=document.getElementById("passId").value;
	var condMet=0;
 	 if(check.length >=8)
 	 {
 	 	condMet += 1;
 	 }
 	 for(var i=0; i<num.length;i++){
 	 	if(check.includes(num[i])){
 	 		condMet += 1;
 	 		break;
 	 	}
 	 }
 	  for(var i=0; i<arr.length;i++){
 	 	if(check.includes(arr[i])){
 	 		condMet += 1;
 	 		break;
 	 	}
 	 }
 	 
 	 if(condMet==3)
 	 {
 	 	return true;
 	 }
 	 else
 	 {
 	 	return false;
 	 }

}

function PhoneNo(str){
 		for(var i=0;i<str.length;i++){
 			if(str.length>=10){
 				return true;
 			}else{
 				return false;
 			}
 		}
 	}

 
 function FirstName(str){
     	for(var i=0;i<str.length;i++){
         if(str.length>0){
         	return true;
         }else{
         	return false;
         }
     }
 }console.log(FirstName("csadg"));
 //LastName
  function LastName(str){
    if(str.length>0){
       return true;
     }else{
         return false;
     }
console.log(LastName("csadg"));
}
$(document).keydown(function(){
	var fName=false;
	var lName=false;
	var phoneNum=false;
	var email=false;
	var password=false;
	console.log("Button Pressed!");
	email=ValidateEmail($("#emailId").val());
	fName=FirstName($("#firstName").val());
	lName=LastName($("#lastName").val());
	phoneNum=PhoneNo($("#phone").val());
	password=CheckPass($("#passId").val());

	if(fName && lName && password && email && phoneNum){
		$("#bb1").removeAttr("disabled");
	}
	else{
 	$("#bb1").attr("disabled","disabled")
 }
})






//Email
	
	

//PasswordValidate



//PhoneNo



//FirstName
 


