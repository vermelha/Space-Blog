import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://api.spaceflightnewsapi.net/v3`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvent(id) {
    return apiClient.get('/articles/' + id)
  },
  getBlogs(perPage) {
    return apiClient.get('/blogs?_limit=' + perPage)
  },
  getBlog(id) {
    return apiClient.get('/blogs/' + id)
  },
  getInfo() {
    return apiClient.get('/info')
  }

}
