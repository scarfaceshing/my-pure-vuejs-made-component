<template>
  <v-app>
    <AppBar @toggleDrawer="drawer = !drawer" />
    <Drawer :drawer="drawer" />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Drawer from '@/components/core/Drawer.vue'
import AppBar from '@/components/core/AppBar.vue'

export default {
  name: 'App',
  components: {
    Drawer,
    AppBar
  },
  data: () => ({
    drawer: true
  })
}
</script>
