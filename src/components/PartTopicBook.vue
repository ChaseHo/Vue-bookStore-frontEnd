<template>
  <section class="book">
    <figure class="book-image">
      <router-link
        :to="{name: 'Book', params: {id: book._id}}"
        >
        <!-- book._id -->
        <img 
        :src="book.midIMG" 
        :alt="book.title">
      </router-link>
    </figure>
    <div class="book-info">
      <h3 class="book-title">
        <router-link
          :to="{name: 'Book', params: {id: book._id}}"
          >
          {{ book.title }}
        </router-link>
      </h3>
      <p class="book-author"> {{ book.author | formatAuthor }} </p>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'PartTopicBook',

    filters: {
      formatAuthor(author) {
        return author.toString();
      }
    },

    props: {
      book: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/styles/common';

.book {
  width: 120px;
  display: flex;
  flex-direction: column;
}

.book-image {
  max-width: 100px;
  max-width: min-content;
  img {
    width: 100px;
    height: 140px;
  }
}

.book-info {
  .book-title {
    padding: .2rem;
    font-size: .8rem;
    a {
      color: #613f23;
    }
  }

  .book-author {
    margin-top: auto;
    font-size: .8rem;
    color: rgb(105, 104, 104);
    padding: .1rem 0;
    @extend %text-ellipsis;
  }
}
</style>

