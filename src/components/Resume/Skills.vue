<template>
  <!-- Skills -->
  <div class="head_box_right">
    <div class="row">
      <div class="col-1">
        <div class="icon_box_right">
          <img
            src="../../assets/icons/iconfinder_code_coding_html_css_programming_3994346.svg"
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
        <div class="col-12">
          <ul>
            <li>Design : {{ design }}</li>
            <li>Language : {{ language }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      header: "Skills",
      design: " Photoshop, Illustrator and Figma",
      language:
        " HTML/CSS, VueJS, Bootstrap, JavaScript, SQL, JSON, and Web API"
    };
  }
};
</script>

<style></style>
