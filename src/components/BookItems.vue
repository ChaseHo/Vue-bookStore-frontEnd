<template>
  <section class="book-items">
    <book-item
      class="book-item"
      v-for="book of books"
      :key="book._id"
      :book="book">
      <!-- book._id -->
    </book-item>
  </section>
</template>

<script>
  import BookItem from '@/components/BookItem'

  export default {
    name: 'BookItems',

    components: {
      BookItem
    },
    
    props: {
      books: Array
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/styles/common';

.book-items {
  width: 960px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 1rem 0 2rem;
}

.book-item {
  width: 50%;
}
</style>


