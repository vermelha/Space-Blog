<template>
 <div>
   <div class="hero flex items-center relative bg-left">
     <div class="relative z-10 container mx-auto">
     <h1 class="uppercase title font-bold pt-3">Welcome {{this.$store.state.auth.user}}!</h1>
     </div>
   </div>


</div>
</template>


<script >

export default {
  name: "Account",
  head() {
    return {
      title: 'Account'
    }
  }
}
</script>


<style scoped>
.hero{
  background-image: url(~/assets/img/nasa-7Cz6bWjdlDs-unsplash.jpeg);
  height: 360px;
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
