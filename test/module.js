var body = document.documentElement,
    fix = document.getElementById('fixedmenu'),
    hden = document.getElementById('search-hidden-wrap'),
    _top = 597 ,
    _topfix = 75,
    back = document.getElementById('back'),
    vy = 25,
    toph = 267;

setInterval(function() {
    if(body.scrollTop >= _top - _topfix*2) {
        fix.style.top =  _topfix + 'px'
        fix.style.position = 'fixed'
        back.style.display = 'inherit'
    }else{
        fix.style.position = 'absolute'
        fix.style.top = _top - _topfix + 'px'
        back.style.display = 'none'
    }
},10)

setInterval(function() {
    if(body.scrollTop >= toph) {
        hden.style.display = 'inherit'
    }else{
        hden.style.display = 'none'
    } 
},10)

back.addEventListener('click',backtop)

function backtop() {
    m = setInterval(function () {
        if(body.scrollTop > 0) {
            body.scrollTop -= 25
        }else{
            clearInterval(m)
        }
    },5)
}