<template lang="html">
<div>
  <h1>个人中心</h1>
  <TabBar></TabBar>
</div>
</template>

<script>
const TabBar = ()=>import('@/components/TabBar.vue')
export default {
  components: {
    TabBar
  }
}
</script>

<style lang="css" scoped>
</style>
