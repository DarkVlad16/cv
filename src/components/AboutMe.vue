<template>
  <section class="about flex flex-col lg:flex-row items-center gap-4 mb-4">
    <div class="about__avatar avatar">
      <div class="w-64 rounded">
        <img src="@/assets/img/profile_photo.jpg" alt="Profile photo"/>
      </div>
    </div>

    <div class="about__container card w-full p-6 bg-base-300">
      <h2 class="about__title text-2xl xs:text-3xl font-bold mb-4">{{ $t('about_me.title') }}</h2>
      <div class="about__description text-base dark::text-gray-300 mb-4">
        <p class="mb-2" v-for="(paragraph, idx) in $tm('about_me.description')" :key="idx">
          {{ paragraph }}
        </p>
      </div>

      <div class="about__details flex gap-4">
        <div class="about__age flex items-center gap-1">
          <CakeIcon class="min-w-5 max-w-5 w-full"/>
          <span class="flex gap-2">{{ getAge(birthdayDate) }} {{ $t('about_me.years') }}</span>
        </div>

        <div class="about__location flex items-center gap-1">
          <MapPinIcon class="min-w-5 max-w-5 w-full"/>
          <span>{{ $t('location') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {CakeIcon, MapPinIcon} from '@heroicons/vue/24/outline';
import {getAge} from '@/utils/date';

const birthdayDate = '1996-10-16';
</script>