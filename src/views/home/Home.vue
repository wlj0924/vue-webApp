<template lang="html">
<div>
  <MySwiper></MySwiper>
  <TabBar></TabBar>
</div>
</template>

<script>
const MySwiper = ()=>import('@/components/MySwiper.vue')
const TabBar = ()=>import('@/components/TabBar.vue')
export default {
  components: {
    MySwiper,
    TabBar
  }
}
</script>

<style lang="scss" scoped>
</style>
