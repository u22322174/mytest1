var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    dv = document.getElementsByClassName('dv'),
    style = getComputedStyle(canvas,null),
    width = canvas.width = parseInt(style.width),
    height = canvas.height = parseInt(style.height),
    randomsize = function(min,max) {
        return Math.floor(Math.random()*(max - min)) + min + 1
    },randomcolor = function() {
        return 'rgb(' + randomsize(0,225) + ',' + randomsize(0,255) + ',' + randomsize(0,225) + ')'
    },star = 1 ,begin = document.getElementById('begin'),
    suspend = document.getElementById('suspend') ;

    // begin.addEventListener('click',function() {
    //     loop()
    // })

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

function Ball(x,y,vx,vy,size,color,exist) {
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
    this.size = size
    this.color = color
    this.exist = exist
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
        this.size = randomsize(7.5,10)
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
    if((this.x - circlex)**2 + (this.y - circley)**2 <= (this.size + circlesize)**2) {
        this.exist = false
    }
}

Ball.prototype.Collision = function() {
    for(var i = 0 ; i < balls.length ; i++) {
        if(!(this === balls[i])) {
            if((this.x - balls[i].x)**2 + (this.y - balls[i].y)**2 <= (this.size + circlesize)**2) {
                this.color = randomcolor()
                this.size = randomsize(7.5,10)
                this.vx = -(this.vx)
                this.vy = - (this.vy)
            }   
        }
    // for(var j = 0 ; j < balls2.length ; j++) {
    //     if(this != balls2[j]) {
    //         if((this.x - balls2[j].x)**2 + (this.y - balls2[j].y)**2 <= (this.size + circlesize)**2) {
    //             this.color = randomcolor()
    //             this.size = randomsize(7.5,10)
    //         }   
    //     }
    // }
    // for(var k = 0 ; k < balls3.length ; k++) {
    //     if(this != balls3[k]) {
    //         if((this.x - balls3[k].x)**2 + (this.y - balls3[k].y)**2 <= (this.size + circlesize)**2) {
    //             this.color = randomcolor()
    //             this.size = randomsize(7.5,10)
    //         }   
    //     }
    // }
    // for(var k = 0 ; k < balls4.length ; k++) {
    //     if(this != balls4[k]) {
    //         if((this.x - balls4[k].x)**2 + (this.y - balls4[k].y)**2 <= (this.size + circlesize)**2) {
    //             this.color = randomcolor()
    //             this.size = randomsize(7.5,10)
    //         }   
    //     }
    // }
    }
}

var ball0 = new Ball(
    randomsize(7.5,width - 7.5),
    randomsize(7.5,width - 7.5),
    0,
    0,
    randomsize(7.5,10),
    true
)
ball0.draw()

var balls = [],
    balls2 = [],
    balls3 = [],
    balls4 = [],
    count = 100,
    ball = null;

function loop() {
    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = 'rgba(0,0,0,0.25)'
    ctx.fillRect(0,0,width,height)
    ctx.restore()
    
    if(!ball) {
        ball = new Ball(
            randomsize(11,width - 11),
            randomsize(11,width - 11),
            star,
            star,
            randomsize(7.5,10),
            randomcolor(),
            true
        )
        balls.push(ball)
       
    }

    for(var i = 0 ; i < balls.length; i++) {
      if(balls[i].exist) {
        balls[i].draw()
        balls[i].update()
        balls[i].Collision()
        // balls[i].eachclear()
      }else{
          balls.splice(i,1)
      }
    }

    for(var j = 0 ; j < balls2.length ; j++) {
       if(balls2[j].exist) {
        balls2[j].draw()
        balls2[j].update()
        // balls2[j].eachclear()
       }else{
           balls2.splice(j,1)
       }
    }
    
    for(var k = 0 ; k < balls3.length ; k++) {
        if(balls3[k].exist){
            balls3[k].draw()
        balls3[k].update()
        // balls3[k].eachclear()
        }else{
            balls3.splice(k,1)
        }
    }

    for(var k = 0 ; k < balls4.length ; k++) {
        if(balls4[k].exist) {
            balls4[k].draw()
        balls4[k].update()
        // balls4[k].eachclear()
        }else{
            balls4.splice(k,1)
        }
    }
    var ballnum = balls.length + balls2.length + balls3.length + balls4.length ;
    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = '#fff'
    ctx.font = '20px Verdana'
    ctx.fillText('共有' +parseInt( ballnum) + '个小球',260,30)
    var circle = null
    // if(!circle) {
    //  circle = new Circle(circlex,circley,circlesize,'#fff')
    //  circle.draw()
    // }
    // if(leftpresent) {
    //     circlex -= 5
    // }else if(rightpresent) {
    //     circlex += 5
    // }else if(upPressed) {
    //     circley -= 5
    // }else if(downPressed) {
    //     circley += 5
    // }
    // psition()
    requestAnimationFrame(loop)
   }
   
loop()

setInterval(function() {
    var n = new Date().getSeconds(),
        cnt = n%4 ;
    for(var i = 0 ; i < balls.length ; i++) {
        if(Math.abs(balls[i].vx) < star*6) {
            if(balls[i].vx <= 0) {
                balls[i].vx -= star/4;
            }else{
                balls[i].vx += star/4;
            }
        }else{
            balls[i].vx /= 6
        }
        
        if(Math.abs(balls[i].vy) < star*6) {
            if(balls[i].vy <= 0) {
                balls[i].vy -= star/5;
            }else{
                balls[i].vy += star/5;
            }
        }else{
            balls[i].vy /= 6
        }
    }
    switch(cnt) {
        case 0:
            if(balls.length < 25) {
                ball = new Ball(
                    11,
                    randomsize(11,width - 11),
                    1,
                    1,
                    randomsize(7.5,10),
                    randomcolor(),
                    true
                )
                balls.push(ball)
               }
               break;
        case 1:
            if(balls2.length < 25) {
                ball2 = new Ball(
                    width - 11,
                    randomsize(11,width - 11),
                    1,
                    1,
                    randomsize(7.5,10),
                    randomcolor(),
                    true
                )
                balls2.push(ball2)
            }
               break;
        case 2:
            if(balls3.length < 25) {
                ball3 = new Ball(
                    randomsize(11,width - 11),
                    height - 11,
                    1,
                    1,
                    randomsize(7.5,10),
                    randomcolor(),
                    true
                )
                balls3.push(ball3)
            }
               break;
        case 3:
            if(balls4.length < 25) {
                ball4 = new Ball(
                    randomsize(11,width - 11),
                    11,
                    1,
                    1,
                    randomsize(7.5,10),
                    randomcolor(),
                    true
                )
                balls4.push(ball4)
            }
               break;
    }
},1000)
















