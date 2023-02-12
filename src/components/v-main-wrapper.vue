<template>
  <div class="v-main-wrapper">
      <vHeader />
      <vNovelties />
      <vAbout />
      <vFooter />
      <!-- <router-view></router-view> -->
  </div>
</template>

<script>

import vHeader from './header/v-header.vue'
import vNovelties from './novelties/v-novelties.vue'
import vAbout from './about/v-about.vue'
import vFooter from './footer/v-footer.vue'

export default {
  name: 'v-main-wrapper',
  components: {
    vHeader,
    vNovelties,
    vAbout,
    vFooter
  }
}
</script>

<style lang="scss">
.v-main-wrapper {
  margin: 0 auto;
  top: 0;
}
</style>