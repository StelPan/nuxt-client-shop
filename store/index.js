export const state = () => ({
  paginate: {}
})

export const mutations = {
  SET_PAGINATE (state, params) {
    state.paginate = params
  }
}
