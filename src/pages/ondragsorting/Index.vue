<template>
  <div>
    <v-row>
      <v-col>
        <div>On Drag Sorting</div>
        <div>Items: {{ items }}</div>
        <div>Dragging: {{ dragging }}</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          <div class="drop-zone">
            <div
              class="drag-el"
              v-for="(item, index) in listOne"
              :key="index"
              draggable
              @dragstart="startDrag($event, index)"
              @drop="onDrop($event, index)"
              @dragover.prevent
              @dragenter="dragEnter"
              @dragleave="dragLeave"
              @dragend="dragEnd"
            >
              {{ item.title }}
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    dragging: -1,
    items: [
      {
        id: 0,
        title: 'Item A',
        list: 1
      },
      {
        id: 1,
        title: 'Item B',
        list: 1
      },
      {
        id: 2,
        title: 'Item C',
        list: 1
      }
    ]
  }),
  methods: {
    /*  startDrag: (evt, item) => {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('itemID', item.id)
      console.log('Start Drag', item)
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData('itemID')
      const item = this.items.find((item) => item.id == itemID)
      item.list = list
      console.log('On Drop', list)
    }, */
    dragEnter() {},
    dragLeave() {},
    dragEnd() {},
    dragFinish(to, ev) {
      this.moveItem(this.dragging, to)
      ev.target.style.marginTop = '2px'
      ev.target.style.marginBottom = '2px'
    },
    async startDrag($event, index) {
      $event.dataTransfer.setData('itemID', index)
      $event.dataTransfer.dropEffect = 'move'
      $event.dataTransfer.effectAllowed = 'move'
      console.log('Start drag', $event, index)
      this.dragging = await index
    },
    onDrop($event, index) {
      this.moveItem(this.dragging, index)
      console.log('on drop', $event, index)
    },
    moveItem(from, to) {
      this.items.splice(to, 0, this.items.splice(from, 1)[0])
    }
  },
  computed: {
    listOne() {
      return this.items.filter((item) => item.list === 1)
    }
  }
}
</script>

<style scoped>
.drop-zone {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
}

.drag-el {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px;
  color: black;
}
</style>
