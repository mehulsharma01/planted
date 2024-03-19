<template>
      <div class="container-fluid landing-container">
    <div class="container-text">
      <h1 class="text-white primary-font">{{landingHeading}}</h1>
      <p class="my-4 secondary-font">{{landingPara}}</p>
      <form class="d-flex landing-form" @submit.prevent="landingForm" ref="form">
        <input type="email" name="email" v-model="userEmail" id="email-address" required class="input-el" placeholder="Email"/>
        <button type="submit" class="btn my-2 my-sm-0 def-btn secondary-font sec-btn" ref="notify">Nofity Me</button>
      </form>
    </div>
  </div>

  <!-- trustpilot -->
  <div class="container-fluid trustpilot-container">
    <div class="trust-con-inner">
        <p>{{trustObj.trustPara}}</p>
        <div class="d-flex align-itmes-center">
            <div v-for="img,index in trustObj.trustImgObj" :key="index">
                <img :src="img" alt="logo" class="img-fluid"/>
            </div>
        </div>
        <p class="trust-para">{{trustObj.footerPara}} <span class="trust-image"><img src="https://assets-global.website-files.com/6526646f727f20ce775836da/6530fcf2226516bfb5a64987_Trustpilot_Logo_(2022).webp" alt="trustpilot" class="img-fluid"/></span></p>
    </div>
  </div>
  <!-- trustpilot end -->

  <!-- planted platform tabs -->
  <PlatformTabs/>

  <!-- end planted platform tabs -->

  <!-- global standards -->
  <div class="container-fluid global-container">
    <h4 class="secondary-font text-color pb-4">{{globalObj.globalHeading}}</h4>
    <div class="d-flex global-inner-con">
      <div class="global-con-inner" v-for="items in globalObj.globalImages" :key="items"><img :src="items" class="img-fluid" alt="global-logos"/></div>
    </div>
  </div>
  <!-- end global standards -->

  <!-- Sustainability conatnier -->
  <SustainabilityComp/>
  <!-- end Sustainability -->

  <!-- strategically container -->
  <div class="container-fluid sustainability-container strategically-container rightleft">
    <h3 class="secondary-font pb-5">{{strategicallyObj.strategicallyHeading}}</h3>
    <div class="strategically-con-inner">
      <div class="row pb-5">
        <div class="col-md-3 col-sm-6 mb-3 mb-md-0" v-for="items in strategicallyObj.strategicallyArray" :key="items">
          <div class="strategically-col-con">
            <span v-html="items.strategicallyIcon"></span>
            <h5 class="secondary-font py-3">{{items.strategicallyTagline}}</h5>
            <p>{{items.strategicallyPara}}</p>
          </div>
        </div>
      </div>
      <button class="def-btn tab-protection-btn">For Environmental Protection  <i class="fa fa-angle-right"></i></button>
    </div>
  </div>

  <!-- Testimonial Componenet -->
  <TestimonialComp/>
  <!-- end TestimonialComp -->

  <!-- reporting container -->
  <div class="container-fluid sustainability-container strategically-container knowledge-container rightleft">
    <h3 class="secondary-font pb-5">{{knowladgeObj.knowHeading}}</h3>
    <div class="strategically-con-inner">
      <div class="row pb-5">
        <div class="col-md-4" v-for="items in knowladgeObj.knowArray" :key="items">
          <div class="strategically-col-con">
            <img :src="items.knowIcon" alt="knowladge images" class="img-fluid"/>
            <h5 class="secondary-font py-4">{{items.knowTagline}}</h5>
            <a href="javascript:void(0);" class="know-download">Download <i class="fa fa-download"></i></a>
          </div>
        </div>
      </div>
      <button class="def-btn">Read All Guides <i class="fa fa-angle-right"></i></button>
    </div>
  </div>
  <!--end reporting container  -->

  <!-- about us container -->
  <div class="container-fluid sustainability-container rightleft about-container bg-white">
    <div class="about-us-con row">
      <div class="col-md-4 d-flex align-items-center justify-content-center">
        <div class="about-us-image">
          <img :src="aboutObj.aboutImage" alt="about us image" class=""/>
        </div>
      </div>
      <div class="col-md-8 about-us-content">
        <p class="testimonial-tag"><b>Contact</b></p>
        <h3 class="secondary-font">{{aboutObj.aboutHeading}}</h3>
        <p class="py-3 content-para">{{aboutObj.aboutPara}}</p>
        <button class="def-btn">Follow Link <i class="fa fa-external-link"></i></button>
    </div>
    </div>

  </div>
  <!-- end about us container -->

  <!-- footer container -->
  <footerComp/>
  <!-- end footer container -->
</template>

<script>
import PlatformTabs from './PlatformTabs.vue';
import SustainabilityComp from './Sustainability.vue';
import TestimonialComp from './Testimonial.vue';
import footerComp from './footer.vue';

import axios from 'axios';

