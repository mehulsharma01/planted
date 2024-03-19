<template>
    <div class="container-fluid sustainability-container rightleft">
        <h3 class="secondary-font">{{sustainabilityHeading}}</h3>
        <p class="secondary-font pb-5">{{sustainabilityPara}}</p>
        <div class="sustainability-inner">
            <div class="row sustainability-inner-row mb-5 mt-3" v-for="items,index in sustainabilityObj" :key="index" :class="{'direction': index === 1}">
                <div class="col-md-6">
                    <div class="sustainability-left-con pb-5 pb-md-0">
                        <img :src="items.sustainabilityImage" alt="sustainability image" class="img-fluid"/>
                    </div>
                </div>
                <div class="col-md-6 sustainability-right-con">
                    <h5 class="secondary-font pb-4">{{items.sustainabilityTagline}}</h5>
                    <ul class="secondary-font d-flex">
                        <li v-for="list in items.sustainabilityList" :key="list" class="pb-3">{{list}}</li>
                    </ul>
                </div>

            </div>
        </div>
    
    </div>
</template>

<script>
export default{
    name:"SustainabilityComp",
    data(){
        return{
            sustainabilityHeading:"Sustainability strategy with Planted, simply honest",
            sustainabilityPara:"CO2 management and tangible environmental protection in Germany, CSRD-compliant in one platform solution",
            sustainabilityObj:[{
                sustainabilityImage:"https://assets-global.website-files.com/6526646f727f20ce775836da/65560759aec7caa6900ecf7a_Nachhaltigkeitsstrategie%20mit%20Planted%20Image%201-p-800.webp",
                sustainabilityTagline:"From sustainability reporting with expertise by your side",
                sustainabilityList:["TÜV-zertifizierte CO₂-Bilanzierung und -Analyse","TÜV-zertifizierte CO₂-Bilanzierung und -Analyse","TÜV-zertifizierte CO₂-Bilanzierung und -Analyse"]
            },{
                sustainabilityImage:"https://assets-global.website-files.com/6526646f727f20ce775836da/65560759822d3ce6929f2aca_Nachhaltigkeitsstrategie%20mit%20Planted%20Image%202-p-800.webp",
                sustainabilityTagline:"Transparent and local environmental protection",
                sustainabilityList:["Own company forest near the company premises","Highest quality ensured by internal climate forester","Transparency through geocoordinates for each tree","Planting of climate-stable mixed forests"]
            }]
        }
    }
}

</script>

<style scoped>
.sustainability-container{padding:80px 50px;padding-bottom:30px;}
.sustainability-container h3{font-size:2.5rem}
.sustainability-left-con img{border-radius:25px;}
.sustainability-right-con{text-align:left;padding-left:50px;display:flex;justify-content: center;flex-direction: column;}
.sustainability-right-con h5{font-size:1.7rem}
.sustainability-right-con ul{font-size:1.2rem;padding:0;padding-left:35px;flex-direction: column;}
.sustainability-inner-row.direction{flex-direction: row-reverse;}


@media(max-width:992px){
    .sustainability-container h3{
			font-size: 2rem;
		}
		.sustainability-right-con h5 {
			font-size: 1.5rem;
		}
        .sustainability-right-con ul {
            font-size: 1rem;
        }

        .strategically-col-con h5 {
            font-size: 1.1rem;
        }
}

@media(max-width:767px){
    .sustainability-left-con{
        flex-direction: row;
    }
}
</style>