

function Lottry(opts) {
    if(!opts.$box) throw '缺少必要的盒子节点'
    var currentOpts = Object.assign({
        prizenNum: 8,
        initTransCircles: 5,
        initVt: 100,
        activeClass: 'active',
        lvArrays: [1, 100, 1000, 3000, 0, 2000, 5000, 200],
        changeTransSort: null, // [[3,4],[4,5],[5,3]
        isRandomLoc: false,
        cb: function() {}
    }, opts)
    console.log(currentOpts)

    this.prizenNum = currentOpts.prizenNum  //奖品总数
    this.initTransCircles = currentOpts.initTransCircles   //初始化圈数
    this.initVt = currentOpts.initVt   //转速
    this.activeClass = currentOpts.activeClass
    this.changeTransSort = currentOpts.changeTransSort
    this.lvArrays = currentOpts.lvArrays
    this.isRandomLoc = currentOpts.isRandomLoc
    this.finalPrize = -1
    this.silgleBoxLoc = -1
    this.arraysconcat = []
    this.$box = opts.$box
    this.timeFn = null
    this.cb = opts.cb
    this.maxVt = 500
    this.minVt = 50
}

Lottry.prototype.vControl = function(allbox) {
    var currentCircle = Math.ceil(this.silgleBoxLoc / this.prizenNum)
    if(this.silgleBoxLoc <  allbox / 2) {
        this.initVt --
        if(this.initVt < this.minVt) this.initVt = this.minVt
    }
    else if(this.silgleBoxLoc >= allbox / 2  &&  this.silgleBoxLoc < allbox * 3 / 4) {
        this.initVt  = this.initVt + 5
    }
    else {
        this.initVt  = this.initVt + 20
        if(this.initVt > this.maxVt) this.initVt = this.maxVt
    }
}
Lottry.prototype.getPrizeRandom = function() {
    var sum = this.lvArrays.reduce(function(m,n) {    //数组总和
        return m + n
    }, 0), that = this
    var currentSum = 0;
    this.lvArrays.forEach(function(item, index){
        currentSum += item
        that.arraysconcat.push([currentSum - item, currentSum])
    })
    var randomsize = Math.floor(Math.random() * sum) 
    this.finalPrize = this.arraysconcat.findIndex(function(item) {
        return randomsize >= item[0] && randomsize < item[1]
    })
}
Lottry.prototype.transActive = function(allbox) {
    var that = this
    this.timeFn = setTimeout(function() {
        for(var i = 0 ; i < that.prizenNum; i++) {
            var className = that.$box[i].className 
            if(className.indexOf(that.activeClass)) that.$box[i].className = className.replace(that.activeClass, '')
        }
        var count = that.silgleBoxLoc % that.prizenNum
        if(that.changeTransSort) {
            var cur = that.changeTransSort.find(function(item) {
                return item[0] === count
            })
            if(cur !== undefined) count = cur[1]
        }
        that.$box[count].className = that.$box[count].className + ' ' + that.activeClass
        that.silgleBoxLoc ++
        clearTimeout(that.timeFn)
        that.vControl(allbox)
        if(that.silgleBoxLoc === allbox + 1) {
            that.silgleBoxLoc = that.silgleBoxLoc % that.prizenNum
            that.cb(that.finalPrize)
        }
        else {
            that.transActive(allbox)
        }

    }, this.initVt)
}
Lottry.prototype.run = function() {
    this.initVt = 100
    this.getPrizeRandom()
    if(this.silgleBoxLoc === -1) 
        if(this.isRandomLoc)this.silgleBoxLoc = Math.floor(Math.random() * this.prizenNum)
        else this.silgleBoxLoc = 0
    var allbox = this.finalPrize + this.prizenNum * Math.ceil(Math.random() * this.initTransCircles + 3)
    this.transActive(allbox)
}


