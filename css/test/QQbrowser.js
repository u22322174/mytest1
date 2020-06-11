var ball = document.getElementById('Suspendedball'),
    body = document.documentElement , initH = 434
   

setInterval(function() {
    if(body.scrollTop >= 0 && body.scrollTop < initH) {
        ball.style.opacity = '0'
    }
    else {
        ball.style.opacity = ((body.scrollTop - initH)/100).toString()
    }
},20)




ball.addEventListener('click',back)

function back() {
    m = setInterval(function() {
        if(body.scrollTop > 0) {
            body.scrollTop -= 25
        }else{
            clearInterval(m)
        }
    },1)
}

