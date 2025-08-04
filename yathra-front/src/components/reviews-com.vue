<template>
    <div class="lg container-xxl">
        <swiper :spaceBetween="30" :loop="true" :centeredSlides="true" :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
    }" :pagination="{
            clickable: true,
            dynamicBullets: true,
        }" :navigation="false" :modules="modules" class="mySwiper">
            <!-- screen large -->
            <swiper-slide>
                <div class="reviews-container">
                    <div class="review-box">
                        <img class="comma" src="../assets//icons/comma.png" alt="">
                        <p class="name pad-mar-no">{{ reviews[0].name }}</p>
                        <div class="divider"></div>
                        <div class="rating-container">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                        </div>
                        <p class="date pad-mar-no f-sz-sm">{{ reviews[0].date }} | Review from {{ reviews[0].platform }}</p>
                        <p class="review">{{ reviews[0].desc }}</p>
                    </div>
                    <div class="review-box">
                        <img class="comma" src="../assets//icons/comma.png" alt="">
                        <p class="name pad-mar-no">{{ reviews[1].name }}</p>
                        <div class="divider"></div>
                        <div class="rating-container">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                        </div>
                        <p class="date pad-mar-no f-sz-sm">{{ reviews[1].date }} | Review from {{ reviews[1].platform }}</p>
                        <p class="review">{{ reviews[1].desc }}</p>
                    </div>
                    <div class="review-box">
                        <img class="comma" src="../assets//icons/comma.png" alt="">
                        <p class="name pad-mar-no">{{ reviews[2].name }}</p>
                        <div class="divider"></div>
                        <div class="rating-container">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                        </div>
                        <p class="date pad-mar-no f-sz-sm">{{ reviews[2].date }} | Review from {{ reviews[2].platform }}</p>
                        <p class="review">{{ reviews[2].desc }}</p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="reviews-container">
                    <div class="review-box">
                        <img class="comma" src="../assets//icons/comma.png" alt="">
                        <p class="name pad-mar-no">{{ reviews[3].name }}</p>
                        <div class="divider"></div>
                        <div class="rating-container">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                        </div>
                        <p class="date pad-mar-no f-sz-sm">{{ reviews[3].date }} | Review from {{ reviews[3].platform }}</p>
                        <p class="review">{{ reviews[3].desc }}</p>
                    </div>
                    <div class="review-box">
                        <img class="comma" src="../assets//icons/comma.png" alt="">
                        <p class="name pad-mar-no">{{ reviews[4].name }}</p>
                        <div class="divider"></div>
                        <div class="rating-container">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                        </div>
                        <p class="date pad-mar-no f-sz-sm">{{ reviews[4].date }} | Review from {{ reviews[4].platform }}</p>
                        <p class="review">{{ reviews[4].desc }}</p>
                    </div>
                    <div class="review-box">
                        <img class="comma" src="../assets//icons/comma.png" alt="">
                        <p class="name pad-mar-no">{{ reviews[5].name }}</p>
                        <div class="divider"></div>
                        <div class="rating-container">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                        </div>
                        <p class="date pad-mar-no f-sz-sm">{{ reviews[5].date }} | Review from {{ reviews[5].platform }}</p>
                        <p class="review">{{ reviews[5].desc }}</p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
    <div class="md container-xxl">
        <swiper :spaceBetween="30" :loop="true" :centeredSlides="true" :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
    }" :pagination="{
            clickable: true,
            dynamicBullets: true,
        }" :navigation="false" :modules="modules" class="mySwiper">
            <!-- screen large -->
            <swiper-slide>
                <div class="reviews-container">
                    <div class="review-box">
                        <img class="comma" src="../assets//icons/comma.png" alt="">
                        <p class="name pad-mar-no">{{ reviews[0].name }}</p>
                        <div class="divider"></div>
                        <div class="rating-container">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                        </div>
                        <p class="date pad-mar-no f-sz-sm">{{ reviews[0].date }} | Review from {{ reviews[0].platform }}</p>
                        <p class="review">{{ reviews[0].desc }}</p>
                    </div>
                    <div class="review-box">
                        <img class="comma" src="../assets//icons/comma.png" alt="">
                        <p class="name pad-mar-no">{{ reviews[1].name }}</p>
                        <div class="divider"></div>
                        <div class="rating-container">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                        </div>
                        <p class="date pad-mar-no f-sz-sm">{{ reviews[1].date }} | Review from {{ reviews[1].platform }}</p>
                        <p class="review">{{ reviews[1].desc }}</p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="reviews-container">
                    <div class="review-box">
                        <img class="comma" src="../assets//icons/comma.png" alt="">
                        <p class="name pad-mar-no">{{ reviews[2].name }}</p>
                        <div class="divider"></div>
                        <div class="rating-container">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                        </div>
                        <p class="date pad-mar-no f-sz-sm">{{ reviews[2].date }} | Review from {{ reviews[2].platform }}</p>
                        <p class="review">{{ reviews[2].desc }}</p>
                    </div>
                    <div class="review-box">
                        <img class="comma" src="../assets//icons/comma.png" alt="">
                        <p class="name pad-mar-no">{{ reviews[3].name }}</p>
                        <div class="divider"></div>
                        <div class="rating-container">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                        </div>
                        <p class="date pad-mar-no f-sz-sm">{{ reviews[3].date }} | Review from {{ reviews[3].platform }}</p>
                        <p class="review">{{ reviews[3].desc }}</p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="reviews-container">
                    <div class="review-box">
                        <img class="comma" src="../assets//icons/comma.png" alt="">
                        <p class="name pad-mar-no">{{ reviews[4].name }}</p>
                        <div class="divider"></div>
                        <div class="rating-container">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                        </div>
                        <p class="date pad-mar-no f-sz-sm">{{ reviews[4].date }} | Review from {{ reviews[4].platform }}</p>
                        <p class="review">{{ reviews[4].desc }}</p>
                    </div>
                    <div class="review-box">
                        <img class="comma" src="../assets//icons/comma.png" alt="">
                        <p class="name pad-mar-no">{{ reviews[5].name }}</p>
                        <div class="divider"></div>
                        <div class="rating-container">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                        </div>
                        <p class="date pad-mar-no f-sz-sm">{{ reviews[5].date }} | Review from {{ reviews[5].platform }}</p>
                        <p class="review">{{ reviews[5].desc }}</p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
    <div class="sm">
        <swiper :spaceBetween="30" :loop="true" :centeredSlides="true" :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
    }" :pagination="{
            clickable: true,
            dynamicBullets: true,
        }" :navigation="false" :modules="modules" class="mySwiper">
            <!-- screen large -->
            <swiper-slide>
                <div class="reviews-container">
                    <div class="review-box">
                        <img class="comma" src="../assets//icons/comma.png" alt="">
                        <p class="name pad-mar-no">{{ reviews[0].name }}</p>
                        <div class="divider"></div>
                        <div class="rating-container">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                        </div>
                        <p class="date pad-mar-no f-sz-sm">{{ reviews[0].date }} | Review from {{ reviews[0].platform }}</p>
                        <p class="review">{{ reviews[0].desc }}</p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="reviews-container">
                    <div class="review-box">
                        <img class="comma" src="../assets//icons/comma.png" alt="">
                        <p class="name pad-mar-no">{{ reviews[1].name }}</p>
                        <div class="divider"></div>
                        <div class="rating-container">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                        </div>
                        <p class="date pad-mar-no f-sz-sm">{{ reviews[1].date }} | Review from {{ reviews[1].platform }}</p>
                        <p class="review">{{ reviews[1].desc }}</p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="reviews-container">
                    <div class="review-box">
                        <img class="comma" src="../assets//icons/comma.png" alt="">
                        <p class="name pad-mar-no">{{ reviews[2].name }}</p>
                        <div class="divider"></div>
                        <div class="rating-container">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                        </div>
                        <p class="date pad-mar-no f-sz-sm">{{ reviews[2].date }} | Review from {{ reviews[2].platform }}</p>
                        <p class="review">{{ reviews[2].desc }}</p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="reviews-container">
                    <div class="review-box">
                        <img class="comma" src="../assets//icons/comma.png" alt="">
                        <p class="name pad-mar-no">{{ reviews[3].name }}</p>
                        <div class="divider"></div>
                        <div class="rating-container">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                        </div>
                        <p class="date pad-mar-no f-sz-sm">{{ reviews[3].date }} | Review from {{ reviews[3].platform }}</p>
                        <p class="review">{{ reviews[3].desc }}</p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="reviews-container">
                    <div class="review-box">
                        <img class="comma" src="../assets//icons/comma.png" alt="">
                        <p class="name pad-mar-no">{{ reviews[4].name }}</p>
                        <div class="divider"></div>
                        <div class="rating-container">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                        </div>
                        <p class="date pad-mar-no f-sz-sm">{{ reviews[4].date }} | Review from {{ reviews[4].platform }}</p>
                        <p class="review">{{ reviews[4].desc }}</p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="reviews-container">
                    <div class="review-box">
                        <img class="comma" src="../assets//icons/comma.png" alt="">
                        <p class="name pad-mar-no">{{ reviews[5].name }}</p>
                        <div class="divider"></div>
                        <div class="rating-container">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                            <img class="star" src="../assets//icons/star_en.png" alt="">
                        </div>
                        <p class="date pad-mar-no f-sz-sm">{{ reviews[5].date }} | Review from {{ reviews[5].platform }}</p>
                        <p class="review">{{ reviews[5].desc }}</p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
    <div class="button-container">
        <button @click="openTripAdvisor()" class="btn-review pad-mar-no col-theme-bg">
            <div class="icon-btn-review">
                <img class="icon" src="../assets/logo/tripadvisor_logo.png" alt="">
            </div>
            <p class="txt-btn-review pad-mar-no">LEAVE YOUR REVIEW</p>
        </button>
    </div>
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
            reviews: [
                { name: 'KHALFALLAH O', date: 'Aug 2021', platform: 'Tripadvisor', desc: 'Honestly the best tour ever in SriLanka respectful Man and always at time when Excursion start in the morning he arranges everything and he stops in the road for photo or fruit.very professional guide tour. Thank you for everything you are a good person.' },
                { name: 'SUHANI S', date: 'Oct 2021', platform: 'Tripadvisor', desc: 'We experienced the most beautiful parts of Sri Lanka with the help of the best and most cooperative tour guide Hasintha. He knows places which are unexplored and away from the tourists. Always stop by to show mini towns and treks and cafes. Plan your trip with them and you will have the best experience' },
                { name: 'JENNI N', date: 'Sep 2021', platform: 'Tripadvisor', desc: 'I definitely recommend Yathra Tours. Hasintha was our driver in Sri Lanka on a 12 day tour. He is very knowledgeable and contributed greatly to the success of our holiday. We never felt rushed and once he got to know us, Hasintha made some great suggestions of places to visit that he thought would suit our interests. The roads in Sri Lanka can be a little chaotic, but we always felt safe and well looked after, and Hasintha knew where to stop for those perfect photo opportunities.' },
                { name: 'ROSALINDA AIDEN', date: 'Nov 2022', platform: 'Google', desc: 'We were recommended "Yathra Tours & Travels", planned our 10 days 9 nights tour with them, suprisingly we were picked and taken by Chauffer Dhammika who is really nice, kind and knew to offer best of Sri Lanka, It was an exciting exploration, and it\'s five out of five good job did by Yathra Tours & Travels, We do not hesitate to recommend Yathra TOurs & Travels to anyone hat wants explore this beautiful Island. Wish you a Very all the Best to Yathra Tours.' },
                { name: 'ALIYA THOMAS', date: 'Dec 2022', platform: 'Gogle', desc: 'We experienced the most beautiful parts of Sri Lanka with the help of best and most cooparative tour guid Hashintha. He knows places which are unexplored and away from the tourists. I highly recomended Yathra Tours & Travels, specially thanks for Hashintha.' },
                { name: 'POOL DAVID', date: 'Dec 2022', platform: 'Google', desc: 'Honestly the best tour ever in Sri Lanka respectful man and always at time when excursion start in the morning he arrenge everything. In our group 6 people, We spend 11 days in Sri Lanka. We enjoy a lots, Also i like to mention here It\'s a wonderful service every things perfect. I take the chance special thanks to the Yathra Tours & Travels propretior Mr Hashintha he is arrenged perfect tour for us.' },
            ]
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
        openTripAdvisor() {
            let URL = "https://www.tripadvisor.com/UserReviewEdit-g946552-d24100368-Yathra_Tours-Gampaha_Western_Province.html";
            window.open(URL, "_blank");
        }
    }
};
</script>

