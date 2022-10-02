<script lang="ts" setup>
import EmojiField from "@/components/EmojiField.vue";
import ArrowCircleRight from "@/assets/icons/arrow-circle-right.svg";
import type Emoji from "@/types/Emoji";
import { ref, computed, defineEmits, onMounted } from "vue";
import type Entry from "@/types/Entry";

const body = ref("Hello, world!");
const textArea = ref<HTMLTextAreaElement | null>(null);
const emoji = ref<Emoji | null>(null);
const maxChars = 280;
const charCount = computed(() => body.value.length);

onMounted(() => {
  textArea.value?.focus();
});

const emit = defineEmits<{
  (event: "@create", entry: Entry): void;
}>();

const handleTextInput = (event: Event) => {
  const textArea = event.target as HTMLTextAreaElement;
  if (textArea.value.length <= maxChars) {
    body.value = textArea.value;
  } else {
    body.value = textArea.value.substring(0, 280);
  }
};
const entry = computed(() => ({
  body: body.value,
  emoji: emoji.value,
  createdAt: new Date(),
  userId: 1,
  id: Math.random(),
}));
const submitForm = () => {
  emit("@create", entry.value);
  resetForm();
};
function resetForm() {
  body.value = "";
  emoji.value = null;
}
</script>
<template>
  <form class="entry-form" @submit.prevent="submitForm">
    <textarea
      ref="textArea"
      v-model="body"
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
