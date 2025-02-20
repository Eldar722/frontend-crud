<template>
    <div class="error-page">
      <h1 class="error-title">Ошибка</h1>
      <p class="error-description">Что-то пошло не так. Пожалуйста, попробуйте позже.</p>
      <p class="error-return">Вернуться на <RouterLink :to="HOME">главную страницу</RouterLink></p>
    </div>
</template>
  
<script setup>
import { HOME } from '@/services/consts';

</script>
  
<style scoped>
* {
    margin-bottom: 20px;
}

.error-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
}
</style>