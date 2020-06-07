var li = document.querySelectorAll('li'),
    starbtn = document.querySelector('a'),
    selctor = document.getElementsByClassName('selctor'),
    rdmin = 80,
    rdmax = 60,
    linum = 8 ,
    zro = 0 ,
    randomnum = Math.floor(Math.random()*60) + 8,
    randomSize = Math.floor(Math.random()*8),
    turns = Math.floor(randomnum/8),
    cir = 3.14 ;
    
starbtn.addEventListener('click',lottery)

function lottery() {
    var count = randomnum%linum,
        idx = randomSize ;
    run = setInterval(function() {
        if(zro < randomnum) {
            for(var i = 0 ; i < li.length ; i++) {
                li[i].className = ''
            }
            zro ++ ;
            idx ++ ;
            var cntidx = idx%linum ;
            switch(cntidx) {
                case 1:
                    cntidx = 3
                    break ;
                case 2:
                    cntidx = 5
                    break;
                case 3:
                    cntidx = 6
                    break;
                case 4:
                    cntidx = 7
                    break;
                case 5:
                    cntidx = 4
                    break;
                case 6:
                    cntidx = 2
                    break;
                case 7:
                    cntidx = 1
                    break;
                default:
                    break;
            }
            li[cntidx].className = 'selctor'
        }if(zro == randomnum) {
            clearInterval(run)
            switch(cntidx) {
                case 0:
                    cntidx = 1
                    break ;
                case 1:
                    cntidx = 8
                    break ;
                case 2:
                    cntidx = 7
                    break;
                case 3:
                    cntidx = 2
                    break;
                case 4:
                    cntidx = 6
                    break;
                case 5:
                    cntidx = 3
                    break;
                case 6:
                    cntidx = 4
                    break;
                case 7:
                    cntidx = 5
                    break;
                default:
                    break;
            }
            turns = Math.floor(randomnum/8)
            console.log('恭喜你中了' + cntidx + '等奖')
            console.log()
            randomnum = Math.floor(Math.random()*rdmin) + rdmax
            randomSize = count ;
            zro = cntidx;
            rdmin = 80
            console.log(cntidx)
        }
    },rdmin)
}

