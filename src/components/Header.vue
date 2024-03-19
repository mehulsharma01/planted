<template>
<div class="header-container" ref="header">
<nav class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="#"><img src="/static/img/logo_white.webp" class="img-fluid"/></a>
  <button class="navbar-toggler" type="button" @click="openSlider">
    <i class="fa fa-bars"></i>
  </button>

  <div class="justify-content-left d-none d-md-block" id="navigation">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Product & Services
</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Uber Planted
</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link" href="#">
          Resources</a>
      </li>
    </ul>
  </div>

  <div class="nav-right">
    <form class="form-inline my-2 my-lg-0">
        <router-link to="/login">
            <button class="btn my-2 my-sm-0 def-btn secondary-font" type="submit">Login</button>
        </router-link>
    </form>
  </div>
</nav>
</div>

<div class="navigation-slider justify-content-left" id="navigation" ref="mobileslider">
    <img src="/static/img/cross-icon.png" @click="closeSlider">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Product & Services
</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Uber Planted
</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link" href="#">
          Resources</a>
      </li>
    </ul>

    <form class="form-inline my-2 my-lg-0">
        <router-link to="/login">
            <button class="btn my-2 my-sm-0 def-btn secondary-font" type="submit">Login</button>
        </router-link>
    </form>

  </div>


</template>
<script>

export default{
    name:"HeaderComp",
    mounted(){
        window.addEventListener('scroll', this.handleScroll);
    },
    methods:{
        handleScroll(){
            //var headerscroll = document.getElementsByClassName("header-container")[0];
            if (window.scrollY > 100) {
                this.$refs['header'].classList.add("scrolled")
            }

            else{
              if(this.$refs['header'].classList.contains("scrolled")){
                   this.$refs['header'].classList.remove("scrolled")   
              } 
            }
        },
        openSlider(){
          this.$refs['mobileslider'].classList.add("nav-slidermain")
        },
        closeSlider(){
            this.$refs['mobileslider'].classList.remove("nav-slidermain")
        },
    }
}

</script>