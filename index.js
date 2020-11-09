// storing length of drum in n.
var n=document.querySelectorAll(".drum").length;

// for loop and onclick event listener.
for(i=0;i<n;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonhtml = this.innerHTML;
    makesound(buttonhtml);
    buttonAnimation(buttonhtml);
    }
);
}

// on key pressed event listener.
document.addEventListener("keyup", function(event){
  makesound(event.key);
  buttonAnimation(event.key);
});

// funtion for audio play.
function audioplay(soundname){
var audio = new Audio(soundname);
audio.play();
}

// function to make sound.
function makesound(key){
  switch (key) {
    case "w":
    audioplay("crash.mp3");
    break;
    case "a":
    audioplay("kick-bass.mp3");
    break;
    case "s":
    audioplay("snare.mp3");
    break;
    case "d":
    audioplay("tom-1.mp3");
    break;
    case "j":
    audioplay("tom-2.mp3");
    break;
    case "k":
    audioplay("tom-3.mp3");
    break;
    case "l":
    audioplay("tom-4.mp3");
    break;
    default:
  }
}

function buttonAnimation(currentkey){
  var activebtn = document.querySelector("." + currentkey);
  activebtn.classList.add("pressed");
 setTimeout(function(){
  activebtn.classList.remove("pressed");
},100);
}
