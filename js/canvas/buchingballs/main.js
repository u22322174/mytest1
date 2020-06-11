var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    style = getComputedStyle(canvas,null),
    width = canvas.width = parseInt(style.width),
    height = canvas.height = parseInt(style.height),
    randomSize = function(a,b) {
        return Math.floor(Math.random()*(b - a)) + a ;
    },randomColor = function() {
        return 'rgb(' + randomSize(0,225) + ',' + randomSize(0,225) + ',' + randomSize(0,225) + ')'
    };

function Ball(x,y,vx,vy,size,color,exist) {      
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
    this.size = size
    this.color = color
    this.exist = exist
}

Ball.prototype.draw = function() {         
    ctx.save()
    ctx.beginPath()
    ctx.arc(this.x,this.y,this.size,0,2*Math.PI)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.restore()
    return this
}

Ball.prototype.update = function() {
    var addx = this.x + this.size
    var addy = this.y + this.size
    var countx = this.x - this.size
    var county = this.y - this.size
    addx = addx >= width ?  this.vx = -(this.vx) : this.vx = this.vx;
    countx = countx <= 0 ? this.vx = -(this.vx) : this.vx = this.vx;
    addy = addy >= height ? this.vy = -(this.vy) : this.vy = this.vy;
    county = county <= 0 ? this.vy = -(this.vy) : this.vy = this.vy;
    // if(this.x + this.size >= width || this.x - this.size <= 0) {
    //     this.vx = -(this.vx)
    //     this.color = randomColor()
    //     // this.size = randomSize(7.5,10)
    // }
    // if(this.y + this.size >= height || this.y - this.size <= 0) {
    //     this.vy = -(this.vy)
    //     this.color = randomColor()
    // } 
    this.x += this.vx
    this.y += this.vy
    return this
}

Ball.prototype.Collision = function() {     //定义碰撞
    for(var i = 0 ; i < course1.length ; i++) {
        if(!(this === course1[i])) {
            if((this.x - course1[i].x)**2 + (this.y - course1[i].y)**2 <= (this.size + course1[i].size)**2) {
                this.color = randomColor()
                // this.size = randomSize(7.5,11)
            }   
        }
    }
    return this
}

Ball.prototype.offect = function() {    //定义碰撞抵消
    course1.forEach(
        (item,index) => {
            if(!(this === item) && (this.x - item.x)**2 + (this.y - item.y)**2 <= (this.size + item.size)**2) {
                this.exist = !(this.exist)
                item.exist = !(item.exist)
                course1.splice(index,1)
                course1.splice(course1.indexOf(this),1)
            }
        }
    )
    return this
}

var ball = null,
    star = 1,
    course1 = []

function loop() {
    
    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = 'rgb(0,0,0,0.2)'
    ctx.fillRect(0,0,width,height)
    ctx.restore()

    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = '#fff'
    ctx.fillText(course1.length + ' ' +  'balls',width/2,height/2)
    ctx.restore()

    // if(!beat) {
    //     beat = new Botany(
    //         randomSize(20,width - 20),
    //         randomSize(20,height - 20),
    //         randomSize(15,20),
    //         randomColor()
    //     )
    // }

    // beat.draw()
    
    if(!ball) {
        ball = new Ball(
            11,
            randomSize(11,width - 11),
            1,
            1,
            randomSize(7.5,10),
            randomColor(),
            true
        )
        course1.push(ball)
    }
   for(var i = 0 ; i < course1.length ; i++) {
    course1[i].draw().update().Collision()
    // course1[i].offect()
   }
    requestAnimationFrame(loop)
}

loop()

setInterval(function() {
    for(var i = 0 ; i < course1.length ; i++) {
       if(course1[i].vx < star*12) {
        if(course1[i].vx < 0) {
            course1[i].vx -= star/4 
        }else{
            course1[i].vx += star/4
        }
       }else{
           course1[i].vx = star
       }
        if(course1[i].vy < star*12) {
            if(course1[i].vy < 0) {
                course1[i].vy -= star/4
            }else{
                course1[i].vy += star/4
            }
        }else{
            course1[i].vy = star
        }
    }
    if(course1.length < 30) {
        ball = new Ball(
            11,
            randomSize(11,width - 11),
            1,
            1,
            randomSize(7.5,10),
            randomColor(),
            true
        )
        course1.push(ball)
       }
},5000)


