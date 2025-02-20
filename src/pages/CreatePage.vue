<script setup>
import backIcon from "@/assets/images/back.svg";
import CardForm from "@/components/CardForm.vue";
import { HOME } from "@/services/consts";
import { RouterLink } from "vue-router";
import { ref, onMounted} from 'vue';
import NoteSkeletonLoader from "@/components/NoteSkeletonLoader.vue"; // Импортируем скелетон

const isLoading = ref(true);

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false; // Симуляция завершения загрузки
    }, 2000);
});
</script>

<template>
    <div class="block">
        <div class="container">
            <div class="title-icon">
                <RouterLink :to="HOME" class="fixed-top-left">
                    <img :src="backIcon" alt="Back">
                </RouterLink>
                <h1 class="title">Создать заметку</h1>
            </div>
            <NoteSkeletonLoader v-if="isLoading" />
            <CardForm v-else />
        </div>
    </div>
</template>