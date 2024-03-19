<template>
    <div class="row login-main-container secondary-font">
        <div class="col-md-6">
            <div class="login-left-con">
                <h2 class="pb-4">Sign Up to Planted</h2>
                <div class="box-shadow login-container">
                    <form @submit.prevent="signUp" ref="signupform">
                        <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="name" id="name" name="name" v-model="signObj.name" required class="input-el">
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address:</label>
                        <input type="email" id="email" name="email" v-model="signObj.email" required class="input-el">
                    </div>
                    <div class="form-group position-relative">
                        <label for="password">Password:</label>
                        <input type="password" id="password" v-model="signObj.password" name="password" ref="password" required class="input-el">
                        <i class="fa fa-eye-slash password-status cursor-pointer" ref="eyepass" @click="eyePass"></i>
                    </div>
                    <p class="axios-status text-center" :class="axstatus" ref="axioserror"></p>
                    <button type="submit" class="login-btn def-btn sec-btn">Sign Up</button>
                    <p class="text-center pt-2">Already have an account? <a href="javascript:void(0);"> <router-link to="/login">Login</router-link></a></p>    
                </form>
                </div>
            </div>
        </div>
        <div class="col-md-6 login-right-con"></div>

    </div>
</template>
<script>
import { useRoute }  from 'vue-router';
import axios  from 'axios';

export default{
    name:"LoginComp",
    data(){
        return {
            signObj:{name:"",email:"",password:""},
            axstatus:"",
        }
    },
    methods:{
        async signUp(){
            this.axstatus = "";
            var getresp = await axios.get("http://127.0.0.1:5500/users");
            console.log(getresp);
            if(getresp.status == 200){
                if(getresp.data.every(user => user.email !== this.signObj.email)){
                    var resp = await axios.post("http://127.0.0.1:5500/users",this.signObj);
                    if(resp.status == 201){
                            this.$refs.signupform.reset();
                            this.$refs.axioserror.innerText = "Sign up successful!"
                            this.axstatus = "axstatus";
                            setTimeout(() => {
                                location.href = "/login";              
                            },2000);
                    }
                    else{
                        this.$refs.axioserror.innerText = "Something Wrong, Try again!"
                    } 
                }
                else{
                    this.$refs.axioserror.innerHTML = "User Already Exist, Please Login"
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
        if(route.path.indexOf("signup") != -1){
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
    overflow:hidden;
}
.login-main-container{height:100vh;}
.login-main-container h2{font-size:1.5rem}
.login-left-con{
    background: #fff;
    text-align: left;
    padding: 20px;
    width:90%;
    margin:60px auto !important;
    margin-bottom:0;
    border-radius:25px;
    box-shadow:rgba(0,0,0,0.5)
}
.login-right-con{
    background:url("https://assets-global.website-files.com/6526646f727f20ce775836da/653f9efd65232c4d65dc47f4_O%CC%88kosystemleistungen%20Image-min.jpg");
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