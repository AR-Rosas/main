<template>
  <div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="mb-12">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white">
          Directory
        </h1>
        <p class="mt-3 text-lg text-gray-600 dark:text-gray-300">
          Browse our comprehensive service catalog
        </p>
      </div>
      
      <LandingServiceTree />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})
</script> 