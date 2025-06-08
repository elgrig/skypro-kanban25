<template>
 <AuthForm :onClick="handleSighIn" />
</template>

<script setup>
import AuthForm from "../components/AuthForm.vue";

async function handleSighIn () {
  console.log("Вход")
}
</script>

<style lang="scss" scoped>

</style>
