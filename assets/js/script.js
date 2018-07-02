let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let ballX = 100; //starting position of ball on X-axis
let ballY = 100; //starting position of ball on Y-axis
let ballSpeedX = 5; //speed of ball on X-axis
let ballSpeedY = 3; // speed of ball on Y-axis
const FPS = 1000 / 60; //frames per second
const CANVAS_WIDTH = c.width; //total width of the canvas
const CANVAS_HEIGHT = c.height; //total height of the canvas
let p1Paddle = 400;
let p1Speed = 15;

function moveP1Paddle(event) {
	if (event.keyCode === 40) {
		p1Paddle += p1Speed;
	} else if (event.keyCode === 38) {
		p1Paddle -= p1Speed;
	}
}

function startGame() {
	ballMovement(); 
	drawCanvasAndBall();
}

function checkBallLocation() {

	if (ballX + 10 > CANVAS_WIDTH) {
		ballSpeedX = -ballSpeedX; //if the ball goes out of frame on the right side, changes it's direction by turning the "5" -> "-5"
	} else if (ballX < 0) {
		ballSpeedX = -ballSpeedX; //if the ball goes out of frame on the left side, changes it's direction by turning the "-5" -> "5"
	} else if (ballY + 10 > CANVAS_HEIGHT) {
		ballSpeedY = -ballSpeedY; //if the ball goes out of frame on the top side, changes it's direction by turning the "3" -> "-3"
	} else if (ballY < 0) {
		ballSpeedY = -ballSpeedY; //if the ball goes out of frame on the top side, changes it's direction by turning the "-3" -> "3"
	}

}

function ballMovement() {
	ballX += ballSpeedX; //movement of the ball on X-axis
	ballY += ballSpeedY; //movement of the ball on Y-axis
}

function drawCanvasAndBall() {
	//next lines draw the black canvas
	ctx.fillStyle = 'black'; 
	ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

	//next lines draw the red ball
	ctx.fillStyle = 'red';
	ctx.beginPath();
	ctx.arc(ballX,ballY,10,0,2*Math.PI);;
	ctx.fill();

	//next lines draw the left paddle
	ctx.fillStyle = 'white';
	ctx.fillRect(50,p1Paddle,10,80);

	checkBallLocation() //calls the function to check if the ball is out of bounds every frame

	window.addEventListener("keydown", moveP1Paddle);

}


window.setInterval(startGame, FPS);