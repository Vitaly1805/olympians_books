<template>
  <div class="v-catalog-page">
      <vCatalog />
  </div>
</template>

<script>
import vCatalog from '../catalog/v-catalog.vue'

export default {
  name: 'v-catalog-page',
  components: {
    vCatalog
  }
}
</script>

<style lang="scss">
.v-catalog-page {
  margin: 0 auto;
  top: 0;
}
</style>