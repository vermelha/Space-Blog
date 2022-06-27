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
             <articles-card v-for="post in state.articles" :post="post" :key="post.id" />

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
        errorMessage: null
      });
      

      watchEffect(() => {
        const ARTICLES_API_URL = `https://api.spaceflightnewsapi.net/v3/articles/?title_contains=${state.search}`;
        

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
