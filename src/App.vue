<template>
  <div id="app">
    <Header />
    <Body />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/layouts/Header.vue";
import Body from "@/components/layouts/Body.vue";
import Footer from "@/components/layouts/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Body,
    Footer
  }
};
</script>

<style lang="scss"></style>
