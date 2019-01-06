<template>
  <Modal
    v-model="open"
    @on-cancel="closeModal"
    :closable="false">
    <Input
      :value="title"
      style="width: 100%"
      slot="header"
      :disabled="disabledInput"
      />
    <div>
      <strong>Added in</strong>:
      <Input
        :value="addedIn"
        :disabled="true"
        size="small"
        />
    </div>
    <div>
      <strong>Last time downloaded</strong>:
      <Input
        :value="lastTimeDownloaded"
        :disabled="true"
        size="small"
        />
    </div>
    <div>
      <strong>Size</strong>:
      <Input
        :value="size"
        :disabled="true"
        size="small"
        />
    </div>
    <div>
      <strong>Category</strong>:
      <Select size="small" :value="category" :disabled="disabledInput">
        <Option v-for="category in categories" :value="category.value" :key="category.value">{{ category.label }}</Option>
      </Select>
    </div>
    <div slot="footer">
      <Button
        type="default"
        size="large"
        @click="edit">{{disabledInput ? 'Edit' : 'Save'}}</Button>
      <Button
        type="primary"
        size="large"
        @click="download">Download</Button>
    </div>
  </Modal>
</template>

<script>
  import { db } from '@/firebase';
  export default {
    props: {
	    title: String,
	    addedIn: String,
      size: String,
      category: String,
	    lastTimeDownloaded: String,
      open: Boolean
	  },
    firebase: {
      categories: db.ref('categories')
    },
   data() {
     return {
       disabledInput: true
     }
   },
   methods: {
     download(){
       alert('Baixando o arquivo');
     },
     edit(){
       this.disabledInput = !this.disabledInput;
     },
     closeModal(){
       this.open = false
     }
   }
  }
</script>

<style scoped>
  img {
    width: 128px; height: 128px;
  }
</style>
