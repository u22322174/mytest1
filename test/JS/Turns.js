var star = document.getElementById('i3'),
    turns = document.getElementById('i2'),
    aniname = 'rtt',
    randomSize = Math.floor(Math.random()*77) + 7,
    zro = 0,
    rttmin = -51.4,
    str = 0.5 ;

star.addEventListener('click',lottary)

function lottary() {
    i2.style.animationName = 'rtt'
    trn = setInterval(function() {
        if(zro < randomSize) {

            zro++ ;
            turns.style.animationDuration = str + 's'
            console.log(str)
        }else{
            var count = zro%7 ;
            clearInterval(trn)
            i2.style.animationName = ''
            zro = 0 ;
            turns.style.transform = 'rotate(' + rttmin/2 + 'deg)'
        }
    },80)
}