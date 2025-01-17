<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center justify-between">
          <div class="text-xl font-bold text-primary-600 dark:text-primary-400">
            YourBrand
          </div>
          <div class="flex items-center gap-4">
            <UButton
              color="gray"
              variant="ghost"
              to="/directory"
            >
              Directory
            </UButton>
            <UButton
              color="gray"
              variant="ghost"
              to="#features"
            >
              Features
            </UButton>
            <UButton
              color="gray"
              variant="ghost"
              to="#pricing"
            >
              Pricing
            </UButton>
            <UButton
              color="primary"
              to="#get-started"
            >
              Get Started
            </UButton>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-16">
      <slot />
    </main>
  </div>
</template> 