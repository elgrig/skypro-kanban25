<script setup>
import BaseHeader from '@/components/BaseHeader.vue';
import EditTask from '@/components/EditTask.vue';
import ExitModal from '@/components/ExitModal.vue';
import NewCardModal from '@/components/NewCardModal.vue';
import TaskDesk from '@/components/TaskDesk.vue';
import { onMounted, ref } from 'vue';
import Loader from '@/components/Loader.vue';

const loading = ref(true);
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})
</script>

<template>
  <main>
    <div class="wrapper">
		<!-- pop-up start-->

			<ExitModal />

			<NewCardModal />

			<EditTask />

		<!-- pop-up end-->

		<BaseHeader />
		<main class="main" :loading="loading">
      <Transition name="loading"><Loader v-show="loading" /></Transition>
			<TaskDesk v-show="!loading"/>
      <!-- <div>Задач нет</div> -->
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
