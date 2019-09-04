<template>
  <div class="topic-container">
    <nav-sidebar :navItems="topics"></nav-sidebar>
    <book-items :books="books"></book-items>
  </div>
</template>

<script>
  import NavSidebar from '@/components/NavSidebar'
  import BookItems from '@/components/BookItems'
  import {mapGetters} from 'vuex'

  export default {
    name: 'Topic',
    components: {
      NavSidebar,
      BookItems
    },
    computed: {
      ...mapGetters(['topics']),
      books () {
        return this.$store.getters.getTopicBooksByTopicName(this.$route.params.topicName);
      }
    }
  }
</script>

<style lang="scss" scoped>
.topic-container {
  display: flex;
  margin: 2rem 0;
}
</style>


