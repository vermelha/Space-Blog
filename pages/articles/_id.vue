<template>
<div class="pb-36 flex items-center flex-col">
 <div class="hero flex items-center relative bg-cover relative w-full"
      :style="{ backgroundImage: `url('${post.imageUrl}')` }">
     <div class="container mx-auto relative z-10 text-left">
     <h1 class="uppercase title font-bold pt-3">{{post.title}}</h1>
     </div>
   </div>


  <div class="container mx-auto mt-12 text-left">
    <p class="text-xs mb-12">Source: <span class="italic">{{post.newsSite}}</span></p>

    <p class="mb-8">
     {{post.summary}}
     </p>
 
 
    <p class="text-xs mb-2">Published: <span>{{post.publishedAt | formatDate}}</span></p>
    <p class="text-xs mb-2 ">Updated: <span>{{post.updatedAt | formatDate}}</span></p>
    
  </div>
  <div class="flex justify-center">
    <a
                  class="mr-12 block uppercase my-12 text-sm px-8 py-3 leading-none border text-white border-white hover:border-transparent hover:text-black hover:bg-white"
                  :href="post.url" target="_blank"
                  >Read Full Article</a
                >

       <nuxt-link
                  class="uppercase my-12 text-sm px-8 py-3 leading-none border text-white border-white hover:border-transparent hover:text-black hover:bg-white"
                  to="/articles"
                  >Back to Articles</nuxt-link
                >
     </div>
  </div>

</template>

<script>
import { mapState } from "vuex"

export default {
  name: "Article",
          
   async fetch({ store, error, params }) {
    try {
      await store.dispatch('events/fetchPost', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch post #' + params.id
      })
    }
  },
  computed: mapState({
    post: state => state.events.post
  })

};
</script>


<style scoped>
.hero{
  height: 450px;
}
.hero::after {
  content: "";
  position: absolute;
  top: 0;
  z-index: 1;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.6);
}
.title{
   font-size: 36px;
}
</style>