var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    dv = document.getElementsByClassName('dv'),
    style = getComputedStyle(canvas,null),
    width = canvas.width = parseInt(style.width),
    height = canvas.height = parseInt(style.height),
    randomsize = function(min,max) {
        return Math.floor(Math.random()*(max - min)) + min + 1
    },randomcolor = function() {
        return 'rgba(' + randomsize(0,225) + ',' + randomsize(0,255) + ',' + randomsize(0,225) + Math.random() +')'
    }   

    function clock(){
        var now = new Date();
        ctx.save();
        ctx.clearRect(0,0,400,400);
        ctx.translate(200,200);
        ctx.scale(0.4,0.4);
        ctx.rotate(-Math.PI/2);
        
        ctx.lineWidth = 8;
        
        // Hour marks
    
      
        // Minute marks
        
       
        var sec = now.getSeconds();
        var min = now.getMinutes();
        var hr  = now.getHours();
        ctx.beginPath()
        ctx.arc(0,0,300,0,2*Math.PI)
        ctx.strokeStyle = 'green'
        ctx.stroke()
       
      
        ctx.fillStyle = "black";
      
        // write Hours
        ctx.save();
        ctx.rotate( hr*(Math.PI/6))
        ctx.lineWidth = 14;
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(120,0);
        ctx.strokeStyle = 'red'
        ctx.stroke();
        ctx.restore();
      
        // write Minutes
        ctx.save();
        ctx.rotate( (Math.PI/30)*min)
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(150,0);
        ctx.strokeStyle = 'yellow'
        ctx.stroke();
        ctx.restore();
       
        // Write seconds
        ctx.save();
        ctx.rotate(sec * Math.PI/30);
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(180,0);
        ctx.strokeStyle = 'black'
        ctx.stroke();
        ctx.restore();
      
        
      
        ctx.restore();
      
        window.requestAnimationFrame(clock);
      }
      
      window.requestAnimationFrame(clock);
