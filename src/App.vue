<template>
  <div id="app">
    <v-nav></v-nav>
    <v-swiper></v-swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  import nav from './components/nav/nav.vue';
  import swiper from './components/swiper/swiper.vue';

  export default {
    components: {
      'v-nav': nav,
      'v-swiper': swiper
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">

</style>
