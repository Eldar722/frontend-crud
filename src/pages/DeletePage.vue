<script setup>
import backIcon from "@/assets/images/back.svg";
import deleteIcon from "@/assets/images/delete.svg";
import { HOME } from "@/services/consts";
import { useRoute, useRouter, RouterLink } from "vue-router";
import { a } from "@/services/axiosInstance";
import NoteSkeletonLoader from "@/components/NoteSkeletonLoader.vue";
import { ref, onMounted } from "vue";

const route = useRoute();
const router = useRouter();
const id = route.params.id;
const isLoading = ref(true);
const postContent = ref(null);

const fetchPost = async () => {
    try {
        const response = await a.get(`items/detail/${id}/`);
        postContent.value = response.data.content;
    } catch (error) {
        console.error('Ошибка при получении заметки:', error);
        router.push('/error');
    } finally {
        isLoading.value = false;
    }
};

const handleDelete = async () => {
    try {
        await a.delete(`items/delete/${id}/`);
        router.push(HOME);
    } catch (error) {
        console.error('Ошибка при получении заметки:', error);
        router.push('/error');
    }
};

onMounted(fetchPost);
</script>

<template>
  <div class="block">
    <div class="container">
      <div class="container-for-title-icon">
        <div class="title-icon">
            <RouterLink :to="HOME" class="fixed-top-left">
                <img :src="backIcon" alt="Back">
            </RouterLink>
            <h1 class="title">Удалить пост</h1>
        </div>
      </div>
      <NoteSkeletonLoader v-if="isLoading" />
      <p class="warning" v-else>
          Вы уверены, что хотите удалить этот пост?
      </p>
      <div v-if="!isLoading">
          <p class="post-content">{{ postContent }}</p>
      </div>
      <button @click="handleDelete" class="fixed-bottom-delete" v-if="!isLoading">
          <img :src="deleteIcon" alt="Delete">
      </button>
    </div>
  </div>
</template>
