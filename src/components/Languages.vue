<template>
  <section class="languages card w-full p-6 bg-base-300">
    <h2 class="languages__title text-2xl xs:text-3xl font-bold mb-4">{{ $t('language.title') }}</h2>

    <div class="languages-item items-baseline gap-2 mt-4 mb-2" v-for="(language, idx) in languages" :key="idx">
      <div class="languages-item__title text-base flex justify-between font-medium">
        <span class="languages-item__title-name">{{ $t(`locales.${language.name}`) }}</span>
        <span class="languages-item__title-value">{{ $t(language.value) }}</span>
      </div>
      <progress
          class="languages-item__percent progress"
          :class="language.class_color"
          :value="language.percent"
          :max="language.max"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import {languages} from '@/constants/languages';
</script>