<script setup>
import backIcon from "@/assets/images/back.svg";
import plusIcon from "@/assets/images/+.svg";
import updateIcon from "@/assets/images/update.svg";
import deleteIcon from "@/assets/images/delete.svg";
import { ref, onMounted } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { a } from "@/services/axiosInstance";
import { CREATE, DELETE, HOME, UPDATE } from "@/services/consts";
import NoteSkeletonLoader from "@/components/NoteSkeletonLoader.vue"; // Импортируем скелетон

const route = useRoute();
const postId = route.params.id;
const post = ref(null);
const isLoading = ref(true);

const fetchPost = async () => {
    try {
        const res = await a.get(`items/detail/${postId}/`);
        post.value = res.data;
    } catch (error) {
        console.error('Ошибка при получении заметки:', error);
        route.push('/error');
    } finally {
        isLoading.value = false; // Установка состояния загрузки в false
    }
}

onMounted(fetchPost);
</script>

<template>
  <div class="block">
        <div class="container">
            <div class="title-icon">
                <RouterLink :to="HOME" class="fixed-top-left">
                    <img :src="backIcon" alt="Back">
                </RouterLink>
                <h1 class="title">Просмотр заметки</h1>
            </div>
            <NoteSkeletonLoader v-if="isLoading" />
            <div class="description-container" v-else>
                <p class="description">{{ post ? post.content : 'Загрузка...' }}</p>
                <div class="fixed-menu-bottom">
                    <RouterLink v-if="post" :to="DELETE.substring(0, DELETE.length - 3) + post.id" class="delete-button">
                        <img :src="deleteIcon" alt="Delete">
                    </RouterLink>
                    <RouterLink v-if="post" :to="UPDATE.substring(0, UPDATE.length - 3) + post.id" class="update-button">
                        <img :src="updateIcon" alt="Update">
                    </RouterLink>
                    <RouterLink :to="CREATE" class="create-button">
                        <img :src="plusIcon" alt="Plus">
                    </RouterLink>
                </div>
            </div>
        </div>
  </div>
</template>