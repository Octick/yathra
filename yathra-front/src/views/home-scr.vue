<template>
    <div>
        <loading v-model:active="isLoading" loader="bars" color="#EB1221" background-color="black" />
        <div v-if="inquiryPopupIsVisible">
            <InquiryPopup @inquiryIsVisible="recieveInquiryFormVisible" :location="whereToNext" />
        </div>
        <Navi />
        <div class="main">
            <div class="main-banner">
                <MainBanner />
            </div>
            <div class="yt-video-container">
                <YtVid :videoUrl="videoURL" />
            </div>
            <div class="news-slider">
                <NewsSliser v-on:selectedLocation="getSelectedLocation" />
            </div>
            <div class="why-choose res-py container-xxl">
                <h2>Why Choose Yathra Tours & Travels?</h2>
                <h5>With over 15 years of Experience</h5>
                <br>
                <p>Yathra Tours & Travels is dedicated in providing the best services to traveler’s world over.</p>
                <div class="comp-3-wrp">
                    <div class="comp-3-item-wrp">
                        <div class="icon">
                            <img src="../assets/icons/1.png" alt="">
                        </div>
                        <div class="content">
                            <div class="heading">
                                <h6 class="pad-mar-no">BOOK WITH CONFIDENCE</h6>
                            </div>
                            <p class="f-sz-sm">Our team is here to make your life easier in your journey and help you
                                enjoy the best of what your destination has to offer. With our wide selection of trips and
                                activities, we offer you a hassle-free way to make valuable memories. Our team is passionate
                                about helping our customers find the perfect experiences to fit their needs. Whilst we
                                thrive to provide the highest quality customer service.
                            </p>
                        </div>
                        <div class="icon-arrow">
                            <img class="icn-dropdown" src="../assets/icons/collapse.png" alt="">
                        </div>
                    </div>
                    <div class="comp-3-item-wrp">
                        <div class="icon">
                            <img src="../assets/icons/2.png" alt="">
                        </div>
                        <div class="content">
                            <div class="heading">
                                <h6 class="pad-mar-no">PAYMENT PLANS</h6>
                            </div>
                            <p class="f-sz-sm">Planning a trip has never been easier. Our easy payment plans help you
                                break up the total cost of your trip into easy monthly instalments. With our payment
                                plan, you can make your dream trip a reality without having to stress about the
                                financial burden it may bring. There are no fees, no interest, and absolutely no
                                worries!</p>
                        </div>
                        <div class="icon-arrow">
                            <img class="icn-dropdown" src="../assets/icons/collapse.png" alt="">
                        </div>
                    </div>
                    <div class="comp-3-item-wrp">
                        <div class="icon">
                            <img src="../assets/icons/3.png" alt="">
                        </div>
                        <div class="content">
                            <div class="heading">
                                <h6 class="pad-mar-no">ALL TAKEN CARE OF</h6>
                            </div>
                            <p class="f-sz-sm">We Guarantee a Smooth and enjoyable journey. Our team of travel experts
                                provide a superior service taking care of all the small details while keeping you updated on
                                any new requirements. With 24/7 on-call Emergency assistance for a stress-free experience.
                            </p>
                        </div>
                        <div class="icon-arrow">
                            <img class="icn-dropdown" src="../assets/icons/collapse.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="holidays">
                <h2>Holidays</h2><br>
                <HolidayDeals v-on:selectedLocation="getSelectedLocation" />
            </div>
            <div class="reviews res-py">
                <h5 class="col-theme">CHECK OUT OUR</h5>
                <h2>Top Tour Reviews</h2>
                <Reviews />
            </div>
            <Inquiry :titleShow = "true" id="inq-home"/>
            <div class="trvl-lxr res-py">
                <div class="trvl-lxr-con">
                    <div class="trvl-lxr-con-le">
                        <h4>Make every moment of your holiday count</h4>
                    </div>
                    <div class="trvl-lxr-con-ri">
                        <div class="trvl-lxr-con-ri-point">
                            <img src="../assets/icons/done.png" alt="">
                            <p class="pad-mar-no">Unlock exclusive offers you won't find elsewhere</p>
                        </div>
                        <div class="trvl-lxr-con-ri-point">
                            <img src="../assets/icons/done.png" alt="">
                            <p class="pad-mar-no">Enjoy VIP inclusions and unbeatable value</p>
                        </div>
                        <div class="trvl-lxr-con-ri-point">
                            <img src="../assets/icons/done.png" alt="">
                            <p class="pad-mar-no">We're here for you with 24/7 customer service</p>
                        </div>
                    </div>
                </div>
                <!-- <hr> -->
            </div>
            <!-- <div class="trvl-lxr-partners">
                <p>We partner with hundreds of the world’s best Airlines and service suppliers.</p>
                <Partners />
            </div> -->
        </div>
        <SubFooter />
    </div>
