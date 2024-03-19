<template>
      <div class="container-fluid platform-tabs rightleft">
    <div class="platform-tabs-con">
        <h1 class="secondary-font">{{platformHeading}}</h1>
        <h5 class="secondary-font pb-4">{{platformPara}}</h5>
        <div class="platform-tab-inner">
            <div class="platform-tab-ul">
                <a href="javascript:void(0);" @click="tabBtn($event)" ref="tabbtn" class="def-btn" v-for="items,index in tabContentMain" :key="index" :data-key="index" :class="{ 'active': index === 0 }">{{items.title}}</a>
            </div>
        </div>
        <!-- tab content -->
        <div class="container pt-4 pt-md-5">
          <div class="row pb-4 platform-row">
            <div class="col-md-6">
              <div class="tab-content-left">
                  <div class="tab-content mb-4" v-for="items in currTabCon.tabLeftContent" :key="items">
                    <h5 class="secondary-font">{{items.tabHeading}}</h5>
                    <p class="mb-0">{{items.tabContent}}</p>
                  </div>
              </div>
            </div>
            <div class="col-md-6 d-flex align-items-center justify-content-center pb-4 pb-md-0">
              <div><img :src="currTabCon.tabRightContent" alt="tab-images" class="img-fluid"/></div>
            </div>
          </div>
          <button class="def-btn tab-protection-btn">For Environmental Protection  <i class="fa fa-angle-right"></i></button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlatformTabs',
  data(){
    return {
      showHeader:true,
      platformHeading:"The Planted platform at a glance",
      platformPara:"Mastering all tasks of sustainability management efficiently and in one place",
      tabContentMain:[{
        title:"Data analysis",
        tabLeftContent:[
        {tabHeading:"High-quality marketing material",tabContent:"Badges, logos, customized climate profile, photo material, climate certificate, social media posts, and texts aid in communication."},
        {tabHeading:"High-quality marketing material",tabContent:"Badges, logos, customized climate profile, photo material, climate certificate, social media posts, and texts aid in communication."},
        {tabHeading:"Establish science-based objectives",tabContent:"Set ESG and climate goals based on Science Based Targets (SBTi) and develop a comprehensive roadmap towards Net Zero."},
      ],
        tabRightContent:"https://assets-global.website-files.com/6526646f727f20ce775836da/6555efd3ae94f7a7c8c451a0_Kommunikation-p-800.webp",
      },{
        title:"Reduction",
        tabLeftContent:[
        {tabHeading:"Establish science-based objectives",tabContent:"Set ESG and climate goals based on Science Based Targets (SBTi) and develop a comprehensive roadmap towards Net Zero."},
        {tabHeading:"Establish science-based objectives",tabContent:"Set ESG and climate goals based on Science Based Targets (SBTi) and develop a comprehensive roadmap towards Net Zero."},
        ],
        tabRightContent:"https://assets-global.website-files.com/6526646f727f20ce775836da/6555efd356c1657a9a349a35_Datenanalyse-p-800.webp",
      },{
        title:"Environmental protection",
        tabLeftContent:[
        {tabHeading:"Establish science-based objectives",tabContent:"Set ESG and climate goals based on Science Based Targets (SBTi) and develop a comprehensive roadmap towards Net Zero."},
        {tabHeading:"High-quality marketing material",tabContent:"Badges, logos, customized climate profile, photo material, climate certificate, social media posts, and texts aid in communication."},
        ],
        tabRightContent:"https://assets-global.website-files.com/6526646f727f20ce775836da/6555efd4d2dde0f181821a99_Reduktion-p-800.webp",
      },{
        title:"Reporting",
        tabLeftContent:[
        {tabHeading:"High-quality marketing material",tabContent:"Badges, logos, customized climate profile, photo material, climate certificate, social media posts, and texts aid in communication."},
        {tabHeading:"Establish science-based objectives",tabContent:"Set ESG and climate goals based on Science Based Targets (SBTi) and develop a comprehensive roadmap towards Net Zero."},
        ],
        tabRightContent:"https://assets-global.website-files.com/6526646f727f20ce775836da/6555efd388ac20bd5a74c6c1_Handprint-p-800.webp",
      }],
      currTabCon:{},
    }
  },
  methods:{
    tabBtn(event){
      var tabbtn = this.$refs.tabbtn;
      tabbtn.forEach((div) => {
        div.classList.remove('active');
      });
      event.target.classList.add('active');
      this.currTabCon = this.tabContentMain[event.target.getAttribute("data-key")];

    }
  },
  mounted(){
    this.currTabCon = this.tabContentMain[0];
    //alert(this.currTabCon.tabRightContent);
    // if(window.localStorage.getItem("login") == null && window.localStorage.getItem("login") == undefined){
    //    location.href = "/login"
    // }
  }

}

</script>

<style scoped>
/* platform tabs */
.platform-tabs{
    background:#F5F0EC !important;
}

.platform-tab-inner{
  max-width:800px;
  margin:0 auto;
}

.platform-tab-inner .platform-tab-ul{
  list-style: none;
    padding: 0;
    padding: 20px 10px;
    background: #fff;
    margin: 0 auto;
    border-radius:50px;
    overflow-x:auto;
}

.platform-tab-inner .platform-tab-ul a{
  border:1px solid gray;
  color:gray;
  margin:0 10px;
  cursor:pointer;
  text-wrap: nowrap;
}
.platform-tab-inner a.active, .platform-tab-inner a:hover{
  background:#18774D;
  color:#fff;
  border:1px solid #18774D;
}

.tab-content-left{
  overflow-y: scroll;
}

.tab-content{
  background:#fff;
    border-radius: 15px;
    padding: 15px;
    text-align: left;
}
.tab-protection-btn{background:#F095FE;color:#000}
.tab-protection-btn i{
  font-size: 20px;
    vertical-align: middle;
    margin-top: -2px;
    margin-left: 5px;
}

/* platform tabs end */
/* @media(max-width:1200px){
  .platform-tab-inner .platform-tab-ul{width:90%}
} */

@media(max-width:767px){
    .platform-row{flex-direction: column-reverse;}
}

</style>