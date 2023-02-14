<template>
  <div class="v-arrivals">
    <div class="v-arrivals__body _container">
      <div class="v-arrivals__title _title" id="v-arrivals__title">
        Узнать о новом 
        <br/>
        поступление
      </div>
      <form 
        action="" class="v-arrivals__form"
        v-if="!isActive">
        <div class="v-arrivals__form-block">
          <input type="text" placeholder="Имя" class="v-arrivals__input _input" required>
          <input type="text" placeholder="Телефон" class="v-arrivals__input _input" required>
          <input type="text" placeholder="Email" class="v-arrivals__input _input" required>
        </div>
        <div class="v-arrivals__form-block">
          <input 
            type="submit" 
            value="Отправить" 
            class="v-arrivals__button _btn"
            @click.prevent="showMessage"
          >
        </div>
      </form>
      <div 
        class="v-arrivals__success"
        v-else>
        <img class="v-arrivals__img" src="../../assets/images/arrivals/check.png" alt="">
        <div class="v-arrivals__message">
          {{ message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import config from '../../configs/config'
import axios from 'axios';

export default {
  name: 'v-arrivals',
  data() {
    return {
      message: 'Мы свяжемся с вами после нового поступления',
      isActive: false
    }
  },
  methods: {
    showMessage() {
      axios
      .post(config.messageURL + '?access_token=' + config.token)
      .then(response => response.data)
      .then(data => {
        this.message = data.message
        this.isActive = data.status === 'success' ? true : false
      })
      .catch(err => console.log(err));
    }
  }
}
</script>

<style lang="scss">
.v-arrivals {

  &__body {
    padding: 146px 0 207px 0;

    @media (max-width: $mobile) {
      padding: 100px 0 150px 0;
    }
  }

  #v-arrivals__title {
    @include adaptive-value('font-size', 42, 30, 1);
    line-height: 54px;
    margin: 0 0 150px 0;
    color: #000000;

    @media (max-width: $mobile) {
      margin: 0 0 70px 0;
    }
  }

  &__form {
    display: flex;
    gap: 63px;
    width: 100%;
    justify-content: space-between;

    @media (max-width: $mobile) {
      flex-direction: column;
      gap: 42px;
    }

    &-block {
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      gap: 42px;

      &:nth-child(1) {
        width: 70%;

        @media (max-width: $mobile) {
          width: 100%;
        }
      }

      &:nth-child(2) {
        width: 30%;
  
        @media (max-width: $mobile) {
          width: 100%;
        }
      }
    }
  }

  &__success {
    background: #79baed;
    height: 400px;
    padding: 30px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__message {
    text-align: center;
    @include adaptive-value('font-size', 42, 30, 1);
  }

  &__img {
    width: 200px;
    margin: 0 0 20px 0;
  }
}
</style>