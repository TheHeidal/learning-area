const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(0, 0, width, height);


ctx.lineTo(150, 50);
const triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(100, 50 + triHeight);
ctx.lineTo(50, 50);
ctx.fill();




// ctx.fillStyle = "rgb(255 0 0)";
// ctx.beginPath();
// ctx.moveTo(50, 50);
// // draw your path
// ctx.lineTo(150, 50);
// const triHeight = 50 * Math.tan(degToRad(60));
// ctx.lineTo(100, 50 + triHeight);
// ctx.lineTo(50, 50);
// ctx.fill();

// ctx.fillStyle = "rgb(0 0 255)";
// ctx.beginPath();
// ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
// ctx.fill();

// ctx.fillStyle = "yellow";
// ctx.beginPath();
// ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
// ctx.lineTo(200, 106);
// ctx.fill();

// drawToken("orange", 300, 250, 100, 25, 30, 270);

// ctx.strokeStyle = "white";
// ctx.lineWidth = 1;
// ctx.font = "36px arial";
// ctx.strokeText("Canvas text", 50, 50);

// ctx.fillStyle = "red";
// ctx.font = "48px georgia";
// ctx.fillText("Canvas text", 50, 150);

// canvas.setAttribute("aria-label", "Canvas text");

// function degToRad(degrees) {
//   return (degrees * Math.PI) / 180;
// }

function drawToken(
  fillstyle,
  centerX,
  centerY,
  radius,
  height,
  arc,
  startingAngle
) {
  ctx.fillStyle = fillstyle;
  ctx.beginPath();
  ctx.arc(
    centerX,
    centerY,
    radius,
    degToRad(startingAngle),
    degToRad(startingAngle + arc),
    false
  );
  ctx.arc(
    centerX,
    centerY,
    radius - height,
    degToRad(startingAngle + arc),
    degToRad(startingAngle),
    true
  );
  ctx.fill();
}
