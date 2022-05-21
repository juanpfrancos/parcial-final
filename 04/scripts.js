const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function square(){
    ctx.beginPath()
    ctx.rect(20, 50, 150, 150)
    ctx.fillStyle = "#ed0d0d"
    ctx.fillRect(20, 50, 150, 150)
    ctx.stroke();
    ctx.closePath()
}

function circle(){
    ctx.beginPath()
    ctx.arc(300,125,80,0,2*Math.PI)
    ctx.fillStyle = "#f9e304"
    ctx.fill()
    ctx.stroke();
    ctx.closePath()
}
function triangle(){
    ctx.beginPath();
    ctx.moveTo(500,42)
    ctx.lineTo(500 + 160/2 ,42 + 160)
    ctx.lineTo(500 - 160/2 ,42 + 160)
    ctx.fillStyle = "#05359b"
    ctx.fill()
    ctx.stroke();
    ctx.closePath()
}

square()
circle()
triangle()