<template class="background">
  <div class=" w-fit mx-auto grid grid-cols-1 gap-4">
    <h1 class=" mx-1">Contactbook</h1>

    <input id="firstName" placeholder="Förnamn:" type="text" class=" " />
    <input id="lastName" placeholder="Efternamn:" type="text" class=" " />
    <input type="text" id="email" placeholder="Email:" class=" " />
    <button id="add" v-on:click="addContact()">Lägg till</button>
    <button id="showAll" v-on:click="showContacts()">
      Visa alla kontakter
    </button>
  </div>

  <div class="hidden"></div>
</template>

<script setup></script>
