<template class="background">
  <div>
    <h1>Contactbook</h1>

    <input id="firstName" placeholder="Förnamn:" type="text" />
    <input id="lastName" placeholder="Efternamn:" type="text" />
    <input type="text" id="email" placeholder="Email:" />
    <button id="add" v-on:click="addContact()">Lägg till</button>
    <button id="showAll" @click="getContact()">Visa alla kontakter</button>
  </div>

  <div id="contactsDiv" class=""></div>
</template>

<script setup></script>

<script>
export default {
  data() {
    return;
  },
  methods: {
    getContact() {
      console.log("hej");

      const XHR = new XMLHttpRequest();

      XHR.onload = () => {
        let contacts = res.body;
        let contactDiv = document.getElementById("contactsDiv");
        let contactList = document.createElement("ul");
        contactDiv.innerText = "";

        contacts.forEach((contact) => {
          let listElement = document.createElement("li");
          listElement.innerText = contact;
          contactList.appendChild(listElement);
          contactDiv.appendChild(contactList);
        });
      };
      XHR.open("GET", "https://contactsserver.onrender.com/contacts");
      XHR.send();
    },
  },
};
</script>
