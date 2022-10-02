<script lang="ts" setup>
import DateDisplay from "./DateDisplay.vue";
import UseEmojis from "@/composables/UseEmojis";
import type Entry from "@/types/Entry";
import { inject } from "vue";
import { userInjectionKey } from "@/injectionKeys";

const { findEmoji } = UseEmojis();
const injectedUser = inject(userInjectionKey);

defineProps<{
  entry: Entry;
}>();
</script>
<template>
  <div class="entry-card">
    <div class="entry-card-body">
      <component
        v-if="entry.emoji"
        width="75"
        :is="findEmoji(entry.emoji)"
      ></component>
      <div class="entry-text">{{ entry.body }}</div>
    </div>
    <div class="entry-footer">
      <DateDisplay :date="entry.createdAt" class="mr-2" />
      |
      <span class="ml-2">{{ injectedUser?.username || "anonymous" }}</span>
    </div>
  </div>
</template>
