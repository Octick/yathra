<template>
    <swiper :spaceBetween="30" :loop="true" :centeredSlides="true" :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
    }" :pagination="{
    clickable: true,
    dynamicBullets: true,
}" :navigation="false" :modules="modules" class="mySwiper">
        <swiper-slide>
            <div class="banner-main">
                <Skeleton v-if="img1IsLoading"/>
                <img v-show="!img1IsLoading" class="banner-main-img" src="../assets/banners/banner-main-1.webp" alt="" @load="img1Load">
                <div v-if="!img1IsLoading" class="content">
                    <p>EXPLORE THE BEAUTY OF <span class="col-theme">SRI LANKA</span></p>
                    <div class="arr-bot">
                        <div class="arr-bot-img-wrp">
                            <img class="img-an-arr" src="../assets/icons/test.gif" alt="arrow">
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="banner-main">
                <Skeleton v-if="img3IsLoading" />
                <img v-show="!img3IsLoading" class="banner-main-img" src="../assets/banners/banner-main-2.webp" alt="" @load="img3Load">
                <div v-if="!img3IsLoading" class="content">
                    <p>EXPLORE THE BEAUTY OF <span class="col-theme">SRI LANKA</span></p>
                    <div class="arr-bot">
                        <div class="arr-bot-img-wrp">
                            <img class="img-an-arr" src="../assets/icons/test.gif" alt="arrow">
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Skeleton from './skeleton-com.vue'

export default {

    data() {
        return {
            isMobile: false,
            img1IsLoading: true,
            img2IsLoading: true,
            img3IsLoading: true,
        }
    },

    components: {
        Swiper,
        SwiperSlide,
        Skeleton,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },

    methods: {
        getDisplaySize() {
            if (window.innerWidth >= 991) {
                this.isMobile = false;
            } else {
                this.isMobile = true;
            }
        },

        videoLoad() {
            this.img1IsLoading = false;
            this.img2IsLoading = false;
            this.img3IsLoading = false;
        },

        img1Load(){
            this.img1IsLoading = false;
        },

        img2Load(){
            this.img2IsLoading = false;
        },

        img3Load(){
            this.img3IsLoading = false;
        }
    }
};
</script>

<style scoped>
.banner-main {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    position: relative;
}

.banner-main-img,
.banner-main-vid {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    display: flex;
    justify-content: center;
}

.content {
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px;
    position: absolute;
    bottom: 10%;
}

.content p {
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    color: white;
    animation-name: fadeInUp;
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-delay: .5s;
}

@keyframes fadeInUp {
    from {
        transform: translateY(20px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.arr-bot {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.arr-bot-img-wrp {
    width: 100px;
}

.img-an-arr {
    max-width: 100%;
    max-height: 100%;
    transform: rotate(-90deg);
}

@media only screen and (max-width: 991px) {}

@media only screen and (max-width: 767px) {

    .content p {
        font-size: 30px;
    }
}
</style>
