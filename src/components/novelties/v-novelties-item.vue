<template>
  <div class="v-novelties-item">
    <div class="v-novelties-item__body">
      <img :src="require(`./../../assets/images/novelties/${ novelty.picture }`)" alt="" class="v-novelties-item__img">
      <div class="v-novelties-item__title">
        {{ novelty.title }}
      </div>
      <div class="v-novelties-item__category">
        {{ novelty.category }}
      </div>
      <div class="v-novelties-item__price">
        {{ novelty.price }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'v-novelties-item',
  props: {
    novelty: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
.v-novelties-item {
  border: 3px solid #000000;
  font-family: 'Raleway';

  &__body {
    padding: 25px;
  }

  &__img {
    width: 200px;
    display: block;
    margin: 0 auto;
  }

  &__title {
    margin: 29px 0 40px 0;
    line-height: 36px;
    text-align: center;
    letter-spacing: 0.07em;
    height: 75px;
  }

  &__category {
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 0.07em;
  }

  &__price {
    margin: 50px 0 25px 0;
    font-size: 30px;
    line-height: 45px;
    text-align: center;
    letter-spacing: 0.07em;
    font-feature-settings: 'pnum' on, 'lnum' on;
    text-align: left;
  }
}
</style>