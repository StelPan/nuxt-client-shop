<template>
  <b-navbar
    :sticky="true"
    fixed="bottom"
    class="shadow-sm bg-main"
    shadow
  >
    <b-button
      v-b-toggle.sidebar-backdrop
      class="toggle"
      variant="white"
      squared
    >
      <b-icon icon="list" variant="white" />
    </b-button>

    <b-navbar-brand :to="{ name: 'index' }" class="font-weight-bold text-white mr-0">
      <img class="logotype" src="../../static/icon.png" alt="">
      Gamebox
    </b-navbar-brand>

    <b-navbar-nav class="ml-auto h-100">
      <b-nav-item-dropdown class="navbar-route-link" right>
        <template slot="button-content">
          <b-icon icon="person-fill" variant="white" />
        </template>
        <template v-if="$auth.loggedIn">
          <b-dropdown-item :to="{ name: 'my-profile' }">
            Личный кабинет
          </b-dropdown-item>
          <b-dropdown-item @click="logout">
            Выход
          </b-dropdown-item>
        </template>
        <b-dropdown-item v-if="!$auth.loggedIn" v-b-modal.modal-authorization>
          Авторизация
        </b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item :to="{ name: 'cart' }" class="d-flex justify-content-center align-items-center navbar-route-link">
        <b-icon icon="basket2-fill" variant="white" />
      </b-nav-item>
      <b-nav-item :to="{ name: 'my-favorites' }" class="d-flex justify-content-center align-items-center navbar-route-link">
        <b-icon icon="heart-fill" variant="white" />
      </b-nav-item>
    </b-navbar-nav>

    <b-modal id="modal-authorization" title="Войдите или зарегистрируйтесь, чтобы продолжить" hide-footer>
      <template v-slot:modal-footer />
      <template v-if="!sendingMessage">
        <b-form action="post">
          <b-form-group
            id="input-group-1"
            label-for="input-mail"
            description="Укажите ваш почтовый адрес"
          >
            <b-form-input
              id="input-mail"
              v-model.trim="email"
              type="email"
              required
              placeholder="Почтовый адрес"
            />
          </b-form-group>
          <b-button @click.prevent="send(email)" type="submit" variant="danger">
            Получить код
          </b-button>
        </b-form>
      </template>
      <template v-if="sendingMessage">
        <b-form-group
          id="input-group-2"
          label-for="input-code"
          description="Введите одноразовый код"
        >
          <b-form-input
            id="input-code"
            v-model.trim="code"
            type="text"
            required
            placeholder="Одноразовый код"
          />
        </b-form-group>
        <b-button @click.prevent="login" type="submit" variant="danger">
          Войти
        </b-button>
      </template>
    </b-modal>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      email: '',
      code: '',
      sendingMessage: false
    }
  },
  methods: {
    async login () {
      try {
        const loginParams = {
          email: this.email,
          code: this.code
        }

        console.log(loginParams)

        await this.$auth.loginWith('laravelJWT', { data: { ...loginParams } })
        this.$bvModal.hide('modal-authorization')
      } catch (e) {}
    },
    async logout () {
      try {
        this.email = this.code = ''
        this.sendingMessage = false

        await this.$auth.logout()
      } catch (e) {}
    },
    async send () {
      try {
        await this.$axios.post('/auth/generate-auth-link', { email: this.email })
        this.sendingMessage = true
      } catch (e) {}
    }
  }
}
</script>
