<template class="background">
  <div class="w-fit mx-auto grid grid-cols-1 gap-4">
    <h1 class="mx-1">Contactbook</h1>

    <input id="firstName" placeholder="Förnamn:" type="text" class="rounded" />
    <input id="lastName" placeholder="Efternamn:" type="text" class="rounded" />
    <input
      id="phone"
      placeholder="Telefonnummer:"
      type="text"
      class="rounded"
    />
    <input type="text" id="email" placeholder="Email:" class="rounded" />
    <button
      id="add"
      @click="addContact()"
      class="rounded text-slate-200 bg-[#05768E] shadow-lg shadow-[#05768E]"
    >
      Lägg till
    </button>
    <button
      id="showAll"
      @click="getContact()"
      class="rounded text-slate-200 bg-[#05768E] shadow-lg shadow-[#05768E]"
    >
      Visa alla kontakter
    </button>
  </div>

  <div id="contactsDiv" class="" v-for="contact in contacts">
    <p class="font-bold">{{ contact.name }}</p>
    <p>{{ contact.phone }}</p>
    <p>{{ contact.email }}</p>
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
