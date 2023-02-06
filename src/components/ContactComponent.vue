<script>
import ContactButton from "../components/ContactButton.vue";
import ContactInfo from "../components/ContactInfo.vue";

export default {
  components: {
    ContactButton,
    ContactInfo,
  },
  props: {
    contact: Object,
  },
};
</script>

<template>
  <ContactInfo
    :name="contact.name"
    :phone="contact.phone"
    :email="contact.email"
  />

  <ContactButton @click="delContact(contact.id)" buttonText="Ta bort" />
  <ContactButton @click="changeContact(contact.id)" buttonText="Ändra" />
</template>
