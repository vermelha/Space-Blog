<template>
<div class="pb-36 flex items-center flex-col">
 <div class="hero flex items-center relative bg-cover relative w-full"
      :style="{ backgroundImage: `url('${blog.imageUrl}')` }">
     <div class="container mx-auto relative z-10 text-left">
     <h1 class="uppercase title font-bold pt-3">{{blog.title}}</h1>
     </div>
   </div>


  <div class="container mx-auto mt-12 text-left">
    <p class="text-xs mb-12">Source: <span class="italic">{{blog.newsSite}}</span></p>

    <p class="mb-8">
     {{blog.summary}}
     </p>
 
 
    <p class="text-xs mb-2">Published: <span>{{ $formatDate(blog.publishedAt) }}</span></p>
    <p class="text-xs mb-2 ">Updated: <span>{{ $formatDate(blog.updatedAt) }}</span></p>
    
  </div>
  <div class="flex justify-center">
    <a
                  class="mr-12 block uppercase my-12 text-sm px-8 py-3 leading-none border text-white border-white hover:border-transparent hover:text-black hover:bg-white"
                  :href="blog.url" target="_blank"
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
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: this.blog.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What you need to know about ' + this.blog.title
        }
      ]
    }
  },
   async fetch({ store, error, params }) {
    try {
      await store.dispatch('events/fetchBlog', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch blog #' + params.id
      })
    }
  },
  computed: mapState({
    blog: state => state.events.blog
  })
}
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