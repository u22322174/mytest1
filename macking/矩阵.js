var arrays = [1,1,1,1000,1000,2000,2000,3997]


var _sum = arrays.reduce(function(m,n) {    //数组总和
    return m + n
},0)

// var probability = arrays.map(function(n) {   //设置概率
//     return n/_sum
// },0) 


var   arraysconcat = [];   //用于存放区间

    // var v = 0 ;
    // for(var i = 0 ; i < arrays.length ; i++) {
        
    //     v += arrays[i]
    //     arrays1.push(v)
    // }

    var currentSum = 0;
    arrays.forEach(function(item, index){
        currentSum += item
        arraysconcat.push([currentSum - item, currentSum])
    })

console.log('arraysconcat', arraysconcat)
// arrays1.push(array0())
// arrays1.pop()


    // for(var i = 0 ; i < arrays1.length ; i++) {
    //     for(var j = 0 ; j < arrays.length ; j++) {
    //         if(j == i) {
    //             arrays2.push(arrays1[i] - arrays[j])
    //         }
    //     }
    // }

// arrays2.push(array1())
// arrays2.pop()
    // for(var i = 0 ; i < arrays1.length ; i++) {
    //     for(var j = 0 ; j < arrays2.length ; j++) {
    //         if(j == i) {
    //             arraysconcat.push([arrays2[j],arrays1[i]])
    //         }
    //     }
    // }
//arraysconcat.push(myconcat())
//arraysconcat.pop()
var myrandom = function() {
    var idx = 0, 
    
    return idx
}















