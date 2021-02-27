<template>
  <div id="wrapper">
    <div class="data_resume">
      <div class="row">
        <!-- LEFT -->
        <div class="col-4">
          <!-- Profile -->
          <div class="info_profile">
            <Profile />
          </div>
          <!-- Info Left -->
          <div class="info_bg">
            <div class="info_left">
              <!-- Contact Me -->
              <Contactme />
              <!-- Strength -->
              <Strength />
            </div>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="col-8">
          <div class="info_right">
            <Inforight />
            <div class="info_text_right">
              <Education />
              <Experience />
              <Portfolio />
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Profile from "../Resume/Profile.vue";
import Contactme from "../Resume/Contactme.vue";
import Strength from "../Resume/Strength.vue";
import Inforight from "../Resume/Inforight.vue";
import Education from "../Resume/Education.vue";
import Experience from "../Resume/Experience.vue";
import Portfolio from "../Resume/Portfolio.vue";
import Skills from "../Resume/Skills.vue";
export default {
  name: "Wrapper",
  components: {
    Profile,
    Contactme,
    Strength,
    Inforight,
    Education,
    Experience,
    Portfolio,
    Skills
  }
};
</script>

<style></style>
