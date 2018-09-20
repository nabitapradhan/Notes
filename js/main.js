"use strict";


/*var randArr=[];
for(var i=0;i<10;i++)
{
	
	randArr.push(Math.ceil(Math.random()*101));
}
console.log(randArr);*/

var chars=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","@","{","[","|",".","?","#","$","%","^","&","*"];
var pass=" ";
var a=Math.floor(Math.random()*5);
a +=12;
for(var j=0; j<a ;j++)
{
	var index=Math.floor(Math.random()*chars.length);
	if(Math.random()>0.5 && index<26)
	{
			pass += chars[index].toUpperCase();
	}
	else
	{
		pass +=chars[index];
	}
}
console.log(pass);

/*for(var i=0;i<5;i++)
{
	console.log("Nabita");

	for(var j=0;j<5;j++)
	{
	console.log("Pradhan");
	}
}

*/
var myTable= document.getElementById("nestedTable");
for(var i=0;i<10;i++)
{
	var row=document.createElement("tr");
	myTable.append(row);
	
for(var j=0;j<10;j++)
{
	var col=document.createElement("td");
	col.setAttribute("class","Tabledata");
	row.append(col);


}
}




