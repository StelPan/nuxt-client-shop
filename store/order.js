export const state = () => ({
  shops: []
})

export const actions = {
  async fetchSaveOrder ({ commit }, params) {
    try {
      await this.$axios.post('/order', { orderParams: params })
      await this.$router.push('/')
      commit('cart/SET_CART_PRODUCTS', [], { root: true })
    } catch (e) {}
  },
  async fetchAllAddresses ({ commit }) {
    try {
      const { shops } = (await this.$axios.get('/shops')).data
      commit('SET_SHOPS', shops)
    } catch (e) {}
  }
}

export const mutations = {
  SET_SHOPS (state, data) {
    state.shops = data
  }
}

export const getters = {
  getShops (state) {
    return state.shops
  },
  getShopsById: state => (id) => {
    return state.shops.find(shop => shop.id === id)
  }
}
