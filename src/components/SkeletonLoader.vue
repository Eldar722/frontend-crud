<template>
    <div class="skeleton-loader" v-if="isLoading">
        <div class="skeleton-item" v-for="n in itemCount" :key="n"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const itemCount = ref(6); // Количество элементов скелетона
const isLoading = ref(true); // Установите это значение в false, когда загрузка завершена
</script>
