var body = document.documentElement,
    ctn = document.getElementsByClassName('textarea')[0],
    style = getComputedStyle(ctn,null),
    turnup = document.getElementById('turn-up'),
    bdy = document.querySelector('body'),
    turndown = document.getElementById('down'),
    stp = document.getElementById('stop'),
    num = 700,
    m = null ;

turnup.addEventListener('click',up)
turndown.addEventListener('click',down)

function up() {
   if(!m) {
    m = setInterval(function() {
        if(body.scrollTop < parseInt(style.height) - parseInt(num)) {
            body.scrollTop += 2
        }else{
          clearInterval(m)     
        }
        stp.addEventListener('click',stop)
        function stop() {
            clearInterval(m)
            m = null ;
        }
        
    },10)
   }
}

function down() {
    if(!m) 
    m = setInterval(function() {
        if(body.scrollTop > 0) {
            body.scrollTop -= 2
        }else{
          clearInterval(m)     
        }
        
    
        stp.addEventListener('click',stop)
        function stop() {
            clearInterval(m)
            m = null ;
        }
        
    },10)
}