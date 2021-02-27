<template>
  <div id="login">
    <div class="login_page">
      <section class="h-100">
        <div class="row">
          <div class="brand">
            <img src="../assets/vuejs.svg" width="100" />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="card fat">
            <div class="catf-body">
              <h3 class="card-title">Login</h3>
              <form @submit.prevent="submit" class="login_page_validation">
                <div class="form-group">
                  <label for="email">E-mail</label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    autofocus
                  />
                </div>

                <div class="form-group">
                  <label for="password"
                    >Password
                    <a
                      ><router-link to="/forget" class="float-right"
                        >Forgot Password?</router-link
                      ></a
                    >
                  </label>
                  <input type="password" class="form-control" name="password" />
                  <div class="invalid-feedback">Password is required</div>
                </div>

                <div class="form-group">
                  <div class="custom-checkbox custom-control">
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      class="custom-control-input"
                    />
                    <label for="remember" class="custom-control-label"
                      >Remember Me</label
                    >
                  </div>
                </div>

                <div class="form-group m-0">
                  <button type="submit" class="btn btn-primary btn-block">
                    Login
                  </button>
                </div>
                <div class="mt-4 text-center">
                  Don't have an account?
                  <a><router-link to="/">Create One</router-link></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
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