</template>
<script>
import Navi from '../components/navigation-com.vue'
import MainBanner from '../components/main-banner-com.vue'
// import axios from 'axios'
// import Swal from 'sweetalert2'
import { mapState } from 'vuex'
import Loading from 'vue-loading-overlay';
import NewsSliser from '../components/news-slider-com.vue'
import InquiryPopup from '../components/inquiry-popup-com.vue'
import SubFooter from '../components/sub-footer-com.vue'
// import Partners from '../components/partners-ani-com.vue'
import HolidayDeals from '../components/holiday-deals-tst-com.vue'
import Reviews from '../components/reviews-com.vue'
import Inquiry from '../components/inquiry-com.vue'
import YtVid from '../components/yt-vid-com.vue'

export default {

    data() {
        return {
            isLoading: false,
            inquiryPopupIsVisible: false,
            videoURL: 'https://www.youtube.com/watch?v=pkg524oQyHc',
        }
    },

    computed: {
        ...mapState(['api'])
    },

    components: {
        Navi,
        MainBanner,
        NewsSliser,
        InquiryPopup,
        SubFooter,
        // Partners,
        HolidayDeals,
        Reviews,
        Loading,
        Inquiry,
        YtVid,
    },
}
</script>

<style scoped>

input {
    background-color: transparent;
}

.inp {
    border-radius: 0;
    border: 1px solid rgba(0, 0, 0, 0.226);
    outline: none;
}

.inp-err {
    border-radius: 0;
    border: 1px solid red;
    outline: none;
}

.why-choose {
    margin-top: 60px;
}

.why-choose h2,
.why-choose h5,
.why-choose p {
    text-align: center;
}

.comp-3-wrp {
    display: flex;
    justify-content: space-between;
    margin: 50px 0;
}

.comp-3-item-wrp {
    width: 400px;
    height: 65px;
    padding: 8px;
    margin: 10px 5px;
    box-shadow: 1px 1px 10px #8888881e, -1px -1px 10px #8888881e, 1px -1px 10px #8888881e, -1px 1px 10px #8888881e;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    overflow: hidden;
    transition: height .3s ease;
}

.comp-3-item-wrp:hover {
    height: 300px;
}

.comp-3-item-wrp .icon {
    max-width: 50px;
    max-height: 50px;
    border-radius: 50%;
}

.comp-3-item-wrp .icon img {
    max-width: 100%;
    max-height: 100%;
}

.comp-3-item-wrp .content {
    width: 100%;
    margin: 0 5px;
}

