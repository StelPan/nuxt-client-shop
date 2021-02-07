<template>
  <div class="product-cart-item">
    <div class="d-flex justify-content-between">
      <div class="product-img">
        <img src="~/assets/alias.png" alt="">
      </div>
      <div class="product-name-cost">
        <div class="product-name">
          <strong>
            {{ product.name }}
          </strong>
        </div>
        <div class="product-cost">
          <strong class="d-block">
            Общая стоимость: {{ product.price * product.pivot.quantity }} руб.
          </strong>
          <span>
            {{ product.price }} руб. за шт.
          </span>
        </div>
      </div>
      <div class="product-control d-flex">
        <b-button
          @click="$emit('chosen', product.id)"
          variant="outline-danger"
          size="sm"
        >
          <b-icon icon="bookmark-heart-fill" />
        </b-button>
        <b-button
          @click="$emit('drop', product.id)"
          variant="outline-danger"
          size="sm"
        >
          <b-icon icon=" trash-fill" />
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCartItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
