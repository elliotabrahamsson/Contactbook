<template>
  <div class="w-fit mx-auto grid grid-cols-1 gap-4">
    <h1 class="mx-1">Contactbook</h1>

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

    <div
      class="text-center rounded border-2 border-oceanBlue p-4"
      v-for="contact in contacts"
    >
      <ContactComponent :contact="contact" />
    </div>
    <ContactButton @click="addContact()" buttonText="Skapa kontakt" />
    <ContactButton @click="getContact()" buttonText="Visa alla kontakter" />
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
    delContact(contactId) {
      axios
        .delete(`https://contactsserver.onrender.com/contact/${contactId}`)
        .then(() => {
          console.log(`Deleted contact with id: ${contactId}`);
        });
    },
    changeContact(contactId) {
      axios.patch(`https://contactsserver.onrender.com/contact/${contactId}`);
    },
  },
};
</script>
