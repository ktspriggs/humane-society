$(document).ready(function (){
    var mobileMenuBurger = $('.mobile-menu-burger');
    var menuClosed = $('.menu-closed');
    var menuOpen = $('.menu-open');
    var mobileMenu = $('.mobile-menu');
    var mainContent = $('.main-content');
    var searchImg = $('.search-img');
    //var mobileMenuLink = $('.menu li a');//

    //menu opens and closes and main content opacity changes//
    mobileMenuBurger.on('click', function () {
        menuClosed.toggleClass('display-none');
        menuOpen.toggleClass('display-none');
        mobileMenu.toggleClass('display-none');
        mainContent.toggleClass('opacity');
    });

    //click on menuClosed menu transitions open//
    menuClosed.on('click', function () {
        mobileMenu.slideToggle("slow");
    });

    //click on menuOpen menu transitions closed//
    menuOpen.on('click', function () {
        mobileMenu.slideToggle("slow");
    });

    //click on searchImg searchBar opens//
    



});