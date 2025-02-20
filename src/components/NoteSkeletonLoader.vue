<template>
    <div class="note-skeleton-loader" v-if="isLoading">
        <div class="skeleton-content"></div>
        <div class="skeleton-buttons">
            <div class="skeleton-button"></div>
            <div class="skeleton-button"></div>
            <div class="skeleton-button"></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isLoading = ref(true); // Установите это значение в false, когда загрузка завершена
</script>

<style scoped>
.note-skeleton-loader {
    padding: 20px;
    background-color: var(--gray);
    border-radius: 15px;
}

.skeleton-title {
    height: 24px;
    width: 60%;
    background: var(--darkgray);
    margin-bottom: 20px;
    border-radius: 8px;
    animation: pulse 1.5s infinite;
}

.skeleton-content {
    height: 80px;
    width: 100%;
    background: var(--darkgray);
    margin: 10px 0;
    border-radius: 15px;
    animation: pulse 1.5s infinite;
}

.skeleton-buttons {
    display: flex;
    gap: 10px;
}

.skeleton-button {
    height: 40px;
    width: 80px;
    background: var(--darkgray);
    border-radius: 20px;
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0%, 100% {
        background: var(--darkgray);
    }
    50% {
        background: rgba(255, 255, 255, 0.5);
    }
}
</style>