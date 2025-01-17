<template>
  <section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
          Our Services
        </h2>
        <p class="mt-3 text-lg text-gray-600 dark:text-gray-300">
          Explore our comprehensive development solutions
        </p>
      </div>

      <!-- Service Tree -->
      <div v-auto-animate class="space-y-2 font-mono text-sm">
        <div v-for="category in serviceCategories" :key="category.id">
          <div 
            class="flex items-center gap-2 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"
            @click="toggleFolder(category.id)"
          >
            <Icon
              name="heroicons:chevron-right"
              class="w-4 h-4 transition-transform duration-200"
              :class="expanded[category.id] ? 'transform rotate-90' : ''"
            />
            <Icon :name="category.icon" class="w-4 h-4 text-yellow-400" />
            <span>{{ category.title }}</span>
          </div>

          <div v-if="expanded[category.id]" v-auto-animate class="ml-4 space-y-2">
            <div 
              v-for="service in category.services" 
              :key="service.id"
              class="flex items-center gap-2 p-2"
            >
              <Icon 
                :name="service.icon"
                class="w-4 h-4 text-blue-400"
              />
              <span>{{ service.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Service {
  id: string
  title: string
  icon: string
}

interface ServiceCategory {
  id: string
  title: string
  icon: string
  services: Service[]
}

// Service data that can be extended
const serviceCategories = ref<ServiceCategory[]>([
  {
    id: 'development',
    title: 'Development',
    icon: 'heroicons:code-bracket',
    services: [
      {
        id: 'frontend',
        title: 'Frontend Development',
        icon: 'heroicons:window'
      },
      {
        id: 'backend',
        title: 'Backend Development',
        icon: 'heroicons:server'
      },
      {
        id: 'fullstack',
        title: 'Full Stack Solutions',
        icon: 'heroicons:squares-2x2'
      }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Services',
    icon: 'heroicons:cloud',
    services: [
      {
        id: 'deployment',
        title: 'Cloud Deployment',
        icon: 'heroicons:rocket-launch'
      },
      {
        id: 'optimization',
        title: 'Performance Optimization',
        icon: 'heroicons:arrow-trending-up'
      }
    ]
  },
  {
    id: 'consulting',
    title: 'Consulting',
    icon: 'heroicons:presentation-chart-bar',
    services: [
      {
        id: 'architecture',
        title: 'Architecture Design',
        icon: 'heroicons:cube-transparent'
      },
      {
        id: 'review',
        title: 'Code Review',
        icon: 'heroicons:document-magnifying-glass'
      }
    ]
  }
])

// Dynamic expanded state based on categories
const expanded = ref(
  Object.fromEntries(
    serviceCategories.value.map(category => [category.id, true])
  )
)

const toggleFolder = (categoryId: string) => {
  expanded.value[categoryId] = !expanded.value[categoryId]
}
</script> 