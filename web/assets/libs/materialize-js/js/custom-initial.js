// Initial all materialize-js javascript components
$(document).ready(function(){
    // For mobile menu button
    $('.sidenav').sidenav();
    $('.catalog_menu .collapsible').collapsible({

        inDuration: 200,
        outDuration: 200
    });
    $('.modal').modal({
        inDuration: 500,
        outDuration: 500
    });
    $('.slider').slider();
    $('select').formSelect();
    $('.tabs').tabs();
    $('.materialboxed').materialbox();
    // $('.carousel').carousel({
    //     dist: -200
    // });
});