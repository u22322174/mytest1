var lft = 520,
    body = document.querySelector('body'),
    fix1 = document.getElementById('bn_fixed1'),
    fix2 = document.getElementById('bn_fixed2'),
    starwdh = 1295,
    endwdh = 1205,
    lftstar = -316,
    lftend = -360,
    lft = -195 ;
    
m = setInterval(function Justment() {
    var innerw = window.innerWidth ;
    if(innerw <= starwdh && innerw >= endwdh) {
        fix1.style.left = (lftstar - (starwdh - innerw)/2) + 'px'
        fix2.style.right = (lftstar - (starwdh - innerw)/2) + 'px'
    }else if(innerw <= endwdh) {
        fix1.style.left = lftend + 'px'
        fix2.style.right = lftend + 'px'
    }else{
        fix1.style.left = lft +'px'
        fix2.style.right = lft +'px'
    }

    
},10)   



 