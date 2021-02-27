<template>
  <!-- <h1>Edcuation</h1> -->
  <div class="head_box_right">
    <div class="row">
      <div class="col-1">
        <div class="icon_box_right">
          <img
            src="../../assets/icons/iconfinder_icon-ios7-contact-outline_211731.svg"
            alt=""
          />
        </div>
      </div>
      <div class="col-11">
        <div class="bg_box_right">
          <h2>{{ header }}</h2>
        </div>
      </div>
    </div>
  </div>
  <!-- Info List -->
  <div class="info_list_right">
    <div class="list_text">
      <div class="row">
        <div class="col-2">
          <div class="time_line">
            <div class="time-box">
              <h3>2559</h3>
            </div>
            <h3 style="text-align: -webkit-right; text-align-last: right">
              2562
            </h3>
          </div>
        </div>
        <div class="col-10">
          <div class="infor-text">
            <h3>{{ su }}</h3>
            <h3>
              Faculty of Information and Communication Technology <br />
              Business Information Technology
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Education",
  data() {
    return {
      header: "Education",
      su: "Silpakorn University"
    };
  }
};
</script>

<style></style>
