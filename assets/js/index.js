const canvas = document.querySelector("#drawing");
const ctx = canvas.getContext("2d");


function circle(x, y, radius) {
    ctx.arc(x, y, radius, 0, 2 * Math.PI);

}


function strokeCircle(x, y, radius) {
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}

function fillCircle(x, y, radius) {
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
}


function squarePie() {
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.rect(100, 100, 100, 100);
    ctx.lineWidth = 3;
    ctx.shadowColor = "red";
    ctx.shadowBlur = 20;

    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.fillStyle = "yellow";
    ctx.fill();

    ctx.shadowColor = 0;
    ctx.shadowBlur = 0;
}



// a Suqare

// ctx.beginPath();
// ctx.moveTo(100,100);
// ctx.lineTo(200,100);
// ctx.lineTo(200, 200);
// ctx.lineTo(100, 200);
// ctx.lineTo(100, 100);
// ctx.strokeStyle = "red";
// ctx.stroke();
// ctx.fillStyle = "yellow";
// ctx.fill();

// a Suqare

squarePie();


//Triangle

ctx.beginPath();
ctx.moveTo(100, 300);
ctx.lineTo(100, 400);
ctx.lineTo(200, 400);
ctx.lineTo(100, 300);
// ctx.closePath();
ctx.lineCap = "round";
ctx.strokeStyle = "blue";
ctx.stroke();
ctx.fillStyle = "green";
ctx.fill()


//draw a circle
ctx.beginPath();
//arc(centerX.centerY,radius, startingAngle, endAngle);
circle(250, 250, 100);
ctx.stroke();

//eye
ctx.beginPath();
ctx.strokeStyle = "orange";
strokeCircle(200, 210, 20);

//eye
ctx.beginPath();
ctx.fillStyle = "blue";
fillCircle(200, 205, 10);


//eye

ctx.beginPath();
ctx.strokeStyle= "orange";
strokeCircle(300, 210, 20);
//eye
ctx.beginPath();
ctx.fillStyle = "blue";
fillCircle(300, 205, 10);


//mouth
ctx.beginPath();
ctx.arc(250,280,50,0, Math.PI,false);
ctx.stroke();

//nose

ctx.beginPath();
ctx.fillStyle = "black";
fillCircle(260,270,5);
//nose

ctx.beginPath();
ctx.fillStyle = "black";
fillCircle(240, 270, 5);







//draw half a circle
ctx.beginPath();
ctx.arc(100, 75, 50, 0, Math.PI + 2, false);
ctx.closePath();
ctx.stroke();
