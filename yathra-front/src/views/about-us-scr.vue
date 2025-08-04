<template>
    <div>
        <Navi />
        <div class="main">
            <div class="top-banner-wrp">
                <div class="top-banner">
                    <Skeleton v-if="imgIsLoading" />
                    <img v-show="!imgIsLoading" class="top-banner-img" src="../assets/about/About.jpg"
                        @load="mainImgLoading()" alt="">
                </div>
                <div class="vr-style-div-wrp">
                    <div class="vr-style-div col-theme-bg"></div>
                </div>
            </div>
            <div class="our-story">
                <h1>About Us<span class="col-theme">.</span></h1><br>
                <h4>At Yathra Tours & Travels, our aim is to provide you with a truly inspiring travel experience. We
                    understand
                    the importance of creating a bespoke journey and pride ourselves on our ability to deliver just
                    that.</h4><br>
                <p>Our team of experienced travel professionals have all the skills and knowledge to create a
                    tailor-made itinerary for you, taking into account your preferences and budget. Read on to find out
                    a little bit more about the Yathra's' way of travelling...</p>
            </div><br>
            <div class="ver-div-main">
                <div class="vr-style-div col-theme-bg"></div>
            </div>
            <div class="travel-prime-different res-py ">
                <h1>The Yathra Tours & Travels Difference<span class="col-theme">.</span></h1><br>
                <div class="tp-d-crd-wrp row">
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="tp-d-crd">
                            <div>
                                <img src="../assets/about/1-15-years-of-experience.png" alt="">
                            </div>
                            <p class="pad-mar-no">15 Years Travel Pioneers</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="tp-d-crd">
                            <div>
                                <img src="../assets/about/2-New-Zealand-owned.png" alt="">
                            </div>
                            <p class="pad-mar-no">Sri Lanka Owned</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="tp-d-crd">
                            <div>
                                <img src="../assets/about/3-Sustainability.png" alt="">
                            </div>
                            <p class="pad-mar-no">Sustainability in Action Program</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="tp-d-crd">
                            <div>
                                <img src="../assets/about/4-great-value.png" alt="">
                            </div>
                            <p class="pad-mar-no">Great value, no hidden extras</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="tp-d-crd">
                            <div>
                                <img src="../assets/about/5-peace-of-mind.png" alt="">
                            </div>
                            <p class="pad-mar-no">Your peace of mind</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="tp-d-crd">
                            <div>
                                <img src="../assets/about/6-expert-advice.png" alt="">
                            </div>
                            <p class="pad-mar-no">Expert Advice</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="tp-d-crd">
                            <div>
                                <img src="../assets/about/7-customer-service.png" alt="">
                            </div>
                            <p class="pad-mar-no">Customer Service</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="tp-d-crd">
                            <div>
                                <img src="../assets/about/8-best-price.png" alt="">
                            </div>
                            <p class="pad-mar-no">Best Price Guaranteed</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="we-bl">
                <div class="hr-li-wrp">
                    <div class="vr-style-div col-theme-bg"></div>
                </div>
                <div class="we-bl-box">
                    <p>We strive for Customer care and courtesy<span class="col-theme">.</span></p>
                </div>
            </div><br><br>
            <div class="grt-yo-ex res-py container-xxl">
                <div class="grt-yo-ex-points">
                    <h4>Great Value</h4>
                    <p>Our services in every aspect of your Yathra Tours & Travels experience are of exceptional standards.
                        That’s
                        why our tours offer great value for money and you can book with confidence, as all our flight offers
                        are ATOL protected, a certification assigned by the Civil Aviation Authority (CAA) as well as IATA
                        and ABTA memberships. We take pride in our customer service and ensure that you have a profound
                        journey from beginning to the end. Our team is available 24/7 to answer any queries or questions
                        that you may have before, during or after your travels.</p><br>
                    <h4>Your Peace of Mind</h4>
                    <p>Our team at Yathra Tours & Travels is dedicated to guarantee your safety and comfort right along
                        every step of
                        the way with a detailed travel guide with all the information you need to make sure your journey is
                        met in par with your highest expectations.
                    </p><br>
                    <h4>Expert Advice</h4>
                    <p>Our travel consultants are committed in providing you with the best advice and guidance for your
                        trip. With a wealth of knowledge gained from our own personal experiences and years of working with
                        airlines and service providers, we are passionate about all of our top destinations and can help you
                        plan your own personal tour.</p>
                </div>
                <div class="grt-yo-ex-img">
                    <img src="../assets/about/points-3.webp" alt="">
                </div>
            </div>
            <div class="ver-div-main">
                <div class="vr-style-div col-theme-bg"></div>
            </div><br>
            <div class="sus-ac res-py container-xxl">
                <h1>Supportive Care<span class="col-theme">.</span></h1><br>
                <p>When you choose to reserve your vacation through our services, you can be confident that we'll be by your
                    side at every juncture, addressing any challenges that may arise, and offering steadfast assistance
                    throughout the entirety of your travel experience.</p>
                <div class="globe-wrp">
                    <div>
                        <img src="../assets/about/supportive-care.webp" alt="">
                    </div>
                </div>
            </div><br>
            <div class="ver-div-main">
                <div class="vr-style-div col-theme-bg"></div>
            </div><br>
            <div class="sus-ac res-py container-xxl">
                <h1>Sustainability in Action<span class="col-theme">.</span></h1><br>
                <p>We have an ongoing commitment to responsible, respectful travel. We are passionate and curious, and
                    we take our responsibility to the planet very seriously. As a result, we are taking real actions to
                    reduce our environmental footprint and to do our part in protecting the planet. With our commitment
                    to sustainability, we are doing more to help make a positive impact on the world around us.</p>
                <div class="globe-wrp">
                    <div>
                        <img src="../assets/about/globe.png" alt="">
                    </div>
                </div>
            </div><br>
            <div class="see-us-ac">
                <div class="see-us-ac-ver-div-wrp">
                    <div class="vr-style-div col-theme-bg"></div>
                </div>
                <div class="see-us-ac-box">
                    <p>Are you ready to take to the Skies<span class="col-theme">.</span></p>
                    <p class="sm">Speak to one of our travel specialist now!</p>
                </div>
            </div>
            <div class="ver-div-main">
                <div class="vr-style-div col-theme-bg"></div>
            </div>
            <div class="logo-con">
                <div>
                    <img src="../assets/logo/yathra_tours_logo_black.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Navi from '../components/navigation-com.vue'
