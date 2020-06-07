var arr = [10,11,17,[25,77,17,36,12,15,10,7,5,[55,10,12,31,5,7]],11,17],
    target = 10,     //目标数
    star = 0,
    simnum = [],  //近似值
    srt = function(a,b) {
        return a - b
    };

function flatten(arr) {
    var newarr = [] ;
    arr.forEach(function(item,index) {
        if(Array.isArray(item)) {
            newarr = newarr.concat(flatten(item))
        }else{
            newarr.push(item)
        }
    })
    return newarr
}

simnum = arr.filter(function(item) {     //在新数组当中筛选近似值
    var arrflt = arr.map(function(item,index) {
        return Math.abs(item - target)
    })
    arrflt.sort(srt)
    arrflt = arrflt.filter(n => n > 0)   //筛掉与目标数相同的值
    var Min = Math.min.apply(this,arrflt)          //得到最小差值

    return Math.abs(item - target) == Min
})

arr = flatten(arr) ; 



for(var i = 0 ; i < arr.length ; i ++) {
    var n = 0 ;
    for(var j = i + 1 ; j < arr.length ; j++) {
        if(arr[i] == arr[j]) {
            arr.splice(j,1)
        }
    }
    console.log(arr[i],n)
}      //完成数组去重







    



 