export default {
  name: 'HomeComp',
  data(){
    return {
      landingHeading:"Die All-in-One Nachhaltigkeits-plattform",
      landingPara:"Planted ist die holistische Lösung, die CO₂-Management und Reporting mit der Förderung von deutschen Wäldern und globalem Umweltschutz vereint.",
      aspectRatio: null,
      userEmail:null,
      trustObj:{trustPara:"Planted advances over 400 companies climate-actively.",
                trustImgObj:[
                    "https://assets-global.website-files.com/6526646f727f20ce775836da/6530f7a5acbd338000d06e33_DHL_Logo.webp",
                    "https://assets-global.website-files.com/6526646f727f20ce775836da/6530f7a48148952cb631c79d_ESL_Horizontal_Logo_2019.webp",
                    "https://assets-global.website-files.com/6526646f727f20ce775836da/6530f7a5aea0e5cfda5062df_Vivawest_logo.webp",
                    "https://assets-global.website-files.com/6526646f727f20ce775836da/6530f7a5acbd338000d06e33_DHL_Logo.webp",
                    "https://assets-global.website-files.com/6526646f727f20ce775836da/6530f7a48148952cb631c79d_ESL_Horizontal_Logo_2019.webp",
                    "https://assets-global.website-files.com/6526646f727f20ce775836da/6530f7a5aea0e5cfda5062df_Vivawest_logo.webp",

                ],
                footerPara:"See our 93 reviews on",
        },
      globalObj:{
        globalHeading:"In compliance with global standards",
        globalImages:[
          "https://assets-global.website-files.com/6526646f727f20ce775836da/653120c4acbd33800002c7ed_E_SDG_logo_UN_emblem_square_trans_WEB%201.webp",
          "https://assets-global.website-files.com/6526646f727f20ce775836da/653120c48e048a2e5bad6535_GHG_Protocol_Logo%201.webp",
          "https://assets-global.website-files.com/6526646f727f20ce775836da/653120c4497d7432baec0968_E_SDG_logo_UN_emblem_square_trans_WEB%201-1.webp",
          "https://assets-global.website-files.com/6526646f727f20ce775836da/653120c52724c91cba55955d_science-based-targets-logo-vector%201.webp",
      ]},
      strategicallyObj:{        
        strategicallyHeading:"Implement sustainability comprehensively and strategically",
        strategicallyArray: [{
          strategicallyIcon:'<i class="fa fa-cloud-upload"></i>',
          strategicallyTagline:"Data export for reporting",
          strategicallyPara:"Export data for CO2 management with one click in common formats for your ESG reporting.",
        },{
          strategicallyIcon:'<i class="fa fa-clock-o"></i>',
          strategicallyTagline:"70% time savings compared to Excel",
          strategicallyPara:"Minimal effort for your carbon management in the platform, allowing you to focus on strategic measures.",
        },{
          strategicallyIcon:'<i class="fa fa-leaf"></i>',
          strategicallyTagline:"Local environmental protection",
          strategicallyPara:"Planting your own company forest as a climate-stable mixed forest. Near the company premises and with our climate forester.",
        },{
          strategicallyIcon:'<i class="fa fa-check"></i>',
          strategicallyTagline:"Anti-greenwashing guarantee",
          strategicallyPara:"Companies implement a holistic strategy through internal improvement of ESG criteria - with a focus on reduction.",
        }]
      },

      knowladgeObj:{        
        knowHeading:"Knowledge for a climate-compliant company of tomorrow.",
        knowArray: [{
          knowIcon:'https://assets-global.website-files.com/65393076fed878caea27cfc1/65dca7d8cc9f2673b72ebd6c_Teaser_Nachhaltigkeitsmarketing%20Planted-p-800.png',
          knowTagline:"Checklist: 10 tips for successful sustainability marketing.",
        },{
          knowIcon:'https://assets-global.website-files.com/65393076fed878caea27cfc1/65d3599a55a70b8eeb0defeb_teaser_ressourcen_ratgeber%20-%208-p-800.png',
          knowTagline:"How-to: Double materiality analysis according to ESRS.",
        },{
          knowIcon:'https://assets-global.website-files.com/65393076fed878caea27cfc1/6584501fb42f6da6c65850f7_teaser_whitepaper_v3%20(4)-p-800.png',
          knowTagline:"Top insights on the CSRD & ESRS standards.",
        }]
      },

      aboutObj:{
        aboutImage:"https://assets-global.website-files.com/6526646f727f20ce775836da/653184be15e0a08f5bbc220f_CTA%20Person%20image-p-500.webp",
        aboutHeading:"Scale your sustainability strategy with ease.",
        aboutPara:"We advise CFOs, CSOs, Sustainability Managers, and ESG Managers on their challenges in sustainability and reporting. Let's find out in a free consultation what we can do for you."
      }

    }
  },
  components:{
    PlatformTabs,
    SustainabilityComp,
    TestimonialComp,
    footerComp,
  },
  methods:{
    async landingForm(){
    var resp = await axios.post("http://127.0.0.1:5500/profile",{email:this.userEmail});
          if(resp.status == 201){
            this.userEmail = "";
            this.$refs.notify.innerHTML = "Done!";

            setTimeout(() => {
              this.$refs.notify.innerHTML = "Notify Me";              
            },2000);
          }
    },
  },

}

</script>


<style>

</style>


