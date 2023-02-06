<script>
import ContactButton from "@/components/ContactButton.vue";
import ContactInfo from "@/components/ContactInfo.vue";
</script>

<template>
  <div
    class="text-center rounded border-2 border-oceanBlue w-96 ml-auto mr-auto mt-2 mb-2"
    v-for="contact in contacts"
  >
    <ContactInfo />

    <ContactButton @click="delContact(contact._id)"> Ta bort </ContactButton>
    <ContactButton @click="changeContact(contact._id)"> Ändra </ContactButton>
  </div>
</template>
