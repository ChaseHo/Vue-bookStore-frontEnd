<template>
	<header class="page-header-container">
		<h1>
      <router-link
        class="logo"
        :to="{name: 'Home'}"
      >
        <img src="../assets/images/ic_logo.svg" alt="在线书城">
				<span>阅享知书网</span>
      </router-link>
		</h1>
    <search-book></search-book>
	</header>
</template>

<script>
  import SearchBook from '@/components/SearchBook'

	export default {
    name: 'HeaderPage',
    components: {
      SearchBook
    }
	}
</script>

<style lang="scss" scoped>
.page-header-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}
.logo {
  display: flex;
  align-items: center;
  span {
    margin-left: .3rem;
    font-size: 1.5rem;
  }
}
</style>
