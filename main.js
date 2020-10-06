var canvas = document.getElementById ("myCanvas");
var ctx = canvas.getContext("2d");

nasa_images_array = ["mars.jpg","mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];

var random_no = Math.floor (Math.random()* 5);
console.log(random_no);

var rover_width = 100;
var rover_height = 90;

var roverX = 10;
var roverY = 10;

var background_img = nasa_images_array[random_no];
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

function up() {

if ( roverY >= 0){

roverY = roverY-10;
console.log ("when up arrow is pressed , x=" + roverX + "& y=" + roverY);
upload_background();
upload_rover();

}

}

function down() {

    if ( roverY <= 500){
    
    roverY = roverY+10;
    console.log ("when down arrow is pressed , x=" + roverX + "& y=" + roverY);
    upload_background();
    upload_rover();
    
    }
    
    }

    function left() {

        if ( roverX >= 0){
        
        roverX = roverX-10;
        console.log ("when left arrow is pressed , x=" + roverX + "& y=" + roverY);
        upload_background();
        upload_rover();
        
        }
        
        }

        function right() {

            if ( roverX <= 700){
            
            roverX = roverX+10;
            console.log ("when right arrow is pressed , x=" + roverX + "& y=" + roverY);
            upload_background();
            upload_rover();
            
            }
            
            }