.comp-3-item-wrp .content .heading {
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.comp-3-item-wrp .content h6,
.comp-3-item-wrp .content p {
    text-align: center;
}

.comp-3-item-wrp .icon-arrow {
    max-width: 20px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.icn-dropdown {
    max-width: 100%;
    max-height: 100%;
    transition: all .3s ease;
}

.comp-3-item-wrp:hover .icn-dropdown {
    transform: rotate(180deg);
}

.plant-pro {
    padding: 20px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icn-plant {
    width: 80px;
    height: 80px;
    margin-right: 10px;
    border-radius: 50%;
}

.icn-plant img {
    max-width: 100%;
    max-height: 100%;
}

.holidays {
    margin: 50px 0;
}

.holidays h2 {
    text-align: center;
}

.reviews{
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: rgba(0, 0, 0, 0.030);
}

.txt-holidays {
    font-family: 'Font-1';
}

.link-holidays {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    transition: all .3s ease;
}

.link-holidays:hover {
    color: #EB1221;
}

.link-holidays:hover .arrow {
    border: 2px solid #EB1221;
}

.arrow {
    width: 50px;
    height: 50px;
    margin-left: 10px;
    border: 2px solid white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s ease;
}

.arrow img {
    max-width: 60%;
    max-height: 60%;
}

.where-to-next {
    width: 100%;
    height: 400px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/banners/banner-main-1.jpg');

}

.where-to-next-title {
    font-size: 40px;
    color: white;
    font-family: 'FontSpring';
    font-weight: bold;
}

.where-to-next-inp-btn-wrp {
    width: 700px;
    height: 40px;
    display: flex;
}

.where-to-next-inp-btn-wrp .icn-loc-box {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
}

.where-to-next-inp-btn-wrp .icn-loc-box img {
    max-width: 70%;
    max-height: 70%;
}

.where-to-next-inp-btn-wrp select {
    width: 100%;
    outline: none;
    border: none;
    border-radius: 0;
    background-color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.btn-where-to-pc {
    width: 250px;
    padding: 0 20px;
    border: none;
    color: white;
}

.btn-where-to-mob {
    width: 200px;
    height: 40px;
    padding: 0 20px;
    margin-top: 20px;
    border: none;
    color: white;
    display: none;
}

.inquiry-trans-enter-from,
.inquiry-trans-leave-to {
    opacity: 0;
}

.inquiry-trans-enter-active,
.inquiry-trans-leave-active {
    transition: all .3s ease;
}

.trvl-lxr-con {
    max-width: 890px;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
}

.trvl-lxr-con-le {
    width: 50%;
    display: flex;
    align-items: center;
}

.trvl-lxr-con-ri {
    width: 50%;
}

.trvl-lxr-con-ri-point {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

.trvl-lxr-con-ri-point img {
    width: 23px;
    height: 23px;
    margin-right: 10px;
}

.trvl-lxr-partners {
    text-align: center;
}

.trvl-lxr-partners p {
    padding: 0 10px;
}

.trvl-lxr-con-le {
    width: 100%;
}

.trvl-lxr-con-ri {
    width: 100%;
}

.inquiry {
    padding: 50px;
    background-image: url('../assets/banners/banner-main-1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

.inquiry-wrp {
    padding: 50px;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.753);
}

.sup {
    font-size: 40px;
    text-align: center;
    line-height: 40px;
    font-weight: bold;
    color: white;
}

.we-ve {
    font-size: 20px;
    font-weight: bold;
    color: white;
    text-align: center;
}

.error {
    color: red;
    text-align: left;
}

.field-icon-name-wrp {
    margin-bottom: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.field-icon {
    width: 17px;
    height: 17px;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.field-icon img {
    max-width: 100%;
    max-height: 100%;
}

.field-name {
    padding-top: 2px;
    font-weight: bold;
    font-size: 13px;
}

.field-box {
    margin-bottom: 20px;
}

.num-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.226);
    border-radius: 5px;
}

.btn-min-plus {
    width: 35px;
    height: 35px;
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-min-plus img {
    max-width: 30%;
    max-height: 30%;
}

#btn-min {
    border-right: 1px solid rgba(0, 0, 0, 0.226);
}

#btn-plus {
    border-left: 1px solid rgba(0, 0, 0, 0.226);
}

.inq-bot {
    display: flex;
}

.inq-bot-rad {
    width: 50%;
    display: flex;
    justify-content: space-between;
}

.inq-bot-btn {
    width: 50%;
    display: flex;
    justify-content: flex-end;
}

.btn-inq {
    width: 200px;
    height: 35px;
    border: none;
    color: white;
    font-weight: bold;
}

.inq-bot-type-p {
    padding-top: 3px;
}

@media only screen and (max-width: 1200px) {
    .comp-3-item-wrp:hover {
        height: 380px;
    }
}

@media only screen and (max-width: 991px) {
    .comp-3-item-wrp:hover {
        height: 440px;
    }

    .inquiry,
    .inquiry-wrp {
        padding: 50px 30px;
    }
}

@media only screen and (max-width: 900px) {
    .comp-3-item-wrp:hover {
        height: 550px;
    }
}

@media only screen and (max-width: 767px) {
    .comp-3-wrp {
        flex-direction: column;
    }

    .plant-pro {
        flex-direction: column;
    }

    .txt-plant {
        text-align: center;
    }

    .where-to-next {
        padding: 0 20px;
    }

    .where-to-next-title {
        font-size: 25px;
    }

    .where-to-next-inp-btn-wrp {
        width: 100%;
    }

    .btn-where-to-pc {
        display: none;
    }

    .btn-where-to-mob {
        display: block;
    }

    .comp-3-item-wrp:hover {
        height: 280px;
    }

    .comp-3-item-wrp {
        margin-left: auto;
        margin-right: auto;
    }

    .trvl-lxr-con {
        flex-direction: column;
    }

    .trvl-lxr-con-le {
        justify-content: center;
        margin-bottom: 20px;
    }

    .trvl-lxr-con-le h4 {
        text-align: center;
    }

    .icn-plant {
        margin-right: 0;
        margin-bottom: 10px;
    }

    .inquiry,
    .inquiry-wrp {
        padding: 50px 10px;
    }

    .inq-bot {
        flex-direction: column;
    }

    .inq-bot-rad {
        width: 100%;
    }

    .inq-bot-btn {
        width: 100%;
        margin-top: 20px;
        justify-content: center;
    }
}

@media only screen and (max-width: 575px) {
    .inq-bot-rad {
        flex-direction: column;
    }

    .check-b {
        margin-top: 10px;
    }

    .btn-inq {
        width: 100%;
    }
}

@media only screen and (max-width: 450px) {
    .comp-3-item-wrp {
        width: 100%;
    }

    .comp-3-item-wrp:hover {
        height: 300px;
    }
}

@media only screen and (max-width: 450px) {
    .comp-3-item-wrp:hover {
        height: 410px;
    }
}

@media only screen and (max-width: 300px) {
    .comp-3-item-wrp:hover {
        height: 550px;
    }
}

@media only screen and (max-width: 250px) {
    .comp-3-item-wrp:hover {
        height: 670px;
    }
}
</style>