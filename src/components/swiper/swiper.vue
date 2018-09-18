<template>
  <div class="swiper-box">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list">
          <keep-alive>
            <component :is="item.component"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import one from '../../components/one/one.vue';
  import two from '../../components/two/two.vue';
  import three from '../../components/three/three.vue';
  import four from '../../components/four/four.vue';
  import five from '../../components/five/five.vue';
  import Swiper from '../../../static/swiper.min';
  import '../../../static/swiper.min.css';

  export default {
    components: {
      one,
      two,
      three,
      four,
      five
    },
    data() {
      return {
        list: [
          {path: '/one', component: one},
          {path: '/two', component: two},
          {path: '/three', component: three},
          {path: '/four', component: four},
          {path: '/five', component: five}
        ]
      }
    },
    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        // 设定初始化时slide的索引
        initialSlide: this.$route.path === '/one' ? 0 : this.$route.path === '/two' ? 1 : this.$route.path === '/three' ? 2 : this.$route.path === '/four' ? 3 : this.$route.path === '/five' ? 4 : 0
      });
      mySwiper.on('slideChange', () => { // 监控滑动后当前页面的索引，将索引发射到导航组件
        // 左右滑动时将当前slide的索引发送到nav组件
        this.$root.eventHub.$emit('slideTab', mySwiper.activeIndex);
      });
      // 接收nav组件传过来的导航按钮索引值，跳转到相应内容区
      this.$root.eventHub.$on('changeTab', (index) => { // 点击导航键跳转相应内容区
        mySwiper.slideTo(index, 0, false);
      });
      console.log(mySwiper);
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>

</style>
