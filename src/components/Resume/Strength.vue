<template>
  <div class="head_box_left">
    <div class="row">
      <div class="col-2">
        <div class="icon_box_left">
          <img
            src="../../assets/icons/iconfinder_icon-social-buffer_211894.svg"
            alt=""
          />
        </div>
      </div>
      <div class="col-10">
        <div class="bg_box_left">
          <h2>{{ header }}</h2>
        </div>
      </div>
    </div>
  </div>
  <!-- Info List -->
  <div class="info_list_left">
    <div class="list_item">
      <div class="row">
        <div class="col-2">
          <div class="icon_box_left">
            <img
              src="../../assets/icons/iconfinder_icon-social-github_211904.svg"
              alt=""
            />
          </div>
        </div>
        <div class="col-8">
          <div class="text_list">
            <h3>{{ title1 }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="list_item">
      <div class="row">
        <div class="col-2">
          <div class="icon_box_left">
            <img
              src="../../assets/icons/iconfinder_walking_309003.svg"
              alt=""
            />
          </div>
        </div>
        <div class="col-8">
          <div class="text_list">
            <h3>{{ title2 }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="list_item">
      <div class="row">
        <div class="col-2">
          <div class="icon_box_left">
            <img
              src="../../assets/icons/iconfinder_iconoteka_clock.svg"
              alt=""
            />
          </div>
        </div>
        <div class="col-8">
          <div class="text_list">
            <h3>{{ title3 }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Strength",
  data() {
    return {
      header: "Strength",
      title1: "1.Work well in team.",
      title2: "2.Work well in under pressure.",
      title3: "3.​Flexible time for work."
    };
  }
};
</script>

<style></style>
