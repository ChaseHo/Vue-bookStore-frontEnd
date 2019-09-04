<template>
  <div class="nav-sidebar-container">
    <dl>
      <dt>
        <router-link
          class="link-category"
          :to="{name: 'Category', params: {category: 'all'}}"
          >
          <span class="title">所有图书</span>
          <span class="count"> {{ allBooksCount }} </span>
        </router-link>
      </dt>
      <dd 
        v-for="{name, title, count} of navItems" 
        :key="name"
        >
        <router-link 
          class="link-category"
          :to="{name: 'Category', params: {category: name}}">
          <span class="title"> {{ title }} </span>
          <span class="count"> {{ count }} </span>
        </router-link>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'NavSidebar',
    props: {
      navItems: Array
    },
    computed: {
      ...mapGetters(['allBooksCount'])
    }
  }
</script>

<style lang="scss" scoped>
.nav-sidebar-container {
  width: 240px;
  border-right: 1px solid rgb(176, 176, 176);
}

.link-category {
  display: block;
  text-decoration: none;
  span {
    display: inline-block;
    width: 49%;
    font-size: .9rem;
    padding: .5rem;
    color: #613f23;
  }
  .title {
    text-align: left;
  }
  .count {
    text-align: right;
  }
}
dd {
  .title {
    padding-left: 1.5rem;
  }
}
.link-category:hover,
.active {
  color: #ed6c00;
  border-right: 4px solid #ed6c00;
  background: #f4f2ef;
}
</style>