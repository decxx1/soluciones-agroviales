import { register } from 'swiper/element/bundle';

import {useEffect} from 'react';
import brands from '@/data/Brands.json'


export default () => {

  useEffect (() => {
    register();
    const swiperEl = document.querySelector('swiper-container');

    // swiper parameters
    const swiperParams = {
      slidesPerView: 1,
      autoplay:{
        delay:2000
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
        1500: {
          slidesPerView: 6,
        }
      },
      on: {
        init() {
          // ...
        },
      },
    };

    // now we need to assign all parameters to Swiper element
    Object.assign(swiperEl, swiperParams);

    // and now initialize it
    swiperEl.initialize();
  }, []);
  
  return (
    <>
      <swiper-container
        init="false"
        lazy="true"
        spaceBetween="10"
      >
        {brands.map((brand) => (
          <swiper-slide
            key={brand.alt}
            style={{marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
          >
            <img loading="lazy" src={brand.src} alt={brand.alt} width={brand.width} />
          </swiper-slide>
        ))}
        
      </swiper-container>
    </>
  );
};
