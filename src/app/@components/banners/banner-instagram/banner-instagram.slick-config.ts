/**
 * Local imports
 */
import { SlickJSObject } from '@ms/components';

/**
 * SlickJS Settings
 */
export const SETTINGS:SlickJSObject = {
    rows: 1,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
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
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 1
        }
    }]
};