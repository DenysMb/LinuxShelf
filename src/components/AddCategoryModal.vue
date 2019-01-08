<template>
  <Modal
    v-model="open"
    @on-cancel="$emit('close')"
    :closable="false">
    <Input
      v-model="title"
      style="width: 100%"
      placeholder="Category name"
      />
    <div slot="footer">
      <Button
        type="default"
        size="small"
        @click="$emit('close')">Cancel</Button>
      <Button
        type="primary"
        size="small"
        class="btn-primary"
        @click="save">Save</Button>
    </div>
  </Modal>
</template>

<script>
  import { db } from '@/firebase';
  import camelCase from 'lodash/camelCase';
  export default {
    props: {
      open: Boolean
    },
    firebase: {
      categories: db.ref('categories')
    },
   data() {
     return {
       title: ''
     }
   },
   methods: {
     save(){
       this.$firebaseRefs.categories.push({
         label: this.title,
         value: camelCase(this.title)
       });
       this.$emit("close");
     }
   }
  }
</script>

<style scoped>
  img {
    width: 128px; height: 128px;
  }
</style>
