<template>
  <section class="work-experience card w-full p-6 bg-base-300">
    <h2 class="work-experience__title text-2xl xs:text-3xl font-bold mb-4">{{ $t('work_experience.title') }}</h2>

    <ul class="work-experience__companies timeline timeline-vertical timeline-compact">
      <li class="company" v-for="(company, companyId) in companies" :key="companyId">
        <hr v-if="companyId !== 0" class="bg-primary">

        <div class="timeline-middle">
          <CheckCircleIcon class="w-6 text-primary"/>
        </div>

        <div class="company__details timeline-end timeline-box w-full mb-4">
          <div class="company__info mb-4">
            <h3 class="company__position text-xl xs:text-2xl font-bold mb-2">{{ company.position }}</h3>

            <div class="text-base xs:text-lg font-medium flex flex-col xs:flex-row gap-0 xs:gap-4">
              <div class="company__name flex items-center gap-1">
                <BuildingOffice2Icon class="min-w-5 max-w-5 w-full"/>
                <span class="">{{ company.name }}</span>
              </div>
              <div class="company__location flex items-center gap-1">
                <MapPinIcon class="min-w-5 max-w-5 w-full"/>
                <span class="">{{ company.location }}</span>
              </div>
            </div>

            <div class="company__period flex items-center gap-1 text-base xs:text-lg font-medium">
              <CalendarDaysIcon class="min-w-5 max-w-5 w-full"/>
              <span class="">{{ company.from }} – {{ company.to }}</span>
            </div>
          </div>

          <div class="company__description text-base dark::text-gray-300">
            <div class="flex items-center gap-2 mb-2" v-for="(paragraph, idx) in company.description" :key="idx">
              <span aria-label="status" class="status status-primary"></span>
              <span>{{ paragraph }}</span>
            </div>
          </div>
        </div>

        <hr v-if="companyId !== companies.length - 1" class="bg-primary">
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {useI18n} from 'vue-i18n';
import {
  BuildingOffice2Icon,
  CalendarDaysIcon,
  CheckCircleIcon,
  MapPinIcon,
} from '@heroicons/vue/24/outline';
import type {Company} from '@/types/Company.ts';

const {tm} = useI18n();
const companies = computed<Company[]>(() => tm('work_experience.companies'));
</script>