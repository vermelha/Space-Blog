import Vue from 'vue'

Vue.filter('formatDate', ( dateStr: number | string ) => {
  const date = new Date(dateStr)
  return date.toLocaleString(['en-US'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
})
Vue.filter('truncate', (text: string, length: number, suffix = '...') => {
  if (text.length > length) {
  return text.substring(0, length) + suffix;
} else {
    return text;
}
})






