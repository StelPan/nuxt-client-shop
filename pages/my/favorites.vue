<template>
  <div class="pt-3">
    <b-container fluid="">
      <h1 class="mb-2">
        Избранные товары<sup>{{ favorite.favorite_products.length }}</sup>
      </h1>
      <b-row>
        <b-col
          v-for="(favorite, index) in favorite.favorite_products"
          :key="index"
          cols="6"
          md="2"
          sm="3"
        >
          <Product
            :product="favorite.product"
            v-on:update="fetchUpdateProductCart"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Product from '~/components/client/Product'

export default {
  name: 'Favorites',
  components: {
    Product
  },
  computed: {
    ...mapState({
      favorite: store => store.favorites.currentFavorite
    })
  },
  async fetch ({ store }) {
    await store.dispatch('favorites/fetchFavoriteProducts')
  }
}
</script>

<style scoped>

</style>
