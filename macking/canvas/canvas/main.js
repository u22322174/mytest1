var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'), style = getComputedStyle(canvas, null),  //获取画布的css样式
    width = canvas.width = parseInt(style.width),
    height = canvas.height = parseInt(style.height);

    console.log(parseInt(style.height))
    

var randomSize = function(min, max) {                        //函数 randomSize() 可以储存在对象当中 

    return Math.floor(Math.random() * (max - min)) + min + 1     //通过 return 返回值  这样在我们输出函数的时候结果才会返还指定的的数值
},randomColor = function() {
    return 'rgb(' + randomSize(0, 255) + ', ' + randomSize(0, 255) + ', ' + randomSize(0, 255) + ')'
}

console.log(randomSize(0,225))

function Ball(x, y, vx, vy, size, color) {  //创建了一个新的构造函数  一个对象模板
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
    this.size = size
    this.color = color
}

Ball.prototype.draw = function() {    //通过对象原型为构造函数Ball() 创建了属性和方法
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
    ctx.fill()
    return this
}

Ball.prototype.update = function() {      //通过对象原型为构造函数Ball() 创建了属性和方法
    if((this.x + this.size) >= width || (this.x - this.size) <= 0) {
        this.vx = -(this.vx)
        this.color = randomColor()
    }
    if((this.y - this.size) <= 0 || (this.y + this.size) >= height) {
        this.vy = -(this.vy)
        this.color = randomColor()
    }
    this.x += this.vx         
    this.y += this.vy
    return this
}

var ball = null
var loop = function() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
    ctx.fillRect(0, 0, width, height)
    if(!ball)
        ball = new Ball(        //JavaScript在没有Ball()实例时自动创建了一个新的实例 ball()

        randomSize(5, width - 5),   //所有的 对象 都可以在该对象的 原型 中继承 属性 和 方法

        randomSize(5, height - 5),
        0.98,
        0.98,
        randomSize(5, 10),
        randomColor()
    )
    ball.draw().update()       //一些的做的执行代码要保存在函数内
    requestAnimationFrame(loop) 
}

loop()
setInterval(function() {
       if(ball){
        if(ball.vx < 0) ball.vx --
        else ball.vx ++
        if(ball.vy < 0) ball.vy --
        else ball.vy ++
       }
}, 5000)       

console.log(ball.x,ball.y)

