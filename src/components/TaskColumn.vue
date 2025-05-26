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

</style>
