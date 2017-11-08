import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class StickyHeader {
    constructor() {
        this.siteHeader = $('.nav-bar');
        this.headerTriggerElement = $('.nav-bar');
        this.createHeaderWaypoint();
    }

    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function( direction ) {
                if( direction == "down" ) {
                    that.siteHeader.addClass('nav-bar--full-darker');
                } else {
                that.siteHeader.removeClass('nav-bar--full-darker');
                }
            }

        })
    }
}

export default StickyHeader;