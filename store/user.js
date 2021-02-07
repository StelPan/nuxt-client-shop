export const state = () => ({
  currentUser: null,
  listUsers: []
})

export const actions = {
  async fetchUpdateUser ({ commit }, params) {
    try {
      try {
        await this.$axios.put('/user/profile', { ...params })
        await this.$auth.fetchUser()
      } catch (e) {}
    } catch (e) {
      // Обработка ошибки
    }
  }
}

export const mutations = {
  SET_CURRENT_USER (state, data) {
    state.currentUser = data
  }
}
