<template>
  <div class="about">
    <Navbar />
    <h1>This is an about page</h1>
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "about",
  components: {
    Navbar
  }
};
</script>
