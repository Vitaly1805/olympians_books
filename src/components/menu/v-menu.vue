<template>
  <div 
    class="v-menu"
    :class="{active: isActive}">
    <div class="v-menu__body _container">
      <div class="v-menu__list _text">
        <router-link
          class="v-menu__item"
          v-for="item of menuItems"
          :to="item.to"
          :key="item.id"
          @click="closeMenu">
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

import menuItems from '../../store/menu-item'

export default {
  name: 'v-menu',
  props: {
    isActive() {
      return {
        type: Boolean,
        default: false
      }
    }
  },
  data() {
    return {
      menuItems: []
    }
  },
  methods: {
    closeMenu() {
      this.$emit('closeMenu')
    }
  },
  mounted() {
    this.menuItems = menuItems
  }
}
</script>

<style lang="scss">
.v-menu {
  z-index: 5;
  max-width: 420px;
  width: 100%;
  background: #fff;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  color: #000;
  transition: all .5s ease;

  &.active {
    transform: translate(-50%, 0);
  }

  &__list {
    padding: 120px 0 54px 0;
    font-family: 'Forum';
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 56px;

    @media (max-width: $mobile) {
      padding: 150px 0 54px 0;
      gap: 26px;
    }
  }

  &__item {
    cursor: pointer;
    text-align: center;
    font-size: 30px;
    line-height: 45px;
  }
}
</style>