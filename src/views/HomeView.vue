<template class="background">
  <div>
    <h1>Contactbook</h1>

    <input id="firstName" placeholder="Förnamn:" type="text" />
    <input id="lastName" placeholder="Efternamn:" type="text" />
    <input type="text" id="email" placeholder="Email:" />
    <button id="add" v-on:click="addContact()">Lägg till</button>
    <button id="showAll" v-on:click="showContacts()">
      Visa alla kontakter
    </button>
  </div>

  <div class="hidden"></div>
</template>

<script setup></script>
