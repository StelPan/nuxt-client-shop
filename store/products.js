export const state = () => ({
  currentProduct: {},
  listProducts: [],
  popularProducts: [],
  newProducts: [],
  hitProducts: []
})

export const actions = {
  async fetchProducts ({ commit }) {
    try {
      const request = await this.$axios.get('/products/categories')
      const { products } = request.data
      commit('SET_PRODUCTS', products)
    } catch (e) {}
  },
  async fetchPopularProducts ({ commit }) {
    try {
      const { products } = (await this.$axios.get('/categories/nastolnye/products')).data
      commit('SET_POPULAR_PRODUCTS', products)
    } catch (e) {}
  },
  async fetchProductsCategory ({ commit }, { slug }) {
    try {
      const { products, category, paginate } = (await this.$axios.get(`/categories/${slug}/products`)).data
      commit('SET_PRODUCTS', products)
      commit('SET_PAGINATE', paginate, { root: true })
      commit('categories/SET_CURRENT_CATEGORY', category, { root: true })
    } catch (e) {}
  },
  async fetchProduct ({ commit }, id) {
    try {
      const { product } = (await this.$axios.get(`/products/${id}`)).data
      commit('SET_CURRENT_PRODUCT', product)
    } catch (e) {}
  }
}

export const mutations = {
  SET_PRODUCTS (state, data) {
    state.listProducts = data
  },
  SET_POPULAR_PRODUCTS (state, data) {
    state.popularProducts = data
  },
  SET_CURRENT_PRODUCT (state, data) {
    state.currentProduct = data
  }
}
