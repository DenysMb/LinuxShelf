<template>
  <div>
    <template v-for="category in categories">
      <CategoryShelf :category="category">
        <template v-for="app in apps">
          <DEBCard v-if="app.category === category.value" :app="app" />
        </template>
      </CategoryShelf>
    </template>
    <Button type="primary" long class="btn-primary" @click="modal = true">Add category</Button>
    <Divider>All apps</Divider>
    <div style="display: flex; flex-wrap: wrap;">
      <DEBListCard v-for="app in apps" :app="app" />
    </div>
    <AddCategoryModal
      :open="modal"
      @close="modal = false" />
  </div>
</template>

<script>
import CategoryShelf from "@/components/CategoryShelf";
import DEBCard from "@/components/DEBCard";
import DEBListCard from "@/components/DEBListCard";
import AddCategoryModal from "@/components/AddCategoryModal";
import { db } from "@/firebase";
export default {
  components: {
    CategoryShelf,
    DEBCard,
    DEBListCard,
    AddCategoryModal
  },
  firebase: {
    apps: db.ref("apps"),
    categories: db.ref("categories").orderByChild("value")
  },
  data() {
    return {
      modal: false
    };
  }
};
</script>
