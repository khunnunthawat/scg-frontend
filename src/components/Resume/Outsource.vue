<template>
  <!-- Info List -->
  <div class="info_list_right">
    <div class="list_text">
      <div class="row">
        <div class="col-2">
          <div class="time_line">
            <div class="time-box">
              <h3>2563</h3>
            </div>
            <h3 class="time-box-under">|</h3>
            <h3 class="time-box-under">|</h3>
          </div>
        </div>
        <div class="col-10">
          <div class="infor-text">
            <h3>Outsource Project : {{ text1 }}</h3>
            <h3 style="width: 615px">Position : {{ text2 }}</h3>
            <h3>Long term : {{ text3 }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Outsource",
  data() {
    return {
      text1: "Frontend and Backend",
      text2: "Website programming tasks (C#, Javascript, html/css)",
      text3: "3 months"
    };
  }
};
</script>

<style></style>
