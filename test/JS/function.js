var star = 0,  //每一行第一个数
    end = 2,   //每一行末尾数
    layer = 1, //层数
    nums = 1, //每一层的个数
    sum = 2,  //每一行的总和
    len = 10 ,
    j = 0 ,
    target = 100 ;

function Add() {
    var x = 1 ,
        y = 0 ;
    while(sum < 100) {
        nums = sum  
        star = end + 1  
        end = star + nums - 1 
        sum = (star +end)*nums/2 
        layer ++ ;
    }
    while(y < target - nums) {  
         x ++ ;
         y = x*((star + x - 1) + star)/2
    } 
    return 'sum:'+ ' ' + sum + ', ' + 'layer:' + ' ' + layer  + ', ' + 'x:' + ' ' +  x  + 'star :' +  star 
}


