<template>
  <div>
    <Sidebar />
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '../components/client/Navbar'
import Sidebar from '../components/client/Sidebar'

export default {
  name: 'Default',
  components: {
    Navbar,
    Sidebar
  }
}
</script>
