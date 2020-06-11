var idx = 0
$(document).ready(function(){
    $('.create').click(function(){
        $('.hidden').show()
        $('.hidden').css({"z-index" : "60"})
        move()
      })
    $('.sure').click(function(){
        var p = document.createElement('p')
        var value =$('.frame')[0].value
        p.innerText=value
        $('#father').append(p)
        p.className='p'+idx
        $('.p' + idx).css({"top" : movey + 'px',"left" : movex + 'px',"color":color.value,"font-size": size.value,"font-weight" : blod.value,"font-family": fontfamily.value})
        idx++
        $('.hidden').hide()
        $('.frame')[0].value=''
        $('.hidden').css({"left": randomSize(0,width - 200),"top" : randomSize(0,height - 20)})
    })
})


