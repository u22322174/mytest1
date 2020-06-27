var container = document.getElementById('container'),
 li = container.getElementsByTagName('li'),
 pp = document.getElementById('pp'),
 aa = document.querySelector('a'),
 sum = null,
 li1 = document.getElementsByClassName('li1'),
 ul1 = document.getElementsByClassName('ul1'),  //类选择器存在于css当中  该ul1是在css文件中寻找类选择器  而不是在HTML文件中查找的
 li2 = document.getElementsByClassName('li2')

 var i = -1,
 liLen = li.length,
 isRunning = false,
 n = Math.floor(Math.random()*li.length) + 40

function start() {
    if(isRunning) return true
    isRunning = !isRunning
   // n =  Math.floor(Math.random()*li.length) +  (Math.floor(Math.random()*li.length) + 1) * 10
   var index = myrandom()
   console.log('恭喜你中了' + (index + 1) + '等奖')
    n = index + (Math.floor(Math.random()*li.length) + 1) * 8
    if( i === -1 ) i = Math.floor(Math.random()*li.length)
    if(i<n + 1){
        sum = setInterval(function(){
            for(j = 0; j < liLen; j++) {
                li[j].className = ''
            }
            var count = i % liLen
            switch(count) {
                case 3:
                    count = 4
                    break;
                case 4:
                    count = 7
                    break;
                case 5:
                    count = 6
                    break;
                case 6:
                    count = 5
                    break;
                case 7:
                    count = 3
                    break;
                default:
                    break;
            }
            li[count].className = 'li2';
            i++;

            if(i === n + 1) {
                clearInterval(sum)
               i = i % li.length
               isRunning = !isRunning
            }
        } ,140)
    }
}


