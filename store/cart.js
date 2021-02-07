export const state = () => ({
  cart: {}
})

export const actions = {
  async fetchUserCart ({ commit }) {
    try {
      const { cart } = (await this.$axios.get('/user/cart')).data
      commit('SET_CART', cart)
    } catch (e) {}
  },
  async fetchUpdateProductCart ({ dispatch }, params) {
    try {
      // const { id, quantity } = params
      await this.$axios.post('user/cart', params)
      await dispatch('fetchUserCart')
    } catch (e) {}
  },
  async fetchDeleteProductCart ({ dispatch }, id) {
    try {
      await this.$axios.post(`user/cart`, { id, quantity: 0 })
      await dispatch('fetchUserCart')
    } catch (e) {}
  }
}

export const mutations = {
  SET_CART (state, cart) {
    state.cart = cart
  }
}

export const getters = {
  getCart (state) {
    return state.cart
  }
}
