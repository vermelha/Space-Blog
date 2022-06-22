<template>
  
    <div class="border border-white mb-8 items-center flex flex-col md:flex-row justify-between w-full">

     <img class="w-full md:w-1/3 flex card-image object-cover" :src="blog.imageUrl">
  <div class="text-left flex flex-col items-start md:w-2/3 md:pl-8">
    <div class="font-bold text-xl mb-4 mt-10"> {{blog.title}}</div>
    <p class="text-xs mb-4">Source: <span class="italic">{{blog.newsSite}}</span></p>
    <p class="mb-8">
     {{blog.summary | truncate(100) }}
     </p>
 
 
    <p class="text-xs mb-2">Published: <span>{{blog.publishedAt | formatDate}}</span></p>
  

   <nuxt-link  :to="'/blog/' + blog.id" class="my-8 inline-block  uppercase  text-sm px-12 py-3 leading-none border text-white border-white hover:border-transparent hover:text-black hover:bg-white"
href="">Read</nuxt-link>
</div>

</div>
    
</template>
<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default  defineComponent({
  name: 'BlogCard',
  props: {
   blog: {
      type: Object,
      required: true
    }
  }
})


</script>
<style scoped>
</style>