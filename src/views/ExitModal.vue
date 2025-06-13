<template>
  <div class="pop-exit" id="popExit">
				<div class="pop-exit__container">
					<div class="pop-exit__block">
						<div class="pop-exit__ttl">
							<h2>Выйти из аккаунта?</h2>
						</div>
						<form class="pop-exit__form" id="formExit" action="#">
							<div class="pop-exit__form-group">
								<button @click="logout" class="pop-exit__exit-yes _hover01" id="exitYes">Да, выйти</button>
								<RouterLink to="/"><button class="pop-exit__exit-no _hover03" id="exitNo">Нет, остаться</button></RouterLink>
							</div>
						</form>
					</div>
				</div>
			</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

function logout(e) {
  e.preventDefault()
  localStorage.removeItem('userInfo')
  router.push('/sign-in')
}

</script>

<style lang="scss" scoped>
.pop-exit {
  display: block;
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
}
.pop-exit__container {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
}
.pop-exit__block {
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
}
.pop-exit__ttl h2 {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
}
/* .pop-exit__form {
что тут должно быть??? В верстке этого стиля нет, но без него кнопки стоят криво.
} */
.pop-exit__form-group {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pop-exit__exit-yes {
  width: 153px;
  height: 30px;
  background-color: #565EEF;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #FFFFFF;
  margin-right: 10px;
}
.pop-exit__exit-yes a {
  width: 100%;
  height: 100%;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pop-exit__exit-no {
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565EEF);
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color:#565EEF;
}
.pop-exit__exit-no a {
  width: 100%;
  height: 100%;
  color:  #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
}
._hover01:hover {
  background-color: #33399b;
}

._hover02:hover, .header__user:hover {
  color: #33399b;
}
._hover02:hover::after, .header__user:hover::after {
  border-left-color: #33399b;
  border-bottom-color: #33399b;
}

._hover03:hover {
  background-color: #33399b;
  color: #FFFFFF;
}
._hover03:hover a {
  color: #FFFFFF;
}
</style>
