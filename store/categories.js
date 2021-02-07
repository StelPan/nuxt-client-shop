export const state = () => ({
  listCategories: [],
  currentCategory: {}
})

export const actions = {
  async fetchCategories ({ commit }) {
    try {
      const request = await this.$axios.get('/categories')
      const { categories } = request.data
      commit('SET_LIST_CATEGORIES', categories)
    } catch (e) {}
  }
}

export const mutations = {
  SET_LIST_CATEGORIES (state, data) {
    state.listCategories = data
  },
  SET_CURRENT_CATEGORY (state, data) {
    state.currentCategory = data
  }
}
