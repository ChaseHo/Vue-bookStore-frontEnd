<template>
  <div class="home-banner-container">
    <book-category></book-category>
    <activity-slide></activity-slide>
    <user-login></user-login>
  </div>
</template>

<script>
  import BookCategory from '@/components/BookCategory'
  import ActivitySlide from '@/components/ActivitySlide'
  import UserLogin from '@/components/UserLogin'

  export default {
    name: 'HomeBanner',
    components: {
      BookCategory,
      ActivitySlide,
      UserLogin
    }
  }
</script>

<style lang="scss" scoped>
.home-banner-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
}
</style>


