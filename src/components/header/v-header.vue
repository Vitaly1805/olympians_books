<template>
  <div class="v-header"
    :class="{active: isActive}">
    <div class="v-header__body _container">
      <vMenu 
        :isActive="isActive"/>
      <div class="v-header__top">
        <div class="v-header__icon _icon">
          <span>Olympians</span> 
          <span>Books</span>
        </div>
        <div
          class="v-header__arrow"
          @click="toggleActive"></div>
      </div>
      <div class="v-header__title">
        Книги, которые вознесут вас на Олимп
      </div>
    </div>
  </div>
</template>

<script>

import vMenu from './../menu/v-menu.vue'

export default {
  name: 'v-header',
  data() {
    return {
      isActive: false
    }
  },
  components: {
    vMenu
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss">
.v-header {
  height: 940px;
  background: url(../../assets/images/header/back.png) center center;
  background-size: cover;

  @media (max-width: $mobile) {
    height: 100vh;
    background: #1399c3 url(../../assets/images/header/back-mobile.png) left bottom no-repeat;
    background-size: contain;
  }

  &.active {
    .v-header__arrow {
      &::before,
      &::after {
        background: #000;
      }

      &::before {
        left: 28%;
        transform: translateX(-50%) rotate(150deg);
      }

      &::after {
        transform: translateX(-50%) rotate(-150deg);
      }
    }

    @media (max-width: $mobile) {
      .v-header__icon {
        color: #000;
      }
    }
  }

  &__top {
    position: relative;
  }

  &__icon {
    padding: 10px 0 50px 0;
    transition: all .5s ease;

    @media (max-width: $mobile) {
      text-align: center;
    }
  }

  &__arrow {
    position: absolute;
    cursor: pointer;
    width: 64px;
    height: 18px;
    top: 41px;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: $mobile) {
      top: 120px;
    }

    &::before,
    &::after {
      content: '';
      transition: all .5s ease;
      position: absolute;
      height: 3px;
      width: 56%;
      background: #fff;
      bottom: 8px;
      border-radius: 5px;
    }

    &::before {
      left: 27%;
      transform: translateX(-50%) rotate(25deg);
    }

    &::after {
      left: 73%;
      transform: translateX(-50%) rotate(-25deg);
    }
  }

  &__title {
    font-family: 'Forum';
    @include adaptive-value('font-size', 80, 30, 1);
    @include adaptive-value('line-height', 120, 50, 1);
    text-transform: uppercase;
    line-height: 120px;
    letter-spacing: 0.07em;
    max-width: 860px;
    width: 80%;

    @media (max-width: $mobile) {
      letter-spacing: 0.02em;
      width: 100%;
      margin: 80px 0 0 0;
    }

    @media (max-width: 600px) {
      text-align: center; 
    }
  }
}
</style>