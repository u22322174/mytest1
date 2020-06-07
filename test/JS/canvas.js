var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    style = getComputedStyle(canvas,null),
    width = canvas.width = parseInt(style.width),
    height = canvas.height = parseInt(style.height),
    n = 0 ;

    var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    style = getComputedStyle(canvas,null),
    width = canvas.width = parseInt(style.width),
    height = canvas.height = parseInt(style.height),
    n = 0 ;

ctx.translate(100,50)

ctx.save()        //脸
ctx.beginPath()
ctx.arc(50,50,25,1.5,1.5*Math.PI)
ctx.fillStyle = 'yellow'
ctx.fill()
ctx.restore()

ctx.save()        //嘴巴
ctx.beginPath()
ctx.arc(40,50,18,0,0.7*Math.PI)
ctx.strokeStyle = '#fff'
ctx.lineCap = 'round'
ctx.lineWidth = 5
ctx.stroke()
ctx.restore()

ctx.save()        //头顶装饰
ctx.beginPath()
ctx.fillStyle = 'brown'
ctx.arc(60,-10,7,0,2*Math.PI)
ctx.moveTo(60,-10)
ctx.lineTo(70,60)

ctx.lineWidth = 3
ctx.strokeStyle = 'yellow'
ctx.stroke()
ctx.fill()
ctx.restore()

ctx.save()        //头顶装饰
ctx.beginPath()
ctx.fillStyle = 'brown'
ctx.arc(90,0,6,0,2*Math.PI)
ctx.moveTo(90,0)
ctx.lineTo(70,60)

ctx.lineWidth = 3
ctx.strokeStyle = 'yellow'
ctx.stroke()
ctx.fill()
ctx.restore()


ctx.save()        //脸
ctx.beginPath()
ctx.fillStyle = 'yellow'
ctx.moveTo(50,25)
ctx.lineTo(120,30)
ctx.lineTo(120,70)
ctx.lineTo(50,75)
ctx.fill()
ctx.restore()

ctx.save()        //耳朵
ctx.beginPath()
ctx.fillStyle = 'yellow'
ctx.arc(145,30,30,3,1.5*Math.PI)
ctx.fill()
ctx.restore()

ctx.save()        //耳朵
ctx.beginPath()
ctx.fillStyle = 'yellow'
ctx.arc(118,-1,28,0,0.5*Math.PI)
ctx.fill()
ctx.restore()

ctx.save()        //耳朵
ctx.beginPath()
ctx.fillStyle = 'yellow'
ctx.arc(130,30,30,3,1.5*Math.PI)
ctx.fill()
ctx.restore()

ctx.save()        //耳朵
ctx.beginPath()
ctx.fillStyle = 'yellow'
ctx.arc(102,-1,28,0,0.5*Math.PI)
ctx.fill()
ctx.restore()

ctx.save()        //耳朵
ctx.beginPath()
ctx.fillStyle = 'brown'
ctx.arc(138,22,15,3,1.5*Math.PI)
ctx.fill()
ctx.restore()

ctx.save()        //耳朵
ctx.beginPath()
ctx.fillStyle = 'brown'
ctx.arc(122,8,15,0,0.5*Math.PI)
ctx.fill()
ctx.restore()

ctx.save()        //耳朵
ctx.beginPath()
ctx.fillStyle = 'brown'
ctx.arc(123,22,15,3,1.5*Math.PI)
ctx.fill()
ctx.restore()

ctx.save()        //耳朵
ctx.beginPath()
ctx.fillStyle = 'brown'
ctx.arc(107,8,15,0,0.5*Math.PI)
ctx.fill()
ctx.restore()

for(var i = 0 ; i < 5 ; i++) {
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(120,60 + 30*i)
    ctx.lineTo(135,60 + 30*i)
    ctx.strokeText(180 - 20*i,137,62 + 30*i)
    ctx.strokeStyle = '#333'
    ctx.stroke()
    ctx.restore()
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(130,75 + 30*i)
    ctx.lineTo(140,75 + 30*i)
    ctx.font = '8px Verdana'
    ctx.strokeText(170 - 20*i,140,77 + 30*i)
    ctx.strokeStyle = '#333'
    ctx.stroke()
    ctx.restore()
    ctx.save()
    ctx.beginPath()
    ctx.arc(120,75 + 30*i,8,-1.5,0.5*Math.PI)
    ctx.strokeStyle = 'yellow'
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.restore()
}

ctx.save()        //脖子
ctx.beginPath()
ctx.fillStyle = 'yellow'
ctx.fillRect(100,50,20,150)
ctx.fill()
ctx.restore()

ctx.save()        //眼睛
ctx.beginPath()
ctx.arc(70,50,10,0,2*Math.PI)
ctx.fillStyle = '#fff'
ctx.fill()
ctx.restore()

ctx.save()        //眼珠
ctx.beginPath()
ctx.arc(70,50,7,0,2*Math.PI)
ctx.fillStyle = 'brown'
ctx.fill()
ctx.restore()

ctx.save()        //身体
ctx.beginPath()
ctx.fillStyle = 'yellow'
ctx.fillRect(100,200,70,40)
ctx.arc(170,220,20,0,2*Math.PI)
ctx.fill()
ctx.restore()

ctx.save()        //腿
ctx.beginPath()
ctx.strokeStyle = 'yellow'
ctx.moveTo(105,210)
ctx.lineTo(105,290)
ctx.moveTo(125,210)
ctx.lineTo(125,290)
ctx.moveTo(155,210)
ctx.lineTo(155,290)
ctx.moveTo(175,210)
ctx.lineTo(175,290)
ctx.lineWidth = 5
ctx.lineCap = 'round'
ctx.stroke()
ctx.restore()

ctx.save()        //尾巴
ctx.beginPath()
ctx.arc(193,233,20,-2.5,0*Math.PI)
ctx.strokeStyle = 'yellow'
ctx.lineWidth = 3
ctx.lineCap = 'round'
ctx.stroke()
ctx.restore()















