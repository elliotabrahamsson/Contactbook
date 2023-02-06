<template>
  <button
    type="button"
    class="rounded text-white bg-oceanBlue shadow-lg shadow-oceanBlue ml-2 mb-3"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: {
    buttonText: String,
  },
};
</script>