<style scoped>
p {
    text-align: center;
}

.lg {
    display: block;
}

.md,
.sm {
    display: none;
}

.reviews-container {
    display: flex;
    justify-content: space-between;
}

.review-box {
    width: 100%;
    padding: 50px 20px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    position: relative;
}

.review-box-empty{
    width: 100%;
}

.comma {
    width: 150px;
    height: 150px;
    opacity: .1;
    position: absolute;
    top: 40%;
    z-index: 1;
}

.name {
    font-weight: bold;
    font-size: 20px;
    z-index: 2;
}

.divider {
    width: 80px;
    height: 1px;
    margin: 10px 0;
    background-color: black;
    z-index: 2;
}

.rating-container {
    width: 160px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    z-index: 2;
}

.star {
    width: 30px;
    height: 30px;
    z-index: 2;
}

.date {
    color: rgb(162, 162, 162);
    margin-bottom: 50px;
    z-index: 2;
}

.review {
    font-weight: bold;
    color: rgb(131, 130, 130);
    z-index: 2;
}

.button-container {
    display: flex;
    justify-content: center;
}

.btn-review {
    width: 250px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 50px;
}

.icon-btn-review {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00AF87;
}

.icon-btn-review .icon {
    max-width: 80%;
    max-height: 80%;
}

.txt-btn-review {
    font-weight: bold;
    color: white;
}

@media only screen and (max-width: 991px) {

    .lg,
    .sm {
        display: none;
    }

    .md {
        display: block;
    }
}

@media only screen and (max-width: 767px) {

    .lg,
    .md {
        display: none;
    }

    .sm {
        display: block;
    }
}

@media only screen and (max-width: 565px) {
    .review-box {
        margin: 0px;
    }
}</style>
