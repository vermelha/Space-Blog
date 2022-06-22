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
  getEvents() {
    return apiClient.get('/articles?_limit=20')
  },
  getEvent(id) {
    return apiClient.get('/articles/' + id)
  },
  getBlogs() {
    return apiClient.get('/blogs')
  },
  getBlog(id) {
    return apiClient.get('/blogs/' + id)
  },
  getInfo() {
    return apiClient.get('/info')
  }

}

