<template>
  <div>
    <CategoryShelf title="Favorites">
      <template v-for="app in appList">
        <DEBCard :app="app" />
      </template>
    </CategoryShelf>
    <Button type="primary" long class="btn-primary">Add category</Button>
  </div>
</template>

<script>
import CategoryShelf from '@/components/CategoryShelf'
import DEBCard from '@/components/DEBCard'
export default {
  components: {
    CategoryShelf,
    DEBCard
  },
  data() {
    return {
      appList: [
        {
          title: 'WPS Office',
          addedIn: '02/01/2019',
          size: '128Mb',
          category: 'Favorites',
          lastTimeDownloaded: '02/01/2019'
        },
        {
          title: 'TeamViewer',
          addedIn: '01/01/2019',
          size: '74Mb',
          category: 'Favorites',
          lastTimeDownloaded: '02/01/2019'
        },
        {
          title: 'OnlyOffice',
          addedIn: '01/01/2019',
          size: '187Mb',
          category: 'Favorites',
          lastTimeDownloaded: '01/01/2019'
        }
      ]
    }
  }
};
</script>

<style scoped>
.btn-primary {
  margin-top: 20px;
  background-color: #f9548f;
  border-color: #f9548f;
  transition: all 0.2s;
}
.btn-primary:hover {
  opacity: 0.8;
  transition: all 0.2s;
}
</style>
