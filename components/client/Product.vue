<template>
  <div class="product position-relative h-100">
    <b-link :to="{ name: 'products-id', params: { id: product.id } }" class="text-decoration-none text-dark">
      <div
        v-if="product.discount"
        class="product-discount position-absolute bg-danger"
      >
        {{ product.discount }}%
      </div>
      <div class="product-header">
        <img class="w-100" src="~/assets/alias.png">
        <div class="product-name">
          <span>{{ product.name }}</span>
        </div>
        <div class="product-price font-weight-bold">
          <template v-if="!product.discount">
            <span>
              {{ product.price }}
            </span>
          </template>
          <template v-else>
            <span>
              <strike>
                {{ product.price }}
              </strike>
            </span>
            <span v-if="product.discount">
              {{ product.price * ((100 - product.discount) / 100) }}
            </span>
          </template>
          руб.
        </div>
      </div>
    </b-link>
    <div class="product-footer">
      <div class="product-pay d-flex justify-content-between">
        <b-button
          @click.stop="$emit('update', { id: product.id, quantity: 1 })"
          size="sm"
          class="w-100 font-weight-bold"
          variant="danger"
        >
          В корзину
        </b-button>
        <b-button
          @click="$emit('store-favorite', product.id)"
          class="ml-1"
          size="sm"
          variant="danger"
        >
          <b-icon
            icon="heart-fill"
            variant="white"
          />
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
