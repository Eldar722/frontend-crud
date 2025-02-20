<script setup>
import { ref } from 'vue';
import backIcon from "@/assets/images/back.svg";
import { RouterLink } from "vue-router";
import { HOME } from '@/services/consts';

const props = defineProps({
  title: {
    type: String,
    default: 'Загрузка...',
  },
});

const loading = ref(false);

const loadContent = async () => {
  loading.value = true;
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating a loading delay
  loading.value = false;
};
</script>

<template>
    <div class="block">
        <div class="container">
            <div class="title-icon">
                <RouterLink :to="HOME" class="fixed-top-left">
                    <img :src="backIcon" alt="Back" />
                </RouterLink>
                <h1 class="title">{{ title }}</h1>
            </div>

            <div v-if="loading" class="skeleton-text"></div> <!-- Show skeleton when loading -->
            <div v-else>
                <p>Your content goes here!</p> <!-- Replace with actual content -->
            </div>

            <button class="load-button" @click="loadContent">Загрузить</button>
        </div>
    </div>
</template>

<style scoped>
.skeleton-text {
  height: 40px;
  width: 80%;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  border-radius: 4px;
  margin: 20px 0;
  animation: loading 1.5s infinite;
}

.load-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.load-button:hover {
  background-color: #0056b3;
}

/* Loading Animation */
@keyframes loading {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
}
</style>