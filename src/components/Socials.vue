<template>
  <div class="socials flex items-center gap-4 h-fit">
    <a 
      v-for="(social, idx) in socials" 
      :key="idx" 
      :href="social.link" 
      :aria-label="social.name"
      target="_blank"
    >
      <component :is="social.icon" />
    </a>
  </div>
</template>

<script setup lang="ts">
import {socials} from "@/constants/socials";
</script>