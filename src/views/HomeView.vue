<template class="background">
  <div class="w-fit mx-auto grid grid-cols-1 gap-4">
    <h1 class="mx-1">Contactbook</h1>

    <input id="firstName" placeholder="Förnamn:" type="text" class=" " />
    <input id="lastName" placeholder="Efternamn:" type="text" class=" " />
    <input type="text" id="email" placeholder="Email:" class=" " />
    <button id="add" v-on:click="addContact()">Lägg till</button>
    <button id="showAll" @click="getContact()">Visa alla kontakter</button>
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

      XHR.onload = () => {
        console.log(res.body);
        this.contacts = res.body.contacts;
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
