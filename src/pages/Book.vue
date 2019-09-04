<template>
	<article class="book-container">
		<main>
			<div class="info-container">
				<div class="image-wrapper">
					<!-- <img v-bind:src="book.images.large" :alt="book.title"> -->
					<img v-bind:src="book.largeIMG" :alt="book.title">
				</div>
				<div class="info-wrapper">
					<h2 class="title">
						{{ book.title }} 
					</h2>
					<p class="author">
						<!-- 作者：{{ book.author.join() }}  -->
						作者：{{ book.author }} 
					</p>
					<p>
						出版社: {{ book.publisher }}
					</p>
					<p>
						原作名：{{ book.origin_title }} 
					</p>
					<p>
						<!-- 译者：{{ book.translator.join(' / ') }}  -->
						译者：{{ book.translator }} 
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
							<span style="color: #9a8069; font-size:15px">(库存：{{ book.stock }}本)</span>
						</p>
					</div>
				</div>
			</div>
			<section class="summary-container">
				<h2>简介</h2>
				<p> {{ book.summary }} </p>
			</section>
			<section style="border-top:1px solid gray; margin-top: 50px">
				<h2>发表评论</h2>
				<textarea name="" id="" cols="30" rows="10" style="width: 100%" v-model.trim="item.content" @input="filterWords(item.content)"></textarea>
				<a href="javascript:void(0)" class="btn-buy-book" @click.stop="addComment">发表</a>
			</section>
			<section>
				<h2>评论内容</h2>
				<!-- 以下用循环 -->
				<div v-if="comments.length > 0">
					<div class="comment-wrap"  v-for="comment of comments" :key="comment._id">
						<img src="../assets/images/default_avatar.png" alt="" class="img">
						<span style="margin-left: 10px;">
							<p>{{comment.username}}</p>
						</span>
						<div class="content">
							<p class="detail">{{ comment.content}}</p>						
							<p class="time" >{{ comment.create_at}}</p>						
						</div>
					</div>
				</div>

			</section>
		</main>
		<aside>
			<section class="tags-container">
				<h2>图书标签</h2>
				<ul>
					<!-- <li v-for="tag of book.tags" :key="tag.title"> {{ tag.name }} </li> -->
					<li > {{ book.tag }} </li>
				</ul>
			</section>
		</aside>
	</article>
</template>

<script>
	import {mapActions, mapGetters} from 'vuex'
	import Time from '../directives/time';
	export default {
		data () {
			return {
				item: {
					bookid: this.$route.params.id,
					content: '',
					username: this.user_name,
				}
			}
		},
		name: 'Book',
		computed: {
			book() {
				return this.$store.getters.getBookById(this.$route.params.id);
			},
			comments () {
				return this.$store.getters.getCommentsByBookId(this.$route.params.id);
			},
			...mapGetters([
				'current_User',
				'user_name',
       			'isLogin'				
			])
		},
		methods: {
			...mapActions([
				'buyBook',
				'fetchComments'
				]),
			init: function () {
				// console.log(this.book);
			},
			filterWords: function(content) {
				var keywords = ['国家', '政治', '绑架', '勒索', '色情'];
				for(var i = 0; i< keywords.length; i++) {
					if(content.toLowerCase().includes(keywords[i])) {
						alert('输入内容包含敏感词汇！');
						this.item.content = '';
					}
				}
				// if(content === 'word') {
				// 	alert('出错');
				// 	this.item.content = '';
				// }
			},
			addComment () {
				if(!this.isLogin) {
					alert('登录后才能发表评论');
				} else {
					this.item.username = this.current_User.username;
					let uri = 'http://localhost:4000/comment/addComment';
					this.axios.post(uri, this.item).then((response) => {
						this.fetchComments('http://localhost:4000/comment')
						this.item.content = ''
					})
				}
			}
		},
		mounted: function () {
			this.init();
		}
	}
</script>

<style lang="scss" scoped>
.comment-wrap{
	width: 100%;
	height: 150px;
	border-top: 1px solid gray;
	border-bottom: 1px solid gray;
	position: relative;
}
.content {
	width: 90%;
	height: 100%;
	border-left: 1px solid gray;
	position: absolute;
	right: 0;
	top: 0;
}
.content .detail{
	margin-top: 20px;
	margin-left: 30px;
}
.content .time{
	position: absolute;
	bottom: 15px;
	margin-left: 30px;
}
.img {
  width: 50px;
  height: 50px;
  display: inline-block;
  margin-top: 20px;
}
// 上面是评论内容的样式
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