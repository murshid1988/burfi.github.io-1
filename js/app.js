$(document).ready(function() {
    localStorage.noteText && $("#note").val(localStorage.noteText), 
    
    $("#note").keyup(function() {
        localStorage.noteText = $("#note").val();
        var ntTxt = localStorage.getItem('noteText');
        if(ntTxt.length<1) {
            $('.dropbox-saver').attr('href','data:,You just saved an empty file');
        } else {
            $('.dropbox-saver').attr('href','data:,'+ ntTxt);
        } 
    }), 
    
    $(window).resize(function() {
        $("#note").css("left", $(window).width() / 2 - $("#note").width() / 2 - 20 + "px"), $("#note").css("top", $(window).height() / 2 - $("#note").height() / 2 - 20 + "px")
    }),  
    
    $(window).resize()

});

$(document).ready(function() {
    var ntTxt = localStorage.getItem('noteText');
    if(ntTxt.length<1) {
        $('.dropbox-saver').attr('href','data:,You just saved an empty file');
    } else {
        $('.dropbox-saver').attr('href','data:,'+ ntTxt);
    } 
});