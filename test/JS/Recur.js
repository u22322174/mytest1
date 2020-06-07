var arr = [10,11,17,[25,77,17,36,12,15,10,7,5,[55,10,12,31,5,7]],11,17],
    target = 15,
    dfn = [],
    sml = [],
    srt = function(a,b) {
        return a - b
    },star = 0 ,
    newarr = [];

function flatten(arr) {
    var newarr = [] ;
    arr.forEach(function(item,index) {
        if(Array.isArray(item)) {
            newarr = newarr.concat(flatten(item))
        }else{
            newarr.push(item)
        }
    });
    return newarr
} 

arr = flatten(arr)