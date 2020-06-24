//引入jQuery实现图片的【选择】和【添加】
var exist = false,
    mycanvas = document.querySelector('.mycanvas'),
    ratios = []

$(document).ready(function(){
$('.submit').click(function(){
  $('.hidden').hide()
html2canvas(document.querySelector("#father")).then(canvas => {
    if(!exist) {
      canvas.className = 'mycanvas'
      document.querySelector('.canvas-wrap').appendChild(canvas);
      exist = true
    }else{
      $('canvas').remove()
      document.querySelector('.canvas-wrap').appendChild(canvas);
      canvas.className = 'mycanvas' 
    }
});
})
})
var index = 0
$(document).ready(function(){
  $('.file').change(function(e){
    var name = './images/desk/' + e.currentTarget.files[0].name
    if(!(name === '')) {
      var mybox = document.createElement('div')
      var sca = document.createElement('div')
      var img = document.createElement('img')
      var icon = document.createElement('i')
      var style = getComputedStyle(img,null)
      sca.id = 'scale'
      mybox.id = 'box' 
      mybox.className = 'box' + index + ' child'
      img.src = name
      if(index > 9) {
        mybox = null
        sca = null
        img = null
        alert('目前最多只能容纳' + index +'张图哦 ！')
      }else {
        $('#father').append(mybox)
        mybox.append(img,sca,icon)
        $('.box' + index).css({"left": index*30 + 'px',"top" : '0',"z-index" : zindex})
        index ++
        setTimeout(function(){
          var ratio = parseInt(style.height)/parseInt(style.width)
          ratios.push(ratio)
          console.log(ratios)
        },20)
      }
    }
    box = document.querySelectorAll('#box')
    scale = document.querySelectorAll('#scale')
    move()
  })
})

var idx = 0
$(document).ready(function(){
    $('.create').click(function(){
        $('.hidden').show()
        $('.hidden').css({"z-index" : "60"})
        move()
      })
    $('.sure').click(function(){
        var p = document.createElement('p')
        var value =$('.frame')[0].value
        p.innerText=value
        $('#father').append(p)
        p.className='p'+idx + ' child'
        $('.p' + idx).css({"top" : movey + 'px',"left" : movex + 'px',"color":color.value,"font-size": size.value,"font-weight" : blod.value,"font-family": fontfamily.value})
        idx++
        $('.hidden').hide()
        $('.frame')[0].value=''
        $('.hidden').css({"left": randomSize(0,width - 200),"top" : randomSize(0,height - 20)})
    })
    $('.reset').click(function(){
      $('#father').children(".child").remove()
      index = 0
      idx = 0
      ratios = []
      console.log('index: ',index,'idx: ',idx)
    })
})

//设定一个计时器，动态调节画布宽高
setInterval(function(){
  var mycanvas = document.querySelector('.mycanvas'),
      wrap = document.querySelector('.canvas-wrap'),
      style = getComputedStyle(wrap,null),
      fa = document.querySelector('#father')
  if(mycanvas) {
    mycanvas.style.width = parseInt(style.width) + 'px'
  }
  fa.style.width = parseInt(innerWidth)*0.4 + 'px'
},10)



