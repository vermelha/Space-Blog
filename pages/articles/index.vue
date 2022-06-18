<template>
 <div>
   <div class="hero flex items-center relative bg-left">
     <div class="relative z-10 container mx-auto">
     <h1 class="uppercase title font-bold pt-3">Welcome to Space Adventures</h1>
     </div>
   </div>

    <div class="container mx-auto mt-12 pb-36">
<div class="w-full grid-cols-2 sm:grid lg:grid-cols-3 gap-x-6">

  
    <PostCard 
          v-for="(post, index) in posts"
           :key="index"
          :post="post"
          />
 

</div>
</div>
</div>
</template>


<script >
import PostCard from "@/components/PostCard.vue"
import { mapState } from 'vuex'



export default {
  name: "Articles",
   head() {
    return {
      title: 'Articles'
    }
  },
   async fetch({ store, error }) {
    try {
      await store.dispatch('events/fetchPosts')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch posts at this time. Please try again.'
      })
    }
  },
   components:{
    PostCard
  },
  computed: mapState({
    posts: state => state.events.posts
  }) 
}
</script>


<style scoped>
.card-image{
  max-height: 270px;
  height: 270px;
}
.hero{
  background: url(~/assets/img/nasa-7Cz6bWjdlDs-unsplash.jpeg) no-repeat;
  height: 360px;
}
.hero:after{
  content: '';
  position: absolute;
  top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
}
.title{
   font-size: 46px;
}
</style>
