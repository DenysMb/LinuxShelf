<template>
  <Card style="width:100%">
    <p slot="title" style="text-align: left;">
      <Icon :type="'ios-' + icon"></Icon>
      {{title}}
    </p>
    <a href="#" slot="extra" @click.prevent="manuallyInsert">
      <Icon type="ios-add"></Icon>
      Insert
    </a>
    <div style="display: flex;">
      <slot></slot>
      <AddAppCard />
    </div>
  </Card>
</template>

<script>
  import AddAppCard from './AddAppCard';

  export default {
    components: {
      AddAppCard
    },
    props: {
		icon: String,
		title: String
  },
  methods: {
    manuallyInsert(){
      alert('manuallyInsert');
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
