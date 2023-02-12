<template>
  <div class="v-about">
    <div class="v-about__body _container">
      <div class="v-about__block">
        <img src="../../assets/images/about/book.png" alt="" class="v-about__img">
      </div>
      <div class="v-about__block v-about__block_info">
        <div class="v-about__subtitle _title">
          О нас
        </div>
        <div class="v-about__text _text">
          Книжное наследие от мыслителей Древней Греции и до людей современности. Это не просто магазин, а настоящий клуб любителей книги, который объединяет в своем культурном пространстве людей самых разных интересов.
        </div>
      </div>
      <div class="v-about__block v-about__block_info">
        <div class="v-about__subtitle _title">
          Гармония
        </div>
        <div class="v-about__text _text">
          Наш проект «Гармония» объединяет читателей и авторов в реальности и в интернете. Каждую неделю проводятся встречи онлайн и вживую. Из наших регулярных рубрик вы узнаете много нового о книгах и писателях.
        </div>
      </div>
      <div class="v-about__block">
        <img src="../../assets/images/about/sculpture.png" alt="" class="v-about__img">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'v-about'
}
</script>

<style lang="scss">
.v-about {
  
  &__body {
    padding: 0 !important;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: $tablet) {
      grid-template-columns: 1fr;
    }
  }

  &__block {
    position: relative;
    height: 590px;

    &_info {
      background: #C1BA15;
      padding: 50px 20px 0 20px;
      height: auto;
    }

    @media (max-width: $tablet) {
      &:nth-child(3) {
        order: 1;
      }
    }
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__text {
    padding: 40px 0 60px 0;
    text-align: center;
    margin: 0 auto;
    @include adaptive-value('font-size', 24, 20, 1);

    @media (max-width: $tablet) {
      max-width: 600px;
    }

    @media (max-width: $mobile) {
      width: 80%;
    }
  }
}
</style>