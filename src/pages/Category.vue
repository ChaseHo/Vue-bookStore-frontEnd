<template>
  <div class="category-container">
    <nav-sidebar-category :navItems="categories"></nav-sidebar-category>
    <book-items :books="books"></book-items>
  </div>
</template>

<script>
  import NavSidebarCategory from '@/components/NavSidebarCategory'
  import BookItems from '@/components/BookItems'
  import {mapGetters} from 'vuex'

  export default {
    name: 'Category',
    components: {
      NavSidebarCategory,
      BookItems
    },
    computed: {
      ...mapGetters(['categories']),
      books () {
        return this.$store.getters.getBooksByCategory(this.$route.params.category);
      }
    }
  }
</script>

<style lang="scss" scoped>
.category-container {
  display: flex;
  margin: 2rem 0;
}
</style>


