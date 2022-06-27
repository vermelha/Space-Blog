<template>
 <div>
   <div class="hero flex items-center relative bg-left">
     <div class="relative z-10 container mx-auto">
     <h1 class="uppercase title font-bold pt-3">Welcome {{ userName }}!</h1>
     </div>
   </div>


</div>
</template>


<script lang="ts">
import { defineComponent, computed, useContext } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Account",
  head() {
    return {
      title: 'Account'
    }
  },
  setup(){
    const context = useContext()
    const userName = computed(() => {
      return context.store.state.auth.user
    })

    return{
      userName
    }
  }
})
</script>


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
