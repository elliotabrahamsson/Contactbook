<template>
  <div class="w-fit mx-auto grid grid-cols-1 gap-4">
    <h1 class="mx-1 text-white text-7xl text-center">Kontaktbok</h1>

    <input
      id="firstName"
      placeholder="Förnamn"
      type="text"
      v-model="firstname"
      class="rounded"
    />
    <input
      id="lastName"
      placeholder="Efternamn"
      type="text"
      v-model="lastname"
      class="rounded"
    />
    <input
      id="phone"
      placeholder="Telefonnummer"
      v-model="number"
      type="tel"
      class="rounded"
    />
    <input
      type="text"
      id="email"
      placeholder="Email"
      v-model="email"
      class="rounded"
    />

    <ContactButton @click="addContact()" buttonText="Skapa kontakt" />
    <ContactButton
      @click="getContact()"
      class="rounded text-white bg-oceanBlue shadow-lg shadow-OceanBlue"
      buttonText="Visa alla kontakter"
    >
    </ContactButton>

    <ContactComponent
      :contact="contact"
      :deleteFunction="removeContact"
      v-for="contact in contacts"
    />
  </div>
</template>

<script>
import ContactComponent from "../components/ContactComponent.vue";
import ContactButton from "../components/ContactButton.vue";
import axios from "axios";

export default {
  components: {
    ContactComponent,
    ContactButton,
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
      const view = this;
      axios
        .get("https://contactsserver.onrender.com/contact")
        .then((res) => res.data.contacts)
        .then((contacts) => (view.contacts = contacts));
    },
    addContact() {
      const view = this;
      let contact = {
        name: `${this.firstname} ${this.lastname}`,
        phone: this.number,
        email: this.email,
      };

      axios
        .post("https://contactsserver.onrender.com/contact")
        .then((res) => res.data.id)
        .then((id) => {
          contact.id = id;
          view.contacts.push(contact);
        });
    },
    removeContact(contact) {
      const index = this.contacts.indexOf(contact);
      if (index == -1) return;
      this.contacts.splice(index, 1);
    },
  },
};
</script>
