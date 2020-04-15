$(document).ready(function (){
    var mobileMenuBurger = $('.mobile-menu-burger');
    var menuClosed = $('.menu-closed');
    var menuOpen = $('.menu-open');
    var mobileMenu = $('.mobile-menu');
    var mobileMenuLink = $('.menu li a');

    //menu opens and closes//
    mobileMenuBurger.on('click', function () {
        menuClosed.toggleClass('display-none');
        menuOpen.toggleClass('display-none');
        mobileMenu.toggleClass('display-none');
    });
    



});