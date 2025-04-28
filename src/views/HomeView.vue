<script setup>
import BaseHeader from '@/components/BaseHeader.vue';
import ExitModal from '@/components/ExitModal.vue';
import NewCardModal from '@/components/NewCardModal.vue';
import TaskColumn from '@/components/TaskColumn.vue';
import TaskDesk from '@/components/TaskDesk.vue';
import TaskTask from '@/components/TaskTask.vue';
</script>

<template>
  <main>
    <div class="wrapper">
		<!-- pop-up start-->

			<ExitModal />

			<NewCardModal />

			<TaskTask />

		<!-- pop-up end-->

		<BaseHeader />
		<main class="main">
			<TaskDesk />
		</main>

    </div>
  </main>
</template>
