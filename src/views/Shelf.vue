<template>
  <div>
    <template v-for="category in categories">
      <CategoryShelf :category="category">
        <template v-for="app in apps">
          <DEBCard v-if="app.category === category.value" :app="app" />
        </template>
      </CategoryShelf>
    </template>
    <Button type="primary" long class="btn-primary" @click="handleOpenCategoryModal">Add category</Button>
    <Divider>All apps</Divider>
    <div style="display: flex">
      <DEBCard v-for="app in apps" :app="app" />
    </div>
    <AddCategoryModal :open="openCategoryModal" @closeModal="openCategoryModal = false" />
  </div>
</template>

<script>
import CategoryShelf from '@/components/CategoryShelf';
import DEBCard from '@/components/DEBCard';
import AddCategoryModal from '@/components/AddCategoryModal';
import { db } from '@/firebase';
export default {
  components: {
    CategoryShelf,
    DEBCard,
    AddCategoryModal
  },
  firebase: {
    apps: db.ref('apps'),
    categories: db.ref('categories').orderByChild('value')
  },
  data() {
    return {
      openCategoryModal: false
    }
  },
  methods: {
    handleOpenCategoryModal() {
      this.openCategoryModal = true
    }
  }
};
</script>
