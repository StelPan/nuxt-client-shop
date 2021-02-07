<template>
  <div class="pt-1">
    <b-container fluid>
      <CarouselBanner />
    </b-container>
    <b-container class="mt-3" fluid>
      <h2>Категории</h2>
      <CarouselCategory :categories="categories" />
    </b-container>
    <b-container class="mt-3" fluid>
      <h2>Популярные товары</h2>
      <CarouselProducts>
        <Product
          v-for="(product, index) in popularProducts"
          :product="product"
          :key="index"
          v-on:update="fetchUpdateProductCart"
          v-on:store-favorite="fetchStoreFavoriteProducts"
        />
      </CarouselProducts>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CarouselCategory from '../components/client/CarouselCategory'
import CarouselBanner from '../components/client/CarouselBanner'
import Product from '../components/client/Product'
import CarouselProducts from '../components/client/CarouselProducts'

export default {
  head: {
    title: 'Главная страница'
  },
  components: {
    Product,
    CarouselCategory,
    CarouselBanner,
    CarouselProducts
  },
  computed: {
    ...mapState({
      popularProducts: state => state.products.popularProducts,
      categories: state => state.categories.listCategories
    })
  },
  async fetch ({ store }) {
    await store.dispatch('products/fetchPopularProducts')
    await store.dispatch('categories/fetchCategories')
  }
}
</script>

<style></style>
