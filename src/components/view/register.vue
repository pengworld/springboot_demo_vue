<template>
  <div class="container">
    <el-form  ref="userForm" :model="user" size="mini" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="user.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="register" icon="el-icon-user-solid">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "user_register",
  data(){
    return{
      user:{
        username:"",
        password:"",
      },
    }
  },
  methods:{
    register(){
      this.$axios.post(
          "/login/register",
          {
            username:this.user.username,
            password:this.user.password
          }
      )
          .then((res)=>{
            alert(res.data.msg)
            console.log(res)
          })
          .catch(err=>{
            console.log(err)
          })
    },
  }
}
</script>

<style scoped>
.container {
  width:25%;
}
</style>
