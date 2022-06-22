<template>
  
    <div class="md:w-2/3 border border-white mb-8 items-center flex flex-col md:flex-row justify-between">

     <img class="w-full md:w-1/3 flex card-image object-cover" :src="blog.imageUrl">
  <div class="text-left flex flex-col items-start md:w-2/3 md:pl-8">
    <div class="font-bold text-xl mb-4 mt-10"> {{blog.title}}</div>
    <p class="text-xs mb-4">Source: <span class="italic">{{blog.newsSite}}</span></p>
    <p class="mb-8">
     {{ blog.summary }}
     </p>
 
 
     <p class="text-xs mb-2">Published: <span>{{ $formatDate(blog.publishedAt) }}</span></p>
  

   <nuxt-link  :to="'/blog/' + blog.id" class="my-8 inline-block  uppercase  text-sm px-12 py-3 leading-none border text-white border-white hover:border-transparent hover:text-black hover:bg-white"
href="">Read</nuxt-link>
</div>

</div>
    
</template>
<script lang="ts">

import { defineComponent, PropType } from "@nuxtjs/composition-api";

interface Post {
  imageUrl: string,
  newsSite: string,
  publishedAt: string,
  updatedAt: string,
  id: string
  summary: string
  title: string
}

export default  defineComponent({
  name: 'ArticleCard',
  props: {
    blog: {
      type: Object  as PropType<Post>,
      required: true
    },
  }
})

</script>
<style>
.card-image{
  max-height: 300px;
}
</style>