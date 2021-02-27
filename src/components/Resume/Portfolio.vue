<template>
  <!-- Portfolio -->
  <div class="head_box_right">
    <div class="row">
      <div class="col-1">
        <div class="icon_box_right">
          <img src="../../assets/icons/iconfinder_settings_309079.svg" alt="" />
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
              <h3>Now</h3>
            </div>
            <h3 class="time-box-under">|</h3>
          </div>
        </div>
        <div class="col-10">
          <div class="infor-text">
            <h3>
              Portfolio :
              <a href="https://github.com/khunnunthawat">{{ text1 }}</a>
            </h3>
            <h3 style="margin-left: 95px">
              <a href="https://www.behance.net/khunnunthawat">{{ behance }}</a>
            </h3>
            <h3 style="margin-left: 95px">{{ text2 }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      header: "Portfolio",
      text1: "github.com/khunnunthawat",
      text2: "Web design and ui / ux design",
      behance: "behance.net/khunnunthawat"
    };
  }
};
</script>

<style></style>
