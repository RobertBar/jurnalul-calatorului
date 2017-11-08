import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class SmoothScroll {
    constructor() {
        this.pageSection = $('section');
        this.headerLinks = $('.nav__item a');
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }

    createPageSectionWaypoints() {
        var that = this;
        this.pageSection.each(function() {
            var currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if( direction == "down" ) {
                        var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
                        that.headerLinks.removeClass('is-current-link');
                        $(matchingHeaderLink).addClass(is-current-link);
                    }
                },
                offset: "16%"
            });

            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if( direction == "up" ) {
                        currentPageSection.getAttribute('data-matching-link');
                        that.headerLinks.removeClass('is-current-link')
                        $(matchingHeaderLink).addClass('is-current-link');
                    }
                },
                offset: "-40%"
            });
        });
    }
}

export default SmoothScroll;