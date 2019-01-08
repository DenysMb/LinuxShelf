<template>
  <Card class="card">
    <div
      style="text-align:center"
      @click.prevent="modal = true;">
      <img
        :src="logo"
      />
      <h3>{{app.name}}</h3>
    </div>
    <DEBModal
      :app="app"
      :open="modal"
      @close="modal = false"
      />
  </Card>
</template>

<script>
import DEBModal from "@/components/DEBModal";
export default {
  components: {
    DEBModal
  },
  props: {
    app: {
      type: Object,
      default: {
        title: "APP",
        image: "@/assets/deb.png",
        addedIn: "02/01/2019",
        size: "128Mb",
        category: "",
        lastTimeDownloaded: "02/01/2019"
      }
    }
  },
  data() {
    return {
      modal: false,
      logo: require('@/assets/' + this.app.type + '.png')
    };
  }
};
</script>

<style scoped>
img {
  width: 128px;
  height: 128px;
}
h3 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card {
  margin-right: 20px;
  width: 160px;
}
</style>
