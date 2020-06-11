//引入jQuery实现图片的【选择】和【添加】
var exist = false,
    mycanvas = document.querySelector('.mycanvas'),
    icons = []
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
      sca.id = 'scale'
      mybox.id = 'box' 
      mybox.className = 'box' + index
      // icon.className='iconfont icon-icon--shanchu' + ' ' + 'icon' + index
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
        icons.push(index)
        // console.log($('.icon-icon--shanchu')[index],$('.box' + index)[0])
        index ++
      }
    }
    box = document.querySelectorAll('#box')
    scale = document.querySelectorAll('#scale')
    move()
  })
})


