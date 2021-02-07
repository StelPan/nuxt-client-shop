import { mapState, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      fetchUpdateProductCart: 'cart/fetchUpdateProductCart',
      fetchDeleteProductCart: 'cart/fetchDeleteProductCart',
      fetchStoreFavoriteProducts: 'favorites/fetchStoreFavoriteProducts',
      fetchDeleteFavoriteProducts: 'favorites/fetchDeleteFavoriteProducts'
    })
  },
  computed: {
    ...mapState({
      cart: state => state.cart.cart
    })
  }
}
