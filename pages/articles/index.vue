<template>
 <div>
   <div class="hero flex items-center relative bg-cover bg-left">
     <div class="container mx-auto">
     <h1 class="uppercase title font-bold pt-3">Articles</h1>
     </div>
   </div>

    <div class="container mx-auto mt-12 pb-36">
<div class="w-full grid-cols-2 sm:grid lg:grid-cols-3 gap-x-6">


  <nuxt-link
          v-for="post in posts"
          :to="`/articles/${post.id}`"
          :key="post.id"
          class="border border-white mb-8 items-center flex flex-col justify-between"
          >

     <img class="w-full flex card-image" :src="post.imageUrl">
  <div class="px-6 py-8 text-left">
    <div class="font-bold text-xl mb-4"> {{post.title}}</div>
    <p class="text-xs mb-4">Source: <span class="italic">{{post.newsSite}}</span></p>
    <p class="mb-8">
     {{post.summary}}
     </p>
 
 
    <p class="text-xs mb-2">Published: <span>{{post.publishedAt | formatDate}}</span></p>
    <p class="text-xs mb-2 ">Updated: <span>{{post.updatedAt | formatDate}}</span></p>
  </div>

   <nuxt-link  :to="`/articles/${post.id}`" class="mx-auto mb-12 inline-block  uppercase  text-sm px-12 py-3 leading-none border text-white border-white hover:border-transparent hover:text-black hover:bg-white"
href="">Read</nuxt-link>

</nuxt-link>




</div>
</div>
</div>
</template>


<script lang="ts">
export default {
  async asyncData () {
    const posts = await fetch(
        'https://api.spaceflightnewsapi.net/v3/articles'
      ).then(res => res.json())
    return { posts }
  }
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
.title{
   font-size: 46px;
}
</style>
