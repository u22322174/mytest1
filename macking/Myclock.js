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

ctx.translate(200,200)

function Clock(x,y,size) {
    this.x = x
    this.y = y
    this.size = size
}

Clock.prototype.update = function() {
    var sec = new Date().getSeconds(),
        min = new Date().getMinutes(),
        hou = new Date().getHours()        
        
        ctx.clearRect(-(this.x),-(this.y),width,height)

        ctx.save()
        ctx.beginPath()
        ctx.arc(0,0,this.size,0,2*Math.PI)
        ctx.lineWidth = 2
        ctx.fill()
        ctx.restore()

        ctx.save()
        ctx.beginPath()
        ctx.arc(0,0,140,140,0,2*Math.PI)
        ctx.lineWidth = 2
        ctx.fillStyle = "yellow"
        ctx.fill()
        ctx.restore()
        
        ctx.save()
        for(var i = 0 ; i < 60 ; i++) {
            ctx.beginPath()
            ctx.rotate(Math.PI/30)
            ctx.moveTo(150,0)
            ctx.lineTo(137,0)
            ctx.lineCap = "round"
            ctx.stroke()

        }
        for(var i = 0 ; i < 12 ; i++) {
            ctx.beginPath()
            ctx.rotate(Math.PI/6)
            ctx.moveTo(145,0)
            ctx.lineTo(137,0)
            ctx.lineWidth = 5
            ctx.lineCap = "round"
            ctx.stroke()
        }
        ctx.restore()
    
    // ctx.beginPath()
    // ctx.moveTo(0,0)
    // ctx.lineTo(50,0)
    // ctx.rotate(hou*(Math.PI/6))
    // ctx.lineWidth = 8
    // ctx.lineCap = "round"
    // ctx.stroke()
    ctx.save()                  
    ctx.beginPath()
    ctx.rotate(min*(Math.PI/30))
    ctx.moveTo(0,-80)
    ctx.lineTo(0,20)
    ctx.lineWidth = 5
    ctx.lineCap = "round"
    ctx.fillStyle = 'purple'
    ctx.stroke()   
    ctx.restore()
    
    ctx.save()
    ctx.beginPath()
    ctx.rotate(sec*(Math.PI/30))
    ctx.moveTo(0,30)
    ctx.lineTo(0,-100)
    ctx.lineWidth = 2
    ctx.lineCap = "round"
    ctx.stroke() 
    ctx.restore()

    ctx.save()
    ctx.beginPath()
    ctx.rotate(hou*(Math.PI/6))
    ctx.moveTo(0,-50)
    ctx.lineTo(0,20)
    ctx.lineWidth = 6
    ctx.lineCap = "round"
    ctx.stroke()
    ctx.restore()
}

var clock = new Clock(200,200,150)

function date() {
    clock.update()
}

setInterval(date,1000)





    
