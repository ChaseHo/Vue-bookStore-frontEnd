import Vue from 'vue'
import Vuex from 'vuex'
import topic from './modules/topic'
import category from './modules/category'
import cart from './modules/cart'
import users from './modules/users'
import comments from './modules/comment'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    topic,
    category,
    cart,
    users,
    comments
  }
})
