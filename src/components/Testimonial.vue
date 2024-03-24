<template>
      <div class="container-fluid testimonial-container rightleft">
        <h3 class="secondary-font pb-5">{{userdata}}</h3>
        <div id="testimonial-slick" ref="slider">
            <div v-for="items in sliderCon" :key="items">
                <div class="test-slick-con">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex align-items-center test-client-img-con">
                            <div class="client-img-inner">
                                <img :src="items.clientImg" alt="img" class="img-fluid"/>
                            </div>
                            <div class="px-3 client-details-con">
                                <p class="mb-0">{{items.clientName}}</p>
                                <p class="mb-0"><b>{{items.clientDetails}}</b></p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-center client-brand">
                            <img :src="items.clientBrand" alt="testimonial-brand" class="img-fluid"/>
                        </div>
                    </div>
                    <div class="testimonial-details pt-4">
                        <p>
                            {{items.clientReview}}  
                        </p>
                    </div>
                    <div style="text-align:right;" class="pt-3">
                    <p class="testimonial-tag">{{items.clientType}}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick';

export default{
    name:"TestimonialComp",
    data(){
        return{
            testHeading:"Becoming climate-active together with over 400 companies.",
            sliderCon:[{
                clientImg:"https://assets-global.website-files.com/65393076fed878caea27cfc1/6554fabfc468552847aaea74_Iamge%20Mask%20Profile-min.png",
                clientName:"Emma & noah GmbH",
                clientDetails:"Aline Gallois-Trautmann,Founder & MD",
                clientBrand:"https://assets-global.website-files.com/65393076fed878caea27cfc1/655cbdb2a8cff48fd94104b2_Emma%20%26%20Noah%201.png",
                clientReview:"Together with our customers, we contribute with every order to preserving the ecosystem of the forest with all its protective functions.",
                clientType:"Starter",
            },{
                clientImg:"https://assets-global.website-files.com/65393076fed878caea27cfc1/6554fabfc468552847aaea74_Iamge%20Mask%20Profile-min.png",
                clientName:"Emma & noah GmbH",
                clientDetails:"Aline Gallois-Trautmann,Founder & MD",
                clientBrand:"https://assets-global.website-files.com/65393076fed878caea27cfc1/655cbdb2a8cff48fd94104b2_Emma%20%26%20Noah%201.png",
                clientReview:"Together with our customers, we contribute with every order to preserving the ecosystem of the forest with all its protective functions.",
                clientType:"Starter",
            },{
                clientImg:"https://assets-global.website-files.com/65393076fed878caea27cfc1/6554fabfc468552847aaea74_Iamge%20Mask%20Profile-min.png",
                clientName:"Emma & noah GmbH",
                clientDetails:"Aline Gallois-Trautmann,Founder & MD",
                clientBrand:"https://assets-global.website-files.com/65393076fed878caea27cfc1/655cbdb2a8cff48fd94104b2_Emma%20%26%20Noah%201.png",
                clientReview:"Together with our customers, we contribute with every order to preserving the ecosystem of the forest with all its protective functions.",
                clientType:"Starter",
            }]
        }
    },
    mounted() {
     //  $(document).ready(function(){
            $(this.$refs.slider).slick({
                autoplay: true,
                arrows: true,
                prevArrow: '<button class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
                nextArrow: '<button class="slick-next"><i class="fa fa-chevron-right"></i></button>'
            });

      // });
  },
  computed:{
    userdata(){
        return this.$store.state.user;
    }
  }
}
</script>
<style scoped>
.testimonial-container{
    background:url("https://assets-global.website-files.com/6526646f727f20ce775836da/6531549c04c4ee2f9cd64b70_Testimonial%20Background-min.webp");
    background-position:center;
    background-size:cover;
}
.testimonial-container h3{font-size:2.3rem;color:#fff;}
.test-slick-con{
    width:80%;
    background:#fff;
    border-radius:25px;
    padding:50px;
    margin:0 auto;
}
.test-client-img-con .client-img-inner{
    width:100px;
}
.client-details-con{
    text-align:left;
}
.client-brand{width:150px;}
.testimonial-details p{
    font-size:1.3rem;
    text-align:left;
}
.testimonial-tag{
  display:inline-block;
  font-size:1rem;
  font-weight:500;
  border-radius:50px;
  padding:5px 12px;
  background-color:#CDF2EB;
  color:#03C39A;
}

@media(max-width:992px){
    .about-us-image{
        height:200px;width:200px;
    }
}

        

</style>