<template>
  <button
    type="button"
    class="rounded text-white bg-oceanBlue hover:bg-hoverBlue p-2 mx-2 my-2"
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
