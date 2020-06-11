// box是装图片的容器,fa是图片移动缩放的范围,scale是控制缩放的小图标
var box = document.querySelectorAll("#box");
var fa = document.getElementById('father');
var scale = document.querySelectorAll('#scale');
var color = document.querySelector('.colors')
var size = document.querySelector('.sizes')
var blod = document.querySelector('.blods')
var fontfamily = document.querySelector('.familys')
var zindex = 1
var movex = null,
    movey = null
var randomSize = function(a,b) {
    return Math.floor(Math.random()*(b - a)) + a ;
}, style = getComputedStyle(fa,null),
   height = parseInt(style.height),width = parseInt(style.width)  

var move = function() {
    // 图片移动效果
    box.forEach(
        (item,index) => {
        item.onmousedown=function(ev) {
            if(index > 0) {
                zindex++
                item.style.zIndex=zindex+''
            }
            //调整图片的堆叠层次
            if(zindex >= 20) {
                box.forEach((item,index) => {
                    if(item.style.zIndex == 19) {
                        item.style.zIndex='1'
                    }else {
                        item.style.zIndex='2'
                    }
                })
                zindex='2'
            }

        console.log(zindex)
        var oEvent = ev; 
        // 浏览器有一些图片的默认事件,这里要阻止
        // oEvent.preventDefault();
        var disX = oEvent.clientX - item.offsetLeft; //oEvent.clientX代表鼠标相对于body的位置
        var disY = oEvent.clientY - item.offsetTop;
                                                    //(disX,disy)指的是id为father的div的左上角坐标
        console.log(disX,disY)
        fa.onmousemove=function (ev) {
            oEvent = ev;
            oEvent.preventDefault();
            var x = oEvent.clientX -disX;
            var y = oEvent.clientY -disY;  //(x,y)代表box相对在father上的坐标
            
    
            // 图形移动的边界判断
            x = x <= 0 ? 0 : x;
            x = x >= fa.offsetWidth-item.offsetWidth ? fa.offsetWidth-item.offsetWidth : x;
            y = y <= 0 ? 0 : y;
            y = y >= fa.offsetHeight-item.offsetHeight ? fa.offsetHeight-item.offsetHeight : y;
            item.style.left = x + 'px';
            item.style.top = y + 'px';

            movex = x
            movey = y
        }
        // 图形移出父盒子取消移动事件,防止移动过快触发鼠标移出事件,导致鼠标弹起事件失效
        fa.onmouseleave = function () {
          fa.onmousemove=null;
          fa.onmouseup=null;
        }
        // 鼠标弹起后停止移动
        fa.onmouseup=function() {
           fa.onmousemove=null;
           fa.onmouseup=null;
        } 
    }
        }
    )
    
    // 图片缩放效果
    scale.forEach((item,index) => {
      scale[index].onmousedown = function (e) {
    // 阻止冒泡,避免缩放时触发移动事件
    e.stopPropagation();
    e.preventDefault();
    var pos = {
    'w': box[index].offsetWidth,
    'h': box[index].offsetHeight,
    'x': e.clientX,
    'y': e.clientY
    };
    fa.onmousemove = function (ev) {
    ev.preventDefault();
    // 设置图片的最小缩放为30*30
    var w = Math.max(30, ev.clientX - pos.x + pos.w)
    var h = Math.max(30,ev.clientY - pos.y + pos.h)
    // console.log(w,h)
    
    // 设置图片的最大宽高
    w = w >= fa.offsetWidth-box[index].offsetLeft ? fa.offsetWidth-box[index].offsetLeft : w
    h = h >= fa.offsetHeight-box[index].offsetTop ? fa.offsetHeight-box[index].offsetTop : h
    box[index].style.width = w + 'px';
    box[index].style.height = h + 'px';
    // console.log(box[index].offsetWidth,box[index].offsetHeight)
    }
    fa.onmouseleave = function () {
    fa.onmousemove=null;
    fa.onmouseup=null;
    }
    fa.onmouseup=function() {
    fa.onmousemove=null;
    fa.onmouseup=null;
    } 
    }
    })
}



