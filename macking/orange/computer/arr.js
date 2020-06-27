var ARR = [1,7,2,5,4,1,1,1,44,4,4,7,7,7,8,9,89,89,89,22,22,22,55,666,333,4,5,2,25,28,14,456,7,89],
    ARR2 = ARR,
    newarr = [],
    srt = function(a,b) {
        return a - b
    }
    ARR.sort(srt)

ARR = ARR.filter(function(item,index,arr){
    return arr.indexOf(item) == index
})

var len = ARR2.length ;

for(var i = 0 ; i < ARR2.length ; i++) {
    var n = 0;
    for(var j = i + 1 ; j < ARR2.length; j ++) {
        if(ARR2[i] == ARR2[j]) {      
            n ++ ;
            ARR2.splice(j,1)
            j--
        }
    }
    newarr.push({'cur':ARR2[i],'rpt':parseInt(n+1)})
}

console.log(newarr)

