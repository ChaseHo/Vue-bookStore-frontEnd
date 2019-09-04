import * as types from '../mutation_types'
import axios from 'axios'

const state = {
    comments: [],

}

const mutations = {
    [types.GET_COMMENTS] (state, data) {
        state.comments = data;
    }
}

const actions = {
    fetchComments({commit}, url) {
        axios.get(url)
        .then(res => commit(types.GET_COMMENTS, res.data))
    }
}

const getters = {
    comments: state => state.comments,
    // getUserByUsername: state => username => state.users.find(user => user.username === username)
    getCommentsByBookId: state => bookID => {
        const matchingComments = state.comments.filter(comment => 
          comment.bookid === bookID  
        )
        return matchingComments;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}