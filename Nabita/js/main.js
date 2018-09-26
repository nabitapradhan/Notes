"use strict";
console.log("Hello World");


//nested table

var chars=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"];
var myTable= document.getElementById("nestedTable");
var data = [];
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
	data.push(col);
	row.append(col);
}
}
var dataInd = 0;
var randInd;
while(chars.length > 0){
	var randInd = Math.floor(Math.random() * chars.length);
	data[dataInd].innerHTML = chars[randInd];
	chars.splice(randInd, 1);	
	dataInd++;
}


//Jumbler function



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
//Background color
$("#change").click(function(){
	if($(".para").css("background-color")== "rgba(0, 0, 0, 0)" ){
		$(".para").css("background-color" ,"tomato")
	}
	else{
		$(".para").css("background-color" ,"rgba(0, 0, 0, 0)")
		}
});




}); //Document Ready


