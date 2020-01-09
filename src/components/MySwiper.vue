<template lang="html">
<div>
  <van-swipe :autoplay="3000">
    <van-swipe-item class="item" v-for="(image, index) in images" :key="index">
      <img :src="image" @touchstart='skipToDetail(index)' />
    </van-swipe-item>
  </van-swipe>
</div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  },
  methods: {
    skipToDetail(idx) {
      this.$router.push('/detail/'+idx)
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: block;
  width: 100%;
  height: 4rem;
  &>img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
