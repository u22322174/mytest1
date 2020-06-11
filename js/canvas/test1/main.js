var canvas = document.querySelector('canvas'),
ctx = canvas.getContext('2d'),
style = getComputedStyle(canvas,null),
width = canvas.width = parseInt(style.width),
height = canvas.height = parseInt(style.height),
x = 0,
y = 0,
out = null,
imgs = [],
blowup = document.querySelector('.icon-fangda'),
shrink = document.querySelector('.icon-suoxiao'),
imgwidth = 200

blowup.addEventListener('click',function(){
    imgwidth += 20
})
shrink.addEventListener('click',function(){
    imgwidth -= 20
})



