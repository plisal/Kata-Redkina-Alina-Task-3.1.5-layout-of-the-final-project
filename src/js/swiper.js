import 'swiper/swiper-bundle.css' // если нужны стили
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

new Swiper('.swiper', {
  modules: [Pagination],
  breakpoints: {
    // when window width is >= 320px
    320: {
      spaceBetween: -40,
      slidesPerView: 1.1
    },
    // when window width is >= 480px
    375: {
      spaceBetween: -35,
      slidesPerView: 1.3
    },
    425: {
      spaceBetween: -35,
      slidesPerView: 1.45
    },
    // when window width is >= 640px
    640: {
      spaceBetween: -60,
      slidesPerView: 2.3
    }
  },
  // parallax: true,
  // slidesPerView: ,
  spaceBetween: -70,
  slidesPerView: 1.1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})
