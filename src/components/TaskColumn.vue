<template>
  <div>
    <div class="['main__column', iscolumn ?? 'column']">
      <div class="column__title">
        <p>{{ title }}</p>
      </div>
      <div class="cards">
      <div v-for="task in taskList.filter((item) => item.status === title)" :key="task.id">
        <BaseTask
          :task="task"
        />
      </div>
		</div>
    </div>
  </div>
</template>

<script setup>
import BaseTask from './BaseTask.vue';
import { taskList } from './tasks';

defineProps({
  title: String,
  iscolumn: Boolean,
})

</script>

<style scoped>
.main__column {
  width: 20%;
  margin: 0 auto;
  display: block;
}
.column__title {
  padding: 0 10px;
  margin: 15px 0;
}
.column__title p {
  color: #94A6BE;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
}
.cards {
  width: 100%;
  display: block;
  position: relative;
}
</style>
