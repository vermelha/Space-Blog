import BlogService from '~/services/BlogService.js'

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
    return BlogService.getEvent(id).then(response => {
      commit('SET_POST', response.data) 
    })
  },
  fetchBlog({ commit }, id) {
    return BlogService.getBlog(id).then(response => {
      commit('SET_BLOG', response.data)
      
    })
  }
}
