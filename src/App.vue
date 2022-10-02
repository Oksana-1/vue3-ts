<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import EntryEditor from "./components/EntryEditor.vue";
import EntryCard from "@/components/EntryCard.vue";
import { reactive } from "vue";
import type User from "@/types/User";
import type Entry from "./types/Entry";

const user: User = reactive({
  id: 1,
  username: "oksana1",
  settings: [],
});
const entries: Entry[] = reactive([]);
console.log(user);
const createHandler = (entry: Entry) => {
  entries.unshift(entry);
};
</script>

<template>
  <main class="container m-auto p-10">
    <TheHeader />
    <EntryEditor @@create="createHandler" />
    <ul>
      <li v-for="entryItem in entries" :key="entryItem.id">
        <EntryCard :entry="entryItem" />
      </li>
    </ul>
  </main>
</template>
