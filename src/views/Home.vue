<template>
  <div class="home">
    <Navbar />
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>Home component</h2>    
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "home",
  components: {
    Navbar
  }
};
</script>
