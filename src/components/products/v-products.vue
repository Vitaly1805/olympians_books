<template>
  <div class="v-products _container">
    <div class="v-products__body">
      <div class="v-products__title _title">
        {{ title }}
      </div>
      <div class="v-products__list">
        <vProduct 
          v-for="novelty of products"
          :key="novelty.id"
          :novelty="novelty"
        />
      </div>
    </div>
  </div>
</template>

<script>

import vProduct from '../products/v-product.vue';

export default {
  name: 'v-products',
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    },
    products: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    vProduct
  }
}
</script>

<style lang="scss">
.v-products {
  color: #000;

  &__body {
    @include adaptive-value('padding-top', 140, 50, 1);
    @include adaptive-value('padding-bottom', 120, 20, 1);
  }

  &__title {
    @include adaptive-value('margin-bottom', 70, 30, 1);
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;

    @media (max-width: $tablet) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: $mobile) {
      grid-template-columns: 1fr;
    }
  }
}
</style>