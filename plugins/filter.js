import Vue from 'vue'

Vue.filter('formatDate', (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleString(['en-US'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
})
Vue.filter('truncate', (data,num) => {
  const reqdString = 
    data.split("").slice(0, num).join("");
  return reqdString + "...";
})

