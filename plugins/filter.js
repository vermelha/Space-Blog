import Vue from 'vue'

Vue.filter('formatDate', (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleString(['en-US'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
})
