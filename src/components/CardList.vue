<script setup>
import { ref, onMounted } from 'vue';
import { a } from '@/services/axiosInstance';
import CardItem from './CardItem.vue';
import SkeletonLoader from '@/components/SkeletonLoader.vue'; // Импортируем компонент скелетона

const posts = ref([]);
const isLoading = ref(true); // Переменная для состояния загрузки

const fetchPosts = async () => {
    isLoading.value = true; // Устанавливаем состояние загрузки в true
    try {
        const res = await a.get('items/');
        posts.value = res.data;
        console.log(res.data);
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    } finally {
        isLoading.value = false; // Устанавливаем состояние загрузки в false после завершения
    }
};

onMounted(fetchPosts);
</script>

<template>
    <div class="card-list">
        <SkeletonLoader v-if="isLoading || posts.length === 0" /> <!-- Показываем скелетон, если загрузка или нет постов -->
        <CardItem 
            v-for="post in posts"
            :key="post.id"
            :post="post"
        />
    </div>
</template>