<template>
  <div class="container">
    <div class="main__block">
      <div class="main__content">
        <TaskColumn title="Без статуса" />
        <TaskColumn title="Нужно сделать" iscolumn="false" />
        <TaskColumn title="В работе" iscolumn="false" />
        <TaskColumn title="Тестирование" iscolumn="false"/>
        <TaskColumn title="Готово" iscolumn="false"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import TaskColumn from './TaskColumn.vue';

</script>

<style lang="scss" scoped>

</style>
