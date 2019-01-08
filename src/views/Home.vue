<template>
  <div class="home">
    <img alt="LinuxShelf logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to LinuxShelf" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
