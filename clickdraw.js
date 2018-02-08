//Caleb Smith-Salzberg
//SoftDev2 pd7
//k2
//2018-01-07

var c = document.getElementById("slate");
//slate is the canvas
var ctx = c.getContext("2d");
//create a 2d object that controls the stuff

var id;
var size;
var increment=1;
var x;
var y;

var stop = document.getElementById("s");
var mode = document.getElementById("m");

var draw = function(){
    ctx.beginPath();
    ctx.clearRect(0, 0, c.width, c.height); //clears screen
    ctx.fillStyle = "red";
    ctx.strokeStyle="red";
    //red
    ctx.arc(x, y, size, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    if (size + increment > 0){
	console.log("work");
	size += increment;
	id = window.requestAnimationFrame(draw);
    }
    else{
	stopball();
    }
}
var onClick = function(e){
    x= e.offsetX;
    y= e.offsetY;
    size = 10;
    window.requestAnimationFrame(draw);
}
c.addEventListener("click", onClick);

var changeMode = function(){
    increment *= -1;
}
mode.addEventListener("click", changeMode);


var stopball = function(){
    if(id){
    window.cancelAnimationFrame(id); 
  }
}
stop.addEventListener("click", stopball);
