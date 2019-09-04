<template>
  <div id="app">
    <div class="main">
      <header-page></header-page>
      <nav-page></nav-page>
      <router-view></router-view>
      <site-footer></site-footer>
    </div>
    <sidebar-controls></sidebar-controls>
  </div>
</template>

<script>
  import HeaderPage from '@/components/HeaderPage'
  import NavPage from '@/components/NavPage'
  import SiteFooter from '@/components/SiteFooter'
  import SidebarControls from '@/components/SidebarControls'
  import {mapActions} from 'vuex'

  export default {
    name: 'App',
    components: {
      HeaderPage,
      NavPage,
      SiteFooter,
      SidebarControls
    },
    methods: {
      // ...mapActions(['fetchTopics', 'fetchCategories']),

      ...mapActions([
        'fetchTopic',
        'fetchhotBooks',
        'fetchdiscountBooks',
        'fetchnewBooks',
        'fetchCategory',
        'fetchcomputer',
        'fetchhistory',
        'fetchliterature',
        'fetcheconomics',
        'pushAllbooks',
        'fetchUsers',
        'fetchComments'
      ]),
    },
    mounted () {
      this.$nextTick(function() {
        // this.fetchTopics('./static/data/topic.json');
        // this.fetchCategories('./static/data/category.json');
        this.fetchTopic('http://localhost:4000/topic');
        this.fetchhotBooks('http://localhost:4000/hotBooks');
        this.fetchdiscountBooks('http://localhost:4000/discountBooks');
        this.fetchnewBooks('http://localhost:4000/newBooks');
        this.fetchCategory('http://localhost:4000/category');
        // setTimeout(this.fetchCategory('http://localhost:5000/category'), 100)
        this.fetchcomputer('http://localhost:4000/computer');
        this.fetchhistory('http://localhost:4000/history');
        this.fetchliterature('http://localhost:4000/literature');
        this.fetcheconomics('http://localhost:4000/economics');
        this.fetchUsers('http://localhost:4000/users')
        this.fetchComments('http://localhost:4000/comment')
        // setTimeout(this.pushAllbooks(), 500);
        // this.pushAllbooks();
      });
    },
    created: function () {
      
    }
  }
</script>

<style lang="scss">
@import './assets/styles/reset';

.main {
  width: 1200px;
  margin: 0 auto;
}
</style>





