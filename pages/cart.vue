<template>
  <div class="bg-silver pt-3">
    <b-container fluid="">
      <h1>
        Корзина
        <sup v-if="$auth.loggedIn" class="text-secondary">
          {{ cart.products.length }}
        </sup>
      </h1>
      <div class="mt-2">
        <template v-if="!$auth.loggedIn">
          <div class="cart-not-auth bg-white text-center">
            <h2>
              Ваша корзина пуста
            </h2>
            <div class="cart-text-not-auth">
              <span>
                Для добавления товаров в корзину требуется авторизация
              </span>
            </div>
            <b-button @click="$bvModal.show('modal-authorization')" class="mt-2" variant="danger">
              Авторизоваться
            </b-button>
          </div>
        </template>
        <template v-if="$auth.loggedIn">
          <b-row>
            <template v-if="cart.products.length">
              <b-col cols="12" md="8">
                <div class="p-2 mt-1 bg-white">
                  <ProductCartItem
                    v-for="(item, index) in cart.products"
                    :key="index"
                    :product="item"
                    v-on:drop="fetchDeleteProductCart"
                  />
                </div>
              </b-col>
              <b-col cols="12" md="4">
                <div class="p-3 mt-1 bg-white">
                  <div class="card-total-head">
                    <b-button
                      :to="{ name: 'gocheckout' }"
                      pill
                      class="w-100 font-weight-bolder"
                      variant="outline-danger"
                    >
                      Перейти к оформлению
                    </b-button>
                    <div class="mt-2">
                      <span class="text-secondary">Доступные способы и время доставки можно выбрать при оформлении заказа</span>
                    </div>
                  </div>
                  <hr>
                  <div class="cart-total-body">
                    <div class="d-flex align-content-between">
                      <span class="text-header">Количество товаров: {{ cart.products.length }} шт.</span>
                    </div>
                    <hr>
                    <div>
                      <span class="text-header font-weight-bolder">Общая стоимость: {{ cart.sum }}  руб.</span>
                    </div>
                  </div>
                </div>
              </b-col>
            </template>
            <template v-else>
              <b-col cols="12">
                <div class="p-2 bg-white">
                  <div class="d-flex justify-content-center align-items-center">
                    <div class="cart-product-empty d-flex flex-column justify-content-center">
                      <div class="text-center">
                        <h3>
                          Ваша корзина пуста
                        </h3>
                      </div>
                      <div class="text-center">
                        <p>
                          Перейдите на главную страницу или воспользуйтесь поиском, чтобы продолжить покупки
                        </p>
                      </div>
                      <b-button :to="{ path: '/' }" pill variant="danger">
                        На главную страницу
                      </b-button>
                    </div>
                  </div>
                </div>
              </b-col>
            </template>
          </b-row>
        </template>
      </div>
    </b-container>
  </div>
</template>

<script>
import ProductCartItem from '~/components/client/ProductCartItem'

export default {
  name: 'Cart',
  head: {
    title: 'Корзина пользователя'
  },
  components: {
    ProductCartItem
  },
  async fetch ({ store, $auth }) {
    if ($auth.loggedIn) {
      await store.dispatch('cart/fetchUserCart')
    }
  }
}
</script>
