<template>
	<article class="book-container">
		<main>
			<div class="info-container">
				<div class="image-wrapper">
					<img v-bind:src="book.images.large" :alt="book.title">
				</div>
				<div class="info-wrapper">
					<h2 class="title">
						{{ book.title }} 
					</h2>
					<p class="author">
						作者：{{ book.author.join() }} 
					</p>
					<p>
						出版社: {{ book.publisher }}
					</p>
					<p>
						原作名：{{ book.origin_title }} 
					</p>
					<p>
						译者：{{ book.translator.join(' / ') }} 
					</p>
					<p>
						出版时间：{{ book.pubdate }} 
					</p>
					<div class="act-wrapper">
						<p class="price">
							{{ book.price }}
						</p>
						<p>
							<a 
								class="btn-buy-book"
								href="javascript:void(0)"
								@click="buyBook(book)"
								>
								购买
							</a>
						</p>
					</div>
				</div>
			</div>
			<section class="summary-container">
				<h2>简介</h2>
				<p> {{ book.summary }} </p>
			</section>
		</main>
		<aside>
			<section class="tags-container">
				<h2>图书标签</h2>
				<ul>
					<li v-for="tag of book.tags" :key="tag.title"> {{ tag.name }} </li>
				</ul>
			</section>
		</aside>
	</article>
</template>

<script>
	import {mapActions} from 'vuex'
	import Time from '../../directives/time';
	export default {
		data () {
			return {

			}
		},
		name: 'Book',
		computed: {
			book() {
				return this.$store.getters.getBookById(this.$route.params.id);
			}
		},
		methods: {
			...mapActions(['buyBook']),
			init: function () {
				console.log(this.book);
			}
		},
		mounted: function () {
			this.init();
		}
	}
</script>

<style lang="scss" scoped>
section {
	margin: 1rem 0;
	h2 {
		padding: 1rem 0;
	}
}

.book-container {
	display: flex;
	margin: 3rem auto;
	padding: 0 1rem;
	main {
		width: 70%;
		padding-right: 2rem;
	}
	aside {
		width: 30%;
	}
}

// book info styles
.info-container {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
}

.image-wrapper {
	margin-right: 1rem;
	img {
		width: 180px;
		height: 240px;
	}
}

.info-wrapper {
	display: flex;
	flex-direction: column;
	.title {
		line-height: 1.5;
	}
	p {
		padding: .3rem 0;
		font-size: .9rem;
	}
	.act-wrapper {
		margin-top: auto;
	}
}

.act-wrapper {
	.price {
		padding: .3rem 0;
		font-size: 1rem;
		color: #9a8069;
	}
}

.btn-buy-book {
	display: inline-block;
	padding: .5rem 1rem;
	border-radius: 4px;
	font-size: .8rem;
	color: #fff;
	background: #4d87de;
}

.summary-container {
	p {
		line-height: 1.5rem;
	}
}

.tags-container {
	li {
		list-style: none;
		display: inline-block;
		padding: .3rem .8rem;
		background: #f3f0eb;
		margin: .2rem;
		font-size: .9rem;
	}
}
</style>