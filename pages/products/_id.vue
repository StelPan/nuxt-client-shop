<template>
  <div class="pt-3">
    <b-container fluid="">
      <div class="mb-1 mr-1">
        <b-link :to="{ path: '/' }">
          Главная
        </b-link>
        <template
          v-for="ancestor in product.ancestors"
        >
          /
          <b-link :to="{ name: 'categories-slug', params: { slug: ancestor.slug } }">
            {{ ancestor.name }}
          </b-link>
        </template>
        /
        <span>{{ product.category.name }}</span>
      </div>
    </b-container>
    <b-container fluid="">
      <div class="bg-silver p-2">
        <h1 class="mb-0 pb-0">
          {{ product.name }}
        </h1>
        <span class="mt-0 pb-0">
          {{ product.slogan }}
        </span>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Product',
  computed: {
    ...mapState({
      product: state => state.products.currentProduct
    })
  },
  async fetch ({ store, route }) {
    const { params } = route
    await store.dispatch('products/fetchProduct', params.id)
  }
}
</script>

<style scoped>

</style>
