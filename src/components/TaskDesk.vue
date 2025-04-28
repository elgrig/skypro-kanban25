<template>
  <div class="container">

<div class="main__block">
  <div class="main__content">
    <div class="main__column column">
      <div class="column__title">
        <p>Без статуса</p>
      </div>
      <TaskColumn />
    </div>
    <div class="main__column">
      <div class="column__title">
        <p>Нужно сделать</p>
      </div>
      <TaskColumn />
    </div>
    <div class="main__column">
      <div class="column__title">
        <p>В работе</p>
      </div>
      <TaskColumn />
    </div>
    <div class="main__column">
      <div class="column__title">
        <p>Тестирование</p>
      </div>
      <TaskColumn />
    </div>
    <div class="main__column">
      <div class="column__title">
        <p>Готово</p>
      </div>
      <TaskColumn />
    </div>


  </div>

</div>
</div>
</template>

<script setup>
import TaskColumn from './TaskColumn.vue';


</script>

<style lang="scss" scoped>

</style>
