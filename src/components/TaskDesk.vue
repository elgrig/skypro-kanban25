<template>
  <div class="container">
    <div class="main__block">
      <div class="main__content">
        <div v-if="taskList.length === 0">Задач нет</div>
        <template v-else>
        <TaskColumn title="Без статуса" />
        <TaskColumn title="Нужно сделать" iscolumn="false" />
        <TaskColumn title="В работе" iscolumn="false" />
        <TaskColumn title="Тестирование" iscolumn="false"/>
        <TaskColumn title="Готово" iscolumn="false"/>
        </template>
      </div>
    </div>
  </div>
  
</template>

<script setup>
import TaskColumn from './TaskColumn.vue';
import { taskList } from './tasks';

</script>

<style lang="scss" scoped>
.container {
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
}
.main__block {
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
}
.main__content {
  width: 100%;
  display: flex;
}
</style>
