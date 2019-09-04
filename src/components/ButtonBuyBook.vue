<template>
  <a 
    href="javascript:void(0)"
    class="btn-buy-book"
    :class="{checked: book.checked}"
    @click.prevent="buyBook(book)">
  </a>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'ButtonBuyBook',
    props: {
      book: Object
    },
    methods: {
      ...mapActions(['buyBook'])
    }
  }
</script>

<style lang="scss" scoped>
.btn-buy-book {
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url(../assets/images/ic_buy.png); 
  &.checked, 
  &:hover {
    background: url(../assets/images/ic_bought.png);
  }
}
</style>