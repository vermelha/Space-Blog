import BlogService from '~/services/BlogService.js'

export const state = () => ({
  posts: [],
  post: {},
  blogs: [],
  blog: {},
  info: {},
  
})
export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  },
  SET_POST(state, post) {
    state.post = post
  },
  SET_BLOGS(state, blogs) {
    state.blogs = blogs
  },
  SET_BLOG(state, blog) {
    state.blog = blog
  },
  SET_INFO(state, info) {
    state.info = info
  },
}
export const actions = {
  fetchPosts({ commit }) {
    return BlogService.getEvents().then(response => {
      commit('SET_POSTS', response.data)
    })
  },
  fetchPost({ commit }, id) {
    return BlogService.getEvent(id).then(response => {
      commit('SET_POST', response.data) 
    })
  },
  fetchBlogs({ commit }) {
    return BlogService.getBlogs().then(response => {
      commit('SET_BLOGS', response.data)
    })
  },
  fetchBlog({ commit }, id) {
    return BlogService.getBlog(id).then(response => {
      commit('SET_BLOG', response.data)
      
    })
  },
  fetchInfo({ commit }) {
    return BlogService.getInfo().then(response => {
      commit('SET_INFO', response.data)
    })
  }
}
