<template>
    <div>
        <loading v-model:active="isLoading" loader="bars" color="#EB1221" background-color="black" />
        <Navi />
        <div class="main">
            <div class="top-banner-wrp">
                <div class="top-banner">
                    <Skeleton v-if="mainImgIsLoading" />
                    <img v-show="!mainImgIsLoading" class="top-banner-img" src="../assets/holidays/Tours.webp"
                        @load="mainImgLoad()" alt="">
                </div>
                <div class="vr-style-div-wrp">
                    <div class="vr-style-div col-theme-bg"></div>
                </div>
            </div>
            <div class="our-story">
                <h1>Cheap tours like no other<span class="col-theme">.</span></h1><br>
                <h4>Our team of experienced travel professionals are well<span class="coma">-</span>versed in the art of
                    planning the perfect
                    vacation. With years of experience under their belt and a passion for finding the best deals, we<span
                        class="coma">'</span>re
                    sure that you<span class="coma">'</span>ll find the perfect holiday to fit your budget and requirements.
                    We offer a wide range
                    of options, from luxury resorts to budget<span class="coma">-</span>friendly apartments, and can even
                    tailor<span class="coma">-</span>make an itinerary
                    to suit your needs.</h4><br>
                <p>So if you’re looking for a unique experience that goes beyond your imagination, let us help you make
                    your dream trip come true.</p>
            </div><br>
            <div class="flight-deals">
                <Deals />
            </div>
            <div class="business-travel">
                <div class="col-theme-bg">
                    <h1 style="color: white">Leisure Travel.</h1>
                    <p>
                        Dreaming of a fabulous vacation? We’re here to make it happen! With our team of experienced travel
                        agents, we’ll make sure that your trip is as perfect and stress-free as possible. From booking
                        flights and accommodations to creating the perfect itinerary, we’ll collaborate our services to your
                        needs and make sure you have a memorable experience.
                    </p>
                </div>
                <div class="bu-tr-icn-wrp">
                    <div class="points-box">
                        <div class="points-box-icon">
                            <img src="../assets/icons/Personilzed-Packages.png" alt="">
                        </div>
                        <p style="text-align: center;" class="pad-mar-no f-sz-sm">Personalized worldwide packages</p>
                    </div>
                    <div class="points-box">
                        <div class="points-box-icon">
                            <img src="../assets/icons/Hassle-free-booking.png" alt="">
                        </div>
                        <p style="text-align: center;" class="pad-mar-no f-sz-sm">Hassle free booking process</p>
                    </div>
                    <div class="points-box">
                        <div class="points-box-icon">
                            <img src="../assets/icons/Financial-Protection.png" alt="">
                        </div>
                        <p style="text-align: center;" class="pad-mar-no f-sz-sm">Flexible Payment Options</p>
                    </div>
                    <div class="points-box">
                        <div class="points-box-icon">
                            <img src="../assets/icons/Experienced-Staff.png" alt="">
                        </div>
                        <p style="text-align: center;" class="pad-mar-no f-sz-sm">Experienced staff</p>
                    </div>
                    <div class="points-box">
                        <div class="points-box-icon">
                            <img src="../assets/icons/Protected-Holidays.png" alt="">
                        </div>
                        <p style="text-align: center;" class="pad-mar-no f-sz-sm">Fully protected Holidays</p>
                    </div>
                </div>
            </div>
            <Inquiry />
        </div>
    </div>
</template>
<script>
import Navi from '../components/navigation-com.vue'
import Deals from '../components/tours-deals-com.vue'
import { mapState } from 'vuex';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Skeleton from '../components/skeleton-com.vue'
import Inquiry from '../components/inquiry-com.vue'

export default {

    data() {
        return {
            mainImgIsLoading: true,
            isLoading: false,
        }
    },

    computed: {
        ...mapState(['api'])
    },

    components: {
        Navi,
        Deals,
        Loading,
        Skeleton,
        Inquiry,
    },

    methods: {        
        mainImgLoad() {
            this.mainImgIsLoading = false;
        }
    }
}
</script>
<style scoped>
h1 {
    text-align: center;
}

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

/* button {
    width: 150px;
    height: 45px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 0;
    border-radius: 30px;
    color: white;
} */

.top-banner-wrp {
    position: relative;
}

.top-banner {
    width: 100%;
    height: 500px;
    clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 0% 100%);
}

.top-banner-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
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

.our-story {
    width: 600px;
    padding: 20px;
    padding-top: 0;
    margin: 0px auto 0 auto;
}

.our-story h1 {
    text-align: center;
}

.flight-deals {
    margin-bottom: 50px;
}

.business-travel {
    position: relative;
}

.business-travel .col-theme-bg {
    padding: 30px 10px 100px 10px;
}

.business-travel .col-theme-bg p {
    max-width: 700px;
    margin: 30px auto;
    text-align: center;
    color: white;
}

.bu-tr-icn-wrp {
    width: 950px;
    margin: auto;
    position: relative;
    bottom: 75px;
    display: flex;
    justify-content: space-between;
}

.bu-tr-icn-wrp .points-box {
    width: 170px;
    height: 170px;
    padding: 10px;
    padding-top: 30px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 1px 1px 10px #8888881e, -1px -1px 10px #8888881e, 1px -1px 10px #8888881e, -1px 1px 10px #8888881e;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.points-box-icon img{
    max-width: 80%;
    max-height: 80%;
    transition: all .3s ease;
}

.points-box:hover>.points-box-icon img {
    max-width: 100%;
    max-height: 100%;
    transition: all .3s ease;
}

.bu-tr-icn-wrp .points-box p {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 11px;
}

.points-box-icon {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 991px) {
    .top-banner {
        height: 400px;
    }

    .vr-style-div-wrp {
        bottom: 6%;
    }

    .bu-tr-icn-wrp {
        width: 750px;
    }

    .bu-tr-icn-wrp .points-box {
        width: 140px;
        height: 140px;
        padding-top: 20px;
    }

    .points-box-icon {
        width: 50px;
        height: 50px;
        margin-bottom: 5px;
    }

    .points-box-icon p {
        font-size: 10px;
    }
}

@media only screen and (max-width: 767px) {

    .top-banner {
        height: 300px;
    }

    .vr-style-div-wrp {
        bottom: 4%;
    }

    .our-story {
        width: 100%;
    }

    .bu-tr-icn-wrp .points-box {
        width: 180px;
        height: 180px;
        padding-top: 40px;
    }

    .bu-tr-icn-wrp {
        width: 100%;
        flex-direction: column;
        align-items: center;
        background-color: #EB1221;
    }

    .bu-tr-icn-wrp .points-box {
        margin-bottom: 20px;
    }

    .inquiry-wrp {
        width: 100%;
    }

    .points-box-icon {
        width: 70px;
        height: 70px;
    }
}
</style>