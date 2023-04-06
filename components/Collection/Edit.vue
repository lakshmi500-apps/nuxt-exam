<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>


      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
            >
              <form>
                <div>
                  <label
                    for="name"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Note</label
                  >
                  <div class="relative mt-2">
                    <input
                      v-model="prefilledNote"
                      type="text"
                      name="name"
                      id="name"
                      class="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                    <div
                      class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <button
                    @click="edit"
                    type="button"
                    class="float-right inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    submit
                  </button>
                </div>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>


<script setup>
import { ref, defineProps, defineEmits } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/24/outline";


const open = ref(true);
const props = defineProps({
  filled_note: {
    type: String,
    default: "",
  },
  uid: {
    type: String,
    default: "",
  },
});
const prefilledNote = ref("");
const emit = defineEmits(["update"]);
prefilledNote.value = props.filled_note;
async function edit() {
  const putOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1IjoiOGNmYTQ3MGM5ZmYyNGUyZjk4OTQxOGQ1MWJjYmFlOTkiLCJkIjoiMTY4MDA5OCIsInIiOiJzYSIsInAiOiJmcmVlIiwiYSI6ImZpbmRlci5pbyIsImwiOiJ1czEiLCJleHAiOjE2ODMyOTA5MDJ9.RCYZfrnk9QnGZoRnAZf6pWjnnABhBdC6enxT7smdiFw`,
    },
    body: JSON.stringify({
      entity_id: "1363",
      project_id: "1",
      note: prefilledNote.value,
      entity: "CONTACTS",
      uid: props.uid,
    }),
  };


  const data = await useAuthLazyFetchPut(
    `https://v1-orm-lib.mars.hipso.cc/notes/${props.uid}`,
    putOptions
  );
  emit("update",data);
}
</script>