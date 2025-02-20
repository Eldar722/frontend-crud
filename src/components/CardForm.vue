<script setup>
import confirmIcon from "@/assets/images/check.svg"

import { HOME } from "@/services/consts";

import { ref } from 'vue';
import { useRouter } from "vue-router";
import { a } from "@/services/axiosInstance";

const content = ref('')
const router = useRouter();

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await a.post('items/post/', { content: content.value });
        router.push(HOME);
    } catch (err) {
        console.error('Ошибка при отправке поста:', err);
    }
}

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