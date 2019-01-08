<template>
  <Modal
    v-model="open"
    @on-cancel="closeModal"
    :closable="false">
    <Input
      v-model="name"
      placeholder="Name"
      size="small"
      style="width: 100%"
      slot="header"
      />
    <div>
      <strong>URL</strong>:
      <Input
        v-model="url"
        size="small"
        style="width: 100%"
        />
    </div>
    <div>
      <strong>Category</strong>:
      <Select size="small" v-model="category">
        <Option v-for="category in categories" v-model="category.value" :key="category.value">{{ category.label }}</Option>
      </Select>
    </div>
    <div slot="footer">
      <Button
        type="default"
        size="large"
        @click="closeModal">Cancel</Button>
      <Button
        type="primary"
        size="large"
        class="btn-primary"
        style="margin-left: 10px;"
        @click="saveCard">Insert</Button>
    </div>
  </Modal>
</template>

<script>
import { db } from "@/firebase";
export default {
  props: {
    open: Boolean,
    defaultCategory: String
  },
  firebase: {
    apps: db.ref("apps"),
    categories: db.ref("categories")
  },
  data() {
    return {
      name: "",
      category: this.defaultCategory,
      url: ""
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal", this.open);
    },
    saveCard() {
      this.$firebaseRefs.apps.push({
        name: this.name,
        category: this.category,
        addedIn: new Date().toISOString(),
        lastTimeDownloaded: null,
        url: this.url,
        size: "No size occupied"
      });
      this.closeModal();
    }
  }
};
</script>

<style scoped>
</style>
