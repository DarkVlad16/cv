<template>
  <section class="achievements card w-full p-6 bg-base-300">
    <h3 class="achievements__title text-xl xs:text-2xl font-bold mb-2">{{ $t('achievements.title') }}</h3>

    <div class="achievements__info text-base dark::text-gray-300">
      <div class="flex items-center gap-2 mb-2" v-for="(achievement, idx) in $tm('achievements.info')" :key="idx">
        <span aria-label="status" class="status status-primary"></span>
        <span>{{ achievement }}</span>
      </div>
    </div>
  </section>
</template>