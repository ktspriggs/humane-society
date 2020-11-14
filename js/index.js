$(document).ready(function () {
    var mobileMenuBurger = $('.mobile-menu-burger');
    var menuClosed = $('.menu-closed');
    var menuOpen = $('.menu-open');
    var mobileMenu = $('.mobile-menu');
    var mainContent = $('.main-content');
    var searchClosed = $('.search-closed');
    var form = $('.form');

    //var mobileMenuLink = $('.menu li a');//
    console.log(form);
    //menu opens and closes and mainContent opacity changes//
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

    //click on searchClosed, searchBar opens and mainContent brightness changes//
    searchClosed.on('click', function () {
        form.toggleClass('display-show');
        mainContent.toggleClass('darker');
    });

    //click anywhere on mainContent, form will close//
    mainContent.on('click', function () {

    });







});