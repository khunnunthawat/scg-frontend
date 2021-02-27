<template>
  <div id="footer">
    <footer>
      <div class="footer-dark">
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-md-3 item">
                <h3>List</h3>
                <ul>
                  <li><router-link to="/">home</router-link></li>
                  <li><router-link to="/doscg">doscg</router-link></li>
                  <li><router-link to="/bcss">css</router-link></li>
                  <li><router-link to="/compon">compoments</router-link></li>
                  <li><router-link to="/apis">api</router-link></li>
                  <li><router-link to="/resume">cv</router-link></li>
                </ul>
              </div>
              <div class="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li><a href="https://v3.vuejs.org/">VueJS v.3</a></li>
                  <li>
                    <a href="https://github.com/twbs/bootstrap/tree/v4-dev"
                      >Bootstrap v.4</a
                    >
                  </li>
                </ul>
              </div>
              <div class="col-md-6 item text">
                <h3>SCG</h3>
                <p>
                  Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                  Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                  quis tristique lectus. Aliquam in arcu eget velit pulvinar
                  dictum vel in justo.
                </p>
              </div>
              <div class="col item social">
                <a href="https://github.com/khunnunthawat"
                  ><i class="icon ion-social-github"></i
                ></a>
                <a href="https://web.facebook.com/fal.nunthawat"
                  ><i class="icon ion-social-facebook"></i
                ></a>
                <a href="https://www.instagram.com/fal.nunthawat"
                  ><i class="icon ion-social-instagram"></i
                ></a>
              </div>
            </div>
            <p class="copyright">Khun : Nunthawat Rakyard © 2021</p>
          </div>
        </footer>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style></style>
