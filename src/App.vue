<!-- https://www.planted.green/ -->

<template>
  <Header v-if="showHeader"></Header>
  <router-view></router-view>

</template>

<script>
import Header from './components/Header.vue';
export default {
  name: 'App',
  data(){
    return {
      showHeader:true,
    }
  },
  components: {
    Header
  },
  mounted(){
    // if(window.localStorage.getItem("login") == null && window.localStorage.getItem("login") == undefined){
    //    location.href = "/login"
    // }
  }

}
</script>

