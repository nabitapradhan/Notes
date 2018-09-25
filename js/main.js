"use strict";


var randArr=[];
for(var i=0;i<10;i++)
{
	
	randArr.push(Math.ceil(Math.random()*101));
}
console.log(randArr);

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

for(var i=0;i<5;i++)
{
	console.log("Nabita");

	for(var j=0;j<5;j++)
	{
	console.log("Pradhan");
	}
}

var data=[];
var myTable= document.getElementById("nestedTable");
for(var i=0;i<40;i++)
{
	var row=document.createElement("tr");
	myTable.append(row);
	
for(var ii=0;ii<50;ii++)
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
var tableindex;
function Random()
{
	tableindex=Math.floor(Math.random()*data.length);
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	data[tableindex].style.backgroundColor="rgb("+r+","+g+","+b+")";
	setTimeout(Random,0);
}
Random();
var num=["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
var arr=["@","{","#","$","%"];
 function Check(str)
 {
 	 var condMet=0;
 	 if(str.length >=8)
 	 {
 	 	condMet += 1;
 	 }
 	 for(var i=0; i<num.length;i++){
 	 	if(str.includes(num[i])){
 	 		condMet += 1;
 	 		break;
 	 	}
 	 }
 	  for(var i=0; i<arr.length;i++){
 	 	if(str.includes(arr[i])){
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
console.log(Check("1@bvghytui"));

var testString="ab@cde@sf@bjbm";
var testArray =testString.split("@");
console.log(testArray);

function Splitstring(str,splitAt){
	var output=[];
	var lastindex=0;
	for(var i=0;i<str.length;i++){
		if(str.charAt(i)==splitAt){
			var addstring=str.slice(lastindex,i);
			output.push(addstring);
			lastindex = i+1;			
		}
	}
	var lastString=str.slice(lastindex,i);
	if(lastString.length!=0)
		output.push(lastString);
	console.log(output);
	}Splitstring("catatatatavcABC","a");


	var chars=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var arr=["@","{","#","$","%"];

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

console.log(ValidateEmail("nabitapradhangmail.com"));
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
 	 	alert("Good")
 	 }
 	 else
 	 {
 	 	alert("Wrong password")
 	 }



}
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

//String Methods
//IndexAt 

function IndexAt(str,char)
{
	for(var i=0;i<str.length;i++)
	{
		if(str.charAt(i)==char){
			console.log(i);
			break;
		}
	}
}
IndexAt("dogogg","g");


//Includes
function IncludesChar(str,char)
{
	for(var i=0;i<str.length;i++)
	{
		if(str.charAt(i)==char)
		{
			return true;
		}
	}
	return false;
}
console.log(IncludesChar("fish","i"));

//Slice
function SliceString(str,start,stop)
{
	var word="";
	for(var i=start ;i<stop ;i++)
	{
		word += str[i];
	}
	console.log(word);
}
SliceString("apple",1,4);

//Replace
function Replace(str,index,char)
{
	var str1=str.slice(0,index);
	var str2=str.slice(index+1,str.length);
	console.log(str1 + char + str2);	
}
Replace("butter",1,"e");

function ModString(val)
{
	if(typeof val!="string")
	{
		console.log("Please use a string");
		return;
	}
	this.val=val,
	this.modSlice=function(start,stop)
	{
		var newVal="";
		for(var i=start;i<=stop;i++)
		{
			newVal +=this.val[i];
		}	
		this.val=newVal;
	},
	this.LastIndex = function(char){
		for(var i=this.val.length;i>=0;i--)
		{
			if(this.val.charAt(i)==char)
			{
				console.log(i);
				break;
			}
		}
	}

this.countlength=function(){
	var count=0;
	while(this.val[count]!=undefined){
		count++;

	}	
	console.log(count);
}
}
var myString= new ModString("This is my string");
var babycat=new ModString("kitten");
babycat.countlength();
myString.LastIndex("m");
myString.modSlice(1,4);
console.log(myString.val);


