<template>
  <div class="v-novelties">
    <div class="v-novelties__body">
      <vProducts 
        :products="products"
        :title="'новинки'"/>
    </div>
  </div>
</template>

<script>

import config from '../../configs/config'
import axios from 'axios';
import vProducts from '../products/v-products.vue';


export default {
  name: 'v-novelties',
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
      .post(config.noveltiesURL + '?access_token=' + config.token)
      .then(response => this.products = response.data)
      .catch(err => console.log(err));
  }
}
</script>

<style lang="scss">
.v-novelties {

}
</style>