<template>
  <div class="nav-page-container">
    <nav>
      <ul>
        <li>
          <router-link :to="{name: 'Home'}" exact>
            首页
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'Topic', params: {topicName: 'hotBooks'}}">
            主题
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'Category', params:{category: 'all'}}">
            分类
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'Cart'}">
            购物车
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'NavPage'
  }
</script>

<style lang="scss" scoped>
nav {
  background: rgb(255, 122, 32);
  ul {
    list-style: none;
    margin-left: 240px;
  }
  li {
    display: inline-block;
  }
  a {
    display: block;
    text-decoration: none;
    color: #fff;
    padding: .5rem 1rem;
    &:hover {
      background: rgb(241, 99, 0);
    }
  }
  .active {
    background: rgb(241, 99, 0);
  }
}
</style>


