<template>
  <section class="tech-skills card w-full p-6 bg-base-300">
    <h2 class="tech-skills__title text-2xl xs:text-3xl font-bold mb-4">{{ $t('tech_skill.title') }}</h2>

    <div class="main-skills mb-4">
      <div class="main-skill items-baseline gap-2 mb-2" v-for="(mainSkill, idx) in mainSkills" :key="idx">
        <div class="main-skill__title text-base flex justify-between font-medium">
          <span class="main-skill__title-name">{{ mainSkill.name }}</span>
          <span class="main-skill__title-value">{{ $t(mainSkill.value) }}</span>
        </div>
        <progress
            class="main-skill__percent progress"
            :class="mainSkill.class_color"
            :value="mainSkill.percent"
            :max="mainSkill.max"
        />
      </div>
    </div>

    <div class="other-skills flex flex-wrap gap-4">
      <span
          class="other-skill badge badge-outline badge-lg xs:badge-xl text-base font-medium items-center gap-2"
          v-for="(techSkill, idx) in techSkills"
          :key="idx"
      >
        <span class="other-skill__name">{{ $t(`tech_skill.list['${techSkill.name}']`, techSkill.name) }}</span>
        <span class="other-skill__value badge badge-xs xs:badge-sm text-xs xs:text-base font-medium"
              :class="techSkill.class_color">
          {{ $t(techSkill.value) }}
        </span>
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
import {mainSkills} from '@/constants/main_skills';
import {techSkills} from '@/constants/tech_skills';
</script>