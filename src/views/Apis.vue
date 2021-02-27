<template>
  <div id="apis">
    <h3>API</h3>
    <!-- <p>{{ exapi }}</p> -->
    <div class="row">
      <div v-for="(index, key) in index" :key="key" class="col-lg-3 col-md-6">
        <div class="card card_product">
          <img v-bind:src="index.imgUrl" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ index.title }}</h5>
            <h6 class="card-text">
              {{ index.price }}
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "apis",
  data() {
    return {
      index: []
      // exapi: null,
    };
  },
  mounted() {
    console.log("Product is run");
    Axios.get("https://api.jsonbin.io/b/603a8be00866664b1084a098").then(
      result => {
        console.log(JSON.stringify(result.data));
        this.index = result.data;
      }
    );
  }
  // mounted() {
  //   console.log("Product is run");
  //   Axios.get("http://localhost:4000/product").then(result => {
  //     console.log(JSON.stringify(result.data));
  //     this.index = result.data;
  //   });
  // }
  // mounted() {
  //   Axios.get("https://jsonplaceholder.typicode.com/posts").then(
  //     (response) => (this.exapi = response)
  //   );
  // }
};
</script>

<style scoped lang="scss"></style>
