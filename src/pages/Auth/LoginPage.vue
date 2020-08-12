<template>
  <q-page class="flex flex-center login-page">
    <q-card
      style="width: 400px"
      bordered
      class="form-container shadow-10">
      <q-card-section>
        <div class="text-center">
          <div class="column flex items-center justify-center">
            <q-img
              class="q-mb-md"
              width="80px"
              src="/images/logo.svg"
            />
            <span>ورود به پنل مدیریت</span>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <q-form>
          <div class="q-mb-md">
            <q-input
              v-model="username"
              dir="ltr"
              label="نام کاربری (موبایل یا ایمیل)">
              <template slot="prepend">
                <q-icon name="person"></q-icon>
              </template>
            </q-input>
          </div>

          <div class="q-mb-md">
            <q-input
              v-model="password"
              class="text-center"
              dir="ltr"
              label="رمز عبور"
            >
              <template slot="prepend">
                <q-icon name="lock"></q-icon>
              </template>
            </q-input>
          </div>

          <div class="q-mb-md q-mt-xl text-center">
            <q-btn
              @click="login"
              rounded
              label="ورود به پنل مدیریت"
              color="dark"
              icon-right="arrow_back"
            />
          </div>

        </q-form>
      </q-card-section>
    </q-card>
  </q-page>

</template>

<script>
  import showToast from '../../helpers/Notify'
  import Request from '../../helpers/Request'
  export default {
    name: "LoginPage",
    data: () => ({
      username: '',
      password: ''
    }),

    methods: {
      login() {
        if(!this.username.toString().trim()){
          showToast('نام کاربری را وارد کنید','warning');
          return false;
        }
        if(!this.password.toString().trim()){
          showToast('رمز عبور را وارد کنید','warning');
          return false;
        }
        Request.post('login',{
          username:this.username,
          password:this.password,
        })
        .then(response=>{
          console.log(response);
        })
      }
    },
  }
</script>

<style scoped>
  .login-page {
    background: url('/images/login-bg.jpg') no-repeat center center;
    background-size: cover !important;
    position: relative;
  }

  .login-page::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.5);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }
</style>
