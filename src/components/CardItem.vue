<script setup>
import { defineProps } from 'vue';
import { READ } from "@/services/consts";

const props = defineProps({
    post: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <RouterLink :to="READ.substring(0, READ.length - 3) + post.id" class="card-item">
        <h3 class="card-item__title">{{ props.post.content }}</h3>
    </RouterLink>
</template>

