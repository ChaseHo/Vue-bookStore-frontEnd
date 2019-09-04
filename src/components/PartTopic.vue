<template>
  <article class="topic-part-container">
    <header class="topic-part-header">
      <h2> {{ topic.title }} </h2>
      <ul>
        <li>
          <router-link :to="{name: 'Topic', params: {topicName: topic.name}}">
            查看更多&gt;&gt;
          </router-link>
        </li>
      </ul>
    </header>
    <div class="books">
      <part-topic-book
        v-for="book in books"
        :key="book._id"
        :book="book">
      </part-topic-book>
    </div>
  </article>
</template>

<script>
  import PartTopicBook from '@/components/PartTopicBook';

  export default {
    name: 'PartTopic',

    components: {
      PartTopicBook
    },

    props: {
      topic: Object
    },
    
    computed: {
      books() {
        return this.$store.getters.getPartTopicBooksByTopicName(this.topic.name);
      }
    }
  }
</script>

<style lang="scss" scoped>
.topic-part-container {
  padding: 0 1rem;
  margin: 1rem 0;
}

.topic-part-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid gray;
  padding: .5rem;

  ul {
    margin-left: auto;
    list-style: none;
  }

  li {
    display: inline-block;
  }
  
  a {
    display: block;
    color: rgb(105, 104, 104);
    font-size: .8rem;
    text-decoration: none;
  }
}

.books {
  display: flex;
  justify-content: space-around;
  padding: 1rem .5rem;
}
</style>

