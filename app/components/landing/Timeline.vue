<template>
  <div class="timeline-container">
    <div class="timeline-line">
      <div 
        v-for="(item, index) in timelineItems" 
        :key="index"
        class="timeline-item"
        :class="{ 'timeline-left': index % 2 === 0 }"
      >
        <div class="timeline-content">
          <span class="timeline-tag" :class="item.tagColor">
            {{ item.tag }}
          </span>
          <div class="timeline-date">
            {{ item.date }}
          </div>
          <div class="timeline-title">
            {{ item.title }}
          </div>
        </div>
        <div class="timeline-dot" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TimelineItem {
  date: string
  title: string
  tag: string
  tagColor: string
}

const timelineItems = ref<TimelineItem[]>([
  {
    date: 'March 2024',
    title: 'Project Kickoff',
    tag: 'Planning',
    tagColor: 'bg-blue-500'
  },
  {
    date: 'April 2024',
    title: 'Alpha Release',
    tag: 'Development',
    tagColor: 'bg-green-500'
  },
  {
    date: 'May 2024',
    title: 'Beta Testing',
    tag: 'Testing',
    tagColor: 'bg-yellow-500'
  },
  {
    date: 'June 2024',
    title: 'Public Launch',
    tag: 'Release',
    tagColor: 'bg-purple-500'
  }
])
</script>

<style scoped>
.timeline-container {
  @apply relative h-full max-w-[800px] mx-auto px-4;
}

.timeline-line {
  @apply relative before:absolute before:left-1/2 before:top-2 before:bottom-2 
         before:w-[2px] before:-ml-[1px] before:bg-primary-100 dark:before:bg-primary-800;
}

.timeline-item {
  @apply relative pb-12 last:pb-0;
}

.timeline-content {
  @apply relative w-[calc(50%-40px)] ml-auto bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm
         border border-gray-100 dark:border-gray-700;
}

/* Left side items */
.timeline-left .timeline-content {
  @apply ml-0 mr-auto;
}

/* Arrows for both sides */
.timeline-content::before {
  content: '';
  @apply absolute top-4 w-0 h-0 border-8 border-transparent;
}

.timeline-left .timeline-content::before {
  @apply -right-4 border-l-white dark:border-l-gray-800;
}

.timeline-item:not(.timeline-left) .timeline-content::before {
  @apply -left-4 border-r-white dark:border-r-gray-800;
}

.timeline-tag {
  @apply inline-block px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white rounded-full mb-2;
}

.timeline-date {
  @apply text-sm text-gray-500 dark:text-gray-400 mb-1;
}

.timeline-title {
  @apply text-base font-medium text-gray-900 dark:text-white;
}

.timeline-dot {
  @apply absolute left-1/2 top-4 w-3 h-3 -ml-[6px] rounded-full bg-primary-500 
         ring-4 ring-white dark:ring-gray-900;
}

.timeline-dot::before {
  content: '';
  @apply absolute -left-1.5 -top-1.5 w-6 h-6 rounded-full bg-primary-500/20;
}

/* Hover Effects */
.timeline-content {
  @apply transition-all duration-200;
}

.timeline-content:hover {
  @apply transform -translate-y-0.5 shadow-md;
}

.timeline-item:hover .timeline-dot::before {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style> 