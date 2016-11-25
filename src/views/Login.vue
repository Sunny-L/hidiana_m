<template>
  <div class="page">
    <field label="用户名" placeholder="请输入用户名" v-model="user.username" :state="state=='username'?'error':''"></field>
    <field label="密码" placeholder="请输入密码" type="password" v-model="user.password" :state="state=='password'?'error':''"></field>
    <div class="submit" @click="submit()">
      <v-button type="primary" size="large">登录</v-button>
    </div>
  </div>
</template>
<script>
  import { Field,Button,Toast } from 'mint-ui'
  import {saveUser} from '../utils'
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
          password: '',
        },
        state: ''
      }
    },
    methods:{
      submit(){
        if(!this.user.username){
          this.state = 'username'
        }else if(!this.user.password) {
          this.state = 'password'
        }else {
          this.state = ''
        }
        if(this.state) return 
        else {
          $.post('http://hidiana.cn/sys/login',{id:this.user.username,password:this.user.password},data=>{
            if(data.user.roles){
              this.$store.commit('saveUser',{...data.user})
              Toast({
                message: '登录成功~!',
                position: 'top'
              })
              setTimeout(()=>{
                let redirect = decodeURIComponent(this.$route.query.redirect || '/index');
                this.$router.push({
                  path: redirect
                })
              },1500)
            }
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
