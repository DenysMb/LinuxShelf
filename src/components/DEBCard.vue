<template>
  <Card style="margin-right: 20px; width: 160px;">
    <div style="text-align:center">
      <img
        src="@/assets/debian.png"
        @click="openModal"
      />
      <h3>{{app.name}}</h3>
    </div>
    <DEBModal
      :open="modal"
      :title="app.name"
      :addedIn="app.addedIn"
      :size="app.size"
      :category="app.category"
      :lastTimeDownloaded="app.lastTimeDownloaded"
      />
  </Card>
</template>

<script>
  import DEBModal from '@/components/DEBModal'
  export default {
    components: {
      DEBModal
    },
    props: {
  		app: {
        type: Object,
        default: {
          title: 'APP',
          image: '@/assets/debian.png',
          addedIn: '02/01/2019',
          size: '128Mb',
          category: 'Favorites',
          lastTimeDownloaded: '02/01/2019'
        }
      },
  	},
    data() {
      return {
        modal: false
      }
    },
    methods: {
      openModal(){
        this.modal = true
      }
    }
  }
</script>

<style scoped>
  img {
    width: 128px; height: 128px;
  }
  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
