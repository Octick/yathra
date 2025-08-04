<template>
    <swiper :spaceBetween="30" :loop="true" :centeredSlides="true" :pagination="{
        clickable: true,
        dynamicBullets: false,
    }" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide>
            <div class="slider-main container-xxl">
                <div class="news-1">
                    <div class="news">
                        <div class="le">
                            <div class="content">
                                <h1>Cheap Flight Deals from Sri Lanka</h1>
                                <p></p>
                                <div class="dates-prices">
                                    <div class="icon-box">
                                        <img src="../assets/icons/celender.png" alt="">
                                    </div>
                                    <div class="content-box">
                                        <p class="sm pad-mar-no f-sz-sm">Departure Dates</p>
                                        <p class="lg pad-mar-no">May 2023 onwards</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="price-airline">
                                    <div class="dates-prices">
                                        <!-- <div class="icon-box">
                                            <img src="../assets/icons/price-tag.png" alt="">
                                        </div> -->
                                        <!-- <div class="content-box">
                                            <p class="sm pad-mar-no f-sz-sm">Price From</p>
                                            <p class="lg pad-mar-no">$1599</p>
                                        </div> -->
                                    </div>
                                    <div class="airline">
                                        <img src="../assets/logo/sl-air.png" alt="singapore airlines logo">
                                    </div>
                                </div>
                                <div class="read-more">
                                    <button @click="scrollToSection()" class="btn-read-more">
                                        <p class="txt-read-more pad-mar-no">Inquire Now</p>&nbsp;
                                        <div class="circ-read-more">
                                            <img src="../assets/icons/right.png" alt="">
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="ri">
                            <h1>Cheap Flight Deals from Sri Lanka</h1>
                            <div class="content">
                                <img class="content-img" src="../assets/news_banner/news-sl.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="slider-main container-xxl">
                <div class="news-1">
                    <div class="news">
                        <div class="le">
                            <div class="content">
                                <h1>Cheap Flight Deals from India</h1>
                                <p></p>
                                <div class="dates-prices">
                                    <div class="icon-box">
                                        <img src="../assets/icons/celender.png" alt="">
                                    </div>
                                    <div class="content-box">
                                        <p class="sm pad-mar-no f-sz-sm">Departure Dates</p>
                                        <p class="lg pad-mar-no">May 2023 onwards</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="price-airline">
                                    <div class="dates-prices">
                                        <!-- <div class="icon-box">
                                            <img src="../assets/icons/price-tag.png" alt="">
                                        </div> -->
                                        <!-- <div class="content-box">
                                            <p class="sm pad-mar-no f-sz-sm">Price From</p>
                                            <p class="lg pad-mar-no">$1699</p>
                                        </div> -->
                                    </div>
                                    <div class="airline">
                                        <img src="../assets/icons/nz-air.png" alt="">
                                    </div>
                                </div>
                                <div class="read-more">
                                    <button @click="scrollToSection()" class="btn-read-more">
                                        <p class="txt-read-more pad-mar-no">Inquire Now</p>&nbsp;
                                        <div class="circ-read-more">
                                            <img src="../assets/icons/right.png" alt="">
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="ri">
                            <h1>Cheap Flight Deals from India</h1>
                            <div class="content">
                                <img class="content-img" src="../assets/news_banner/news-india.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="slider-main container-xxl">
                <div class="news-1">
                    <div class="news">
                        <div class="le">
                            <div class="content">
                                <h1>Cheap Flight Deals from Philipines</h1>
                                <p></p>
                                <div class="dates-prices">
                                    <div class="icon-box">
                                        <img src="../assets/icons/celender.png" alt="">
                                    </div>
                                    <div class="content-box">
                                        <p class="sm pad-mar-no f-sz-sm">Departure Dates</p>
                                        <p class="lg pad-mar-no">May 2023 onwards</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="price-airline">
                                    <div class="dates-prices">
                                        <!-- <div class="icon-box">
                                            <img src="../assets/icons/price-tag.png" alt="">
                                        </div> -->
                                        <!-- <div class="content-box">
                                            <p class="sm pad-mar-no f-sz-sm">Price From</p>
                                            <p class="lg pad-mar-no">$1499</p>
                                        </div> -->
                                    </div>
                                    <div class="airline">
                                        <img src="../assets/logo/aus-air.png" alt="">
                                    </div>
                                </div>
                                <div class="read-more">
                                    <button @click="scrollToSection()" class="btn-read-more">
                                        <p class="txt-read-more pad-mar-no">Inquire Now</p>&nbsp;
                                        <div class="circ-read-more">
                                            <img src="../assets/icons/right.png" alt="">
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="ri">
                            <h1>Cheap Flight Deals from Philipines</h1>
                            <div class="content">
                                <img class="content-img" src="../assets/news_banner/news-phili.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="slider-main container-xxl">
                <div class="news-1">
                    <div class="news">
                        <div class="le">
                            <div class="content">
                                <h1>Cheap Flight Deals from London</h1>
                                <p></p>
                                <div class="dates-prices">
                                    <div class="icon-box">
                                        <img src="../assets/icons/celender.png" alt="">
                                    </div>
                                    <div class="content-box">
                                        <p class="sm pad-mar-no f-sz-sm">Departure Dates</p>
                                        <p class="lg pad-mar-no">May 2023 onwards</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="price-airline">
                                    <div class="dates-prices">
                                        <!-- <div class="icon-box">
                                            <img src="../assets/icons/price-tag.png" alt="">
                                        </div> -->
                                        <!-- <div class="content-box">
                                            <p class="sm pad-mar-no f-sz-sm">Price From</p>
                                            <p class="lg pad-mar-no">$2862</p>
                                        </div> -->
                                    </div>
                                    <div class="airline">
                                        <img src="../assets/logo/quan-air.png" alt="">
                                    </div>
                                </div>
                                <div class="read-more">
                                    <button @click="scrollToSection()" class="btn-read-more">
                                        <p class="txt-read-more pad-mar-no">Inquire Now</p>&nbsp;
                                        <div class="circ-read-more">
                                            <img src="../assets/icons/right.png" alt="">
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="ri">
                            <h1>Cheap Flight Deals from London</h1>
                            <div class="content">
                                <img class="content-img" src="../assets/news_banner/news-dubai.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="slider-main container-xxl">
                <div class="news-1">
                    <div class="news">
                        <div class="le">
                            <div class="content">
                                <h1>Cheap Flight Deals from Canada</h1>
                                <p></p>
                                <div class="dates-prices">
                                    <div class="icon-box">
                                        <img src="../assets/icons/celender.png" alt="">
                                    </div>
                                    <div class="content-box">
                                        <p class="sm pad-mar-no f-sz-sm">Departure Dates</p>
                                        <p class="lg pad-mar-no">May 2023 onwards</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="price-airline">
                                    <div class="dates-prices">
                                        <!-- <div class="icon-box">
                                            <img src="../assets/icons/price-tag.png" alt="">
                                        </div> -->
                                        <!-- <div class="content-box">
                                            <p class="sm pad-mar-no f-sz-sm">Price From</p>
                                            <p class="lg pad-mar-no">$2482</p>
                                        </div> -->
                                    </div>
                                    <div class="airline">
                                        <img src="../assets/logo/nz-air.png" alt="">
                                    </div>
                                </div>
                                <div class="read-more">
                                    <button @click="scrollToSection()" class="btn-read-more">
                                        <p class="txt-read-more pad-mar-no">Inquire Now</p>&nbsp;
                                        <div class="circ-read-more">
                                            <img src="../assets/icons/right.png" alt="">
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="ri">
                            <h1>Cheap Flight Deals from Canada</h1>
                            <div class="content">
                                <img class="content-img" src="../assets/news_banner/news-sing.jpg" alt="">
                            </div>
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


