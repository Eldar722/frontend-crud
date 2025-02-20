<!-- <script setup>
import { RouterLink } from "vue-router";
import plusIcon from "../assets/images/+.svg";
import { CREATE } from "@/services/consts";
import CardList from "@/components/CardList.vue";

</script>

<template>
    <div class="block">
        <div class="container">
            <RouterLink :to="CREATE" class="fixed-bottom-right">
                <img :src="plusIcon" alt="Plus">
            </RouterLink>
            <div class="container-for-white-container">
                <div class="white-container">
                    <h1 class="title">Заметки</h1>
                </div>
            </div>
            <CardList />
        </div>
    </div>
</template> -->


<script setup>
import { ref, onMounted } from "vue";
import { a } from "@/services/axiosInstance";
import plusIcon from "../assets/images/+.svg";
import { CREATE } from "@/services/consts";
import CardList from "@/components/CardList.vue";
import ErrorPage from "@/components/ErrorPage.vue"; // Импортируем страницу ошибки

const data = ref(null);
const hasError = ref(false); // Флаг ошибки

onMounted(async () => {
  try {
    const response = await a.get("items/");
    data.value = response.data;
  } catch (error) {
    console.error("Ошибка на homepage:", error);
    hasError.value = true; // Устанавливаем флаг ошибки
  }
});
</script>

<template>
  <div class="block">
    <div class="container">
      <RouterLink :to="CREATE" class="fixed-bottom-right">
        <img :src="plusIcon" alt="Plus">
      </RouterLink>

      <div class="container-for-white-container">
        <div class="white-container">
          <h1 class="title">Заметки</h1>
        </div>
      </div>

      <!-- Показываем страницу ошибки, если есть ошибка -->
      <ErrorPage v-if="hasError" />
      
      <!-- В противном случае показываем нормальную страницу -->
      <CardList v-else />
    </div>
  </div>
</template>
