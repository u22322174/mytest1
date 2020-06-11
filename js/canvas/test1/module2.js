var myimg = null,
ratio = null,
myposition = false,
i = 0,
image = null,
movex = null,
movey = null

$(document).ready(function(){  
$('.file').change(function(e){
  console.log('file changed')
var name = e.currentTarget.files[0].name
var img = document.createElement("img")
myimg = img
$('.imgs').append(img)
// $('img').hide()
setTimeout(function(){
ratio = parseFloat(myimg.naturalHeight/myimg.naturalWidth)
console.log(ratio)
},50)
img.src = './images/desk/' + name
console.log(img)
var m = setInterval(function(){
ctx.clearRect(0,0,width,height)
ctx.drawImage(img,x,y,imgwidth,imgwidth*ratio)
$('.purpose').click(function(){
    clearInterval(m)
    while(i < 1) 
    {
        i ++ 
        myposition = true
        console.log('Ok ! 图片已固定啦 !')
        setTimeout(function(){
          i = 0
          console.log('i:',i)
        },500)
    }
})
},10)
})
})






