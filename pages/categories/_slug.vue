<template>
  <div>
    <SidebarFilter />
    <b-container class="mt-3" fluid>
      <b-row>
        <b-col cols="12" sm="3" class="d-none d-sm-block">
          <h2>
            Фильтры
          </h2>
        </b-col>
        <b-col cols="12" sm="9">
          <div class="d-flex justify-content-between">
            <h1>{{ category.name }}</h1>
            <div class="d-flex justify-content-center align-items-center d-sm-none">
              <b-button
                v-b-toggle.sidebar-filter
                pill
                size="sm"
                variant="outline-danger"
              >
                <b-icon icon="filter-right" />
              </b-button>
            </div>
          </div>
          <!--          <div v-if="category.descendentsCategory" class="d-flex overflow-auto pt-1">-->
          <!--            <div-->
          <!--              v-for="(descendents, index) in category.descendentsCategory"-->
          <!--              :key="index"-->
          <!--              class="text-center"-->
          <!--            >-->
          <!--              <b-button-->
          <!--                :to="{ name: 'categories-slug', params: { slug: descendents.slug } }"-->
          <!--                variant="outline-secondary"-->
          <!--                class="mr-1"-->
          <!--                size="sm"-->
          <!--                pill-->
          <!--              >-->
          <!--                <span>{{ descendents.name }}</span>-->
          <!--              </b-button>-->
          <!--            </div>-->
          <!--          </div>-->
          <b-row class="mt-3">
            <template v-if="products.length">
              <b-col
                v-for="product in products"
                :key="product.id"
                cols="6"
                lg="2"
                md="3"
                sm="4"
              >
                <Product
                  :product="product"
                  v-on:update="fetchUpdateProductCart"
                />
              </b-col>
            </template>
            <template v-else>
              <b-col>
                <div class="d-flex justify-content-center">
                  <span>Извините, но товары в этой категории отсутствуют, но они обязательно появятся в скором времени</span>
                </div>
              </b-col>
            </template>
          </b-row>

          <b-row class="justify-content-center mt-3">
            <b-pagination
              v-if="products.length"
              :per-page="1"
              :total-rows="paginate.count"
              v-model="currentPage"
              pills
            />
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Product from '~/components/client/Product'
import SidebarFilter from '~/components/client/SidebarFilter'

export default {
  name: 'Index',
  components: {
    Product,
    SidebarFilter
  },
  data () {
    return {
      currentPage: 1
    }
  },
  computed: {
    ...mapState({
      category: state => state.categories.currentCategory,
      products: state => state.products.listProducts,
      paginate: state => state.paginate
    })
  },
  async fetch ({ store, route }) {
    const { slug } = route.params
    await store.dispatch('products/fetchProductsCategory', { slug })
  }
}
</script>
