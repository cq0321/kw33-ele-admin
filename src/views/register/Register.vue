<template>
  <div class="register-box mx-auto bg-white shadow rounded">
    <h2 class="text-center font-20 py-4">
      <router-link :to="{ name: 'LoginPage' }">登录</router-link>
      <span class="mx-2">·</span>
      <router-link :to="{ name: 'RegisterPage' }">注册</router-link>
    </h2>

    <el-form ref="form1" :model="formData" label-width="0px" :rules="myrules">
      <el-form-item label="" prop="regname">
        <el-input
          v-model="formData.regname"
          placeholder="用户名"
          prefix-icon="el-icon-user-solid"
        ></el-input>
      </el-form-item>
      <el-form-item label="" prop="regpass">
        <el-input
          v-model="formData.regpass"
          show-password
          placeholder="密码"
          prefix-icon="el-icon-lock"
        ></el-input>
      </el-form-item>
      <el-form-item label="" prop="regpass2">
        <el-input
          v-model="formData.regpass2"
          show-password
          placeholder="确认密码"
          prefix-icon="el-icon-lock"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="success" @click="onSubmit('form1')" class="reg-btn"
          >注 册</el-button
        >
      </el-form-item>
    </el-form>

    <p class="text-secondary">点击立即注册表示您同意并遵守协议</p>
  </div>
</template>

<script>
export default {
  data() {
    var validateRegname = (rule, value, callback) => {
        
      let reg = /^[a-zA-Z0-9_]{3,10}$/;
      if (!reg.test(value)) {
        callback(new Error("字母，数字，下划线组成，3到10位"));
      } else {
        callback();
      }
    };

    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.formData.regpass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      formData: {
        regname: "",
        regpass: "",
        regpass2: "",
      },

      //   表单的校验规则
      myrules: {
        regname: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { validator: validateRegname, trigger: "blur" },
        ],
        regpass: [{ required: true, message: "请输入密码", trigger: "blur" }],
        regpass2: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios({
            method: "post",
            url: "/register",
            data: this.formData,
          }).then((res) => {
            if (res.data.code === 1) {
              this.$message({
                message: res.data.message,
                type: "warning",
              });
            }
            if (res.data.code === 2) {
              this.$message({
                message: res.data.message,
                type: "warning",
              });
            }
            if (res.data.code === 3) {
              this.$message({
                message: res.data.message,
                type: "warning",
              });
            }
            if (res.data.code === 0) {
              this.$message({
                message: res.data.message,
                type: "success",
              });
              this.$router.push({name: "LoginPage"})
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  created() {
    document.body.style.background = "#eee";
  },
};
</script>

<style lang="scss" scoped>
.register-box {
  width: 360px;
  margin-top: 150px;
  padding: 20px 30px;
  h2 {
    a {
      color: #666;
    }
    a.router-link-active {
      color: red;
      text-decoration: underline;
    }
  }
}
.reg-btn {
  width: 100%;
}
</style>