<template>
  <v-app-bar app color="dark" flat>
    <v-icon v-text="`mdi-menu`" @click="$emit('toggleDrawer')"></v-icon>
  </v-app-bar>
</template>

<script>
export default {
  emits: ['toggleDrawer']
}
</script>

<style></style>
