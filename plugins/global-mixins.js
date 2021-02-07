import Vue from 'vue'
import global from '../mixins/global'

if (!Vue.__my_mixin__) {
  Vue.__my_mixin__ = true
  Vue.mixin(global)
}
