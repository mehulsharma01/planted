<template>
    <div class="footer-container">
        <div class="row footer-container-inner">
            <div class="col-12 col-lg-3  footer-first-cols">
                <div class="footer-image-logo"><img src="https://assets-global.website-files.com/6526646f727f20ce775836da/652fbe5e53d7b6aa95dcd480_Planted_Logo_White.webp" alt="footer image logo" class="img-fluid"/></div>
                <p class="mb-0">The All-in-One Sustainability Platform</p>
                <a class="anchor-link" href="mailto:ms9057383404@gmail.com">hi@planted.green</a><br/>
                <button class="def-btn">Follow Link <i class="fa fa-external-link"></i></button>
            </div>

            <div class="col-4 col-lg-2 footer-cols">
                <p class="footer-title">Platform</p>
                <ul>
                    <li><a href="#" class="footer-links">Offer</a></li>
                    <li><a href="#" class="footer-links">Data analysis</a></li>
                    <li><a href="#" class="footer-links">Reduction</a></li>
                    <li><a href="#" class="footer-links">Environmental protection</a></li>
                    <li><a href="#" class="footer-links">Reporting</a></li>
                    <li><a href="#" class="footer-links">Trees in Germany</a></li>
                    <li><a href="#" class="footer-links">CO2 compensation</a></li>
                </ul>
            </div>


            <div class="col-4 col-lg-2 footer-cols">
                <p class="footer-title">About Planted</p>
                <ul>
                    <li><a href="#" class="footer-links">Offer</a></li>
                    <li><a href="#" class="footer-links">Data analysis</a></li>
                    <li><a href="#" class="footer-links">Reduction</a></li>
                    <li><a href="#" class="footer-links">Environmental protection</a></li>
                    <li><a href="#" class="footer-links">Reporting</a></li>
                    <li><a href="#" class="footer-links">Trees in Germany</a></li>
                    <li><a href="#" class="footer-links">CO2 compensation</a></li>
                </ul>
            </div>


            <div class="col-4 col-lg-2 footer-cols">
                <p class="footer-title">Resources</p>
                <ul>
                    <li><a href="#" class="footer-links">Offer</a></li>
                    <li><a href="#" class="footer-links">Data analysis</a></li>
                    <li><a href="#" class="footer-links">Reduction</a></li>
                    <li><a href="#" class="footer-links">Environmental protection</a></li>
                    <li><a href="#" class="footer-links">Reporting</a></li>
                    <li><a href="#" class="footer-links">Trees in Germany</a></li>
                    <li><a href="#" class="footer-links">CO2 compensation</a></li>
                </ul>
            </div>

            <div class="col-6 col-lg-3 footer-cols footer-last">
                <p class="footer-title">Newslatter</p>
                <form class="newslatter-footer">
                    <label class="py-2">Email<span class="news-imp">*</span></label>
                    <input type="email" name="email" class="input-ele" placeholder="Email address"/>

                    <div class="form-check py-3">
                        <input class="form-check-input" type="checkbox" value="" id="termsCheck">
                        <label class="form-check-label" for="termsCheck">
                            I agree to receive information from Planted. I have acknowledged the privacy policy regarding data processing.
                        </label>
                    </div>
                </form>
                <button class="def-btn mt-0">Submit</button>
            </div>
        </div>
        <div class="footer-bottom w-100 px-3 text-cdnter">
            <p class="mb-0">All Rights Reserved By <a class="anchor-link" href="https://www.linkedin.com/in/mayur-sevak-a6289116a/" target="_blank">@Mehul Sharma</a></p>
        </div>

    </div>
</template>

<script>
export default{
    name:"footerComp",
}

</script>
<style scoped>
.footer-container{
    background:#222C32;
}

.footer-container-inner{
    padding:50px;
    padding-bottom:30px;
    margin-right:0 !important;
}
.footer-first-cols .footer-image-logo{width:200px;padding-left:10px}
.footer-first-cols,.footer-last{text-align:left;}
.footer-first-cols p{color:#fff;padding:20px;padding-left:10px}
.anchor-link{color:#F095FE;font-weight:bold;margin-bottom:30px;padding-left:10px}
.footer-first-cols .def-btn, .footer-cols .def-btn{background:#F095FE;border:none;color:#000;margin-top:20px;}
.footer-container .footer-links{color:#fff;font-size:0.9rem;}
.footer-title{color:#fff;font-weight:500;font-size:1.2rem;text-align:left}
.footer-cols ul{list-style:none;padding:0;text-align:left;}
.footer-cols li{padding-bottom:5px;}
.footer-cols .news-imp{color:red;}
.footer-cols form{
    text-align:left;color:#fff;
}

.footer-cols form input[type='email']{
    height:40px;background:lightgray;
}

.footer-cols form input[type='checkbox']{width:20px;}
.form-check-label{margin-left:10px;}
.footer-bottom{background:#000;opacity:0.8}
.footer-bottom p{padding:10px 0;color:#fff}
.footer-bottom .anchor-link{padding-left:0}
</style>