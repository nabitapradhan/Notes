"use strict";
console.log("Hello");


$(document).ready(function(){

//Toggle
$("#b1").click(function(){
    $("#back").toggle(1000);
});

//alert
$("p").on("click", function(){
   alert("You clicked me");
});

//Button

$(".bg-color").click(function(){
   $(".color").css("background-color","purple");
});

//Date

var count=0;
$("#date").click(function(){
	addDate();
    });


//Recursive
function addDate(){
	if(count%10==0)
	{
		$("#currentdate").empty();
	}
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
    	if(count%2==0){
    		$("#currentdate").append("<p class='evenDate' style= 'background-color:rgb(" +r+","+g+","+b+")'>"+new Date() +"</p>");
    	}
    	else 
    	{
    		$("#currentdate").append("<p class='oddDate' style= 'background-color:rgb(" +r+","+g+","+b+")'>"+new Date() +"</p>");
    	}
    	count++;
    	console.log("Hello");
    	setTimeout(addDate,1000);
    }

});
