<template>
  <div class="wrapper">
    <div class="container-signin">
      <div class="modal">
        <div class="modal__block">
          <div class="modal__ttl">
            <h2>{{ isSignUp ? 'Регистрация' : 'Вход' }}</h2>
          </div>
          <form @submit="handleSubmit" class="modal__form-login" id="formLogUp" action="#">
            <input
              v-model="name"
              v-show="isSignUp"
              class="modal__input first-name"
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя"
            />
            <input
              v-model="login"
              class="modal__input"
              type="text"
              name="login"
              id="formlogin"
              placeholder="Эл. почта"
            />
            <input
              v-model="password"
              class="modal__input"
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            />
            <button class="modal__btn-enter _hover01" id="btnEnter">
              <a :onClick="handleSubmit">{{ isSignUp ? 'Зарегистрироваться' : 'Войти' }}</a>
            </button>
            <div class="modal__form-group">
              <p>{{ isSignUp ? 'Уже есть аккаунт?' : 'Нужно зарегистрироваться?' }}</p>
              <RouterLink :to="isSignUp ? '/sign-in' : '/sign-up'">
                <a>{{ isSignUp ? 'Войдите здесь' : 'Регистрируйтесь здесь' }}</a>
              </RouterLink>
              <div v-show="error">{{ error }}</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { signUp, signIn } from '@/services/auth'

const router = useRouter()
const props = defineProps({
  isSignUp: Boolean,
})

const name = ref('')
const login = ref('')
const password = ref('')
const errors = ref({
  name: false,
  login: false,
  password: false,
})
const error = ref('')

function validateForm() {

  let isValid = true
  error.value = ''

  errors.value.name = false
  errors.value.login = false
  errors.value.password = false

  if (props.isSignUp && !name.value.trim() === "") {
    errors.value.name = false
    isValid = false
  }

  if (password.value.trim() === "") {
    errors.value.password = true
    isValid = false
  }

  if (!isValid) {
    error.value = 'Пожалуйста, заполните все обязательные поля'
  }

  return isValid
}

async function handleSubmit(event) {
  event.preventDefault()

  if (!validateForm()) {
  return
  }

  try {
    const data = props.isSignUp
      ? await signUp({
        name: name.value,
        login: login.value,
        password: password.value
      })
      : await signIn({
        login: login.value,
        password: password.value
      })
    if (data) {
      localStorage.setItem('userInfo', JSON.stringify(data))
      router.push('/')
    }
  } catch (err) {
    error.value = err.message
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
}

div,
button,
a {
  font-family: 'Roboto', sans-serif;
}

.wrapper {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #eaeef6;
}

.container-signup {
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
}

._hover01:hover {
  background-color: #33399b;
}

.modal {
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal__block {
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
}
.modal__ttl h2 {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
  margin-bottom: 20px;
}
.modal__form-login {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal__form-login input:not(:last-child) {
  margin-bottom: 7px;
}
.modal__input {
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 10px 8px;
}
.modal__input::-moz-placeholder {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.28px;
  color: #94a6be;
}
.modal__input::placeholder {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.28px;
  color: #94a6be;
}
.modal__btn-enter {
  width: 100%;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
}
.modal__btn-enter a {
  width: 100%;
  height: 100%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal__btn-signup-ent {
  width: 100%;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
}
.modal__btn-signup-ent a {
  width: 100%;
  height: 100%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal__form-group {
  text-align: center;
}
.modal__form-group p,
.modal__form-group a {
  color: rgba(148, 166, 190, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.14px;
}
.modal__form-group a {
  text-decoration: underline;
}

@media screen and (max-width: 375px) {
  .modal {
    background-color: #ffffff;
  }
  .modal__block {
    max-width: 368px;
    width: 100%;
    padding: 0 16px;
    border-radius: none;
    border: none;
    box-shadow: none;
  }
  .modal__btn-signup-ent {
    height: 40px;
  }
}
</style>
