<template>
  <div>
    <div class="['main__column', iscolumn ?? 'column']">
      <div class="column__title">
        <p>{{ title }}</p>
      </div>
      <div class="cards">
      <BaseTask
          v-for="task of taskList"
          :key="task.id"
      />
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

<style lang="scss" scoped>

</style>
