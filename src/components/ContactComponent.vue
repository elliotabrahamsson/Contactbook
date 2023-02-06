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
  <div class="text-center bg-white rounded-lg p-2">
    <ContactInfo
      :name="contact.name"
      :phone="contact.phone"
      :email="contact.email"
    />

    <ContactButton
      @click="delContact(contact.id)"
      buttonText="Ta bort"
      class="my-2 px-5 w-full"
    />
    <ContactButton
      @click="changeContact(contact.id)"
      buttonText="Ändra"
      class="my-2 px-5 w-full"
    />
  </div>
</template>
