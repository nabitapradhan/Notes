"use strict";
console.log("Hello World");


//nested table

var chars=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"];
var myTable= document.getElementById("nestedTable");
for(var i=0;i<4;i++)
{
	var row=document.createElement("tr");
	myTable.append(row);
	
	for(var ii=0;ii<4;ii++)
	{
		var col=document.createElement("td");
		if(i%2==0){
			if(ii%2==0)

			col.setAttribute("class","class1");
		else if(ii%2!=0)
			col.setAttribute("class","class2");
	} else if(i % 2 != 0){
		if(ii%2==0)
			col.setAttribute("class","class2");
		else if(ii%2!=0)
			col.setAttribute("class","class1");
	}
	row.append(col);
}
}
$('td').text(function(){
	return Math.floor(Math.random()*chars.length);
});
//Jumbler function

/*function findWord(word, jumbledLetters, isSameLength) {
if(isSameLength && word.length !== jumbledLetters.length)
return false;

var uniquePosition = {};
for(var i = 0; i< word.length; i++)
for(var j=0; j< jumbledLetters.length; j++){
  if(word[i] === jumbledLetters[j] && j !== uniquePosition[j]) {
    uniquePosition[j] = j;
    break;
  }
}
return Object.keys(uniquePosition).length === (word.length);
}
findWord("fish"); */

//Alert
$(document).ready(function(){

$("input").dblclick(function(){
	alert("Your first name is:"+ $("#t1").val() + "\n" +"Your last name is:"+$("#t2").val());
});

//Stop button

    $("#flip").click(function(){
        $("#panel").slideDown(5000);
    });
    $("#stop").click(function(){
        $("#panel").stop();
    });

//Square

$("#b2").click(function(){
        $("div").animate({
            left: '750px',
        });
    });



});
