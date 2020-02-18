
<style scoped>
.bg {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/images/bg.png");
  background-size: 100% 100%;
  overflow: hidden;
}
.loginForm {
  width: 26%;
  min-height: 55.5%;
  background: rgba(247, 250, 252, 1);
  box-shadow: 0px 0px 11px 6px rgba(0, 0, 0, 0.03);
  border-radius: 4px;
  /* margin: 0 auto; */
  /* margin-top: 18.2vh; */
  padding: 50px 0 97px 0;
  max-width: 415px;
  min-width: 340px;
}
.logo {
  width: 80px;
  height: 80px;
  margin: 0 auto;
}
.logo img {
  width: 80px;
  height: 80px;
}
.welcome {
  font-size: 25px;
  font-family: PingFangSC-Medium, PingFangSC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  width: 100%;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 45px;
}
.inputBox {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.09);
  border-radius: 4px;
  width: 68%;
  height: 40px;
  margin: 0 auto;
  margin-bottom: 30px;
  position: relative;
}
.phone_input {
  width: 100%;
  height: 40px;
  border: none;

  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  padding-left: 15px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

input::-webkit-input-placeholder {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(204, 204, 204, 1);
}
input::-moz-placeholder {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(204, 204, 204, 1);
}
input:-ms-input-placeholder {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(204, 204, 204, 1);
}
.getCode1 {
  width: 86px;
  height: 32px;
  background: rgba(246, 249, 252, 1);
  border-radius: 4px;
  position: absolute;
  right: 15px;
  top: 4px;
  text-align: center;
  line-height: 32px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(204, 204, 204, 1);
}
.getCode2 {
  width: 86px;
  height: 32px;
  background: #53B4B3;
  border-radius: 4px;
  position: absolute;
  right: 15px;
  top: 4px;
  text-align: center;
  line-height: 32px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
}
.loginBtn {
  width: 68%;
  height: 50px;

  margin: 0 auto;
  margin-top: 70px;
}
.el-button {
  width: 100%;
}
</style>
<template>
  <div class="bg flex justify-center align-center">
    <div class="loginForm">
      <div class="logo">
        <img src="../assets/images/lingxi2.svg">
      </div>
      <div class="welcome">灵犀云平台</div>
      <div class="inputBox">
        <input type="text" maxlength="11" placeholder="请输入手机号" v-model="phone" class="phone_input" />
      </div>
      <div class="inputBox">
        <input type="text" maxlength="8" placeholder="请输入验证码" v-model="code" class="phone_input" @keyup.enter="login"/>
        <div v-if="!startClock&&phone.length==11" class="getCode2" @click="sendCode">获取验证码</div>
        <div v-if="!startClock&&phone.length!==11" class="getCode1">获取验证码</div>
        <div v-if="startClock" class="getCode1">重新获取{{clock}}s</div>
      </div>

      <div class="loginBtn">
        <el-button type="primary" class="el-button" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-console */
import { sendCode, login, getUserInfo } from "../api/login";
import { setStorage, removeToken } from "../utils/auth";
import NProgress from "nprogress";
export default {
  name: "login",
  data() {
    return {
      phone: "",
      code: "",
      startClock: false,
      clock: 0,
      requestId: ""
    };
  },
  methods: {
    sendCode() {
      const params = {
        phone: this.phone
      };
      sendCode(params)
        .then(res => {
          this.requestId = res.data.requestId;
          this.clock = parseInt(res.data.remainingMsec / 1000);
          this.$message({
            message: "发送成功",
            type: "success",
            duration: 2000
          });
          this.startClock = true;

          const interval = setInterval(() => {
            this.clock--;
            if (this.clock == 0) {
              this.startClock = false;
              clearInterval(interval);
              // this.clock = 60
            }
          }, 1000);
        })
        
    },
    login() {
      if (this.code == "") {
        this.$message({
          message: "请先输入验证码！",
          type: "warning",
          duration: 2000
        });
        return;
      }
      const params = {
        phone: this.phone,
        requestId: this.requestId,
        smsCode: this.code
      };
      NProgress.start();
      login(params)
        .then(res => {
          if (res.status == 200) {
            getUserInfo().then(res => {
                if (res.ents.length == 0) {
                  // 没有登录权限则删除token
                  removeToken();
                  this.$message({
                    message: "对不起，您不属于任何一个组织",
                    type: "error",
                    duration: 2000
                  });
                  return;
                }
                
                setStorage("userInfo", JSON.stringify(res));
                setStorage("ents", JSON.stringify(res.ents[0]));
                setTimeout(() => {
                  NProgress.done()
                  this.$router.push({ path: "/" });
                }, 500);
            })
          } else {
            NProgress.done();
          }
        })
        
    }
  }
};
</script>

