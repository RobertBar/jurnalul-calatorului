import $ from 'jquery';

class MenuOnMobile {
    constructor() {
        this.menuIcon = $('.menu-icon');
        this.menuContent = $('.nav');
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleMenu.bind(this));
    }

    toggleMenu() {
        this.menuContent.toggleClass("nav--is-visible");
        this.menuIcon.toggleClass("menu-icon--close");
    }

}

export default MenuOnMobile;