<template>
  <div class="register-box mx-auto bg-white shadow rounded">
    <h2 class="text-center font-20 py-4">
      <router-link :to="{ name: 'LoginPage' }">登录</router-link>
      <span class="mx-2">·</span>
      <router-link :to="{ name: 'RegisterPage' }">注册</router-link>
    </h2>

    <el-form ref="form" :model="form" label-width="0px">
      <el-form-item label="">
        <el-input v-model="form.regname" placeholder="用户名"  prefix-icon="el-icon-user-solid"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="form.regpass" show-password placeholder="密码" prefix-icon="el-icon-lock" ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="reg-btn">登 录</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        regname: "",
        regpass: "",
        regpass2: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
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