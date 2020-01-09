<template lang="html">
<div>
  <h1>详情页</h1>
  <h1 v-text='$route.params.id'></h1>
</div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style lang="css" scoped>
</style>
