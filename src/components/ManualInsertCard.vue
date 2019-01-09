<template>
  <Modal
    v-model="open"
    @on-cancel="$emit('close')"
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
      <Select size="small" v-model="category" not-found-text="No category">
        <Option v-for="category in categories" v-model="category.value" :key="category.value">{{ category.label }}</Option>
      </Select>
    </div>
    <div>
      <strong>Type</strong>:
      <Select size="small" v-model="type" not-found-text="No category">
        <Option v-for="type in types" v-model="type.value" :key="type.value">{{ type.label }}</Option>
      </Select>
    </div>
    <div slot="footer">
      <Button
        type="default"
        size="large"
        @click="$emit('close')">Cancel</Button>
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
    categories: db.ref("categories"),
    types: db.ref("types")
  },
  data() {
    return {
      name: "",
      category: this.defaultCategory,
      type: "deb",
      url: ""
    };
  },
  methods: {
    saveCard() {
      this.$firebaseRefs.apps.push({
        name: this.name,
        category: this.category,
        addedIn: new Date().toISOString(),
        lastTimeDownloaded: null,
        url: this.url,
        type: this.type,
        size: "No size occupied"
      });
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
</style>
