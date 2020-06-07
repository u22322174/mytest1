var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    style = getComputedStyle(canvas,null),
    width = canvas.width = parseInt(style.width),
    height = canvas.height =parseInt(style.height),
    randomSize = function(a,b) {
        return Math.floor(Math.random()*(b - a)) + a ;
    },randomColor = function() {
        return 'rgb(' + randomSize(0,225) + ',' + randomSize(0,225) + ',' + randomSize(0,225) + ')'
    };

function Ball(x,y,vx,vy,size,color) {      
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
    this.size = size
    this.color = color
}

Ball.prototype.draw = function() {         
    ctx.save()
    ctx.beginPath()
    ctx.arc(this.x,this.y,this.size,0,2*Math.PI)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.restore()
}

Ball.prototype.update = function() {
    if(this.x + this.size >= width || this.x - this.size <= 0) {
        this.vx = -(this.vx)
        this.color = randomColor()
        this.size = randomSize(7.5,10)
    }
    if(this.y + this.size >= height || this.y - this.size <= 0) {
        this.vy = -(this.vy)
        this.color = randomColor()
    } 
    this.x += this.vx
    this.y += this.vy
}

Ball.prototype.Collision = function() {
    for(var i = 0 ; i < balls.length ; i++) {
        if(!(this === balls[i])) {
            if((this.x - balls[i].x)**2 + (this.y - balls[i].y)**2 <= (this.size + balls[i].size)**2) {
                this.color = randomColor()
                this.size = randomSize(7.5,11)
            }   
        }
    }
}


var ball = null,
    star = 1,
    balls = [] ;

function loop() {
    
    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = 'rgb(0,0,0,0.2)'
    ctx.fillRect(0,0,width,height)
    ctx.restore()
    if(!ball) {
        ball = new Ball(
            11,
            randomSize(11,width - 11),
            1,
            1,
            randomSize(7.5,10),
            randomColor()
        )
        balls.push(ball)
    }
   for(var i = 0 ; i < balls.length ; i++) {
       balls[i].draw()
       balls[i].update()
       balls[i].Collision()
   }
    requestAnimationFrame(loop)
}

loop()

setInterval(function() {
    for(var i = 0 ; i < balls.length ; i++) {
       if(balls[i].vx < star*12) {
        if(balls[i].vx < 0) {
            balls[i].vx -= star/4 
        }else{
            balls[i].vx += star/4
        }
       }else{
           balls[i].vx = star
       }
        if(balls[i].vy < star*12) {
            if(balls[i].vy < 0) {
                balls[i].vy -= star/4
            }else{
                balls[i].vy += star/4
            }
        }else{
            balls[i].vy = star
        }
    }
    if(balls.length < 100) {
        ball = new Ball(
            11,
            randomSize(11,width - 11),
            1,
            1,
            randomSize(7.5,10),
            randomColor()
        )
        balls.push(ball)
       }
    console.log('vx:' + balls[0].vx,'vy:' + balls[0].vy,'balls.length:' + balls.length)
},5000)