<script lang="ts" setup>
import EmojiField from "@/components/EmojiField.vue";
import ArrowCircleRight from "@/assets/icons/arrow-circle-right.svg";
import type Emoji from "@/types/Emoji";
import { ref, computed } from "vue";

const text = ref("Hello, world!");
const emoji = ref<Emoji | null>(null);
const maxChars = 280;
const charCount = computed(() => text.value.length);
const handleTextInput = (event: Event) => {
  const textArea = event.target as HTMLTextAreaElement;
  if (textArea.value.length <= maxChars) {
    text.value = textArea.value;
  } else {
    text.value = textArea.value.substring(0, 280);
  }
};
</script>
<template>
  <form class="entry-form" @submit.prevent>
    <textarea
      v-model="text"
      @keyup="handleTextInput"
      placeholder="New Journal Entry for danielkelly_io"
    ></textarea>
    <EmojiField v-model="emoji" />
    <div class="entry-form-footer">
      <span>{{ charCount }} / {{ maxChars }}</span>
      <button>Remember <ArrowCircleRight width="20" /></button>
    </div>
  </form>
</template>
