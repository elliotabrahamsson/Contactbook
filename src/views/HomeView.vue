<template>
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

    <div
      class="text-center rounded border-2 border-[#05768E] w-96 ml-auto mr-auto mt-2 mb-2"
      v-for="contact in contacts"
    >
      <ContactComponent :contact="contact" />
    </div>
    <button
      @click="getContact()"
      class="rounded text-slate-200 bg-[#05768E] shadow-lg shadow-[#05768E] mb-3"
    >
      Visa alla kontakter
    </button>
  </div>
</template>

<script>
import ContactComponent from "../components/ContactComponent.vue";

export default {
  components: {
    ContactComponent,
  },
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
        if (this.status == 201) {
          contact.id = JSON.parse(this.responseText).id;
          that.contacts.push(contact);
        }
      };

      XHR.open("POST", "https://contactsserver.onrender.com/contact");
      XHR.setRequestHeader("Content-type", "application/json");
      XHR.send(JSON.stringify(contact));
    },
    delContact(contactId) {
      const XHR = new XMLHttpRequest();

      XHR.onload = function () {
        if (this.status == 200) {
          console.log(`Deleted contact with id: ${contactId} `);
        }
      };

      XHR.open(
        "DELETE",
        `https://contactsserver.onrender.com/contact/${contactId}`
      );
      XHR.send();
    },
    changeContact(contactId) {
      const XHR = new XMLHttpRequest();

      XHR.onload = function () {};

      XHR.open(
        "PATCH",
        `https://contactsserver.onrender.com/contact/${contactId}`
      );
      XHR.send();
    },
  },
};
</script>
