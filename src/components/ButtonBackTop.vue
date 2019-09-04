<template>
  <li
    class="back-top-wrapper"
    @click="backTop">
    <i
      class="ic-arrow-top">
      </i>
  </li>
</template>

<script>
  export default {
    name: 'ButtonBackTop',
    methods: {
      backTop() {
        document.documentElement.scrollTop = 0;
      }
    }
  }
</script>

<style lang="scss" scoped>
.back-top-wrapper {
  padding: .5em;
  border: 1px solid  #e5e5e5;
  border-right: none;
  background: #fafafa;
  cursor: pointer;
}

.ic-arrow-top {
  display: block;
  position: relative;
  width: 16px;
  height: 16px;
  background: url(../assets/images/ic_back_top.png);
}
</style>


