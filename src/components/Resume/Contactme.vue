<template>
  <!-- Head_Title -->
  <div class="head_box_left">
    <div class="row">
      <div class="col-2">
        <div class="icon_box_left">
          <img
            src="../../assets/icons/iconfinder_icon-ios7-contact-outline_211731.svg"
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
            <img src="../../assets/icons/iconfinder_phone_1608790.svg" alt="" />
          </div>
        </div>
        <div class="col-8">
          <div class="text_list">
            <h3>{{ phone }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="list_item">
      <div class="row">
        <div class="col-2">
          <div class="icon_box_left">
            <img
              src="../../assets/icons/iconfinder_email-letter-inbox-send_2203552.svg"
              alt=""
            />
          </div>
        </div>
        <div class="col-8">
          <div class="text_list">
            <h3>
              <a href="mailto:khunnunthawat@hotmail.com">{{ email }}</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="list_item">
      <div class="row">
        <div class="col-2">
          <div class="icon_box_left">
            <img
              src="../../assets/icons/iconfinder_BW_Behance_2_glyph_svg_5305150.svg"
              alt=""
            />
          </div>
        </div>
        <div class="col-8">
          <div class="text_list">
            <h3>
              <a href="https://www.behance.net/khunnunthawat">{{ behance }}</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
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
            <h3>
              <a href="https://github.com/khunnunthawat">{{ github }}</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="list_item">
      <div class="row">
        <div class="col-2">
          <div class="icon_box_left">
            <img
              src="../../assets/icons/iconfinder_ic_home_48px_3669170.svg"
              alt=""
            />
          </div>
        </div>
        <div class="col-8">
          <div class="text_list">
            <h4>
              2 be home apartment No.15/1 Soi Nakniwat 13,<br />
              Nakniwat road, Ladprao subdistrict, Lat phrao district, Bangkok
              10230
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contactme",
  data() {
    return {
      header: "Contact",
      phone: "062-283-5751",
      email: "khunnunthawat@hotmail.com",
      behance: "behance.net/khunnunthawat",
      github: "github.com/khunnunthawat"
    };
  }
};
</script>

<style></style>
