var exist = false,
    mycanvas = document.querySelector('.mycanvas')
$(document).ready(function(){
$('.submit').click(function(){
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
      sca.id = 'scale'
      mybox.id = 'box' 
      mybox.className = 'box' + index
      img.src = name
      if(index > 3) {
        mybox = null
        sca = null
        img = null
        alert('目前最多只能容纳' + index +'张图哦 ！')
      }else {
        $('#father').append(mybox)
        mybox.append(img,sca)
        mybox.style.left = index*100 + 'px'
        mybox.style.top = '0'
        index ++
      }
    }
    box = document.querySelectorAll('#box')
    scale = document.querySelectorAll('#scale')
    move()
  })
})