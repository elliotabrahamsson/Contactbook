<script>
import ContactButton from "../components/ContactButton.vue";
import ContactInfo from "../components/ContactInfo.vue";
import axios from "axios";

export default {
  data() {
    return {
      firstname: null,
      lastname: null,
      tel: null,
      email: null,
      isEditing: false,
    };
  },
  components: {
    ContactButton,
    ContactInfo,
  },
  props: {
    contact: {
      type: Object,
      required: true,
    },
    deleteFunction: {
      type: Function,
      required: true,
    },
  },
  methods: {
    deleteContact() {
      axios
        .delete(
          `https://contactsserver.onrender.com/contact/${this.contact.id}`
        )
        .catch((err) => {
          const message = err?.response?.data?.message;
          if (!message) return;
          alert(err.response.data.message);
        });

      this.deleteFunction(this.contact);
    },
    changeContact() {
      this.stopEditing();

      const newName = `${this.firstname} ${this.lastname}`;

      const change = {};
      if (newName != this.contact.name) change.name = newName;
      if (this.tel != this.contact.phone) change.phone = this.tel;
      if (this.email != this.contact.email) change.email = this.email;
      if (Object.keys(change).length == 0) return;
      Object.assign(this.contact, change);

      axios
        .patch(
          `https://contactsserver.onrender.com/contact/${this.contact.id}`,
          change
        )
        .catch((err) => {
          const message = err?.response?.data?.message;
          if (!message) return;
          alert(err.response.data.message);
        });
    },
    edit() {
      this.isEditing = true;
    },
    stopEditing() {
      this.isEditing = false;
    },
  },
  mounted() {
    const contact = this.$props.contact;
    const split = contact.name.split(" ");
    this.firstname = split[0];
    this.lastname = split[split.length - 1];
    this.tel = contact.phone;
    this.email = contact.email;
  },
};
</script>

<template>
  <div
    class="fixed top-0 left-0 h-screen w-screen flex items-center"
    v-show="isEditing"
  >
    <div
      class="mx-auto z-10 border-2 border-slate-200 rounded p-4 flex flex-col space-y-4 bg-slate-200"
    >
      <p class="text-center">Redigerar: {{ contact?.name }}</p>
      <input
        placeholder="Förnamn"
        type="text"
        v-model="firstname"
        class="rounded"
      />
      <input
        placeholder="Efternamn"
        type="text"
        v-model="lastname"
        class="rounded"
      />
      <input
        placeholder="Telefonnummer"
        v-model="tel"
        type="tel"
        class="rounded"
      />
      <input type="text" placeholder="Email" v-model="email" class="rounded" />
      <ContactButton @click="changeContact" buttonText="Spara" />
    </div>
    <div
      class="fixed h-full w-full bg-black opacity-20"
      @click="stopEditing"
    ></div>
  </div>

  <div class="text-center bg-white rounded-lg p-2">
    <p class="font-bold mt-2">
      {{ contact.name }}
    </p>
    <p class="mt-2">
      {{ contact.phone }}
    </p>
    <p class="mt-2">
      {{ contact.email }}
    </p>

    <ContactButton
      @click="deleteContact"
      buttonText="Ta bort"
      class="my-2 px-5 w-full"
    />
    <ContactButton @click="edit" buttonText="Ändra" class="my-2 px-5 w-full" />
  </div>
</template>
