<template>
  <Card style="width: 100%; margin-bottom: 20px;">
    <p slot="title" style="text-align: left;">
      <Icon :type="'ios-' + icon"></Icon>
      {{category.label}}
    </p>
    <a href="#" slot="extra" @click.prevent="deleteCategory" v-if="deleteCategory">
      <Icon type="ios-close"></Icon>
      Delete
    </a>
    <div style="display: flex;">
      <slot></slot>
      <AddAppCard :category="category.value" />
    </div>
  </Card>
</template>

<script>
  import AddAppCard from './AddAppCard';
  import { db } from '@/firebase';
  export default {
    components: {
      AddAppCard
    },
    props: {
  		icon: String,
  		category: Object,
      deleteCategory: {type: Boolean, default: true}
  },
  firebase: {
    categories: db.ref('categories')
  },
  methods: {
    deleteCategory(){
      this.$firebaseRefs.categories.child(this.category['.key']).remove();
    }
  }
  }
</script>

<style scoped>
  a {
    color: #f9548f;
    transition: all 0.2s;
  }
  a:hover {
    opacity: 0.8;
    transition: all 0.2s;
  }
</style>
