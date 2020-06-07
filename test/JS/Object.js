var Cars = function(logo,vel,cap,Mate) {
    this.logo = logo
    this.vel = vel
    this.cap = cap
    this.Mate = Mate
}

var MB = new Cars('MB','100 km/h','200ML','Alloy'),
    MB2 = new Cars('mb','100KM/s','200ml','alloy') ;
    





var obj = Object.create(MB,{logo:{
    value:'mb'
},vel:{
    value:'200km/s'
},
cap:{
    value:'300ML'
}})



