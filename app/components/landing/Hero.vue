<template>
  <section class="relative overflow-hidden py-20 sm:py-32">
    <!-- Background Pattern -->
    <div class="absolute inset-0 -z-10 opacity-10">
      <div class="absolute inset-0 bg-gradient-to-tr from-primary-100 to-primary-50 dark:from-primary-950 dark:to-primary-900" />
    </div>

    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column: Content -->
        <div class="max-w-2xl">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            Transform Your Business for Just
            <span class="text-primary-600 dark:text-primary-400">$69</span>
          </h1>
          
          <p class="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Get professional consulting services that will revolutionize your business strategy. 
            Expert insights, actionable plans, and proven results - all for an unbeatable price.
          </p>

          <div class="mt-8 flex flex-col sm:flex-row gap-4">
            <UButton
              size="xl"
              color="primary"
              to="#get-started"
              class="flex-1 sm:flex-none sm:min-w-[200px]"
            >
              Get Started Now
              <Icon name="heroicons:arrow-right" class="ml-2" />
            </UButton>

            <UButton
              size="xl"
              color="gray"
              variant="ghost"
              to="#learn-more"
              class="flex-1 sm:flex-none sm:min-w-[200px]"
            >
              Learn More
            </UButton>
          </div>

          <!-- Trust Indicators -->
          <div class="mt-12 flex items-center gap-6 text-gray-600 dark:text-gray-400">
            <div class="flex items-center gap-2">
              <Icon name="heroicons:check-badge" class="w-5 h-5 text-primary-600" />
              <span>Money-back Guarantee</span>
            </div>
            <div class="flex items-center gap-2">
              <Icon name="heroicons:clock" class="w-5 h-5 text-primary-600" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Image/Illustration -->
        <div class="relative lg:ml-auto">
          <div class="relative aspect-square max-w-md mx-auto">
            <UImage
              src="/images/hero-image.webp"
              alt="Business Transformation"
              width="600"
              height="600"
              class="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 