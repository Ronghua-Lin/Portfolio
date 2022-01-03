
const colorvalue=()=>{
    return Math.floor(Math.random()*256);

}


const click=(event)=>{
    let r='rgb('+colorvalue()+','+colorvalue()+','+colorvalue()+')';
    document.getElementById('random').style.color=r;
    event.target.style.backgroundColor=r;
    reset.hidden=false;
    console.log("the color is");
}

const re=()=>{
  document.getElementById('random').style.color="";
  document.getElementById('click').style.backgroundColor="";
  reset.hidden=true;

}



let c= document.getElementById('click');
let reset= document.getElementById('reset');

reset.hidden=true;
reset.onclick=re;
c.onclick=click;

/*
let log = document.getElementById('log');
document.onclick = inputChange;
function inputChange(e) {
  log.textContent = `Position: (${e.clientX}, ${e.clientY})`;
}

*/
let frame=document.querySelector('.ball');
let ball = document.getElementById('circle');
function up(){
  ball.style.bottom='200px';
 
  
}
function down(){
  ball.style.top='200px';

}

function position(event){
  
  if(event.clientX>=600-event.clientY && event.clientX<=event.clientY){
    ball.style.top=0;
  }
  else if (event.clientX>=event.clientY && event.clientX<=600-event.clientY){
    ball.style.bottom=0;
  }
  else if(event.clientY>=event.clientX && event.clientY<=600-event.clientX){
    ball.style.left=0;
  }
  else if (event.clientY<=event.clientX && event.clientY>=600-event.clientX){
    ball.style.right=0;
  }
 
  
  
  
}

function recover(){
  ball.style.left='43%';
  ball.style.top='43%';
 
    
}
ball.onmousedown=up;
frame.onmousemove=position;
frame.onmouseout=recover;

let sec=document.querySelector('.select');
let submit=document.querySelector('.submit');
submit.hidden=true;

function reveal(){
  submit.hidden=false;
  sec.hidden=true;
}
sec.onclick=reveal;


const pw=document.getElementById('secret');
const form=document.getElementById('form');
const ht=document.querySelector('html');
function check(event){
  event.preventDefault();
 
  if(pw.value ===  '6462071769'){
  
    ht.style.backgroundImage='url("./images/ronghua.JPG")';
  
  
 
  }
  else {
    
    alert("you enter a wrong password");
    //message.push("you are wrong");
  }
}

form.addEventListener('submit',check);

