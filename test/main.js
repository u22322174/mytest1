var imgs1 = document.getElementById('imgs1'),
    imgs2 = document.getElementById('imgs2'),
    imgs = document.getElementById('imgs'),
    style1 = getComputedStyle(imgs1,null),
    style2 = getComputedStyle(imgs2,null),
    wdh = 520,
    n = 0,
    lft1 = parseInt(style1.left),
    max = 3,
    umg = document.getElementById('u-img'),
    li = umg.querySelectorAll('li'),
    f40 = document.getElementsByClassName('f40'),
    txt = document.getElementsByClassName('txt')[0],
    style = getComputedStyle(txt,null),
    dsp = style.display,
    i = document.getElementById('marking'),
    logo1 = document.getElementById('logo1'),
    logo2 = document.getElementById('logo2'),
    o = 0 ; 
    
    li[0].style.backgroundColor = '#f40'

m = setInterval(change,5000)
k = setInterval(logo,8000)

function logo() {
    o += 1 ;
    var cnt = o%5
    if(o) {
        logo1.style.left = -cnt*wdh + 'px'
        logo2.style.left = (2 - cnt)*wdh + 'px'
    }
    switch(cnt) {
        case 0:
            logo2.style.left = wdh + 'px'
            logo1.style.left = -wdh + 'px'
            logo2.style.zIndex = '1'
        break;
        case 3:
            logo1.style.left = wdh + 'px'
            logo2.style.zIndex = '2'
            logo1.style.zIndex = '2'
            break;
        case 4:
            logo1.style.left = wdh*0 + 'px'
            
            break;
    }
    if(k == 5) {
        k = 1
    }

}

function change() {
    n += 1
    var count = n%5
    
    if(n) {
        imgs1.style.left = -count*wdh + 'px'
        imgs2.style.left = (2 - count)*wdh + 'px'
    }
    
    switch(count) {
        case 0:
            imgs2.style.left = wdh + 'px'
            imgs2.style.zIndex = '1'
            imgs1.style.left = -wdh + 'px'
        break;
        case 3:
            imgs2.style.zIndex = '2'
            imgs1.style.left = wdh + 'px'
            imgs1.style.zIndex = '2'
            break;
        case 4:
            imgs1.style.left = wdh*0 + 'px'
            imgs2.style.zIndex = '2'
            break;
    }
    if(n == 5) {
        n = 1
    }

    switch(count) {
        case 0:
            i.innerHTML = 2
            break;
        case 1:
            i.innerHTML = 2
            break;
        case 2:
            i.innerHTML = 3
            break;
        case 3:
            i.innerHTML = 4
            break;
        case 4:
            i.innerHTML = 1
            break;
    }

    if(n) {
        switch(n) {
            case 1:
                li[n].style.backgroundColor = '#f40'
                li[0].style.backgroundColor = ''
                break;
            case 2:
                li[n].style.backgroundColor = '#f40'
                li[1].style.backgroundColor = ''
                break;
            case 3:
                li[n].style.backgroundColor = '#f40'
                li[2].style.backgroundColor = ''
                break;
            case 4:
                li[0].style.backgroundColor = '#f40'
                li[n - 1].style.backgroundColor = ''
                break;
        }
    }
}


