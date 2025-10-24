<template>
  <section class="additional card w-full p-6 bg-base-300">
    <h3 class="additional__title text-xl xs:text-2xl font-bold mb-2">{{ $t('additional.title') }}</h3>

    <div class="additional__info text-base dark::text-gray-300">
      <div class="flex items-center gap-2 mb-2" v-for="(paragraph, idx) in $tm('additional.info')" :key="idx">
        <span aria-label="status" class="status status-primary"></span>
        <span>{{ paragraph }}</span>
      </div>
    </div>
  </section>
</template>