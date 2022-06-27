import EventService from '~/services/EventService.js'

export const state = () => ({
  post: {},
  blog: {},
  
})
export const mutations = {
  SET_POST(state, post) {
    state.post = post
  },
  SET_BLOG(state, blog) {
    state.blog = blog
  }
}
export const actions = {
  fetchPost({ commit }, id) {
    return EventService.getEvent(id).then(response => {
      commit('SET_POST', response.data) 
    })
  },
  fetchBlog({ commit }, id) {
    return EventService.getBlog(id).then(response => {
      commit('SET_BLOG', response.data)
      
    })
  }
}
