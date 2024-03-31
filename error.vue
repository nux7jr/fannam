<script setup lang="ts">

const props = defineProps({
  error: {
    type: Object,
    required: true,
  }
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div>
    <h2>{{ error.statusCode }}</h2>
    <button @click="handleError">Clear errors</button>
  </div>
</template>
