export const state = () => ({
  currentFavorite: {}
})

export const actions = {
  async fetchFavoriteProducts ({ commit }) {
    try {
      const { favorite } = await (this.$axios.get('user/favorite')).data
      commit('SET_FAVORITE_PRODUCTS', favorite)
    } catch (e) {}
  },
  async fetchStoreFavoriteProducts ({ dispatch }, id) {
    try {
      await this.$axios.post('/user/favorite', { id })
      await dispatch('fetchFavoriteProducts')
    } catch (e) {}
  },
  async fetchDeleteFavoriteProducts ({ dispatch }, id) {
    try {
      await this.$axios.delete(`/user/favorite`, { id })
      await dispatch('fetchFavoriteProducts')
    } catch (e) {}
  }
}

export const mutations = {
  SET_FAVORITE_PRODUCTS (state, data) {
    state.currentFavorite = data
  }
}
