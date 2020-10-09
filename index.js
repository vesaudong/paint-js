/* VARIABLES */
var color = black;
var isMouseDown = false;
var size = 10;

function SetColor(c) {
    color = c;
}

function SetSize(s) {
    size = s;
}

function Draw(x, y) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
}