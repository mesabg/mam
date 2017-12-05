/*tslint:disable*/
/**
 * Local imports
 */
import { SlickJSObject } from '@ms/components';

/**
 * SlickJS Settings
 */
export const SETTINGS:SlickJSObject = {
    rows: 1,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 6000,
    dots: false,
    arrows: false,
    infinite: true,
    responsive: [{
        breakpoint: 426,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1
        }
    },{
        breakpoint: 769,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1
        }
    }]
};