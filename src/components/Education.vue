<template>
  <section class="education card w-full p-6 bg-base-300">
    <h2 class="education__title text-2xl xs:text-3xl font-bold mb-4">{{ $t('education.title') }}</h2>

    <ul class="education__degrees timeline timeline-vertical timeline-compact">
      <li class="degree" v-for="(degree, degreeId) in degrees" :key="degreeId">
        <hr v-if="degreeId !== 0" class="bg-primary">

        <div class="timeline-middle">
          <CheckCircleIcon class="w-6 text-primary"/>
        </div>

        <div class="timeline-end timeline-box w-full mb-4">
          <div class="mb-4">
            <div class="flex flex-col xs:flex-row xs:items-end gap-4 mb-2">
              <h3 class="degree__name text-xl xs:text-2xl font-bold">{{ degree.name }}</h3>

              <div class="degree__period flex items-center gap-1 text-base xs:text-lg font-medium">
                <CalendarDaysIcon class="min-w-5 max-w-5 w-full"/>
                <span>{{ degree.from }} – {{ degree.to }}</span>
              </div>
            </div>

            <div class="flex flex-col gap-2 text-base xs:text-lg font-medium">
              <div class="degree__university flex items-center gap-1">
                <AcademicCapIcon class="min-w-5 max-w-5 w-full"/>
                <span>{{ degree.university }}</span>
              </div>
              <div class="degree__department flex items-center gap-1">
                <BuildingLibraryIcon class="min-w-5 max-w-5 w-full"/>
                <span>{{ degree.faculty }}, {{ degree.department }}</span>
              </div>
              <div class="degree__location flex items-center gap-1">
                <MapPinIcon class="min-w-5 max-w-5 w-full"/>
                <span>{{ degree.location }}</span>
              </div>
            </div>
          </div>
        </div>

        <hr v-if="degreeId !== degrees.length - 1" class="bg-primary">
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {useI18n} from 'vue-i18n';
import {
  AcademicCapIcon,
  BuildingLibraryIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  MapPinIcon,
} from '@heroicons/vue/24/outline';
import type {Degree} from "@/types/Degree.ts";

const {tm} = useI18n();
const degrees = computed<Degree[]>(() => tm('education.degrees'));
</script>