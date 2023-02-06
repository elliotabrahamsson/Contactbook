<template>
  <div
    class="text-center rounded border-2 border-oceanBlue w-96 ml-auto mr-auto mt-2 mb-2"
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
      @click="delContact(contact._id)"
      class="rounded text-white bg-oceanBlue shadow-lg shadow-oceanBlue mt-2"
    >
      Ta bort
    </button>
    <button
      @click="changeContact(contact._id)"
      class="rounded text-white bg-oceanBlue shadow-lg shadow-oceanBlue ml-2 mb-3"
    >
      Ändra
    </button>
  </div>
</template>

<script></script>
