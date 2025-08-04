<template>
    <div class="main">
        <swiper id="scroll-box" :slidesPerView="'auto'" :spaceBetween="30" :pagination="{
            clickable: true,
        }" :modules="modules" class="mySwiper" @slideChange="slideChange()" @reachEnd="reachEnd()">
            <swiper-slide id="item-1">
                <Skeleton v-if="img1IsLoading" />
                <img v-show="!img1IsLoading" @click="$router.push('/tours/3-nights-4-days')" class="img"
                    src="../assets/tours/1.webp" @load="img1Load()" alt="">
            </swiper-slide>
            <swiper-slide id="item-2">
                <Skeleton v-if="img2IsLoading" />
                <img v-show="!img2IsLoading" @click="$router.push('/tours/6-nights-7-days')" class="img"
                    src="../assets/tours/2.webp" @load="img2Load()" alt="">
            </swiper-slide>
            <swiper-slide id="item-3">
                <Skeleton v-if="img3IsLoading" />
                <img v-show="!img3IsLoading" @click="$router.push('/tours/8-nights-9-days')" class="img"
                    src="../assets/tours/3.webp" @load="img3Load()" alt="">
            </swiper-slide>
            <swiper-slide id="item-4">
                <Skeleton v-if="img4IsLoading" />
                <img v-show="!img4IsLoading" @click="$router.push('/tours/9-nights-10-days')" class="img"
                    src="../assets/tours/4.webp" @load="img4Load()" alt="">
            </swiper-slide>
        </swiper>
        <transition name="fade">
            <div v-if="!sliderEnd" class="more">
                <p class="pad-mar-no f-sz-sm">Swipe</p>
                <div class="more-img-box">
                    <img class="img-more" src="../assets/icons/forward-sm.png" alt="">
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import Skeleton from './skeleton-com.vue'

// import required modules
// import { Pagination } from 'swiper';

export default {

    data() {
        return {
            img1IsLoading: true,
            img2IsLoading: true,
            img3IsLoading: true,
            img4IsLoading: true,
            activeIndex: 0,
            sliderEnd: false,
        }
    },

    components: {
        Swiper,
        SwiperSlide,
        Skeleton,
    },
    setup() {
        return {
            // modules: [Pagination],
        };
    },

    methods: {
        scrollRight() {
            document.getElementById("scroll-box").scrollBy(800, 0);
        },

        scrollLeft() {
            document.getElementById("scroll-box").scrollBy(-800, 0);
        },

        img1Load() {
            this.img1IsLoading = false;
        },

        img2Load() {
            this.img2IsLoading = false;
        },

        img3Load() {
            this.img3IsLoading = false;
        },

        img4Load() {
            this.img4IsLoading = false;
        },

        handleScroll(event) {
            const scrollElement = event.target;
            const scrollWidth = scrollElement.scrollWidth;
            const clientWidth = scrollElement.clientWidth;
            const scrollEnd = scrollWidth - clientWidth;
            if (scrollElement.scrollLeft >= scrollEnd) {
                console.log("You have reached the end of the scroll box!");
                // Perform any other actions you need to do here
            }
        },

        slideChange() {
            this.sliderEnd = false;
        },

        reachEnd() {
            this.sliderEnd = true;
        }
    }
};
</script>

<style scoped>
.img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    display: flex;
    justify-content: center;
    cursor: pointer;
}

.main {
    position: relative;
}

.swiper {
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
}

.swiper-slide {
    width: 50%;
    height: 0;
    padding-bottom: 33%;
    position: relative;
    overflow: hidden;
}

.arr-wrp {
    width: 50px;
    height: 100%;
    padding: 0 50px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    z-index: 10;
}

.arr-wrp button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: none;
    position: absolute;
}

.arr-wrp button img {
    max-width: 60%;
    max-height: 60%;
}

.left {
    left: 0;
    top: 0;
    justify-content: flex-start;
}

.right {
    right: 0;
    top: 0;
    justify-content: flex-end;
}

.more {
    position: absolute;
    top: 45%;
    right: 20px;
    display: flex;
    align-items: center;
    z-index: 1;
}

.more p {
    color: white;
    text-align: center;
    font-size: 20px;
    text-shadow: 2px 2px 5px rgba(251, 251, 251, 0.582);
}

.more-img-box {
    width: 50px;
}

.img-more {
    width: 40px;
    position: relative;
    animation: moveLeftRight .5s linear infinite alternate;
}

@keyframes moveLeftRight {
  0% {
    left: 0;
  }
  100% {
    left: 5px;
  }
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: all .3s ease;
}

@media only screen and (max-width: 767px) {
    .swiper-slide {
        width: 90%;
        padding-bottom: 60%;
    }

    .arr-wrp {
        display: none;
    }
}

@media only screen and (max-width: 575px) {
    .more {
        top: 37%;
        right: 10px;
    }
}</style>