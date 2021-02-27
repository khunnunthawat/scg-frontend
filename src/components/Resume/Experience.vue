<template>
  <!-- Experience -->
  <div class="head_box_right">
    <div class="row">
      <div class="col-1">
        <div class="icon_box_right">
          <img src="../../assets/icons/iconfinder_walking_309003.svg" alt="" />
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
            <h3 class="time-box-under">
              |
            </h3>
            <h3 class="time-box-under">
              |
            </h3>
          </div>
        </div>
        <div class="col-10">
          <div class="infor-text">
            <h3>Trainee : {{ text1 }}</h3>
            <h3>Position : {{ text2 }}</h3>
            <h3>Long term : {{ text3 }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Outsource />
</template>

<script>
import Outsource from "../Resume/Outsource.vue";
export default {
  name: "Experience",
  data() {
    return {
      header: "Experience",
      text1: "Chill Media Company Limited",
      text2: "Photographer and video",
      text3: "3 months"
    };
  },
  components: {
    Outsource
  }
};
</script>

<style></style>
