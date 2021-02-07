<template>
  <div class="sidebar">
    <b-sidebar
      id="sidebar-backdrop"
      title="Меню"
      sidebar-class="bg-white"
      bg-variant="none"
      shadow
      backdrop
    >
      <hr class="m-0 p-0">
      <div class="mt-2">
        <div class="pl-3">
          <strong>Категории</strong>
        </div>
        <div class="d-flex flex-column">
          <div class="d-flex flex-column mt-2">
            <b-link
              v-for="(category, index) in categories"
              :key="index"
              :to="{ name: 'categories-slug', params: { slug: category.slug } }"
              class="pl-3 pt-2 pb-2 text-decoration-none sidebar-link"
            >
              {{ category.name }}
            </b-link>
          </div>
        </div>
      </div>
      <hr>
      <div class="mt-2">
        <div class="pl-3">
          <strong>Для клиента</strong>
        </div>
        <div class="d-flex flex-column">
          <div class="d-flex flex-column mt-2">
            <b-link to="#" class="pl-3 pt-2 pb-2 text-decoration-none sidebar-link">
              О магазине
            </b-link>
            <b-link to="#" class="pl-3 pt-2 pb-2 text-decoration-none sidebar-link">
              Бесплатная доставка
            </b-link>
            <b-link to="#" class="pl-3 pt-2 pb-2 text-decoration-none sidebar-link">
              Оплата заказа
            </b-link>
            <b-link to="#" class="pl-3 pt-2 pb-2 text-decoration-none sidebar-link">
              Возврат и обмен
            </b-link>
            <b-link to="#" class="pl-3 pt-2 pb-2 text-decoration-none sidebar-link">
              Как купить
            </b-link>
          </div>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Sidebar',
  computed: {
    ...mapState({
      categories: state => state.categories.listCategories
    })
  }
}
</script>

<style>
</style>
