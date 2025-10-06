let input=document.getElementById("input")
let display=document.getElementById("display")
let pop=document.getElementById("pop")

//
function calculateAge(){
     let birth= new Date(input.value)  //thats the users date of birth to be calculated 
     let now= new Date()  //gets today's date

     let dif= now-birth;  //this will bring time in milliseconds as default since time in js is in milliseconds
     let age=Math.floor(dif/(1000*60*60*24*365));   //conversts the time to days and rounds it off to a whole number

     display.innerHTML=`You are ${age} years old`;

     display.value="";

     if(age<=17){
       pop.innerHTML="You are still a child dear🤣"
     }else{
     pop.innerHTML="Welcome to adulthood dear😁"
     }

     //let next=new Date()
    // let sai= next.getTime()/(1000*60*60*60)
     //console.log(sai);
}

//let time=setInterval(calculateAge(),5000)

//setTimeout(clearInterval(time),5000);



















/*let set=setInterval(function greet(){console.log("the answer is"+ PI)}
,2000);

setTimeout(function stop(){
clearInterval(set);
},10000)

console.log(set);

let set= setTimeout(function greet(){
    alert("hello cliff"); 
},5000);*

//let today=new Date()
//let tod=new Date()
let birth= new Date('2007-05-23');
let now=new Date('2025-10-01')

let kesho= now-birth;
let tono= Math.floor(kesho/(1000*365*60*60*24));



console.log(tono);*/

 