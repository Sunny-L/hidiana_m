<template>
  <div class="page">
    <field label="用户名" placeholder="请输入用户名" :value="user.username"></field>
    <field label="密码" placeholder="请输入密码" type="password" :value="user.password"></field>
    <div class="submit" @click="submit()">
      <v-button type="primary" size="large">登录</v-button>
    </div>
  </div>
</template>
<script>
  import { Field,Button } from 'mint-ui'
  export default {
    components: {
      // Field.name,
      field:Field,
      vButton:Button
    },
    data(){
      return {
        user: {
          username: '',
          pswd: '',
          state: ''
        }
      }
    },
    methods:{
      submit(){
        console.log(12)
        console.log(this.user)
        return;
        if(!this.username){
          this.state = 'username'
        }else if(!this.pswd) {
          this.state = 'pswd'
        }
        if(this.state) return 
        else {
          $.post('http://hidiana.cn/sys/login',{id:this.username,password:this.pswd},data=>{

          })
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .page {
    padding: 2rem .3rem;
  }
  
  .submit {
    margin-top: 1rem;
  }

</style>
