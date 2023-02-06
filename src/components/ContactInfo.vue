<template>
  <div
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
      @click="delContact(contact._id)"
      class="rounded text-slate-200 bg-[#05768E] shadow-lg shadow-[#05768E] mt-2"
    >
      Ta bort
    </button>
    <button
      @click="changeContact(contact._id)"
      class="rounded text-slate-200 bg-[#05768E] shadow-lg shadow-[#05768E] ml-2 mb-3"
    >
      Ändra
    </button>
  </div>
</template>

<script></script>
