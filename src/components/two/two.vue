<template>
  <div class="two">
    <div class="loading" v-show="show">
      <p>内容加载中......</p>
    </div>
    <div class="content" v-show="toggleShow">
      <p>这是页面二内容区</p>
      <p>这是页面二内容区</p>
      <p>这是页面二内容区</p>
      <p>这是页面二内容区</p>
      <p>这是页面二内容区</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        show: true,
        toggleShow: false,
        isLoad: false
      }
    },
    mounted() {
      this.initFunc();
    },
    methods: {
      initFunc() {
        if (!this.isLoad) {
          setTimeout(() => {
            this.show = false;
            this.toggleShow = true;
            this.isLoad = true;
          }, 2000)
        } else {
          this.show = false;
          this.toggleShow = true;
        }
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>
  .two
    p
      text-align: center
      height: 30px
</style>
