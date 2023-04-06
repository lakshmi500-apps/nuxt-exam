<template>
  <div>
    <input type="text" @click="edit"/>
  </div>
</template>
<script setup lang="ts">
async function edit() {
 const putOption ={
  method: "PUT",

    },
}
 const data = await useAuthLazyFetchPost(
    "https://v1-orm-lib.mars.hipso.cc/notes/f8515cd4-1974-43fa-af7a-0bb40ad66313",
    putOptions
  );

</script>

