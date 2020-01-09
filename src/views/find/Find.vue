<template lang="html">
<div>
  <h1>发现</h1>
  <div class="box" @touchstart='click'>你好你好你好你好你好</div>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class="test">
    <span></span>
    <span></span>
  </div>

  <TabBar></TabBar>
</div>
</template>

<script>
const TabBar = ()=>import('@/components/TabBar.vue')
export default {
  components: {
    TabBar
  },
  methods: {
    click() {
      console.log('被点击了')
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 10rem;
  height: 100px;
  background-color: red;
  color: white;
}
.test {
  &>span:first-child {
    display: inline-block;
    width: 2.29rem;
    height: .8rem;
    background: orange;
  }
  &>span:last-child {
    display: inline-block;
    width: 6.91rem;
    height: .8rem;
    background: green;
  }
}
</style>
