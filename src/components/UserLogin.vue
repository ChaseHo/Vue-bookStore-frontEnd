<template>
  <section class="user-login-container">
    <h3 class="title">
      欢迎进入阅享知书网
    </h3>
		<p class="welcome">登录在线书店，购买你喜欢的书籍</p>
    <img src="../assets/images/default_avatar.png" alt="" class="img" v-if="loginText === '退出' ? true : false" @click="openUserInfo">
    <span v-if="loginText === '退出' ? true : false">{{ current_User.username }}</span>
    <div style="float: left" class="login-wrap">	
      <button
        class="btn-into-login login"
        @click.stop="enterLoginPopupLayer">
          {{ loginText }}
      </button>
      <button class="btn-into-login register"
        @click.stop="enterRegisterPopupLayer"
      >注册</button>
    </div>

    <user-login-window
      v-show="openLoginPopupLayer"
      @login="loginAccount">
    </user-login-window>
    <user-register-window
      v-show="openRegisterPopupLayer"
      @register="registerAccount"
    >
    </user-register-window>

    <div class="userInfo" v-if="userInfo">
      <div class="imgWrap">      
        <img src="../assets/images/ic_close.png" alt="" style="float:right;margin-top:10px;margin-right:15px;" @click="closeUserInfo">
      </div>
      <h2>个人信息:</h2>
      <p>昵称：{{ current_User.username }}</p>
      <p>所购书籍：{{ current_User.buyBook}}</p>
      <p>总消费：{{current_User.bill}}</p>
    </div>

  </section>
</template>

<script>
  import UserLoginWindow from '@/components/UserLoginWindow'
  import UserRegisterWindow from '@/components/UserRegisterWindow'
import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'UserLogin',
    components: {
      UserLoginWindow,
      UserRegisterWindow
    },
    data () {
      return {
        loginState: false, //登录状态
        openLoginPopupLayer: false,
        openRegisterPopupLayer: false,
        username: '',
        itemname: '',
        userInfo: false
      }
    },

    computed: {
      loginText() {
        // return this.loginState?'退出':'登录';
        return this.isLogin?'退出':'登录';
      },
      users () {
        return this.$store.getters.users()
      },
      currentUser() {
        return this.$store.getters.getUserByUsername(this.itemname);
      },
      ...mapGetters([
        'current_User',
        'isLogin'
      ])
    },

    methods: {
      closeUserInfo () {
        this.userInfo = false;
      },
      openUserInfo () {
        this.userInfo = true;
      },
      enterLoginPopupLayer () {
        // if (this.loginState) {
        //   this.loginState = !this.loginState;
        if(this.isLogin) {
          this.noLogin();
        } else {
          this.openLoginPopupLayer = true;
        }
      },
      enterRegisterPopupLayer() {
        this.openRegisterPopupLayer = true;
      },
      loginAccount (loginInfo) {
        this.openLoginPopupLayer = false;

        if(loginInfo){
          this.itemname = loginInfo.username;
          if(this.currentUser){
            // this.loginState = true;
            this.hasLogin();
            this.username = loginInfo.username;
            this.getCurrentUser(this.currentUser);
          }
        }
        // console.log(this.currentUser.buyBook);
        // console.log(loginInfo);
        // if (loginInfo) {
        //   this.loginState = true;
        // }
      },
      registerAccount (registerInfo) {
        this.openRegisterPopupLayer = false;
      },
      ...mapActions([
        'hasLogin',
        'noLogin',
        'getCurrentUser',
        'fetchUsers'
      ])
    },
  }
</script>

<style lang="scss" scoped>
@import '../assets/styles/common';
.userInfo p{
  margin-left: 20px;
  margin-top: 50px;
}
.imgWrap {
  width: 100%;
  height: 8%;
  background-color: #ff7a20;
}
.userInfo {
  z-index: 2;
  position: fixed;
  top: 50vh;
  left: 50vw;
  width: 500px;
  height: 400px;
  transform: translate(-50%, -50%);
  background: #f4f2ef;
}
.img {
  width: 50px;
  height: 50px;
  display: inline-block;
}
//上面是userInfo的样式
.user-login-container {
  width: 20%;
  display: flex;
  flex-direction: column;
  padding: .5rem;
}

.welcome {
  line-height: 1.5;
  font-size: .8rem;
}
  button.login {
    display: inline-block;
    width: 100px;
    height: 40px;
    position: absolute;
    top: -110px;
  }
  button.register {
    display: inline-block;
    width: 100px;
    height: 40px;
    position: absolute;
    top: -110px;
    right: 0;
  }
  .login-wrap {
    width: 224px;
    height: 42px;
    position: absolute;
    top: 300px;
  }
.btn-into-login {
  margin-top: 125px;
  border: none;
  border-radius: 5px;
  padding: .5rem;
  font-size: .8rem;
  background: #e7e2dd;
  &:hover {
    color: #fff;
    background: $site-primary-color;
  }
  &:focus {
    outline: none;
  }
}
</style>


