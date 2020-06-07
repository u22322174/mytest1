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

function Snow(x,y,vx,vy,raduis,color,inplace) {
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
    this.raduis = raduis
    this.color = color
    this.inplace = inplace
}

Snow.prototype.draw = function() {
    ctx.save()
    ctx.beginPath()
    ctx.arc(this.x,this.y,this.raduis,0,2*Math.PI)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.restore()
}

Snow.prototype.Accumulation = function() {
    if(this.inplace == false) {
        if(this.y < height - this.raduis) {
            this.y += this.vy
        }else{
            this.inplace = true
        }
    }
}

function Snowman() {
    
}

var snow = square = new Snow(
    randomSize(0,width - 30),
    0,
    0,
    1,
    randomSize(3,6),
    '#fff',
    false
),
    container = [],
    ctn2 = [];

container.push(square)

function loop() {
    
    var n = 0 ;
    ctx.save()
    ctx.beginPath()
    ctx.rect(0,0,width,height)
    ctx.fillStyle = 'rgb(0,0,0.2)'
    ctx.fill()
    ctx.restore()

    for(var i = 0 ; i < container.length ; i++) {
        if(container[i].inplace == false) {
            container[i].draw()
            container[i].Accumulation()
        }else{
            container[i].inplace == true
            n += 0.2 ;
        }
    }

    ctx.save()
    ctx.beginPath()
    ctx.rect(0,height - n,width,n)
    ctx.fillStyle = '#fff'
    ctx.fill()
    ctx.restore()

    for(var i = 0 ; i < 50 ; i++) {
        ctx.save()
    ctx.beginPath()
    ctx.arc(8*i + 4,height - n,4,0,2*Math.PI)
    ctx.fillStyle = '#fff'
    ctx.fill()
    ctx.restore()
    }

    requestAnimationFrame(loop)
}

loop()

var n = 0 ;
setInterval(function() {
    var snow = new Snow(
        randomSize(0,width - 30),
        0,
        0,
        1,
        randomSize(3,6),
        '#fff',
        false
    )
    container.push(snow)
},1000)

