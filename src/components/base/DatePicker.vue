<template>
  <div>
    <v-menu
      ref="menu1"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="model"
          :label="label"
          persistent-hint
          append-icon="mdi-calendar"
          v-bind="attrs"
          v-on="on"
          outlined
        >
        </v-text-field>
      </template>
      <v-date-picker v-model="model" no-title @input="menu1 = false"> </v-date-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    model: {
      type: Object
    },
    label: {
      type: String
    },
    menu: {
      type: Boolean
    }
  },
  data: () => ({})
}
</script>

<style></style>
