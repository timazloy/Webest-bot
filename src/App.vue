<template>
  <div class="page">
    <div class="page__header header">
      <a href="#" class="header__logo">
        <img src="/img/BotWebest.svg" alt="logo">
      </a>
      <div class="header__section">
        <div class="header-links">
          <a href="#" class="header-links__item">Учет времени</a>
          <a href="#" class="header-links__item">Отпуск</a>
          <a href="#" class="header-links__item">Бот</a>
        </div>
        <div class="header-info">
          <div class="counter-time">
            <div class="counter-time__item counter-item">
              <div class="counter-item__text">Неделя:</div>
              <div class="counter-item__count">24 ч.</div>
            </div>
            <div class="counter-time__item counter-item">
              <div class="counter-item__text">Месяц:</div>
              <div class="counter-item__count">24 ч.</div>
            </div>
            <div class="counter-time__item counter-item">
              <div class="counter-item__text">Сверхурочно:</div>
              <div class="counter-item__count">24 ч.</div>
            </div>
          </div>
          <button type="button" class="button-main">
            <img class="button-icon__img" src="/img/play-circle.svg" alt="icon">
            <span class="button-main__text">Начать рабочий день</span>
          </button>
          <div class="initials">АС</div>
          <div class="full-name">Алиса Сидоренкова</div>
          <button class="button-black" type="button">Выйти</button>
        </div>
      </div>

    </div>
  </div>

</template>

<script>

</script>


<style lang="scss">
* {
  font-family: 'GloryRegular';
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

button {
  border: none;
  background: none;
}

.page {
  &__header {
    margin-bottom: 63px;
  }
}

.button-main {
  background: linear-gradient(89.85deg, #0078FF 0.11%, #02AAF6 99.87%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #FFFFFF;
  padding: 10px;
  cursor: pointer;

  &__text {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;

  }

  &:hover {
    background: linear-gradient(89.85deg, #0179FF 0.11%, #0179FF 99.87%);
  }
}

.button-black {
  cursor: pointer;
  padding: 10px 18px;
  border: 1px solid #11203E;
  border-radius: 24px;
}

.full-name {
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  color: #11203E;
}

.initials {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 50px;
  background: #F9F9F9;
  font-weight: 500;
  font-size: 14px;
  color: #11203E;

}

.counter-time {
  border: 1px solid #DFDFDF;
  border-radius: 38px;
  display: flex;
  gap: 6px;
  padding: 10px 15px;
  height: max-content;
  width: fit-content;

}

.counter-item {
  display: flex;
  align-items: center;
  gap: 3px;

  &__text {
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    color: #898892;
  }

  &__count {
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    color: #11203E;
  }
}

.header-info {
  max-width: 840px;
  width: 100%;
  display: flex;
  gap: 20px;
}

.header {
  display: flex;
  padding: 0 20px;
  border-bottom: 1px solid #DFDFDF;

  &__logo {
    padding: 20px 0;
    margin-right: 150px;
  }

  &__section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
}

.header-links {
  display: flex;
  &__item {
    display: flex;
    padding: 20px 10px;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    color: #11203E;
  }
}

</style>