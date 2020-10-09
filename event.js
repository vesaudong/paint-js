cvs.addEventListener('mousedown', function() {
    isMouseDown = true;
    console.log('down');
});

cvs.addEventListener('mouseup', function() {
    isMouseDown = false;
    console.log('up');
});

cvs.addEventListener('mousemove', function(e) {
    if (isMouseDown) {
        let x = e.offsetX;
        let y = e.offsetY;
        Draw(x, y);
    }
});