export default {
    data() {
        return {
        }
    },

    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },

    methods: {
        recieveInquiryFormVisible(recieveInquiryFormVisible) {
            this.inquiryPopupIsVisible = recieveInquiryFormVisible.isVisible;
        },

        scrollToSection() {
            const element = document.getElementById('inq-home');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
};
</script>

<style scoped>
h1 {
    font-size: 23px;
}

.slider-main {
    padding: 30px 100px;
}

.news-wrp {
    display: flex;
    overflow: hidden;
}

.slider-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.le-arr-box,
.ri-arr-box {
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-arrow {
    width: 100%;
    height: 50px;
    border: none;
    background-color: transparent;
}

.btn-arrow img {
    width: 20px;
}

.news {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.le {
    max-width: 50%;
    display: flex;
    justify-content: flex-start;
}

.le h1 {
    display: block;
}

.ri {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
}

.ri h1 {
    display: none;
}

.content {
    width: 90%;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
}

.content-img {
    height: 100%;
}

.dates-prices {
    display: flex;
    align-items: center;
}

.dates-prices .icon-box {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.103);
}

.dates-prices .icon-box img {
    max-width: 60%;
    max-height: 60%;
}

.dates-prices .content-box .sm,
.read-more button p {
    color: grey;
}

.price-airline {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.price-airline img {
    width: 200px;
}

.read-more {
    margin-top: 30px;
}

.txt-read-more,
.circ-read-more {
    transition: all .3s ease;
}

.btn-read-more:hover .txt-read-more {
    color: #EB1221;
}

.btn-read-more:hover .circ-read-more {
    border: 2px solid #EB1221;
}

.read-more button {
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
}

.circ-read-more {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid grey;
    border-radius: 50%;
}

.circ-read-more img {
    max-width: 50%;
    max-height: 50%;
}

.content-box-flex {
    display: flex;
    justify-content: space-between;
}

.airline {
    width: 160px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.airline img {
    max-width: 100%;
    max-height: 100%;
}

@media only screen and (max-width: 991px) {
    .slider-main {
        padding: 30px 50px;
    }

    .airline {
        max-width: 120px;
    }
}

@media only screen and (max-width: 767px) {

    .slider-main {
        padding: 20px 10px;
    }

    .news {
        flex-direction: column-reverse;
    }

    .le,
    .ri {
        max-width: 100%;
    }

    .ri {
        align-items: center;
    }

    .le h1 {
        display: none;
    }

    .ri h1 {
        margin-top: 50px;
        display: block;
        text-align: center;
    }

    .content {
        width: 100%;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .content-img {
        height: auto;
        width: 100%;
    }

    /* .airline {
        max-width: 100px;
    } */

    .news {
        align-items: normal;
    }
}
</style>