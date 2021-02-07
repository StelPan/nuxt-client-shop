<template>
  <div class="pt-3">
    <ChangeProfileModal
      v-on:change="fetchUpdateUser"
      :current-user="$auth.user"
    />
    <b-container fluid="">
      <h1>Ваш профиль</h1>
      <b-row>
        <b-col cols="12">
          <div class="d-flex flex-column">
            <div class="d-flex flex-column credentials">
              <div class="d-flex pr-2">
                <!--                <b-icon icon="emoji-smile" class="position-absolute" />-->
                <h2 class="d-block mt-1">
                  Учетные данные
                </h2>
              </div>
              <ul class="d-flex justify-content-between">
                <li>
                  <div class="d-flex flex-column">
                    <span class="text-secondary font-weight-lighter">
                      ФИО
                    </span>
                    <span class="">
                      {{ $auth.user.name + ' ' + $auth.user.surname || 'Не указано' }}
                    </span>
                  </div>
                  <div class="d-flex flex-column">
                    <span class="text-secondary font-weight-lighter">
                      Дата рождения
                    </span>
                    <span class="">
                      {{ $auth.user.birth_date || 'Не указано' }}
                    </span>
                  </div>
                </li>
                <li class="">
                  <div class="d-flex flex-column">
                    <span class="text-secondary font-weight-lighter">
                      Телефон
                    </span>
                    <span class="">
                      {{ $auth.user.phone || 'Не указано' }}
                    </span>
                  </div>
                  <div class="d-flex flex-column">
                    <span class="text-secondary font-weight-lighter">
                      Электронная почта
                    </span>
                    <span class="">
                      {{ $auth.user.mail || 'Не указано' }}
                    </span>
                  </div>
                </li>
              </ul>
              <b-button
                @click="$bvModal.show('change-profile-modal')"
                variant="link"
                class="mt-1"
              >
                Изменить
              </b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ChangeProfileModal from '~/components/client/modals/ChangeProfileModal'

export default {
  name: 'Profile',
  middleware: 'notAuthentication',
  components: {
    ChangeProfileModal
  },

  async fetch () {
    await this.$auth.fetchUser()
  },
  methods: {
    ...mapActions({
      fetchUpdateUser: 'user/fetchUpdateUser'
    })
  }
}
</script>
