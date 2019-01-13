<template>
  <Card class="cardList">
    <div style="display: flex;" @click="openModal">
      <img
        :src="logo"
      />
      <h3>{{app.name}}</h3>
    </div>
    <DEBModal
      :open="modal"
      @close="modal = false"
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
      type: Object
    }
  },
  data() {
    return {
      modal: false,
      logo: require('@/assets/' + this.app.type + '.png')
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
  width: 24px;
  height: 24px;
  margin-right: 10px;
}
h3 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cardList {
  margin-bottom: 10px;
  width: 100%;
}
.ivu-card-body {
  padding: 10px !important;
}
</style>
