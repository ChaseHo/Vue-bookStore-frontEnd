<template>
  <aside class="sidebar-controls">
    <ul class="controls">
      <button-back-top class="control"></button-back-top>
    </ul>
  </aside>
</template>

<script>
  import ButtonBackTop from '@/components/ButtonBackTop'

  export default {
    name: 'SidebarControls',
    components: {
      ButtonBackTop
    }
  }
</script>

<style lang="scss" scoped>
  .sidebar-controls {
    position: fixed;
    right: 0;
    top: 50vh;
    transform: translateY(-50%);
    z-index: 200;

    .controls {
      list-style: none;
    }
  }
</style>

