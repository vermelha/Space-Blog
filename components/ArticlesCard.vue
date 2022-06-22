<template>
  
        <nuxt-link
           :to="'/articles/' + post.id"
          class="border border-white mb-8 items-center flex flex-col justify-between"
          >

     <img class="w-full flex card-image object-cover" :src="post.imageUrl">
  <div class="px-6 py-8 text-left">
    <div class="font-bold text-xl mb-4"> {{post.title}}</div>
    <p class="text-xs mb-4">Source: <span class="italic">{{post.newsSite}}</span></p>
    <p class="mb-8">
     {{ post.summary | truncate(100) }}
     </p>
 
 
    <p class="text-xs mb-2">Published: <span>{{post.publishedAt | formatDate}}</span></p>
    <p class="text-xs mb-2 ">Updated: <span>{{post.updatedAt | formatDate}}</span></p>
  </div>

   <nuxt-link  :to="'/articles/' + post.id" class="mx-auto mb-12 inline-block  uppercase  text-sm px-12 py-3 leading-none border text-white border-white hover:border-transparent hover:text-black hover:bg-white"
href="">Read</nuxt-link>

</nuxt-link>
    
</template>
<script>

import { defineComponent } from "@nuxtjs/composition-api";

export default  defineComponent({
  name: 'ArticleCard',
  props: {
    post: {
      type: Object,
      required: true
    },
  }
})

</script>
<style scoped>
.card-image{
  max-height: 270px;
  height: 270px;
}
</style>