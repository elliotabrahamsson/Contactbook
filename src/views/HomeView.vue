<template>
  <div class="w-fit mx-auto grid grid-cols-1 gap-4">
    <h1 class="mx-1 text-white text-7xl text-center">Kontaktbok</h1>

    <input
      placeholder="Förnamn"
      type="text"
      v-model="firstname"
      class="rounded p-1"
    />
    <input
      placeholder="Efternamn"
      type="text"
      v-model="lastname"
      class="rounded p-1"
    />
    <input
      placeholder="Telefonnummer"
      type="tel"
      v-model="number"
      class="rounded p-1"
    />
    <input
      placeholder="Email"
      type="email"
      v-model="email"
      class="rounded p-1"
    />

    <ContactButton @click="addContact()" buttonText="Skapa kontakt" />
    <ContactButton
      @click="getContact()"
      class="rounded text-white bg-oceanBlue"
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
    ValidateEmail() {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        return true;
      }
      alert("You have entered an invalid email address!");
      return false;
    },
    ValidateNumber() {
      if (
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
          this.number
        )
      ) {
        return true;
      }
      alert("You have entered an invalid phone number!");
      return false;
    },

    addContact() {
      this.ValidateEmail();
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
  mounted() {
    this.getContact();
  },
};
</script>
