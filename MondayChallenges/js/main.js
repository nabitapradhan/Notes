"use strict";

//console.log("Hello");


function AreaOfCube()
{
	var a=window.prompt("Enter a length");
	var b=window.prompt("Enter a breadth");
	var c=window.prompt("Enter a height");
	console.log(a*b*c);
}

function PosOrNeg()
{
	var num=window.prompt("Enter a number:");
	
	if(num >0)
	{
		console.log(num+" is positive");
	}
	else if(num<0)
	{
		console.log(num+" is negative");

	}
	else
	{
		console.log(num +" is zero");
	}

}

function FindAvg(arr)
{
	var sum=0;
	var avg;
	for(var i=0;i<arr.length;i++)
	{
		sum +=arr[i];
		
	}
	
	avg=sum/i;
	console.log("The average is "+ avg);
}

//FindAvg([10,5,3]);

function ScoreCalculator(quesCorr,quesTotal)
{
	return (quesCorr/quesTotal*100 + "%");

}
/*var ourScore= ScoreCalculator(6,12);
console.log(ourScore);*/

function GradeCalculator(num){
	if(num>=90 && num<=100)
	{
		console.log("Grade A");
	}
	else if (num>=70 && num<=89) {
		console.log("Grade B");
	}
	else if (num>=50 && num<=69) {
		console.log("Grade C");
	}
	else if (num>=40 && num<=49) {
		console.log("Grade D");
	}
	else{
		console.log("Grade E");
	}
	}
	
GradeCalculator(22);

var animals=["Cat","Dog","Monkey","Hippo","Elephant","Horse"];

function FindLongestWord(arr)
{
	var maxLength= -Infinity;
	var longestString=" ";
	for(var i=0;i<arr.length;i++)
	{
		if(arr[i].length>maxLength)
		{
			maxLength=arr[i].length;
			longestString=arr[i];
		}
	}
	console.log(longestString);
}
FindLongestWord(animals);

function CelciusToF(c)
{
	
	console.log((c*9/5)+32);
}
CelciusToF(25);

function FocusInput(sender)
{
	sender.style.backgroundColor = "lightGray";
}
function BlurInput(sender)
{
	sender.style.backgroundColor = "white";
}

var  wordCount= document.getElementById("wordCount");

function CountLetters(sender)
{
		wordCount.innerHTML="Letter Count: "+ sender.value.length;
}
var mainImg = document.getElementById("mainImg");
function ChangePicture(sender)
{
	mainImg.src= sender.src;
}



 var timer= document.getElementById("timer");
 var minutes=0;
 var seconds=0;
 function KeepTime()
 {
 	if(seconds<10)
 	{
 		var secondString= "0"+ seconds;
 	}
 	else
 	{
 		secondString=seconds;
 	}
 	
 		if(seconds >58)
 	{
 		minutes++;
 		seconds=0;
 	}

 	timer.innerHTML="How long have I been here: "+ minutes +":"+secondString;
 	seconds++;
 	setTimeout(KeepTime,1000);

 }

 KeepTime(); 	
 
var subImgs= document.getElementsByClassName("smallImg");
console.log(subImgs);
var index=0;
function Carousel()
{
	mainImg.src=subImgs[index].src;
	index++;
	if(index>=subImgs.length)
	{
		index=0;
	}
	setTimeout(Carousel,2000);

}
Carousel();