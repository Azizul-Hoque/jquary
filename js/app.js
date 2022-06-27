

$(function(){

    $(`.searchIcon`).click(function(){

        $(`.search`).slideDown(300)
    } )
    $(`.close`).click(function(){
        $(`.search`).fadeOut(300)
    } )
})