<template>
  <div class="v-main-wrapper">
      <vHeader />
      <router-view></router-view>
      <vArrivals />
      <vFooter />
  </div>
</template>

<script>

import vHeader from './header/v-header.vue'
import vFooter from './footer/v-footer.vue'
import vArrivals from './arrivals/v-arrivals.vue'

export default {
  name: 'v-main-wrapper',
  components: {
    vHeader,
    vFooter,
    vArrivals
  }
}
</script>

<style lang="scss">
.v-main-wrapper {
  margin: 0 auto;
  top: 0;
}
</style>