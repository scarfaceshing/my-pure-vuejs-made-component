<template>
  <div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :nudge-right="40"
      :return-value.sync="time"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="model"
          :label="label"
          append-icon="mdi-clock-time-four-outline"
          readonly
          v-bind="attrs"
          v-on="on"
          outlined
        ></v-text-field>
      </template>
      <v-time-picker
        v-if="menu"
        v-model="model"
        full-width
        @click:minute="$refs.menu.save(model)"
      ></v-time-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String
    },
    model: {
      type: Object
    }
  },
  data: () => ({
    menu: false,
    modal: false
  })
}
</script>

<style></style>
