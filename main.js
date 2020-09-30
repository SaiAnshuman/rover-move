var canvas = document.getElementById ("myCanvas");
var ctx = canvas.getContext("2d");

var rover_width = 100;
var rover_height = 90;

var roverX = 10;
var roverY = 10;

var background_img = "mars.jpg";
var rover_img = "rover.png";

function add(){

 bg_img = new Image();
bg_img.onload = upload_background;
bg_img.src = background_img;

 rvr_img = new Image()
rvr_img.onload = upload_rover;
rvr_img.src = rover_img;

}

function upload_background(){

ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);

}

function upload_rover(){
    
ctx.drawImage(rvr_img,roverX,roverY,rover_width,rover_height);

}

window.addEventListener("keydown",my_keyDown);

function my_keyDown(e){

var keypress = e.keyCode;
console.log(keypress);
if (keypress == '37'){
    left();
    console.log("left");
}
if (keypress == '38'){
    up();
    console.log("up");
}
if (keypress == '39'){
    right();
    console.log("right");
}
if (keypress == '40'){
    down();
    console.log("down");
}

}