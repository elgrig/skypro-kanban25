<template>
 <AuthForm :isSignUp="true" :onClick="handleSighIn" />
</template>

<script setup>
import AuthForm from "../components/AuthForm.vue";

async function handleSighIn () {
  console.log("Регистрация")
}
</script>

<style lang="scss" scoped>

</style>
