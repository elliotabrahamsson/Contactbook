<script>
import ContactButton from "../components/ContactButton.vue";
import ContactInfo from "../components/ContactInfo.vue";

export default {
  props: {
    contact: Object,
  },
};
</script>

<template>
  <ContactInfo :name="contact" />

  <ContactButton @click="delContact(contact._id)" buttonText="Ta bort" />
  <ContactButton @click="changeContact(contact._id)" buttonText="Ändra" />
</template>
