
//innitializing thebody so that i can get it easily

const body=document.getElementsByTagName("body")[0];




body.style.backgroundColor="blue";



function change(name){
     body.style.backgroundColor= name;

     value.textContent="";
}
 
function random(){
    const red=Math.floor(Math.random() *255);
    const green=Math.floor(Math.random() *255);
    const blue=Math.floor(Math.random() *255);
    const display=`rgb(${red},${green},${blue})`;


    
    body.style.backgroundColor=display;

    let value=document.createElement("p");

    if(display){
    value.textContent=`value:${display}`;
    }
    document.body.appendChild(value);

    

     


}



