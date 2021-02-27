<template>
  <!-- Name -->
  <div class="head">
    <h1>{{ fullname }}</h1>
    <h2>ICT & WEB DESIGNER</h2>
    <h4 class="line_box"></h4>
  </div>
  <!-- Object -->
  <div class="obj">
    <h2>{{ header }}</h2>
  </div>
  <!-- Title -->
  <div class="info_title">
    <h2>
      Looking for a position in the Frontend Developer. <br />
      Current language : html/css, vue.js, javascript, json, restful api
    </h2>
  </div>
</template>

<script>
export default {
  name: "Inforight",
  data() {
    return {
      header: "OBJECTIVE",
      fullname: "NUNTHAWAT RAKYARD",
      firstname: "Nunthawat",
      lastname: "Rakyard"
    };
  }
};
</script>

<style></style>
