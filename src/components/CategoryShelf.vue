<template>
  <Card style="width: 100%; margin-bottom: 20px;">
    <p slot="title" style="text-align: left;">
      <Icon :type="'ios-' + icon"></Icon>
      {{category.label}}
    </p>
    <div slot="extra">
      <Button
        type="default"
        shape="circle"
        icon="ios-trash"
        class="btn-default"
        @click.prevent="deleteCategory"
        v-if="deleteCategoryBool" />
      <Button
        type="primary"
        shape="circle"
        icon="ios-add"
        :class="'btn-' + $store.state.color"
        style="margin-left: 10px;"
        @click.prevent="openManualInsertCardModal" />
    </div>
    <div style="display: flex; overflow-x: auto;">
      <slot></slot>
    </div>
    <ManualInsertCard
      :open="openModal"
      @close="openModal = false"
      :defaultCategory="category.value"/>
  </Card>
</template>

<script>
import ManualInsertCard from "./ManualInsertCard";
import { db } from "@/firebase";
export default {
  components: {
    ManualInsertCard
  },
  props: {
    icon: String,
    category: Object,
    deleteCategoryBool: { default: true }
  },
  firebase: {
    categories: db.ref("categories")
  },
  data() {
    return {
      openModal: false
    };
  },
  methods: {
    deleteCategory() {
      this.$firebaseRefs.categories.child(this.category[".key"]).remove();
    },
    openManualInsertCardModal() {
      this.openModal = true;
    }
  }
};
</script>

<style scoped>
a {
  color: #585858;
  transition: all 0.2s;
}
a:hover {
  opacity: 0.8;
  transition: all 0.2s;
}
</style>
