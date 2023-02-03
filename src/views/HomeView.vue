<template class="background">
  <div class="w-fit mx-auto grid grid-cols-1 gap-4">
    <h1 class="mx-1">Contactbook</h1>

    <input id="firstName" placeholder="Förnamn:" type="text" class=" " />
    <input id="lastName" placeholder="Efternamn:" type="text" class=" " />
    <input id="phone" placeholder="Telefonnummer:" type="text" class=" " />
    <input type="text" id="email" placeholder="Email:" class=" " />
    <button
      id="add"
      @click="addContact()"
      class="rounded, bg-cyan-500 shadow-lg shadow-cyan-500/50"
    >
      Lägg till
    </button>
    <button
      id="showAll"
      @click="getContact()"
      class="rounded, bg-cyan-500 shadow-lg shadow-cyan-500/50"
    >
      Visa alla kontakter
    </button>
  </div>

  <div id="contactsDiv" class="" v-for="contact in contacts">
    {{ contact.name }}
  </div>
</template>

<script setup></script>

<script>
export default {
  data() {
    return {
      contacts: [],
    };
  },
  methods: {
    getContact() {
      const XHR = new XMLHttpRequest();
      const view = this;
      XHR.onload = function () {
        view.contacts = JSON.parse(this.responseText).contacts;
      };
      XHR.open("GET", "https://contactsserver.onrender.com/contacts");
      XHR.send();
    },
    addContact() {
      console.log("added");
    },
  },
};
</script>
