let $mobileButton;
let $mobileMenu;
let $iconHamburger;
let $iconClose;


$(document).ready(function () {
    $mobileButton = $('#mobile-menu-btn');
    $mobileMenu = $('#mobile-menu');
    $iconHamburger = $('#icon-hamburger');
    $iconClose = $('#icon-close');

    $mobileButton.on('click', function () {
        const isOpen = !($mobileMenu.hasClass('hidden'));

        $mobileMenu.toggleClass('hidden');
        $iconHamburger.toggleClass('hidden');
        $iconClose.toggleClass('hidden');
        $mobileButton.attr('aria-expanded', String(!isOpen));
    });
});