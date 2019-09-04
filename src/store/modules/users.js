import * as types from '../mutation_types'
import axios from 'axios'

const state = {
    users: [],
    loginStates: false,
    currentUser: {}
}

const mutations = {
    [types.GET_USERS] (state, data) {
        state.users = data;
    },
    [types.GET_CURRENTUSER] (state, data) {
        state.currentUser = data;
    },
    [types.HAS_LOGIN] (state) {
        state.loginStates = true;
    },
    [types.NO_LOGIN] (state) {
        state.loginStates = false;
    }
}

const actions = {
    fetchUsers({commit}, url) {
        axios.get(url)
        .then(res => commit(types.GET_USERS, res.data))
    },
    getCurrentUser({commit}, user) {
        commit(types.GET_CURRENTUSER, user)
    },
    hasLogin({commit}) {
        commit(types.HAS_LOGIN)
    },
    noLogin({commit}) {
        commit(types.NO_LOGIN)
    }
}

const getters = {
    isLogin: state => state.loginStates,
    users: state => state.users,
    current_User: state => state.currentUser,
    user_name: state => state.currentUser.username,
    getUserByUsername: state => username => state.users.find(user => user.username === username)
}

export default {
    state,
    mutations,
    actions,
    getters
}