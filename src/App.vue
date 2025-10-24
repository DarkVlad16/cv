<template>
  <header class="site-header flex flex-col lg:flex-row items-center lg:items-baseline justify-between sticky top-0 z-20 bg-base-100 gap-8 p-8 pb-4">
    <div class="site-header__name font-semibold text-2xl xs:text-3xl mb-4 order-2 lg:order-1">{{ title }}</div>

    <ThemeLanguageSwitcher class="justify-center sm:justify-end order-1 lg:order-2"/>
  </header>

  <main class="resume m-8">
    <AboutMe/>

    <div class="divider"></div>

    <div class="resume__columns flex flex-col lg:flex-row lg:mb-4">
      <div class="resume__left-column flex flex-col gap-4 grow max-w-none lg:max-w-8/12">
        <WorkExperience/>
        <Education/>
      </div>

      <div class="divider lg:divider-horizontal"></div>

      <div class="resume__right-column flex flex-col gap-4 grow max-w-none lg:max-w-4/12">
        <TechSkills/>
        <SoftSkills/>
        <Languages/>
        <Additional/>
      </div>
    </div>

    <div class="divider"></div>
  </main>
</template>

<script setup lang="ts">
import AboutMe from "@/components/AboutMe.vue";
import Additional from "@/components/Additional.vue";
import Education from "@/components/Education.vue";
import Languages from "@/components/Languages.vue";
import SoftSkills from "@/components/SoftSkills.vue";
import TechSkills from "@/components/TechSkills.vue";
import ThemeLanguageSwitcher from '@/components/ThemeLanguageSwitcher.vue';
import WorkExperience from "@/components/WorkExperience.vue";
import {computed,  watch} from 'vue';
import {useI18n} from 'vue-i18n';

const {t} = useI18n();
const title = computed(() => (t('cv') + ' | ' + t('full_name') + ' | ' + t('position')));

watch(title, () => {
  document.title = title.value;
}, {immediate: true})
</script>