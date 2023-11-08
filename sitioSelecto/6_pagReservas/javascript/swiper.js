const swiper1 = new Swiper('.swiper-Servicios', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '.Siguiente-Servicios',
          prevEl: '.Anterior-Servicios',
        },
      });

const swiper2 = new Swiper('.swiper-Franja', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '.Siguiente-Franja',
          prevEl: '.Anterior-Franja',
        },
});