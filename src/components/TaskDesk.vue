<template>
  <div class="container">
    <div class="main__block">
      <div class="main__content">
        <div v-if="tasks.length === 0">Задач нет</div>
        <template v-else>
        <TaskColumn :taskList="tasks" title="Без статуса" />
        <TaskColumn :taskList="tasks" title="Нужно сделать" iscolumn="false" />
        <TaskColumn :taskList="tasks" title="В работе" iscolumn="false" />
        <TaskColumn :taskList="tasks" title="Тестирование" iscolumn="false"/>
        <TaskColumn :taskList="tasks" title="Готово" iscolumn="false"/>
        </template>
      </div>
    </div>
  </div>

</template>

<script setup>
import TaskColumn from './TaskColumn.vue';
defineProps ({
  tasks: {
    type: Object,
  }
})
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
