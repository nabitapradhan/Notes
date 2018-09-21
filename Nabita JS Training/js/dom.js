// DOM ----- Document Object Model
"use script";

var header = document.getElementById("header");
console.log(header);

header.innerHTML ="Changed from JavaScript";

var h2s=document.getElementsByTagName("h2");
console.log(h2s); 

var subHeaders = document.getElementsByClassName("subHeader");
console.log(subHeaders);
for(var i=0;i<h2s.length;i++)
{
	h2s[i].innerHTML="H2 number:"+ (i+1);
}


function AddStuff()
{
	var textNode=document.createTextNode("Some text for our function");
	var h3=document.createElement("h3");
	h3.append(textNode);
	document.body.append(h3);
}

var dateContainer=document.getElementById("dateContainer");


function DisplayDate(num)
{
	for(var i=0;i<num;i++){
		var currentDate=new Date();
		var dateP=document.createElement("p");
		dateP.append(currentDate);				
		dateContainer.append(dateP);
		if(i%2==0)
		{
			
		dateP.setAttribute("class","DatePEven");
		}
		else
		{
			dateP.setAttribute("class","DatePOdd");

		}
	}
}

DisplayDate(10);

var animals= ["Horse","Bear","Monkey","Deer","hyena","Hippo","Cat","Lion"];

function FindTheH(arr)
{
	for(var i=0;i<arr.length;i++)
	{
		if(animals[i].charAt(0)==="H" || animals[i].charAt(0) ==="h")
		{
			console.log(animals[i]);
		}


	}
}

FindTheH(animals);

var message=document.getElementById("message");

/*setTimeout (function(){
	message.style.display="block";
},5000)
*/

function CloseMessage()
{
		message.style.display="none";

}

function BiggerNumber()
{
	var a=window.prompt("Give me a number");
	if(a==null)
	{
		return;
	}
	while(isNaN(a) || a.length==0)
	{
		a=window.prompt("That's not a number. Please try again");
	}
	a=parseInt(a);
	var b=window.prompt("Give me another number");
	if(b==null)
	{
		return;
	}
	while(isNaN(b) || b.length==0)
	{
		b=window.prompt("Not a number. Try again");
	}
	b=parseInt(b);

	if(a>b)
	{
		console.log(a + "" + "is greater");
	}
	else if(b>a)
	{
		console.log(b + " "+" is greater");
	}
	else
	{
		console.log("They are equal");
	}

}

var clock=document.getElementById("clock");

function KeepTime()
{
	var timeOfDay =" am";
	var upDate=new Date();
	upDate=upDate.toString();
	upDate=upDate.slice(16,24);
	var hour= upDate.slice(0,2);
	if(hour>12){
		timeOfDay= " pm";
		hour -= 12;
	}
	var updatedTime=hour+upDate.slice(2,9);

	clock.innerHTML="Current Time"+ updatedTime+timeOfDay;
	setTimeout(KeepTime,1000);

}
KeepTime();


