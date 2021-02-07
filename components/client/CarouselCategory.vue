<template>
  <VueSlickCarousel v-bind="settings">
    <div
      v-for="category in categories"
      :key="category.id"
      class="category-slide"
    >
      <b-link :to="{ name: 'categories-slug', params: { slug: category.slug } }" class="text-decoration-none">
        <div class="bg-category-slide">
          <span>
            {{ category.name }}
          </span>
        </div>
      </b-link>
    </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'CarouselCategory',
  components: {
    VueSlickCarousel
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      }
    }
  }
}
</script>

<style >
.category-slide {
  padding: 5px;
  height: 80px;
}

.bg-category-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  font-size: 1rem;
  height: 100%;
}

.category-slide span {
  font-weight: bold;
  color: #8a7575;
}
</style>
