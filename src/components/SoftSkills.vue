<template>
  <section class="soft-skills card w-full p-6 bg-base-300">
    <h2 class="soft-skills__title text-2xl xs:text-3xl font-bold mb-4">{{ $t('soft_skill.title') }}</h2>

    <div class="flex flex-wrap gap-4">
      <span
          class="soft-skill badge badge-outline badge-lg xs:badge-xl text-base font-medium"
          v-for="(softSkill, idx) in $tm('soft_skill.list')"
          :key="idx"
      >
        {{ softSkill }}
      </span>
    </div>
  </section>
</template>