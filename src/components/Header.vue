<template>
    <h1 class="text-3xl">{{ title }}</h1>
    <p class="mt-2 text-gray-500">{{ description }}</p>
</template>

<script setup>
 import { defineProps } from 'vue'
 const props = defineProps(['title', 'description'])
</script>