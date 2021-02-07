import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

Vue.use(YmapPlugin, {
  apiKey: '2b39a74d-ec92-458f-bb25-e688e2386503',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
})
