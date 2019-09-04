<template>
  <div class="nav-sidebar-container">
    <ul v-for="{name, title} of navItems" :key="name">
      <li>
        <router-link 
          :to="{name: 'Topic', params: {topicName: name}}">
          {{ title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
   name: 'NavSidebar',
   props: {
     navItems: Array
   } 
  }
</script>

<style lang="scss" scoped>
.nav-sidebar-container {
  width: 240px;
  border-right: 1px solid rgb(176, 176, 176);
  
}
ul {
  list-style: none;
}
li {
  a {
    display: block;
    text-align: center;
    text-decoration: none;
    padding: .5rem 0;
  }
  .active {
    color: #ed6c00;
    border-right: 4px solid #ed6c00;
    background: #f4f2ef;
  }
  }
</style>


