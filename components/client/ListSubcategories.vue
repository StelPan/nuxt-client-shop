<template>
  <div class="overflow-auto w-100 d-inline-flex flex-nowrap pb-3">
    <b-button
      v-for="subcategory in subcategories"
      :key="subcategory.id"
      :to="{ name: 'categories-category', params: { category: subcategory.slug } }"
      variant="outline-danger"
      class="d-flex align-items-center flex-shrink-0 mr-1 subcategory_link"
      pill
    >
      {{ subcategory.name }}
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'ListSubcategories',
  props: {
    subcategories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.subcategory_link {
    height: 44px;
    padding: 0 15px;
}
</style>
