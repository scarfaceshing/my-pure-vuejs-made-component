<template>
  <div
    v-resize="LineClamp"
    ref="container"
    class="line-clamp"
    :style="`max-width:${width}px;height:${height}px`"
  >
    <div ref="paragraph">
      <div v-html="text"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false
    },
    height: {
      type: Number,
      required: false
    },
    width: {
      type: Number,
      required: false
    }
  },
  data: () => ({
    paraHeight: 0,
    containHeight: 0
  }),
  methods: {
    LineClamp() {
      const paraHeight = this.$refs.paragraph
      const containHeight = this.$refs.container.clientHeight

      while (paraHeight.clientHeight > containHeight) {
        this.$refs.paragraph.textContent = this.$refs.paragraph.textContent.replace(
          /\W*\s(\S)*$/,
          '...'
        )
      }
      console.log(this.$refs.paragraph.clientHeight, this.$refs.container.clientHeight)
    }
  },
  mounted() {
    this.LineClamp()
  }
}
</script>

<style lang="scss" scoped>
.line-clamp {
  overflow: hidden;
}
</style>
