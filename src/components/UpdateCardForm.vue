<script setup>
import confirmIcon from "@/assets/images/check.svg"

import { HOME } from "@/services/consts";

import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from "vue-router";
import { a } from "@/services/axiosInstance";

const route = useRoute();
const router = useRouter();
const id = route.params.id;
const content = ref('');


const fetchPost = async () => {
    try {
        const res = await a.get(`items/detail/${id}/`);
        content.value = res.data.content;
    } catch (err) {
        console.error('Ошибка при загрузке поста:', err);
    }
}


const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await a.put(`items/post/update/${id}/`, { content: content.value });
        router.push(HOME);
    } catch (err) {
        console.error('Ошибка при отправке поста:', err);
    }
}

onMounted(fetchPost);
</script>

<template>
    <form class="form" @submit="handleSubmit">
            <textarea
                v-model="content"
                class="form-control" 
                rows="30" cols="10" 
                placeholder="Начните писать заметку"
                required
            ></textarea>
            <button class="submit-primary-button" type="submit">
                <img :src="confirmIcon" alt="Confirm">
            </button>
    </form>
</template>