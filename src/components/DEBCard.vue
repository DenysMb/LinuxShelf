<template>
  <Card class="card">
    <div style="text-align:center">
      <img
        src="@/assets/debian.png"
        @click="openModal"
        @closeModal="openModal = false"
      />
      <h3>{{app.name}}</h3>
    </div>
    <DEBModal
      :open="modal"
      :app="app"
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
        image: "@/assets/debian.png",
        addedIn: "02/01/2019",
        size: "128Mb",
        category: "favorites",
        lastTimeDownloaded: "02/01/2019"
      }
    }
  },
  data() {
    return {
      modal: false
    };
  },
  methods: {
    openModal() {
      this.modal = true;
    }
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
@media (max-width: 600px) {
  .card {
    margin-bottom: 20px;
  }
}
</style>
