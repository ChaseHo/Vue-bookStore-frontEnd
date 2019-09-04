<template>
  <article
    class="user-login-window"
    v-show="openLoginPopupLayer">
    <header>
      <h3>注册</h3>
      <img 
        class="btn-close"
        @click.stop="closeLoginWindow"
        src="../assets/images/ic_close.png">
    </header>
    <form>
      <div>
        <label for="username">
          <input type="text" name="username" id="user_name" v-model.trim="item.username" autofocus placeholder="请输入用户名">
        </label>
      </div>
      <div>
        <label for="password">
          <input type="password" name="password" v-model.trim="item.password" placeholder="请输入密码">
        </label>
      </div>
      <div class="retri-pd">
        <a href="javascript:;">忘记密码?</a>
      </div>
      <div class="loginin">
        <!-- <button type="button" class="btn-loginin" @click.stop="registerAccount(item)">注册</button> -->
        <button type="button" class="btn-loginin" @click.stop="addUser">注册</button>
      </div>
    </form>
    <!-- <footer>
      <p>
        <a class="sign-up" href="javascript:;">
          没有账号？免费注册 &gt;
        </a>
      </p>
    </footer> -->
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
        }
      }
    },

    props: {
      openLoginPopupLayer: Boolean
    },
    
    methods: {
      registerAccount (loginInfo) {
        this.$emit('register', loginInfo);
      },
      closeLoginWindow() {
        this.registerAccount();
        // this.openLoginPopupLayer = false;
      },
      addUser () {
        if (this.dbUser) {
          alert('该用户已经注册');
          return
        }
        let uri = 'http://localhost:4000/users/addUser';
        this.axios.post(uri, this.item).then((response) => {
          alert('注册成功');
          this.fetchUsers('http://localhost:4000/users');
          this.closeLoginWindow();
          // this.$router.push({name: 'UserDisplay'})
        })
      },
      ...mapActions([
        'fetchUsers'
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
      dbUser() {
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


