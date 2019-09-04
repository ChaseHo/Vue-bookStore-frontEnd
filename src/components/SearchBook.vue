<template>
  <section class="search-book-container">
    <form>
      <input 
        type="search" 
        v-model.trim="keyword" 
        @input="searchBooks(keyword)" 
        :size="searckBoxSize" 
        :placeholder="placeholder"
      >
    </form>
    <ul class="matching-books" v-show="isShow">
      <li 
        class="matching-book-item"
        v-for="{_id, smallIMG, title, author} of matchingBooks" 
        @click="hideMatchingBooks" 
        :key="_id"
        >
        <router-link 
          class="nav-link-book"
          :to="{name: 'Book', params: {id: _id}}"
          >
          <section class="book-wraper">
            <img class="book-image" v-bind:src="smallIMG">
            <div class="book-info">
              <h4 class="title"> {{ title }} </h4>
              <!-- <p class="author"> {{ author.join(',') }} </p> -->
              <p class="author"> {{ author }} </p>
            </div>
          </section>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'SearchBook',
    
    data() {
      return {
        searckBoxSize: '70px',
        placeholder: '书名、作者',
        keyword: '',
        matchingBooks: []
      }
    },

    computed: {
      isShow() {
        return this.keyword.length > 0;
      }
    },

    methods: {
      searchBooks(keyword) {
        this.matchingBooks = this.$store.getters.getBooksByKeyword(keyword);
      },
      hideMatchingBooks() {
        this.matchingBooks = [];
        this.keyword = '';
      }	
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/styles/common';

.search-book-container {
  position: relative;
  margin-left: auto;
  margin-right: 8rem;

  input {
    border: 1px solid rgb(176, 176, 176);;
    border-radius: .5em;
    padding: .5rem;

    &:focus {
      border-color: $site-primary-color;
      outline: none;
    }
  }
}

.matching-books {
  width: 100%;
  position: absolute;
  z-index: 3;
  list-style-type: none;
  border: 1px solid rgb(176, 176, 176);;
  border-top: none;
  border-radius: 5px;
  background: rgb(251, 250, 248);
}

.matching-book-item {
  border-bottom: 1px solid rgb(176, 176, 176);
  padding: .5rem;
  &:last-child {
    border: none;
  }
  .nav-link-book {
    display: block;
  }
  .book-wraper {
    display: flex;
    flex-direction: row;
  }
  .book-image {
    width: 33px;
    height: 45px;
  }
  .book-info {
    margin-left: .5rem;
  }
  .author {
    font-size: .8rem;
    line-height: 2;
    color: #696868;
  }
}
</style>