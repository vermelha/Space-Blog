<template>
<div class="relative z-10 bg-transparent">
<nav class="container mx-auto flex items-center justify-between py-2">

 <div class="flex items-center text-white mr-6">
    <img class="bg-white h-8 w-8 mr-2" src="@/assets/img/logo.svg" alt="Logo">
     <nuxt-link to="/login" class="uppercase py-2 text-xl font-bold flex flex-col tracking-widest">
      Space<span class="text-xs tracking-tight">adventures</span>
    </nuxt-link>
  </div>
    
  <div class="flex">
     
      
           <template v-if="isLoggedIn">
                  <div class="flex flex-row">
                 

                <nuxt-link
                  class="nav-link ml-6 uppercase inline-block text-xs px-8 py-2 border text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"
                  aria-current="page"
                  to="/articles" :class="{active: $route.name==='articles'}"
                  >articles</nuxt-link
                >

                 <nuxt-link
                  class="nav-link ml-6 uppercase inline-block text-xs px-8 py-2 border text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"
                  aria-current="page"
                  to="/account" :class="{active: $route.name==='account'}"
                  >my account</nuxt-link
                >


                <button class="pointer ml-6 uppercase inline-block text-xs px-8 py-2 border text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0" 
                @click="logout">Logout
                </button>


                </div>
           </template>
           <template v-else>
             <nuxt-link
                  class="ml-6 uppercase inline-block text-xs px-8 py-2 border text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"
                  aria-current="page"
                  to="/login"
                  >Login</nuxt-link
                >
              
             </template>
             
          


    </div>
  
</nav>
</div>

</template>

<script>
import { defineComponent, computed, useContext } from "@nuxtjs/composition-api";

export default defineComponent({
  setup(){
    const context = useContext()
    const isLoggedIn = computed(() => {
      return context.store.state.auth.loggedIn
      
    });
    function logout(){
      context.store.commit('auth/setUser', null)
      context.store.commit('auth/setPass', null)
      // this.$store.$router.push('/login')
      location.replace('/login')
    }

    return{
      isLoggedIn,
      logout
    }

  }
})
</script>






<style scoped>
.tracking-widest {
    letter-spacing: 0.16em;
}
.nav-link.active{
  background-color: #ffffff;
  color: #000000
}
</style>
