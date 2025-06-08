<script setup>
import BaseHeader from '@/components/BaseHeader.vue'
import TaskDesk from '@/components/TaskDesk.vue'
import { onMounted, ref } from 'vue'
import BaseLoader from '@/components/BaseLoader.vue'

const loading = ref(true)
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})
</script>

<template>
  <main>
    <div class="">
      <!-- pop-up start-->

      <ExitModal />

      <NewTaskModal />

      <EditTaskModal />

      <!-- pop-up end-->

      <BaseHeader />
      <main class="main" :loading="loading">
        <Transition name="loading"
          ><BaseLoader v-if="loading" />
          <TaskDesk v-else />
        </Transition>
      </main>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.loading-enter-active,
.loading-leave-active {
  transition: opacity 0.3s ease;
}
.loading-enter-from,
.loading-leave-to {
  opacity: 0;
}
.loading-leave-from,
.loading-enter-to {
  opacity: 1;
}
</style>
