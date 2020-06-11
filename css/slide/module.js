var fix = document.getElementById('fix'),
    rgh = 300;
setInterval(function() {
    var maxwdh = 1536,
        wdh = innerWidth;
        fix.style.right = rgh - (maxwdh - wdh) /2 + 'px'
},5)