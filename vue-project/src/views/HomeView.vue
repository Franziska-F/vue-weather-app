<script setup></script>

<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search"
        class="py-2 px-1 w-full bg-transparent border-b focus: border-blue-700 focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
      />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
const searchQuery = ref("");
</script>
