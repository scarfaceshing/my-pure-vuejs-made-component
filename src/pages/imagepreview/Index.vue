<template>
  <div>
    <v-row>
      <v-col>
        <div>File input for image uploader with preview</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <ImagePreviewer :imageSrc="image" width="100%" height="500" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ImagePreviewer from '@/components/base/ImagePreview'

export default {
  components: {
    ImagePreviewer
  },
  data: () => ({
    image: []
  })
}
</script>

<style></style>
