<template>
  <div class="v-catalog">
    <div class="v-catalog__body">
      <vProducts 
        :products="products"
        :title="'каталог'"/>
    </div>
  </div>
</template>

<script>

import config from '../../configs/config'
import axios from 'axios';
import vProducts from '../products/v-products.vue';


export default {
  name: 'v-catalog',
  data() {
    return {
      products: []
    }
  },
  components: {
    vProducts
  },
  mounted() {
    axios
      .post(config.catalogURL + '?access_token=' + config.token)
      .then(response => this.products = response.data)
      .catch(err => console.log(err));
  }
}
</script>

<style lang="scss">
.v-catalog {

}
</style>