export default function ({ store, redirect }) {
  const { cart } = store.state.cart
  // Если корзина пользователя пуста, то редирект на страницу корзины
  if (!cart.total_value_cart_product) {
    redirect({ name: 'cart' })
  }
}
