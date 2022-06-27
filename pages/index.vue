<template>
 <div>
   <div class="hero flex items-center relative bg-left">
     <div class="relative z-10 container mx-auto">
     <h1 class="uppercase title font-bold pt-3">Welcome to Space Adventures</h1>
      <nuxt-link
                  class="uppercase inline-block text-xs px-8 py-2 border text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4"
                  aria-current="page"
                  to="/login"
                  >Login</nuxt-link
                >
     </div>
   </div>

</div>
</template>




<style scoped>
.hero{
  background-image: url(~/assets/img/nasa-7Cz6bWjdlDs-unsplash.jpeg);
  height: 100vh;
  margin-top: -76px;
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
