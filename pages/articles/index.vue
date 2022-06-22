<template>
 <div>
   <div class="hero flex items-center relative bg-left">
     <div class="relative z-10 container mx-auto">
     <h1 class="uppercase title font-bold pt-3">Welcome to Space Adventures</h1>
     </div>
   </div>

       <!-- <LaunchCountdown  v-for="(item, index) in launch"
                  :key="index"
                  :item="launch"/> -->
    
  <div class="container mx-auto mt-16 pb-36">
    

    <tabs>
      <tab title="Articles">

        <articles-filter />
        
        <div class="w-full grid-cols-2 sm:grid lg:grid-cols-3 gap-x-6">
           <articles-card
            v-for="(post, index) in posts"
            :key="index"
            :post="post"
            />
        </div>
      </tab>
      
      <tab title="Blog">
        <div class="w-full">
        <blog-card 
            v-for="(blog, index) in blogs"
            :key="index"
            :blog="blog"
            />
        </div>
      </tab>

      <tab title="Info">
      <div class="w-full">  
        <h3 class="text-xl">List of sites from which information is provided:</h3>
         <ul class="w-full grid md:grid-cols-2 gap-x-6 mt-12">
           <li v-for="(item, index) in info.newsSites" :key="index">{{index + 1}}. {{item}}</li>
         </ul> 
      </div>
      </tab>
     
    </tabs>
 

  
  </div>

</div>
</template>


<script >
import { mapState } from 'vuex'

export default {
  
  middleware: 'auth',
  name: "Articles",

   async fetch({ store, error }) {
    try {
      await store.dispatch('events/fetchPosts'),
      await store.dispatch('events/fetchBlogs'),
      await store.dispatch('events/fetchInfo')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch posts at this time. Please try again.'
      })
    }
  },

  computed: mapState({
    posts: state => state.events.posts,
    blogs: state => state.events.blogs,
    info: state => state.events.info,
  }),
  

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
