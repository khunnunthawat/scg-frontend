<template>
  <div class="welcome">
    <div class="jumbotron">
      <h1>WEB (front-end)</h1>
      <p>Vue.JS V3 & Bootstrap V4</p>
      <!-- class="btn btn-lg btn-danger" -->
      <div class="row">
        <div class="col col-sm-2">
          <router-link class="btn btn-lg btn-primary" to="/doscg"
            >router</router-link
          >
        </div>
        <div class="col col-sm-2">
          <router-link class="btn btn-lg btn-primary" to="/bcss">
            css</router-link
          >
        </div>
        <div class="col col-sm-4">
          <router-link class="btn btn-lg btn-primary" to="/compon"
            >components</router-link
          >
        </div>
        <div class="col col-sm-2">
          <router-link class="btn btn-lg btn-primary" to="/apis"
            >api</router-link
          >
        </div>
        <div class="col col-sm-2">
          <router-link class="btn btn-lg btn-primary" to="/resume"
            >cv</router-link
          >
        </div>
        <router-view class="container" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "welcome"
};
</script>

<style scoped lang="scss"></style>
