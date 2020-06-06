function Botany(x,y,radius,color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
}

Botany.prototype.draw = function() {
    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(this.x,this.y,this.radius,0,2*Math.PI)
    ctx.fill()
    ctx.restore()

    return this
}

var beat = null