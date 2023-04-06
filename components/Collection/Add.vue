<template>
  <div
    v-if="!uid"
    class="flex flex-row items-center h-16 bg-white w-full px-4 bottom-0"
  >
    <div class="flex-grow ml-4">
      <div class="relative w-full">
        <input
          id="noteInput"
          v-model="textInput"
          type="text"
          class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
        />
        <button
          class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="ml-4">
      <button
        class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
        @click="add"
      >
        <span class="ml-2">
          <svg
            class="w-4 h-4 transform rotate-45 -mt-px"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </span>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, toRefs } from 'vue'


interface NoteProps {
  entity_id: number
  project_id: number
  note: string
  entity: string
}
const props = defineProps<NoteProps>()
//const { uid, open, note } = toRefs(props)
const textInput = ref('')


const emit = defineEmits(['add'])
async function add() {
  const postoptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1IjoiOGNmYTQ3MGM5ZmYyNGUyZjk4OTQxOGQ1MWJjYmFlOTkiLCJkIjoiMTY4MDA5OCIsInIiOiJzYSIsInAiOiJmcmVlIiwiYSI6ImZpbmRlci5pbyIsImwiOiJ1czEiLCJleHAiOjE2ODMyOTA5MDJ9.RCYZfrnk9QnGZoRnAZf6pWjnnABhBdC6enxT7smdiFw`,
    },
    body: {
      entity_id: "1363",
      project_id: "1",
      note: textInput.value,
      entity: "CONTACTS",
    },
  };
  const data = await useAuthLazyFetchPost(
    "https://v1-orm-lib.mars.hipso.cc/notes/CONTACTS/1363",
    postoptions
  );
  emit('add',data.data._rawValue)
  textInput.value =''
  
}

</script>