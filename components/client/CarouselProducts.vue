<template>
  <VueSlickCarousel v-bind="settings">
    <slot />
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'CarouselProducts',
  components: {
    VueSlickCarousel
  },
  data () {
    return {
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 376,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
