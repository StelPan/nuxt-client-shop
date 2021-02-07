<template>
  <div class="bg-silver pt-3">
    <b-container fluid="">
      <h1>Оформление заказа</h1>
      <b-row class="mt-2">
        <b-col cols="12" md="8">
          <div class="mt-2 p-3 bg-white">
            <h2>Доставка товаров</h2>
            <span>Выберите место доставки на карте</span>
            <div class="mt-1 w-100">
              <yandex-map
                @click="getCoords"
                :coords="[55.354727, 86.088374]"
                zoom="10"
              >
                <ymap-marker
                  v-for="(shop, index) in shops"
                  :coords="[shop.latitude, shop.longitude]"
                  :key="index"
                  :marker-id="index"
                  marker-type="placemark"
                />
                <ymap-marker
                  v-if="form.coords.length"
                  :coords="[form.coords[1], form.coords[0]]"
                  :marker-id="-1"
                  marker-type="placemark"
                />
              </yandex-map>
            </div>
            <div class="mt-1">
              <h3>Заполните форму</h3>
              <b-form>
                <b-row class="mt-1">
                  <b-col cols="12">
                    <b-form-group
                      id="input-delivery-address"
                      label-for="delivery-address"
                      label="Адресс доставки"
                    >
                      <b-input
                        id="delivery-address"
                        :state="$v.form.delivery_address.required"
                        v-model="form.delivery_address"
                        type="text"
                        placeholder="Адрес доставки"
                      />
                      <b-form-invalid-feedback :state="!$v.form.delivery_address.$error">
                        {{ !form.coords.length ? 'Выбрана пустая местность. Требуется выбрать дом.' : 'Поле обязательно для заполнения' }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row class="mt-1">
                  <b-col md="4" cols="12">
                    <b-form-group
                      id="input-apartment"
                      label-for="apartment"
                      label="Квартира/Офис"
                    >
                      <b-input
                        id="apartment"
                        v-model="form.apartment"
                        type="number"
                        class="mt-1"
                        placeholder="Квартира/Офис"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col md="4" cols="12">
                    <b-form-group
                      id="input-entrance"
                      label-for="entrance"
                      label="Подъезд"
                    >
                      <b-input
                        id="entrance"
                        v-model="form.entrance"
                        class="mt-1"
                        type="number"
                        placeholder="Подъезд"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col md="4" cols="12">
                    <b-form-group
                      id="input-floor"
                      label-for="floor"
                      label="Этаж дома"
                    >
                      <b-input
                        id="floor"
                        v-model="form.floor"
                        class="mt-1"
                        type="number"
                        placeholder="Этаж"
                      />
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-form>
            </div>
          </div>
          <div class="bg-white p-3 mt-2">
            <div class="d-flex justify-content-between">
              <h3>Состав заказа<sup class="text-secondary">&nbsp;({{ cart.products.length }})</sup></h3>
              <b-link :to="{ name: 'cart' }">
                Изменить
              </b-link>
            </div>
            <hr>
          </div>
        </b-col>
        <b-col cols="12" md="4">
          <div class="bg-white p-3 mt-1">
            <div>
              <b-button
                @click="order"
                :variant="!$auth.user.phone ? 'danger' : 'outline-success'"
                pill
                class="w-100 font-weight-bolder"
              >
                {{ !$auth.user.phone ? 'Заполните контактные данные' : 'Оформить заказ' }}
              </b-button>
              <div class="mt-2">
                <span class="text-secondary">
                  Нажимая на кнопку, вы соглашаетесь с Условиями обработки перс. данных, а также с Условиями продажи
                </span>
              </div>
              <hr>
              <div class="mt-1 d-flex align-items-center justify-content-between">
                <span class="font-weight-bolder">Ваша заказ:</span>
                <span class="font-weight-bolder">
                  {{ cart.products.length }} {{ cart.products.length === 1 ? 'товар' : 'товара(-ов)' }}
                </span>
              </div>
              <hr>
              <div class="mt-1 d-flex align-items-center justify-content-between">
                <span class="font-weight-bolder">Итого:</span>
                <span class="font-weight-bolder">
                  {{ cart.sum }} руб.
                </span>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'GoCheckout',
  middleware: ['notAuthentication'],
  head: {
    title: 'Оформление заказа'
  },
  data () {
    return {
      form: {
        coords: [],
        delivery_address: '',
        entrance: '',
        floor: '',
        apartment: '',
        intercom: '',
        comment: ''
      }
    }
  },
  validations: {
    form: {
      coords: { required },
      delivery_address: { required },
      entrance: { required },
      floor: { required }
    }
  },
  computed: {
    ...mapGetters({
      cart: 'cart/getCart',
      shops: 'order/getShops',
      shop: 'order/getShopsById'
    })
  },
  async fetch ({ store }) {
    await store.dispatch('order/fetchAllAddresses')
    await store.dispatch('cart/fetchUserCart')
  },
  methods: {
    ...mapActions({
      fetchSaveOrder: 'order/fetchSaveOrder'
    }),
    async getCoords (data) {
      try {
        const coords = data.get('coords')
        const { ymaps } = window

        const geocodeOnCoords = await ymaps.geocode(coords, { json: true })

        const geoObject = geocodeOnCoords.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty
        if (geoObject.GeocoderMetaData.kind !== 'house') {
          // todo Сказать пользователю, что он выбрал не дом
          this.form.coords = []
          return
        }

        this.form.coords = coords.reverse()
        this.form.delivery_address = geoObject.GeocoderMetaData.text || 'Выбранно некорректно'
      } catch (e) {
        console.error(e)
      }
    },
    async order () {
      if (!this.$auth.user.phone) {
        this.$router.push('/my/profile')
        return
      }

      this.$v.$touch()

      if (this.$v.$invalid) {
        // todo Ошибка при заполнении формы
        return
      }

      await this.fetchSaveOrder(this.form)
    }
  }
}
</script>
