"use strict";

//JavaScript Datatypes 

//Number

var num1;
num1=10;
console.log(num1);

//String

var String1= "Nabita";
console.log(String1);

//Boolean

var boolean;
boolean=true;
console.log(boolean);

//Null

var n=null;
console.log(n);

//undefined Do not ever use this

var num = undefined;
console.log(num);

//object

var obj={ name:"Nabi", age:22, address: "Sichey", Hobby:" Reading"};
console.log(obj);

//if else statement

var a=10;
if(a != 10)
{
	console.log("Hello");
}
else
{
	console.log(a);
}

//while loop

var number=1;
while(number<=10)
{
	console.log(number);
	number++;
}

// for loop

for(var j=10;j>=0;j--)
{
	console.log(j);
}

var animals = ["tiger", "sheep", "cat", "cow", "dog"];
console.log(animals);

for(var j=0; j < animals.length;j++){
	console.log(animals[j])
}


function OurFirstFunction(name){
	console.log("Hello From: "+name);
}
OurFirstFunction("Salina");

function TimesTen(num){
	console.log(num * 10)
}
TimesTen(5);
function Multiply(num1, num2){
	return num1 * num2;
}
console.log(Multiply(5, 7));
function Add(num1, num2){
	return num1 + num2;
}
console.log(Add(5, 7));
function Subtract(num1, num2){
	return num1 - num2;

}
console.log(Subtract(5, 7));
function Divide(num1, num2){
	return num1 / num2
}
console.log(Divide(5, 7));

var number1 = [64, 24,76, 234, 52, 64, 423, 77];
var number2 = [64, 24, 76, 234, 54,64, 432, 77, 32];
function SumAll(arr){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		sum+= arr[1];
		console.log(sum);
	}
	return sum;
}
SumAll(number1)

function Average(arr){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		sum+= arr[i];
	}
	return sum/arr.length;
}


console.log(Average(number2));

function Person(firstName,lastName,age,likesFootball)
{
	this.firstName = firstName,
	this.lastName = lastName,
	this.age = age,
	this.likesFootball = likesFootball



}
var Nabita = new Person("Nabita","Pradhan", 22, true);
var Nikita = new Person("Nikita","Pradhan", 23, false);
var Premika = new Person("Premika","Pradhan", 22, true);
var Salina = new Person("Salina","Chettri", 23, false);
console.log(Nabita);
console.log(Nikita);
console.log(Premika);
console.log(Salina);
console.log(Nabita.firstName + " " + Nabita.lastName);

function FullName(obj)
{

	console.log(obj.firstName+" "+ obj.lastName);
}
	FullName(Nabita);

var NewMath={
	SquareIt: function(num){
		console.log(num*num);
	},
	EvenNumbers: function(num){
		var arr =[];
		for(var i=1;i<=num;i++)
		{
			if(i%2==0)
			{
				arr.push(i);
			}
		}
console.log(arr);

	},
FindMax:function(arr)
{
	var max= -Infinity;
	for(var i=0; i<arr.length;i++)
	{
		if(arr[i]>max)
		{
			max=arr[i];
		}
	}
	console.log(max);
},

FindMin:function(arr)
{
	var min= Infinity;
	for(var i=0; i<arr.length;i++)
	{
		if(arr[i]<min)
		{
			min=arr[i];
		}
	}
	console.log(min);
},

Power:function(base,power){
	var output= base;
	for(var i=1;i<power;i++)
	{
		output *= base;

	}
	console.log(output);
}

}
/*NewMath.SquareIt(5);

var arr = [0,1,2,3,4,5,6,7,8,9,10];

console.log(arr[1]); */

NewMath.EvenNumbers(10);
var checkMax = [10,123,144,500];
NewMath.FindMax(checkMax);

NewMath.FindMin([10,1,22,54]);
NewMath.Power(3,2);


 







 













