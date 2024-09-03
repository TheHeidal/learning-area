const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(0, 0, width, height);

function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

// ctx.fillStyle = "rgb(255,0,0)";
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// const triHeight = 50 * Math.tan(degToRad(60));
// ctx.lineTo(100, 50 + triHeight);
// ctx.lineTo(50, 50);
// ctx.fill();

const image = new Image();
image.src = ""



ctx.lineWidth = 3;

ctx.strokeStyle = "rgb(255,0,0)";
ctx.beginPath();
ctx.arc(300, 300, 265, degToRad(0), degToRad(360), false);
ctx.stroke();

// months
ctx.fillStyle = "rgb(255,250,250)";
ctx.beginPath();
ctx.arc(300, 300, 250, degToRad(0), degToRad(360), false);
ctx.fill();


ctx.lineWidth = 2;
ctx.strokeStyle = "#767777";
subdivide(300, 300, 250, 200, 12, 0);

ctx.translate(300, 300);
ctx.rotate(15);

ctx.

//Saturn
ctx.fillStyle = "#1e1e1e";
ctx.beginPath();
ctx.arc(300, 300, 200, degToRad(0), degToRad(360), false);
ctx.fill();

// jupiter
ctx.fillStyle = "#dcbc95";
ctx.beginPath();
ctx.arc(300, 300, 180, degToRad(0), degToRad(360), false);
ctx.fill();

function subdivide(
  centerX,
  centerY,
  outerRadius,
  innerRadius,
  divisions,
  offsetAngle
) {
  for (let i = 0; i < divisions; i++) {
    ctx.beginPath();
    const angle = degToRad((360 / divisions) * i + offsetAngle);
    ctx.moveTo(
      centerX + outerRadius * Math.cos(angle),
      centerY + outerRadius * Math.sin(angle)
    );
    ctx.lineTo(
      centerX + innerRadius * Math.cos(angle),
      centerY + innerRadius * Math.sin(angle)
    );
    ctx.stroke();
  }
}

// ctx.fillStyle = "yellow";
// ctx.beginPath();
// ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
// ctx.lineTo(200, 106);
// ctx.fill();
