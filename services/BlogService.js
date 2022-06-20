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
    return apiClient.get('/articles')
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
  getLaunch() {
    return apiClient.get('https://ll.thespacedevs.com/2.2.0/launch/upcoming/?is_crewed=false&include_suborbital=true&related=false&hide_recent_previous=false&limit=1')
  },
  getInfo() {
    return apiClient.get('/info')
  }

}

