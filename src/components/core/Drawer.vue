<template>
  <div>
    <v-navigation-drawer app v-model="drawer" absolute>
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            src="https://scontent.fceb1-1.fna.fbcdn.net/v/t1.6435-1/c0.0.160.160a/p160x160/126246817_3235116993259295_8982315611284550941_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeHlpJ827DYerjLGkuzS-6C1msRdZRA98ueaxF1lED3y54cnoIMBh4YNWgZzTOxc4veocTP7dAmMO2ujz6Fch_Zw&_nc_ohc=Zo44Z0Y8_0wAX8bKpyO&_nc_ht=scontent.fceb1-1.fna&tp=27&oh=9483e56b8c3681a54e9131a0f75b5679&oe=60C1F81A"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Shingha</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item_a in items"
          :key="item_a.title"
          link
          :to="{ name: item_a.name }"
        >
          <v-list-item-icon>
            <v-icon>{{ item_a.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item_a.title }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean
    }
  },
  data: () => ({
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', name: 'dashboard' },
      { title: 'On Drag Sorting', icon: 'mdi-sort', name: 'ondragsorting' },
      { title: 'Image Previewer', icon: 'mdi-image', name: 'imagepreview' },
      { title: 'Date & Time Picker', icon: 'mdi-calendar', name: 'datetimepicker' },
      { title: 'Line Clamp', icon: 'mdi-text', name: 'lineclamp' }
    ]
  })
}
</script>

<style></style>
