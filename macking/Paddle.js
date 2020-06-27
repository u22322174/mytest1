var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    dv = document.getElementsByClassName('dv'),
    style = getComputedStyle(canvas,null),
    width = canvas.width = parseInt(style.width),
    height = canvas.height = parseInt(style.height),
    randomsize = function(min,max) {
        return Math.floor(Math.random()*(max - min)) + min + 1
    } 

    ctx.save()
    ctx.beginPath()
    ctx.strokeRect(0,0,20,20)
    ctx.stroke()
    ctx.restore()

var paddlewidth = 20,            //create paddle's attribute
    paddlehight = 20,
    paddlex = width - paddlewidth,
    paddley = height - paddlehight,
    paddlewidth2 = 20,            //create paddle's attribute
    paddlehight2 = 20,
    paddlex2 = 0,
    paddley2 = height - paddlehight2;


var leftpresent = false,
    rightpresent = false,
    upPressed = false,
    downPressed = false ;

    
addEventListener("keydown",keyDownHandler,false)
addEventListener("keyup",keyUpHandler,false)
drawpaddle()

function keyDownHandler(event) {
    switch(event.keyCode) {
        case 37:
            leftpresent = true
            break; 
        case 38:
            upPressed = true
            break;  
        case 39:
            rightpresent = true
            break;
        case 40:
            downPressed = true
            break; 
    }
}

function keyUpHandler(event) {
    switch(event.keyCode) {
        case 37:
            leftpresent = false
            break; 
        case 38:
            upPressed = false
            break;  
        case 39:
            rightpresent = false
            break;
        case 40:
            downPressed = false
            break; 
    }
}

function poisition() {
    if(paddlex + paddlewidth > width) {
        paddlex  =  width - paddlewidth
    }else if(paddley + paddlehight > height) {
        paddley = height - paddlehight 
    }else if (paddlex < 0) paddlex = 0
    else if (paddley < 0) paddley = 0

    if(paddlex <= paddlex2 + paddlewidth2 && paddley == paddley2) {
        paddlewidth += paddlewidth2
        paddlewidth2 = null
    }
}


function drawpaddle() {
    ctx.clearRect(0, 0, width, height)
    ctx.save()
    ctx.beginPath()
    ctx.rect(paddlex,paddley,paddlewidth,paddlehight)
    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.restore()

    ctx.save()
    ctx.beginPath()
    ctx.rect(paddlex2,paddley2,paddlewidth2,paddlehight2)
    ctx.fillStyle = 'green'
    ctx.fill()
    ctx.restore()
    
    if(leftpresent) {
        paddlex -= 20
    }else if(rightpresent) {
        paddlex += 20
    }else if(upPressed) {
        paddley -= 20
    }else if(downPressed) {
        paddley += 20
    }
    poisition()
}
setInterval(drawpaddle,150)