import Skeleton from '../components/skeleton-com.vue'

export default {

    data() {
        return {
            imgIsLoading: true,
        }
    },

    components: {
        Navi,
        Skeleton,
    },

    methods: {
        mainImgLoading() {
            this.imgIsLoading = false;
        }
    }
}

</script>

<style scoped>
.row {
    margin: 0
}

h1 {
    text-align: center;
}

.main {
    width: 100%;
}

.top-banner-wrp {
    position: relative;
}

.top-banner {
    width: 100%;
    height: 500px;
    clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 0% 100%);
}

.ver-div-main {
    display: flex;
    justify-content: center;
}

.vr-style-div-wrp {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 8%;
}

.vr-style-div {
    width: 3px;
    height: 70px;
}

.top-banner-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
}

.our-story {
    width: 600px;
    padding: 20px;
    padding-top: 0;
    margin: 0px auto 0 auto;
}

.our-story h1 {
    text-align: center;
}

.travel-prime-different h1 {
    text-align: center;
}

.tp-d-crd-wrp {
    max-width: 1000px;
    margin: 0 auto;
}

.tp-d-crd {
    max-width: 200px;
    height: 200px;
    padding: 10px;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.tp-d-crd div {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

.tp-d-crd div img {
    max-width: 100%;
    max-height: 100%;
}

.tp-d-crd p {
    text-align: center;
    color: #830009;
}

.we-bl {
    position: relative;
}

.we-bl .hr-li-wrp {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 8%;
}

.we-bl-box {
    width: 100%;
    height: 400px;
    padding: 10px;
    padding-bottom: 2%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    /* background-color: #eb12213b; */
    clip-path: polygon(0% 30%, 100% 0%, 100% 100%, 0% 100%);
}

.we-bl-box p,
.see-us-ac-box p {
    max-width: 700px;
    font-size: 60px;
    text-align: center;
}

.see-us-ac-box .sm {
    font-size: 20px;
}

.grt-yo-ex {
    margin: 0 auto;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
}

.grt-yo-ex-points {
    width: 50%;
    font-size: 13px;
}

.grt-yo-ex-img {
    width: 50%;
    margin: auto;
}

.grt-yo-ex-img img {
    max-width: 100%;
    max-height: 100%;
}



.sus-ac p {
    text-align: center;
}

.sus-ac .globe-wrp div {
    width: 300px;
    height: 300px;
    margin: 30px auto;
}

.sus-ac .globe-wrp {
    display: flex;
    justify-content: center;
}



.sus-ac .globe-wrp div img {
    max-width: 100%;
    max-height: 100%;
}

.see-us-ac {
    position: relative;
    margin-bottom: 30px;
}

.see-us-ac-ver-div-wrp {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 4%;
}

.see-us-ac-box {
    width: 100%;
    height: 340px;
    padding: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    clip-path: polygon(0% 30%, 100% 0%, 100% 100%, 0% 100%);
}

.logo-con {
    display: flex;
    justify-content: center;
    margin: 30px 0;
}

.logo-con div {
    max-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo-con div img {
    max-width: 100%;
    max-height: 180%;
}

@media only screen and (max-width: 991px) {

    .top-banner,
    .we-bl-box {
        height: 350px;
    }

    .vr-style-div-wrp {
        bottom: 6%;
    }

    .we-bl .hr-li-wrp {
        top: 6%;
    }

    .we-bl-box p,
    .see-us-ac-box p {
        font-size: 55px;
    }

    .grt-yo-ex {
        flex-direction: column;
    }

    .grt-yo-ex-points {
        width: 100%;
        order: 2;
    }

    .grt-yo-ex-img {
        width: 70%;
        order: 1;
    }
}

@media only screen and (max-width: 767px) {

    .top-banner,
    .we-bl-box {
        height: 280px;
    }

    .see-us-ac-box {
        height: 270px;
    }

    .vr-style-div-wrp {
        bottom: 4%;
    }

    .our-story {
        width: 100%;
    }

    .we-bl .hr-li-wrp {
        top: 4%;
    }

    .we-bl-box p,
    .see-us-ac-box p {
        font-size: 40px;
    }

    .grt-yo-ex-img {
        width: 100%;
    }
}

@media only screen and (max-width: 575px) {

    .we-bl-box p,
    .see-us-ac-box p {
        font-size: 30px;
    }

    .sus-ac div {
        width: 100%;
        height: 100%;
    }
}</style>