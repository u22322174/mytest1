var btn = document.querySelector('.btn'),
    ipt = document.querySelector('.ipt'),
    color = document.querySelector('.colors'),
    size = document.querySelector('.sizes'),
    blod = document.querySelector('.blods'),
    family = document.querySelector('.familys'),
    purpose = document.querySelector('.purpose'),
    notes = [],
    x2 = 0,
    y2 = 0


    canvas.onmousedown = function(e) {  //直接通过点击获取坐标
        console.log('mousedown')
        x2 = e.offsetX 
        y2 = e.offsetY 
        console.log('x2:',x2,'y2:',y2)
        canvas.onmousemove = function(e) {
                  x = e.offsetX - 70
                  y = e.offsetY - 70
                  console.log('x:',x,'y:',y)
    }
    canvas.onmouseup = function() {
        canvas.onmousemove = null
        // canvas.onmousedown = null
    }

    canvas.onmouseleave = function() {
        canvas.onmousemove = null
        console.log('mouseleave')
    }
    }
    
function  Note(inner,x,y,size,blod,color,family) {
    this.inner = inner
    this.x = x
    this.y = y
    this.size = size.value
    this.blod = blod.value
    this.color = color.value
    this.family = family.value
}

Note.prototype.draw = function() {
    ctx.save()
    ctx.beginPath()
    ctx.font = this.size + ' ' + this.family
    ctx.fillStyle = this.color
    ctx.fillText(this.inner,this.x,this.y)
    ctx.restore()  
}

btn.addEventListener('click',function() {
    if(!x2 || !y2) {
        console.log('未获取坐标' + ' , ' + '请在画布上选择坐标')
    }else {
        var note = new Note(ipt.value,x2,y2 + 20,size,blod,color,family)
        if(myposition || !myimg) {
            notes.push(note)
        note.draw()
        console.log(notes)
        ipt.value = ''
        x2 = null
        y2 = null
        }else{
            console.log('请点击【确认】按钮确定图片位置')
        }
    }
})

