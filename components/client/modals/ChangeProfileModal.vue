<template>
  <b-modal
    id="change-profile-modal"
    @ok="$emit('change', form)"
    title="Изменение учетных данных"
    ok-title="Сохранить изменения"
    ok-only
  >
    <b-form>
      <b-form-group
        id="input-group-name"
        label="Имя пользователя"
        label-for="input-name"
      >
        <b-form-input
          id="input-name"
          v-model="form.name"
          required
          placeholder="Введите ваше имя"
        />
      </b-form-group>
      <b-form-group
        id="input-group-surname"
        label="Фамилия пользователя"
        label-for="input-surname"
      >
        <b-form-input
          id="input-name"
          v-model="form.surname"
          required
          placeholder="Введите вашу фамилию"
        />
      </b-form-group>
      <b-form-group
        id="input-group-birth-date"
        label="Дата рождения"
        label-for="input-birth-date"
      >
        <b-form-input
          id="input-name"
          v-model="form.birth_date"
          type="date"
          required
          placeholder="Введите дату рождения"
        />
      </b-form-group>
      <b-form-group
        id="input-group-phone"
        label="Номер телефона"
        label-for="input-phone"
      >
        <b-form-input
          id="input-name"
          v-model="form.phone"
          type="tel"
          required
          placeholder="Введите ваш номер телефона"
        />
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
export default {
  name: 'ChangeProfileModal',
  props: {
    currentUser: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      form: {
        name: this.currentUser.name,
        surname: this.currentUser.surname,
        phone: this.currentUser.phone
      }
    }
  }
}
</script>
