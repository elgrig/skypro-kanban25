<script setup>
import BaseHeader from '@/components/BaseHeader.vue'
import TaskDesk from '@/components/TaskDesk.vue'
import BaseLoader from '@/components/BaseLoader.vue'
import { onMounted, ref } from 'vue'
import { fetchTasks } from '@/services/api'

const loading = ref(true)
const tasks = ref([])
const error = ref('')

// onMounted(() => {
//   setTimeout(() => {
//     loading.value = false
//   }, 1000)
// })

const getTasks = async () => {
  try {
    loading.value = true
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const data = await fetchTasks({
      token: userInfo.token,
    })
  if (data) tasks.value = data
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(getTasks)
</script>

<template>
  <main>
    <div class="">
      <BaseHeader />
      <main class="main" :loading="loading">
        <Transition name="loading">
        <BaseLoader v-if="loading" />
        <TaskDesk :tasks="tasks" :error="error" v-else />
        </Transition>
      </main>
      <RouterView />
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
