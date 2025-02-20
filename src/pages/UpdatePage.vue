<script setup>
import backIcon from "@/assets/images/back.svg";
import UpdateCardForm from "@/components/UpdateCardForm.vue";
import NoteSkeletonLoader from "@/components/NoteSkeletonLoader.vue"; // Импортируем скелетон
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { HOME } from "@/services/consts";

const isLoading = ref(true);

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false;
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
                <h1 class="title">Изменить заметку</h1>
            </div>
            <NoteSkeletonLoader v-if="isLoading" />
            <UpdateCardForm v-else />
        </div>
    </div>
</template>