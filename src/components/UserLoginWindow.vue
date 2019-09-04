<template>
  <article
    class="user-login-window"
    v-show="openLoginPopupLayer">
    <header>
      <h3>登录</h3>
      <img 
        class="btn-close"
        @click.stop="closeLoginWindow"
        src="../assets/images/ic_close.png">
    </header>
    <form>
      <div>
        <label for="username">
          <input type="text" name="username" id="username" v-model.trim="item.username" autofocus placeholder="请输入用户名">
        </label>
      </div>
      <div>
        <label for="password">
          <input type="password" name="password" v-model.trim="item.password" placeholder="请输入密码">
        </label>
      </div>
      <div class="retri-pd">
        <!-- <a href="javascript:;">忘记密码?</a> -->
      </div>
      <div class="loginin">
        <button type="button" class="btn-loginin" @click.stop="loginAccount(item)">登录</button>
      </div>
    </form>
    <footer>
      <p>
        <a class="sign-up" href="javascript:;">
          没有账号？免费注册 &gt;
        </a>
      </p>
    </footer>
  </article> 
</template>

<script>
import { mapActions } from 'vuex';
  export default {
    name: 'UserLoginWindow',
    data() {
      return {
        item: {
          username: '',
          password: ''
        },
        getLoginInfo: Object
      }
    },

    props: {
      openLoginPopupLayer: Boolean
    },
    
    methods: {
      loginAccount (loginInfo) {
        this.getLoginInfo = loginInfo
        if(!this.currentUser) {
          alert('没有此用户');
          return
        }
        if(this.currentUser.password !== this.item.password) {
          alert('密码错误');
          this.item.password = '';
          return
        }
        if(this.currentUser.isBlack) {
          alert('该用户是黑名单，帐号已经被冻结');
          return
        }
        // this.getCurrentUser(this.currentUser);
        this.$emit('login', loginInfo);
      },
      closeLoginWindow() {
        // this.loginAccount();
        if(!this.currentUser) {
          this.$emit('login', '');
          return         
        }
        if(this.currentUser.isBlack) {
          this.$emit('login', '');
          return
        }        
        this.$emit('login', this.getLoginInfo);
        // this.openLoginPopupLayer = false;
      },
      ...mapActions([
        'getCurrentUser'
      ])
    },

    mounted() {
      this.$nextTick(function() {
        document.addEventListener('click', function(event) {
          if (this.openLoginPopupLayer) {
            if (event.target !== this.$el) {
              this.closeLoginWindow();
            }
          }
        });
      });
    },
    computed: {
      users () {
        return this.$store.getters.users()
      },
      currentUser() {
        return this.$store.getters.getUserByUsername(this.item.username);
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/styles/common';

.user-login-window {
  z-index: 2;
  position: fixed;
  top: 50vh;
  left: 50vw;
  width: 500px;
  transform: translate(-50%, -50%);
  background: #f4f2ef;
}

header {
  display: flex;
  align-items: center;
  background: #ef5b00;
  padding: .5rem 1rem;
  h3 {
    color: #fff;
    font-size: 1rem;
  }
  .btn-close {
    margin-left: auto;
  }
}

form {
  width: 300px;
  margin: 0 auto;
  padding: 2rem;

  div {
    width: 250px;
    margin: 0 auto;
    padding: .2em 0;
  }

  .retri-pd {
    text-align: right;
  }

  .loginin {
    text-align: center;
  }

  input {
    width: 100%;
    padding: .5em;
    border: 1px solid #999;
    border-radius: .5em;
    background: transparent;

    &:focus {
      outline: none;
      border: 1px solid $site-primary-color;
    }
  }

  .retri-pd a,
  .sign-up {
    &:hover {
      text-decoration: underline;
    }
  }
  
  .btn-loginin {
    width: 100%;
    border-radius: .5em;
    padding: .5em 0;
    color: #fff;
    background: $site-primary-color;
    &:hover {
      cursor: pointer;
    }
  }
}

footer {
  border-top: 1px solid gray;
  padding: .5rem;
  text-align: right;
}
</style>


