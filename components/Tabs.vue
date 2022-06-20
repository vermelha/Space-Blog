<template >
  <div>
    <ul class="tabs__header w-full md:w-1/3 flex justify-between mb-20 mx-auto">
      <li v-for="(tab, index) in tabs"
        :key="tab.title"
        @click="selectTab(index)"
        :class="{'tab__selected': (index == selectedIndex)}" 
        class="pointer uppercase text-sm px-8 py-2 leading-none border text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0">
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
    }
  },
  data () {
    return {
      selectedIndex: 0, 
      tabs: [] 
    }
  },
  created () {
    this.tabs = this.$children
  },
  mounted () {
    this.selectTab(0)
  },
  methods: {
    selectTab (i) {
      this.selectedIndex = i
      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = (index === i)
      })
    }
  }
}
</script>

<style lang="css">

   li.tab__selected {
    background-color: #fff;
    color: #000000;
  }

</style>