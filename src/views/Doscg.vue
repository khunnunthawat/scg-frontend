<template>
  <div id="doscg">
    <div class="row">
      <div class="col">
        <div class="card">
          <h5 class="card-header">Router</h5>
          <div class="card-body">
            <p class="card-text">
              Display message
            </p>
            <button
              v-on:click="clickAlert('Router called : DOSCG')"
              class="btn btn-outline-success"
            >
              Click
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "doscg",
  methods: {
    clickAlert(message) {
      alert(message);
    }
  }
};
</script>

<style></style>
