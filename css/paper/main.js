html2canvas(document.querySelector(".masonry")).then(canvas => {
    document.body.appendChild(canvas);
});
$(document).ready(function(){
    $('.masonry').hide()
})