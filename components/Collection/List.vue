<template>
  <div>
    <button
      type="button"
      class="rounded-full bg-blue-600 p-3 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 fixed bottom-7 right-7"
      @click="open = true"
    >
      <!-- <PlusIcon class="h-9 w-9" aria-hidden="true" /> -->
      <IconCSS name="ep:plus" size="30"></IconCSS>
    </button>
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-10" @close="open = false">
        <div class="fixed inset-0" />
        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div
              class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full md:w-1/2"
            >
              <TransitionChild
                as="template"
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enter-from="translate-x-full"
                enter-to="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leave-from="translate-x-0"
                leave-to="translate-x-full"
              >
                <DialogPanel class="pointer-events-auto w-screen">
                  <div
                    class="flex h-full flex-col overflow-y-hidden bg-white py-6 shadow-xl"
                  >
                    <div class="px-4 sm:px-6">
                      <div class="flex items-start justify-between">
                        <DialogTitle
                          class="text-base font-semibold leading-6 text-gray-900"
                        >
                          Notes
                        </DialogTitle>
                        <div class="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:ring-offset-0"
                            @click="open = false"
                          >
                            <IconCSS
                              name="bx:x"
                              size="30"
                              class="block"
                            ></IconCSS>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="relative mt-6 flex-1 h-full bg-white">
                      <!-- notes sidebar start -->
                      <div
                        class="px-4 py-6 sm:px-6 h-[calc(100vh_-_150px)] overflow-y-auto"
                      >
                        <ul role="list" class="space-y-8">
                          <!-- Your content -->
                          <li v-for="(note, index) in notes" :key="index">
                            <div class="flex space-x-3 group">
                              <div class="flex-shrink-0">
                                <img
                                  class="h-10 w-10 rounded-full"
                                  :src="user.imageUrl"
                                  alt=""
                                />
                              </div>
                              <div class="flex-grow">
                                <div class="text-sm flex items-center">
                                  <a
                                    href="#"
                                    class="font-medium text-gray-900 mr-2"
                                  >
                                    {{ user.name }}
                                  </a>
                                  <div
                                    class="flex items-center invisible group-hover:visible text-gray-500"
                                  >
                                    <IconCSS
                                      name="iconoir:edit-pencil"
                                      size="20"
                                      class="mr-3 hover:text-blue-600"
                                      @click="edit(note)"
                                    >
                                    </IconCSS>
                                    <IconCSS
                                      name="bytesize:trash"
                                      size="16"
                                      class="hover:text-red-600"
                                      @click="deleteNote(note, index)"
                                    ></IconCSS>
                                  </div>
                                </div>
                                <div class="mt-1 text-sm text-gray-700">
                                  <p class="text-wrap">{{ note.note }}</p>
                                  <!-- <CollectionEdit
                                    v-if="editSelectedNote.includes(note.uid)"
                                    :uid="note.uid"
                                    :note="note.note"
                                    :open="true"
                                    @edit="edit()"
                                  /> -->
                                </div>
                                <div class="mt-2 space-x-2 text-sm">
                                  <span class="font-medium text-gray-500">
                                    {{ user.date }}
                                  </span>
                                  {{ "" }}
                                  <span class="font-medium text-gray-500">
                                    &middot;
                                  </span>
                                  {{ " " }}
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <CollectionAdd @add="add" />
                      <!-- notes sidebar ends -->
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

import { ref } from "vue";

const open = ref(false);
const getData = await useAuthLazyFetch(
  "https://v1-orm-lib.mars.hipso.cc/notes/entity/CONTACTS/1363?limit=100&offset=0&project_id=1&sort_column=id&sort_direction=desc"
);
const user = {
  name: "sailakshmi",
  email: "whitney@example.com",
    imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
};
const notes = ref(getData.data.value);
const add = (data) => {
  notes.value.unshift(data);
};
const deleteNote= async (data, index) => {
  await useAuthLazyFetchDelete(
    `https://v1-orm-lib.mars.hipso.cc/notes/3fa85f64-5717-4562-b3fc-2c963f66afa6`
  );
  notes.value.splice(index, 1);
};
 const editNote=(data)=>{
    console.log("data",data)
  
 };
</script>
