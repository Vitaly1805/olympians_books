<template>
  <div class="v-header">
    <div class="v-header__body _container">
      <div class="v-header__name">
        <span>Olympians</span> 
        <span>Books</span>
      </div>
      <div class="v-header__arrow"></div>
      <div class="v-header__title">
        Книги, которые вознесут вас на Олимп
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'v-header'
}
</script>

<style lang="scss">
.v-header {
  height: 940px;
  background: url(../../assets/images/header/back.png) no-repeat;
  background-size: cover;
  position: relative;

  &__name {
    font-family: 'Archeologicaps';
    padding: 10px 0 50px 0;
    font-weight: 500;
    line-height: 36px;
    display: flex;
    flex-direction: column;
  }

  &__arrow {
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 20px;
      width: 20px;
      background: #fff;
      top: 20px;
      left: 20px;
    }
  }

  &__title {
    font-family: 'Forum';
    font-size: 80px;
    line-height: 120px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    max-width: 860px;
  }
}
</style>