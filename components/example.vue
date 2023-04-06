<template>
  <div>
    {{notes}}...........
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
                          Panel title
                        </DialogTitle>
                        <div class="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:ring-offset-0"
                            @click="open = false"
                          >
                            <span class="sr-only">Close panel</span>
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
                          <li v-for="note in notes" :key="note.uid">
                            <div class="flex space-x-3 group">
                              <div class="flex-shrink-0">
                                <img
                                  class="h-10 w-10 rounded-full"
                                  :src="`https://images.unsplash.com/photo-${note.imageId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`"
                                  alt=""
                                />
                              </div>
                              <div class="flex-grow">
                                <div class="text-sm flex items-center">
                                  <a
                                    href="#"
                                    class="font-medium text-gray-900 mr-2"
                                  >
                                    {{ note.name }}
                                  </a>
                                  <div
                                    class="flex items-center invisible group-hover:visible text-gray-500"
                                  >
                                    <!-- <PencilSquareIcon class="h-4 w-4 mr-3 hover:text-blue-600" /> -->
                                    <IconCSS
                                      name="iconoir:edit-pencil"
                                      size="20"
                                      class="mr-3 hover:text-blue-600"
                                    ></IconCSS>


                                    <!-- <TrashIcon class="h-4 w-4 hover:text-red-600" /> -->
                                    <IconCSS
                                      name="bytesize:trash"
                                      size="16"
                                      class="hover:text-red-600"
                                    ></IconCSS>
                                  </div>
                                </div>
                                <div class="mt-1 text-sm text-gray-700">
                                  <p class="text-wrap">{{ note.body }}</p>
                                </div>
                                <div class="mt-2 space-x-2 text-sm">
                                  <span class="font-medium text-gray-500">
                                    {{ note.date }}
                                  </span>
                                  {{ '' }}
                                  <span class="font-medium text-gray-500">
                                    &middot;
                                  </span>
                                  {{ ' ' }}
                                  <button
                                    type="button"
                                    class="font-medium text-gray-900"
                                  >
                                    Reply
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <CollectionAdd  />
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
} from '@headlessui/vue'
//import NotesData from '~/assets/css/data/NotesData.json'

import {ref} from "vue"
const open = ref(false)
const notes = [
  {
    uid: 1,
    name: 'Leslie Alexander',
    date: '4d ago',
    imageId: '1494790108377-be9c29b29330',
    body:
      'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.',
  },
  {
    uid: 2,
    name: 'Michael Foster',
    date: '4d ago',
    imageId: '1519244703995-f4e0f30006d5',
    body:
      'Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.',
  },
  {
    uid: 3,
    name: 'Dries Vincent',
    date: '4d ago',
    imageId: '1506794778202-cad84cf45f1d',
    body:
      'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.',
  },
  {
    uid: 4,
    name: 'Dries Vincent',
    date: '4d ago',
    imageId: '1506794778202-cad84cf45f1d',
    body:
      'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.',
  },
  {
    uid: 5,
    name: 'Dries Vincent',
    date: '4d ago',
    imageId: '1506794778202-cad84cf45f1d',
    body:
      'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.',
  },
  {
    uid: 6,
    name: 'Dries Vincent',
    date: '4d ago',
    imageId: '1506794778202-cad84cf45f1d',
    body:
      'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.',
  },
  {
    uid: 7,
    name: 'Dries Vincent',
    date: '4d ago',
    imageId: '1506794778202-cad84cf45f1d',
    body:
      'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.',
  },
  {
    uid: 8,
    name: 'Dries Vincent',
    date: '4d ago',
    imageId: '1506794778202-cad84cf45f1d',
    body:
      'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.',
  },
  {
    uid: 9,
    name: 'Dries Vincent',
    date: '4d ago',
    imageId: '1506794778202-cad84cf45f1d',
    body:
      'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.',
  },
]
let offset = 0
const limit = 100
const link = (offset = 0, limit = 100) => {
  return `https://v1-others-test.mercury.infinity-api.net/api/root/users?offset=${offset}&limit=${limit}`
}


//const { pending, data: users } = useAuthLazyFetch(link(), { server: false })


// Add - add to database and add to notes
const add = (note: Object) => {
  console.log('adddddddddddddddddddddd')
  // Add the new note to the notes array
  // notes.push({ uid: 10, body: note })
  // showAddEditNote.value = false
  // currentNote.value = null
}
</script>