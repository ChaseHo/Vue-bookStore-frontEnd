import * as types from '../mutation_types'
import axios from 'axios'

const state = {
  categories: [],
  books: {
    computer: Array,
    history: Array,
    literature: Array,
    economics: Array

  },
  allBooks: []
}

const mutations = {
  [types.RECEIVE_CATEGORIES] (state, data) {
    state.categories = data.categories;
    state.books = data.books;
    // add count property to each category object
    state.categories.forEach(category => {  //给每个book对象增加count属性
      category.count = state.books[category.name].length;
    });
    const temp = Object.values(state.books);
    temp.forEach(item => state.allBooks.push(...item));
  },
  //操作主题书籍
  [types.GET_CATEGORIES] (state, data) {
    state.categories = data;
  },
  [types.GET_COMPUTER] (state, data) {
    state.books['computer'] = data
    // console.log(data+'666666666')
    state.allBooks.push(...data)
  },
  [types.GET_HISTORY] (state, data) {
    state.books['history'] = data
    state.allBooks.push(...data)
  },
  [types.GET_LITERATURE] (state, data) {
    state.books['literature'] = data
    state.allBooks.push(...data)
  },
  [types.GET_ECONOMICS] (state, data) {
    state.books['economics'] = data;
    state.allBooks.push(...data)
    state.categories.forEach(category => {
      category.count = state.books[category.name].length;
    });
  },
  [types.PUSH_ALLBOOKS] (state) {
    const temp = Object.values(state.books);
    temp.forEach(item => state.allBooks.push(...item));
  },

  //测试读取主题书籍
  [types.GET_HOTBOOKS] (state, data) {
    state.allBooks.push(...data)
  },
  [types.GET_DISCOUNTBOOKS] (state, data) {
    state.allBooks.push(...data)
  },
  [types.GET_NEWBOOKS] (state, data) {
    state.allBooks.push(...data)
  },

}

const actions = {
  // fetchCategories ({commit}, url) {
  //   axios.get(url)
  //     .then(res => commit(types.RECEIVE_CATEGORIES, res.data));
  // },

  //操作种类书籍
  fetchCategory ({commit}, url) {
    axios.get(url)
    .then(res => commit(types.GET_CATEGORIES, res.data))
  },
  fetchcomputer ({commit}, url) {
    // console.log('2333333333333')
    axios.get(url)
    .then(res => commit(types.GET_COMPUTER, res.data))
  },
  fetchhistory ({commit}, url) {
    axios.get(url)
    .then(res => commit(types.GET_HISTORY, res.data))
  },
  fetchliterature ({commit}, url) {
    axios.get(url)
    .then(res => commit(types.GET_LITERATURE, res.data))
  },
  fetcheconomics ({commit}, url) {
    axios.get(url)
    .then(res => commit(types.GET_ECONOMICS, res.data))
  },
  pushAllbooks({commit}) {
    // console.log('111111111111')
    commit(types.PUSH_ALLBOOKS);
  }

}

const getters = {
  categories: state => state.categories,
  allBooksCount: state => state.allBooks.length,
  getBooksByCategory: state => category => {
    if (category === 'all') {
      return state.allBooks;
    } else {
      return state.books[category];
    }
  },
  // getBookById: state => id => state.allBooks.find(book => book.id === id),
  getBookById: state => id => state.allBooks.find(book => book._id === id),//根据ID取出书本数据
  getBooksByKeyword: state => keyword => {
    const matchingBooks = state.allBooks.filter(book => 
      // book.title.toLowerCase().includes(keyword) || book.author.some(author => author.toLowerCase().includes(keyword))
      book.title.toLowerCase().includes(keyword) || book.author.toLowerCase().includes(keyword)
    )
    return matchingBooks;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}