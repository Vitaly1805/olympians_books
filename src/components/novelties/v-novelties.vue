<template>
  <div class="v-novelties _container">
    <div class="v-novelties__body">
      <div class="v-novelties__title _title">
        новинки
      </div>
      <div class="v-novelties__list">
        <vNoveltiesItem 
          v-for="novelty of novelties"
          :key="novelty.id"
          :novelty="novelty"
        />
      </div>
    </div>
  </div>
</template>

<script>
import vNoveltiesItem from './v-novelties-item.vue'
import config from '../../configs/config'
import axios from 'axios';

export default {
  name: 'v-novelties',
  data() {
    return {
      novelties: []
    }
  },
  components: {
    vNoveltiesItem
  },
  mounted() {
    axios
      .post(config.noveltiesURL + '?access_token=' + config.token)
      .then(response => this.novelties = response.data)
      .then(() => console.log(this.novelties))
      .catch(err => console.log(err));
  }
}
</script>

<style lang="scss">
.v-novelties {
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