<template>
 <div>
   <div class="hero flex items-center relative bg-left">
     <div class="relative z-10 container mx-auto">
     <h1 class="uppercase title font-bold pt-3">Welcome to Space Adventures</h1>
     </div>
   </div>

  <div class="container mx-auto mt-16 pb-36">
    

   <tabs>
      <tab title="Articles">

  
        <Search :search="state.search" @search="handleSearch" class="w-1/3 my-8"/>


      
      <div  class="w-full grid-cols-2 sm:grid lg:grid-cols-3 gap-x-6">
        <div v-if="state.articles.length == 0">
        <h3 class="text-2xl my-4">Sorry, no articles were found. </h3>
          <p>Check your spelling or try different word.</p>
        </div>

        <articles-card v-for="post in state.articles" :post="post" :key="post.id" />       
            
    </div>
        

<div class="container flex justify-center mx-auto pt-16 mb-24 relative">
  <button @click="prevPage"
          :disabled="state.currentPage === 1"
          class="h-10 px-8 border border border-white hover:bg-white hover:text-black ml-4">
          &lt; Prev
  </button>

  <button @click="nextPage" 
          class="h-10 px-8 border border border-white hover:bg-white hover:text-black ml-4">
          Next >
  </button>
   <p class="absolute right-0 top-0">current page: {{state.currentPage}}</p>
</div>

 
  
      </tab>
      
      <tab title="Blog">
        <div class="blog-list w-full">
        <blog-card 
            v-for="(blog, index) in  state.blogs"
            :key="blog.id"
            :blog="blog"
            :class="{'ml-auto': index % 2 != 0 }"
            />
        </div>
      </tab>

      <tab title="Info">
      <div class="w-full">  
        <h3 class="text-xl">List of sites from which information is provided:</h3>
         <ul class="w-full grid md:grid-cols-2 gap-x-6 mt-12">
           <li v-for="(item, index) in  state.info" :key="index">{{index + 1}}. {{item}}</li>
         </ul> 
      </div>
      </tab>
     
    </tabs>
 

  
  </div>

</div>
</template>


<script >
import { reactive, watchEffect } from '@nuxtjs/composition-api';
import EventService from '@/services/EventService.js'

export default {
  name: "Articles",
  setup() {

      const state = reactive({
        search: '',
        loading: true,
        articles: [],
        blogs: [],
        info: {},
        errorMessage: null,
        limit: 6, 
        start: 0,
        currentPage: 1
      });

        const nextPage = function() {
          state.currentPage++;
          state.start = state.start + 6
        };
        const prevPage = function() {
          if(state.currentPage > 1) state.currentPage--;
          state.start = state.start - 6
        };

      watchEffect(() => {
        const ARTICLES_API_URL = `https://api.spaceflightnewsapi.net/v3/articles/?title_contains=${state.search}&_start=${state.start}&_limit=${state.limit}`;
        

        fetch(ARTICLES_API_URL)
          .then(response => response.json())
          .then(jsonResponse => {
            state.articles = jsonResponse;
            state.loading = false;
          });


        EventService.getBlogs(6).then(response => {
          state.blogs = response.data
        }),
         EventService.getInfo().then(response => {
          state.info = response.data.newsSites
        })
      });

      return {
        state,
        handleSearch(searchTerm) {
          state.loading = true;
          state.search = searchTerm;
        },
        nextPage,
        prevPage
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
button:disabled,
button[disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  cursor: none;
}

</style>
