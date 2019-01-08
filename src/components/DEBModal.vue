<template>
  <Modal
    v-model="open"
    @on-cancel="closeModal"
    :closable="false">
    <Input
      v-model="app.name"
      style="width: 100%"
      slot="header"
      :disabled="disabledInput"
      :on-change="handleChange('name')"
      />
    <div>
      <strong>Added in</strong>:
      <Input
        v-model="app.addedIn"
        :disabled="true"
        size="small"
        />
    </div>
    <div>
      <strong>Last time downloaded</strong>:
      <Input
        v-model="app.lastTimeDownloaded"
        :disabled="true"
        size="small"
        />
    </div>
    <div>
      <strong>Size</strong>:
      <Input
        v-model="app.size"
        :disabled="true"
        size="small"
        />
    </div>
    <div>
      <strong>URL</strong>:
      <Input
        v-model="app.url"
        :disabled="true"
        size="small"
        />
    </div>
    <div>
      <strong>Category</strong>:
      <Select size="small" v-model="app.category" :disabled="disabledInput" :on-change="handleChange('category')">
        <Option v-for="category in categories" v-model="category.value" :key="category.value">{{ category.label }}</Option>
      </Select>
    </div>
    <div slot="footer">
      <Button
        type="default"
        size="large"
        class="btn-default"
        @click="edit">{{disabledInput ? 'Edit' : 'Done'}}</Button>
      <a :href="app.url" download style="margin-left: 10px;">
        <Button
          type="primary"
          size="large"
          class="btn-primary">Download</Button>
      </a>
    </div>
  </Modal>
</template>

<script>
import { db } from "@/firebase";
export default {
  props: {
    app: Object,
    open: Boolean
  },
  firebase: {
    apps: db.ref("apps"),
    categories: db.ref("categories")
  },
  data() {
    return {
      disabledInput: true
    };
  },
  methods: {
    download() {
      alert(this.app.url);
    },
    edit() {
      this.disabledInput = !this.disabledInput;
    },
    closeModal() {
      this.$emit("closeModal", this.open);
    },
    handleChange(key) {
      this.$firebaseRefs.apps
        .child(this.app[".key"])
        .update({ [key]: this.app[key] });
    }
  }
};
</script>

<style scoped>
img {
  width: 128px;
  height: 128px;
}
</style>
