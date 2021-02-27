<template>
  <div id="forgot">
    <div class="login_page">
      <section class="h-100">
        <div class="container h-100">
          <div class="row justify-content-md-center align-items-center h-100">
            <div class="card-wrapper">
              <div class="card fat">
                <div class="card-body">
                  <h4 class="card-title">Forgot Password</h4>
                  <form @submit.prevent="submit" class="my-login-validation">
                    <div class="form-group">
                      <label for="email">E-Mail Address</label>
                      <input
                        id="email"
                        type="email"
                        class="form-control"
                        name="email"
                        value=""
                        autofocus
                      />
                      <div class="invalid-feedback">Email is invalid</div>
                      <div class="form-text text-muted">
                        By clicking "Reset Password" we will send a password
                        reset link
                      </div>
                    </div>

                    <div class="form-group m-0">
                      <button type="submit" class="btn btn-primary btn-block">
                        Reset Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="btn_back">
                <router-link class="button_back" to="/bcss"
                  >Back to Login</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "forgot",
  methods: {
    submit() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
$primary: #fc1f74;

@import "../../node_modules/bootstrap/scss/bootstrap";
</style>
