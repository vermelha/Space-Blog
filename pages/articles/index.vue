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

  
           <Search class="w-1/3 my-8" /> 

        <div class="w-full grid-cols-2 sm:grid lg:grid-cols-3 gap-x-6">
          <articles-card
            v-for="post in posts"
            :key="post.id"
            :post="post"
            />
        </div>

      <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'articles', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        >&#60; Previous</router-link
      >

      <router-link
        id="page-next"
        :to="{ name: 'articles', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >Next &#62;</router-link
      >
    </div>

      </tab>
      
      <tab title="Blog">
        <div class="blog-list w-full">
        <blog-card 
            v-for="(blog, index) in blogs"
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
           <li v-for="(item, index) in info" :key="index">{{index + 1}}. {{item}}</li>
         </ul> 
      </div>
      </tab>
     
    </tabs>
 

  
  </div>

</div>
</template>


<script >
import { watchEffect, computed } from  "@nuxtjs/composition-api";
import EventService from '@/services/BlogService.js'

export default {
  name: "Articles",
   props: ['page'],
   data() {
    return {
      posts: null,
      blogs: null,
      info: null,
      totalPosts: 0
    }
   },
  created() {
    watchEffect(() => {
      this.posts = null
      this.blogs = null
      this.info = null
      EventService.getEvents(3, this.page).then(response => {
          this.posts = response.data
          this.totalPosts = response.headers['x-total-count']
        })
        .catch(error => {
          console.log(error)
        }),
         EventService.getBlogs().then(response => {
          this.blogs = response.data
        }),
         EventService.getInfo().then(response => {
          this.info = response.data.newsSites
        })
    })
  },
  computed: {
    hasNextPage() {
      var totalPages = Math.ceil(this.totalPosts / 2)

      return this.page < totalPages
    }
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

.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
