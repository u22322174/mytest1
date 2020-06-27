var initRectNum = 4, initSnakeDir = 39, rectW = 16, rectColor = 'gray', headColor = 'red',canvas = document.querySelector('canvas'), style = getComputedStyle(canvas, null)
width = canvas.width = parseInt(style.width), height = canvas.height = parseInt(style.height), ctx = canvas.getContext('2d'),
initTime = allTime = 500 , $span = document.querySelector('span')

function isEat() {
    return snake.head.x === food.x && snake.head.y === food.y
}

var randomSize = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}


function Rect(x, y, w, h, color) {     
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = color
}
Rect.prototype.draw = function() {
    ctx.beginPath()
    if(this.color === 'green') this.color = 'white'
    else if(this.color === 'white') this.color = 'green'
    ctx.fillStyle = this.color
    ctx.rect(this.x, this.y, this.w, this.h)
    ctx.fill()
    ctx.stroke()
}

function Snake() {
    var snakeRect = []
    for(var i = 0; i < initRectNum; i++) {
        var curRect = new Rect(i * rectW, 0, rectW, rectW, rectColor)
        snakeRect.unshift(curRect)
    }
    var head = snakeRect[0]
    head.color = headColor
    this.head = head
    this.snakeRects = snakeRect
    this.direction = initSnakeDir
}

Snake.prototype.draw = function() {        
    for (var i = 0; i < this.snakeRects.length; i++) {
        this.snakeRects[i].draw();
    } 
}
Snake.prototype.move = function() {
    var rect = new Rect(this.head.x, this.head.y, this.head.w, this.head.h, rectColor)
    this.snakeRects.splice(1, 0, rect)
    if(isEat()) {
        food = new Food()
    }
    else this.snakeRects.pop()
    
    switch(this.direction) {
        case 37:
            this.head.x -= this.head.w
            break
        case 38:
            this.head.y -= this.head.h
            break
        case 39:
            this.head.x += this.head.w
            break
        case 40:
            this.head.y += this.head.h
            break
        default:
            break
    }

    if(this.head.x > width || this.head.x < 0 || this.head.y > height || this.head.y < 0) {
        clearInterval(runner)
    }

    for(var i = 1; i < this.snakeRects.length; i++) {
        if(this.snakeRects[i].x === this.head.x && this.snakeRects[i].y === this.head.y) {
            clearInterval(runner)
            break
        }
    }
    $span.innerText = this.snakeRects.length
    var curTime = allTime - Math.floor(this.snakeRects.length / 5) * 100
    if(curTime !== initTime && curTime >= 100) {
        initTime = curTime
        if(initTime < 100) initTime = 100
        clearInterval(runner)
        run()
    }
    return this
    
}


function Food() {
    var isOnSnake = true, rect
    while(isOnSnake) {
        isOnSnake = !isOnSnake
        var fx = randomSize(0, width / rectW - 1), fy = randomSize(0, height / rectW - 1)
        rect = new Rect(fx * rectW, fy * rectW, rectW, rectW, 'green')
        for(var i = 0; i < snake.snakeRects.length; i++) {
            var item = snake.snakeRects[i]
            if(item.x === rect.x && item.y === rect.y) {
                isOnSnake = !isOnSnake
                break
            }
        }
    }
    return rect
}

var snake = new Snake()
snake.draw()
var food = new Food()
var drawGrid = function() {
    ctx.save()
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, width, height)
    ctx.lineWidth = 0.5
    ctx.strokeStyle = '#ccc'
    for (var i = rectW; i < width; i += rectW) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, height)
        ctx.stroke()
    }
    for (var j = rectW; j < height; j += rectW) {
        ctx.beginPath()
        ctx.moveTo(0, j)
        ctx.lineTo(width, j)
        ctx.stroke()
    }
    ctx.restore()

}
var run = function() {
    runner = setInterval(function() {
        ctx.clearRect(0, 0, width, height)
        drawGrid()
        food.draw()
        snake.move().draw()
    }, initTime)
}

run()

document.onkeydown = function(e) {
    var ev = e || window.event
    switch(ev.keyCode) {
        case 37 :
            if(snake.direction !== 39) snake.direction = 37
            break
        case 38 :
            if(snake.direction !== 40) snake.direction = 38
            break
        case 39 :
            if(snake.direction !== 37) snake.direction = 39
            break 
        case 40 :
            if(snake.direction !== 38) snake.direction = 40
            break
        default:
            break   
    }
    ev.preventDefault()
}