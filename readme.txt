
Bootstrap

npm install bootstrap
https://getbootstrap.com/docs/4.6/getting-started/introduction/

npm install bootstrap-vue
https://bootstrap-vue.org/docs

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Scss
import "@/scss/custom.scss";

npm install -g jshint

Moment.js
npm i moment
https://www.npmjs.com/package/moment

axios
npm i axios
https://www.npmjs.com/package/axios



Apis
<template>
  <div id="apis">
    <h3>API</h3>
    <p>{{ exapi }}</p>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "apis",
  data() {
    return {
      exapi: null
    };
  },
  mounted() {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then(
      response => (this.exapi = response)
    );
  }
};
</script>

<style></style>

npm init -y
npm add express body-parser formidable fs-extra cors
node server.js > test print.output > console.log("NUNTHAWAT");

sudo npm install -g nodemon
npm install --save-dev nodemon