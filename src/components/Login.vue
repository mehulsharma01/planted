<template>
    <div class="row login-main-container secondary-font">
        <div class="col-md-6">
            <div class="login-left-con">
                <h2 class="pb-4">Login to Planted</h2>
                <div class="box-shadow login-container">
                    <form @submit.prevent="LoginForm" ref="loginform">
                    <div class="form-group">
                        <label for="email">Email Address:</label>
                        <input type="email" id="email" name="email" v-model="loginObj.email" required class="input-el">
                    </div>
                    <div class="form-group position-relative">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" v-model="loginObj.password" ref="password" required class="input-el">
                        <i class="fa fa-eye password-status cursor-pointer" ref="eyepass" @click="eyePass"></i>
                    </div>
                    <div class="forgot-password pb-3">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <p class="axios-status text-center" :class="axstatus" ref="axioserror"></p>
                    <button type="submit" class="login-btn def-btn sec-btn">Login</button>
                    <p class="text-center pt-2">You don't have an account yet? <a href="javascript:void(0);"><router-link to="/signup">Sign Up</router-link></a></p>    
                </form>
                </div>
            </div>
        </div>
        <div class="col-md-6 login-right-con"></div>

    </div>
</template>
<script>
import { useRoute }  from 'vue-router';
import axios from 'axios';

export default{
    name:"LoginComp",
    data(){
        return {
            //showHeader:true,
            loginObj:{email:"",password:""},
            axstatus:"",
        }
    },
    methods:{
        async LoginForm(){
            this.axstatus = "";
            var getresp = await axios.get("http://127.0.0.1:5500/users");
            console.log(getresp);
                if(getresp.status == 200){   
                    var alemail = getresp.data.some(user => user.email === this.loginObj.email);
                    var alpass = getresp.data.some(user => user.password === this.loginObj.password);
                if(alemail && alpass){
                    location.href = "/"
                    window.localStorage.setItem("login",true)
                }
                else{
                    this.$refs.axioserror.innerHTML = "Your Username or Password Wrong!"
                }
           }
           else{
            this.$refs.axioserror.innerText = "Something Wrong, Try again!"
           } 
        },
        eyePass(){
            var $eyeslash = this.$refs.eyepass.classList;

            if($eyeslash.contains('fa-eye-slash')){
                $eyeslash.add('fa-eye');
                $eyeslash.remove('fa-eye-slash');
                this.$refs.password.type = "text";
            }
            else{
                $eyeslash.remove('fa-eye');
                $eyeslash.add('fa-eye-slash');
                this.$refs.password.type = "password";
            }
        }
    },
    mounted(){
        const route = useRoute();
        if(route.path.indexOf("login") != -1){
            console.log(document.getElementsByClassName("header-container")[0]);
            document.getElementsByClassName("header-container")[0].classList.add('d-none');
            //this.showHeader = false;
        }
    }
}

</script>

<style scoped>
body{
    background:#F5F0EC;
}
.login-main-container{height:100vh;}
.login-main-container h2{font-size:1.5rem}
.login-left-con{
    background: #fff;
    text-align: left;
    padding: 20px;
    width:90%;
    margin:100px auto;
    border-radius:25px;
    box-shadow:rgba(0,0,0,0.5)
}
.login-right-con{
    background:url("https://res.cloudinary.com/hzuuok1b4/image/upload/v1706197651/images/Auth/reset-img-planted_up6fow.jpg");
    background-size:cover;
    background-position:center;
}

.login-container label{
    font-weight:bold;
    opacity:0.7;
    padding-bottom:5px;
}

.login-main-container .input-el{
    border-radius:10px; 
    margin-bottom:20px;   
}

.forgot-password a{color:#2c3e50;text-decoration:none;font-weight:bold;opacity:0.7}
.password-status{
    position: absolute;
    right: 30px;
    bottom: 35px;
    opacity:0.6;
    color:#2c3e50;
    cursor:pointer;
}
.login-btn{width:100%;}
.axios-status{color:red}
.axstatus{color:green;}


</style>