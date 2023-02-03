<template class="background">
  <div class="w-fit mx-auto grid grid-cols-1 gap-4">
    <h1 class="mx-1">Contactbook</h1>

    <input
      id="firstName"
      placeholder="Förnamn:"
      type="text"
      v-model="firstname"
      class="rounded"
    />
    <input
      id="lastName"
      placeholder="Efternamn:"
      type="text"
      v-model="lastname"
      class="rounded"
    />
    <input
      id="phone"
      placeholder="Telefonnummer:"
      v-model="number"
      type="text"
      class="rounded"
    />
    <input
      type="text"
      id="email"
      placeholder="Email:"
      v-model="email"
      class="rounded"
    />
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
      class="rounded text-slate-200 bg-[#05768E] shadow-lg shadow-[#05768E] mb-3"
    >
      Visa alla kontakter
    </button>
  </div>

  <div
    id="contactsDiv"
    class="text-center rounded border-2 border-[#05768E] w-96 ml-auto mr-auto mt-2 mb-2"
    v-for="contact in contacts"
  >
    <p class="font-bold mt-2">
      {{ contact.name }}
    </p>
    <p class="mt-2">
      {{ contact.phone }}
    </p>
    <p class="mt-2">
      {{ contact.email }}
    </p>
    <button
      @click="delContact()"
      class="rounded text-slate-200 bg-[#05768E] shadow-lg shadow-[#05768E] mt-2"
    >
      Ta bort
    </button>
    <button
      @click="changeContact()"
      class="rounded text-slate-200 bg-[#05768E] shadow-lg shadow-[#05768E] ml-2 mb-3"
    >
      Ändra
    </button>
  </div>
</template>

<script setup></script>

<script>
export default {
  data() {
    return {
      contacts: [],
      firstname: "",
      lastname: "",
      number: "",
      email: "",
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
      const XHR = new XMLHttpRequest();
      let contact = {
        name: `${this.firstname} ${this.lastname}`,
        phone: this.number,
        email: this.email,
      };

      const that = this;
      XHR.onload = function () {
        contact.id = JSON.parse(this.responseText).id;
        that.contacts.push(contact);
      };

      XHR.open("POST", "https://contactsserver.onrender.com/contact");
      XHR.setRequestHeader("Content-type", "application/json");
      XHR.send(JSON.stringify(contact));
    },
  },
};
</script>
