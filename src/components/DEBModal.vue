<template>
  <Modal
    :value="open"
    @on-cancel="$emit('close')"
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
      <Select size="small" v-model="app.category" not-found-text="No category" :disabled="disabledInput" :on-change="handleChange('category')">
        <Option v-for="category in categories" v-model="category.value" :key="category.value">{{ category.label }}</Option>
      </Select>
    </div>
    <div>
      <strong>Type</strong>:
      <Select size="small" v-model="app.type" not-found-text="No category" :disabled="disabledInput" :on-change="handleChange('type')">
        <Option v-for="type in types" v-model="type.value" :key="type.value">{{ type.label }}</Option>
      </Select>
    </div>
    <div slot="footer">
      <Button
        type="default"
        size="large"
        class="btn-default"
        @click="deleteApp">Delete</Button>
      <Button
        type="default"
        size="large"
        class="btn-default"
        @click="edit">{{disabledInput ? 'Edit' : 'Done'}}</Button>
      <a :href="app.url" download style="margin-left: 10px;">
        <Button
          type="primary"
          size="large"
          :class="'btn-' + $store.state.color">Download</Button>
      </a>
    </div>
  </Modal>
</template>

<script>
import { db } from "@/firebase";
export default {
  props: {
    app: Object,
    open: false
  },
  firebase: {
    apps: db.ref("apps"),
    categories: db.ref("categories"),
    types: db.ref("types")
  },
  data() {
    return {
      disabledInput: true,
    };
  },
  methods: {
    download() {
      alert(this.app.url);
    },
    edit() {
      this.disabledInput = !this.disabledInput;
    },
    handleChange(key) {
      this.$firebaseRefs.apps
        .child(this.app[".key"])
        .update({ [key]: this.app[key] });
    },
    deleteApp() {
      this.$firebaseRefs.apps.child(this.app[".key"]).remove();
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
