var numebrofdrumbuttons= document.querySelectorAll(".drum").length;


function handleClick (){
  console.log(this);
}
document.querySelector("button").addEventListener("click" ,handleClick);

//numebr of drum button
for(var i=0;i<numebrofdrumbuttons;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    
    
    var buttonInnerHTML = this.innerHTML

    makesound(buttonInnerHTML);
      
  });
}

document.addEventListener("keypress", function(event){
  makesound(event.key);

});

function makesound(key){
  switch (key) {
    case "w":
      var audio= new Audio('sounds/tom-1.mp3');
      audio.play(); 
      break;
    
    case "a":
      var audio= new Audio('sounds/tom-2.mp3');
      audio.play(); 
    break;
    case "s":
      var audio= new Audio('sounds/tom-3.mp3');
      audio.play(); 
    break; 
    case "d":
      var audio= new Audio('sounds/tom-4.mp3');
      audio.play(); 
   break;  
    case "j":
      var audio= new Audio('sounds/snare.mp3');
      audio.play(); 
    break;
      
    case "k":
      var audio= new Audio('sounds/crash.mp3');
      audio.play(); 
    break; 
      
    case "l":
      var audio= new Audio('sounds/kick-bass.mp3');
      audio.play(); 
    break;  

    default:
      console.log("invalid butoon");
      break;
  }
}



// // play audio sound of that file path

//   // what to do when click decteted