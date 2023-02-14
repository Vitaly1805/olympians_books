<template>
  <div class="v-main-page">
      <vNovelties />
      <vAbout />
  </div>
</template>

<script>

import vNovelties from '../novelties/v-novelties.vue'
import vAbout from '../about/v-about.vue'

export default {
  name: 'v-main-page',
  components: {
    vNovelties,
    vAbout
  }
}
</script>