<template>
  <div>
    <v-img :src="imageData" :width="width" :height="height"></v-img>
    <v-file-input
      v-model="imageSrc"
      rounded
      accept="image/*"
      prepend-icon="mdi-cloud-upload"
      color="primary"
      @change="previewImage"
    ></v-file-input>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: Array
    },
    width: {
      type: String,
      default: '250'
    },
    height: {
      type: String,
      default: '100'
    }
  },
  data: () => ({
    imageData: 'https://www.fcprop.net/images/noimage.png'
  }),
  methods: {
    previewImage() {
      this.imageData = this.imageSrc
        ? URL.createObjectURL(this.imageSrc)
        : 'https://www.fcprop.net/images/noimage.png'
    }
  }
}
</script>

<style></style>
