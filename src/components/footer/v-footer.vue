<template>
  <div class="v-footer">
    <div class="v-footer__body _container">
      <div class="v-footer__icon _icon">
        <span>Olympians</span> 
        <span>Books</span>
      </div>
      <div class="v-footer__phone _num _text">
        +30922040281
      </div>
      <div class="v-footer__menu _text">
        <router-link
          class="v-footer__item"
          v-for="item of menuItems"
          :to="item.to"
          :key="item.id">
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

import menuItems from '../../store/menu-item'

export default {
  name: 'v-footer',
  data() {
    return {
      menuItems: []
    }
  },
  mounted() {
    this.menuItems = menuItems
  }
}
</script>

<style lang="scss">
.v-footer {
  background: #1596C1;

  &__body {
    height: 131px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: $tablet) {
      flex-direction: column;
      height: auto;
      padding: 30px 0;
    }
  }

  &__icon {
    font-size: 30px;

    @media (max-width: $tablet) {
      text-align: center;
    }
  }

  &__phone {
    @media (max-width: $tablet) {
      margin: 30px 0;
    }
  }

  &__menu {
    font-family: 'Raleway';
    display: flex;
    gap: 80px;

    @media (max-width: $tablet) {
      gap: 40px;
    }
  }

  &__item {
    cursor: pointer;
  }
}
</style>