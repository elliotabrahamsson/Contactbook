<template>
  <button
    type="button"
    class="rounded text-slate-200 bg-[#05768E] shadow-lg shadow-[#05768E] ml-2 mb-3"
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
