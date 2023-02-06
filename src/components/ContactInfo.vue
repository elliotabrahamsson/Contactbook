<template>
  <p class="font-bold mt-2">
    {{ name }}
  </p>
  <p class="mt-2">
    {{ phone }}
  </p>
  <p class="mt-2">
    {{ email }}
  </p>
</template>

<script>
export default {
  props: {
    name: String,
    phone: String,
    email: String,
  },
};
</script>
