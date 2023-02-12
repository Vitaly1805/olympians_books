<template>
  <div class="v-novelties-item">
    <div class="v-novelties-item__body">
      <img :src="require(`./../../assets/images/novelties/${ novelty.picture }`)" alt="" class="v-novelties-item__img">
      <div class="v-novelties-item__title _text">
        {{ novelty.title }}
      </div>
      <div class="v-novelties-item__category _text">
        {{ novelty.category }}
      </div>
      <div class="v-novelties-item__price _num">
        {{ novelty.price }} р.
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
    height: 75px;
    @include adaptive-value('margin-bottom', 40, 20, 1);
    margin-top: 29px;
    text-align: center;
  }

  &__category {
    font-size: 18px;
    line-height: 27px;
    text-align: center;
  }

  &__price {
    @include adaptive-value('margin-top', 50, 20, 1);
    @include adaptive-value('margin-bottom', 25, 15, 1);
    @include adaptive-value('font-size', 30, 24, 1);
    letter-spacing: 0.07em;
    line-height: 45px;
    text-align: center;
    text-align: left;
  }
}
</style>