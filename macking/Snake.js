var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    dv = document.getElementsByClassName('dv'),
    style = getComputedStyle(canvas,null),
    width = canvas.width = parseInt(style.width),
    height = canvas.height = parseInt(style.height),
    randomsize = function(min,max) {
        return Math.floor(Math.random()*(max - min)) + min + 1
    },Rectnum = 7 ,headColor = 'red',RectColor = 'gray',rectW = 20 ,recty = 20, snakedir = 39

var leftpress = false,
    uppress = false,
    rightpress = false,
    downpress = false,
    snakex = width - rectW*7,
    snakey = height - recty

addEventListener('keydown',keydownHander,false)
addEventListener('keyup',keyupHander,false)

function keydownHander(e) {
    switch(e.keyCode) {
        case 37 :
            leftpresent = true
            break;
        case 38 :
            uppresent = true
            break;
        case 39 : 
            rightpresent = true
            break;
        case 40 :
            downPressed = true
            break;
        default:
            break;
    }
}

function keyupHander(e) {
    switch(e.keyCode) {
        case 37 :
            leftpresent = false
            break;
        case 38 :
            uppresent = false
            break;
        case 39 : 
            rightpresent = false
            break;
        case 40 :
            downPressed = false
            break;
        default:
            break;
    }
}

function Joint(x,y,w,h,color) {     //构成蛇的方块
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = color
}

Joint.prototype.draw = function() {      //绘制蛇的关节
    ctx.save()
    ctx.beginPath()
    ctx.strokeRect(this.x,this.y,this.w,this.h)
    ctx.fillStyle = this.color
    ctx.restore()
}

function Snake() {                //绘制一条蛇
    var snakerect = []
    for(var i = 0 ; i < Rectnum ; i++) {
        var jiont = new Snakejoint(i*rectW,0,rectW,recty,RectColor)
        jiont.draw()
        snakerect.unshift(jiont)
    }
    this.head = snakerect[0]
    this.snakerect = snakerect
    this.neck = snakerect[1]
    this.direction = snakedir
}

Snake.prototype.move = function() {       //控制移动
    
}

function food() {
    ctx.save()
    ctx.beginPath()
    ctx.
}

var iseat = function() {
    return snake.head.x == food.x && snake.head.y == food.y 
}


