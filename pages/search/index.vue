<template>
  <div>
    <Search :search="state.search" @search="handleSearch" />
  
     <div class="w-full grid-cols-2 sm:grid lg:grid-cols-3 gap-x-6">
      <articles-card v-for="post in state.articles" :post="post" :key="post.id" />
      </div>


    
  </div>
</template>

<script>
import { reactive, watchEffect } from '@nuxtjs/composition-api';
 

  export default {
    setup() {
      const state = reactive({
        search: 'space',
        loading: true,
        articles: [],
        errorMessage: null
      });

      watchEffect(() => {
        const ARTICLES_API_URL = `https://api.spaceflightnewsapi.net/v3/articles/?=${state.search}`;
      

        fetch(ARTICLES_API_URL)
          .then(response => response.json())
          .then(jsonResponse => {
            state.articles = jsonResponse;
            state.loading = false;
          });
      });

      return {
        state,
        handleSearch(searchTerm) {
          state.loading = true;
          state.search = searchTerm;
        }
      };
    }
  }
</script>


<style scoped>
.hero{
  background-image: url(~/assets/img/nasa-7Cz6bWjdlDs-unsplash.jpeg);
  height: 360px;
}
.hero:after{
  content: '';
  position: absolute;
  top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
}
.title{
   font-size: 46px;
}
</style>
