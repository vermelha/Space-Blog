<template>
  <div class='tab' v-show='isActive'>
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: 'Tab'
    }
  },
  setup() {
    const isActive = true;
    return{
      isActive
    }
  }
}
</script>

<style>

</style>