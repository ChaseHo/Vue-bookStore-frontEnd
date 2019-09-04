import * as types from '../mutation_types'
import axios from 'axios'

const state = {
  topics: [],
  topicBooks: {
    hotBooks: Array,
    discountBooks: Array,
    newBooks: Array
  }
}

const mutations = {
  [types.RECEIVE_TOPICS] (state, data) {
    state.topics = data.topics;
    state.topicBooks = data.topicBooks;
  },
//操作主题书籍
  [types.GET_TOPIC] (state, data) {
    state.topics = data;
  },
  [types.GET_HOTBOOKS] (state, data) {
    state.topicBooks['hotBooks'] = data
  },
  [types.GET_DISCOUNTBOOKS] (state, data) {
    state.topicBooks['discountBooks'] = data
  },
  [types.GET_NEWBOOKS] (state, data) {
    state.topicBooks['newBooks'] = data
  },
}

const actions = {
  // fetchTopics ({commit}, url) {
  //   axios.get(url)
  //   .then(res => commit(types.RECEIVE_TOPICS, res.data));
  // },
//操作主题书籍
  fetchTopic ({commit}, url) {
    axios.get(url)
    .then(res => commit(types.GET_TOPIC, res.data))
  },
  fetchhotBooks ({commit}, url) {
    axios.get(url)
    .then(res => commit(types.GET_HOTBOOKS, res.data))
  },
  fetchdiscountBooks ({commit}, url) {
    axios.get(url)
    .then(res => commit(types.GET_DISCOUNTBOOKS, res.data))
  },
  fetchnewBooks ({commit}, url) {
    axios.get(url)
    .then(res => commit(types.GET_NEWBOOKS, res.data))
  },
}

const getters = {
  topics: state => state.topics,
  getTopicBooksByTopicName: state => topicName => state.topicBooks[topicName],
  getPartTopicBooksByTopicName: state => topicName => state.topicBooks[topicName].filter((book, index) => index < 8)
}

export default {
  state,
  mutations,
  actions,
  getters
}