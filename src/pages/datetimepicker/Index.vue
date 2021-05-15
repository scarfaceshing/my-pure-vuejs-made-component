<template>
  <div>
    <v-row>
      <v-col> Date Picker </v-col>
    </v-row>
    <v-row>
      <v-col>
        <DatePicker label="Date" :model="model" :menu="menu" />
      </v-col>
    </v-row>
    <v-row>
      <v-col> Time Picker </v-col>
    </v-row>
    <v-row>
      <v-col>
        <TimePicker label="Time" :model="model" :menu="menu" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import DatePicker from '@/components/base/DatePicker'
import TimePicker from '@/components/base/TimePicker'

export default {
  name: 'datetimepicker',
  components: {
    DatePicker,
    TimePicker
  },
  data: () => ({
    model: '',
    menu: false
  })
}
</script>

<style></style>
