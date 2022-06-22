<template>
 <form class="relative flex items-center">
                    <input
                      type="text"
                      :value="postTitle"
                      @keyup="handleChange"
                      placeholder="Search"
                      class="border bg-transparent text-white border-b border-white w-full py-2 px-3 leading-tight focus:outline-none mt-4 lg:mt-0"
                    />
                    <button @click="handleSubmit" type="submit" value="SEARCH" class="absolute right-0 mr-2">
                    <svg viewBox="0 0 30 30" width="25px" height="25px">
                    <g id="surface27706111">
                    <path style="stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 13 3 C 7.488281 3 3 7.488281 3 13 C 3 18.511719 7.488281 23 13 23 C 15.398438 23 17.597656 22.148438 19.324219 20.734375 L 25.292969 26.707031 C 25.542969 26.96875 25.917969 27.074219 26.265625 26.980469 C 26.617188 26.890625 26.890625 26.617188 26.980469 26.265625 C 27.074219 25.917969 26.96875 25.542969 26.707031 25.292969 L 20.734375 19.320312 C 22.148438 17.597656 23 15.398438 23 13 C 23 7.488281 18.511719 3 13 3 Z M 13 5 C 17.429688 5 21 8.570312 21 13 C 21 17.429688 17.429688 21 13 21 C 8.570312 21 5 17.429688 5 13 C 5 8.570312 8.570312 5 13 5 Z M 13 5 "/>
                    </g></svg>
                    </button>

                  </form>
</template>

<script>
  import { ref } from '@nuxtjs/composition-api';

  export default {
    name: 'Search',
    props: ['search'],
    setup({ search }, { emit }) {
      const postTitle = ref(search);

      return {
        postTitle,
        handleSubmit(event) {
          event.preventDefault();
          emit('search', postTitle.value);
        },
        handleChange(event) {
          postTitle.value = event.target.value
        }
      }
    }
  };
</script>