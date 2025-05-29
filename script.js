const check = document.querySelector('#check');
const checkMsg = document.querySelector('#checkMsg');

const name = document.querySelector('.name');
const psd = document.querySelector('.psd');
const msg = document.querySelector('#msg');


const main = document.querySelector('.main');


let img = ["https://i.pinimg.com/originals/0d/ae/03/0dae0309ec0da1fd945702a910d491ff.gif"];

let index =  0;
let imglength = img.length;


 //slider 
setInterval(function(){
     
  var index1 = img[index]; 
  index++;
  
  if(index >= imglength){
    index = 0;
  }
  
     
    main.style.backgroundImage = `url(${index1})`;
          
     },4000);








var a = 1;

check.addEventListener('click',()=>{

load();

});



const load = () =>{
  
    if(a == 1){
  checkMsg.style.color = "#fff";
    a = 0;
  
}else{
  checkMsg.style.color = "#1db954";
    a = 1;
  }
  
}

load();




const refresh = () =>{
  
  if(name.value == "" && psd.value == ""){
    msg.innerText = "Empty username & password";
  }else{
        msg.innerText = "";
    alert(`Welcome ${name.value} - ( please confirm ${name.value} & ${psd.value}))`);
    check.checked = false;
    load();
  }
  
  name.value = "";
  psd.value = "";
 
}