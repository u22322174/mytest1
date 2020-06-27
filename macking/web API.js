var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    dv = document.getElementsByClassName('dv'),
    style = getComputedStyle(canvas,null),
    width = canvas.width = parseInt(style.width),
    height = canvas.height = parseInt(style.height),
    randomsize = function(min,max) {
        return Math.floor(Math.random()*(max - min)) + min + 1
    },randomcolor = function() {
        return 'rgba(' + randomsize(0,225) + ',' + randomsize(0,255) + ',' + randomsize(0,225) + Math.random() +')'
    }

var circlex = randomsize(10,width - 10),
    circley = randomsize(10,height - 10),
    circlesize = 10,
    leftpresent = false,
    rightpresent = false,
    upPressed = false,
    downPressed = false 

    addEventListener("keydown",keyDownHandler,false)
    addEventListener("keyup",keyUpHandler,false)

function keyDownHandler(e) {
    switch(e.keyCode) {
        case 37 :
            leftpresent = true
            break;
        case 38 : 
             upPressed = true
             break;
        case 39 :
            rightpresent = true
            break;
        case 40 :
            downPressed = true
            break;
        default :
        break;
    }
} 

function keyUpHandler(e) {
    switch(e.keyCode) {
        case 37 :
            leftpresent = false
            break;
        case 38 : 
             upPressed = false
             break;
        case 39 :
            rightpresent = false
            break;
        case 40 :
            downPressed = false
            break;
        default :
        break;
    }
} 

function Circle(x,y,size,color) {
    this.x = x
    this.y = y
    this.size = size
    this.color = color
}

Circle.prototype.draw = function() {
    ctx.save()
    ctx.beginPath()
    ctx.arc(this.x,this.y,this.size,0,2*Math.PI)
    ctx.strokeStyle = this.color
    ctx.lineWidth = 3
    ctx.stroke()
    ctx.restore()
}

function psition() {
    if(circlex > width - circlesize) {
        circlex = width - circlesize
    }else if(circlex  < circlesize) {
        circlex = circlesize
    }else if(circley  > height - circlesize) {
        circley = height - circlesize
    }else if(circley < circlesize) {
        circley = circlesize
    }
}

function Ball(x,y,vx,vy,size,color,) {
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
    this.size = size
    this.color = color
}

Ball.prototype.draw = function () {
    ctx.beginPath()
    ctx.arc(this.x,this.y,this.size,0 , 2 * Math.PI)
    ctx.fillStyle = this.color
    ctx.fill()
    return this
}

Ball.prototype.update = function() {
    if(this.x + this.size >= width || this.x - this.size <= 0) {
        this.vx = -(this.vx)
        this.color = randomcolor()
    } 
    if(this.y + this.size >= height || this.y - this.size <= 0) {
        this.vy = -(this.vy)
        this.color = randomcolor()
    }
    this.x += this.vx
    this.y += this.vy
    return this
}

Ball.prototype.eachclear = function() {
    if((this.x - circlex)**2 + (this.y - circley)**2 <= (this.size + 10)**2) {
        delete this.x
    }
}

var ball0 = new Ball(
    randomsize(7.5,width - 7.5),
    randomsize(7.5,width - 7.5),
    randomsize(1,3),
    randomsize(1,3),
    randomsize(7.5,10),
    ''
)
ball0.draw()

var balls = [],
    count = 20; 

    ctx.clearRect(0,0,width,height)

function loop() {
    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = 'rgba(0,0,0,0.25)'
    ctx.fillRect(0,0,width,height)
    ctx.restore()
    
    for(var i = 0 ; i < count ; i++) {
        if(balls.length < count) {
            var ball = new Ball(
                randomsize(7.5,width - 7.5),
                randomsize(7.5,width - 7.5),
                randomsize(1,3),
                randomsize(1,3),
                randomsize(7.5,10),
                randomcolor()
            )
            balls.push(ball)
        }
        balls[i].draw().update()
        balls[i].draw().eachclear()
    }
    var circle = null
    if(!circle) {
     circle = new Circle(circlex,circley,circlesize,'white')
     circle.draw()
    }
    if(leftpresent) {
        circlex -= 5
    }else if(rightpresent) {
        circlex += 5
    }else if(upPressed) {
        circley -= 5
    }else if(downPressed) {
        circley += 5
    }
    psition()
    requestAnimationFrame(loop)
   }
   

loop()
















