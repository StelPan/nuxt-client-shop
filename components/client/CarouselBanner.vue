<template>
  <b-carousel
    id="carousel-banner"
    :interval="3000"
    :img-width="1024"
    :img-height="480"
    :value="2"
    controls
    indicators
  >
    <b-carousel-slide>
      <template v-slot:img>
        <div class="w-100">
          <b-link to="/cart">
            <img class="w-100" src="https://picsum.photos/1024/480/?image=54">
          </b-link>
        </div>
      </template>
    </b-carousel-slide>

    <!-- Slides with custom text -->
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
      <div class="w-100 bg-dark">
        <h1>Hello world!</h1>
      </div>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  name: 'CarouselBanner'
}
</script>
