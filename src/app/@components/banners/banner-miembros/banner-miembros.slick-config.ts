/**
 * Local imports
 */
import { SlickJSObject } from '@ms/components';

/**
 * SlickJS Settings
 */
export const SETTINGS:SlickJSObject = {
    rows: 1,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    pauseOnHover: false,
    pauseOnFocus:false,
    responsive: [{
        breakpoint: 320,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            infinite: true,
        }
    },{
        breakpoint: 376,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            infinite: true,
        }
    },{
        breakpoint: 426,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            infinite: true,
        }
    },{
        breakpoint: 769,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            infinite: true,
        }
    }]
};