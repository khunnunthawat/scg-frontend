<template>
  <div id="compom">
    <!-- <h3>components</h3> -->
    <h3>{{ firstname }}</h3>
    <h3>{{ lastname }}</h3>
    <h3>{{ fullname }}</h3>
    <ShowPhoto />
  </div>
</template>

<script>
import ShowPhoto from "@/components/ShowPhoto.vue";
export default {
  name: "compon",
  components: {
    ShowPhoto
  },
  data() {
    return {
      firstname: "Nunthawat",
      lastname: "Rakyard"
    };
  },
  computed: {
    fullname() {
      return this.firstname + " " + this.lastname;
    }
  }
};
</script>

<style></style>
