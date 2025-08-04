<template>
    <div>
        <Navi />
        <div class="main">
            <div class="top-banner-wrp">
                <div class="top-banner">
                    <Skeleton v-if="imgIsLoading" />
                    <img v-show="!imgIsLoading" class="top-banner-img" src="../assets/activities/activities.webp"
                        @load="mainImgLoading()" alt="">
                </div>
                <div class="vr-style-div-wrp">
                    <div class="vr-style-div col-theme-bg"></div>
                </div>
            </div>
            <div class="content">
                <div class="content-main container-xxl">
                    <h4>Things to do in Sri Lanka</h4>
                    <p>Discover the wondered of Sri Lanka with it's pristine beaches, antciant temples, and lush tea
                        plantation. Immerese in the rich culture of Colombo, Explore the rock fortress of Sigiriya, and spot
                        elephants in Yala National Park. Don't miss the breathtaking landscape of Ella and the tranquality
                        of Galle's historic fort. Sri Lanka offeres an unforgettable adventure for every traveler. </p>
                </div>
                <div class="content-sub container-xxl">
                    <div class="content-sub">
                        <h4 class="sub-title">City Tour</h4>
                        <div class="content-sub-divide">
                            <div class="left">
                                <div class="img-box">
                                    <img src="../assets/activities/city_tour.webp" alt="">
                                </div>
                            </div>
                            <div class="right">
                                <p>Discover the vibrant wonders of Sri Lanka's cities with our captivating City Tour!
                                    Immerse
                                    yourself in the rich culture and history as you explore ancient temples, bustling
                                    markets, and
                                    scenic landmarks. Let our expert guides lead you through the heart of each city,
                                    creating
                                    unforgettable memories along the way.</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-sub">
                        <h4 class="sub-title">Hiking</h4>
                        <div class="content-sub-divide">
                            <div class="left">
                                <div class="img-box">
                                    <img src="../assets/activities/hiking.webp" alt="">
                                </div>
                            </div>
                            <div class="right">
                                <p>Embark on an unforgettable adventure through the breathtaking landscapes of Sri Lanka
                                    with
                                    our exhilarating Hiking Tours! Trek through lush jungles, misty mountains, and cascading
                                    waterfalls. Discover hidden gems, encounter unique wildlife, and connect with nature's
                                    beauty.
                                    Join us for an unforgettable hiking experience tailored to all skill levels!</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-sub">
                        <h4 class="sub-title">Whale Watching</h4>
                        <div class="content-sub-divide">
                            <div class="left">
                                <div class="img-box">
                                    <img src="../assets/activities/whale_watching.webp" alt="">
                                </div>
                            </div>
                            <div class="right">
                                <p>Experience the awe-inspiring marvels of the ocean on our thrilling Whale Watching Tours
                                    in Sri
                                    Lanka! Sail through pristine waters, guided by seasoned marine experts, to witness
                                    majestic
                                    whales and playful dolphins in their natural habitat. Prepare to be captivated by these
                                    gentle
                                    giants as they showcase their spectacular displays, leaving you with cherished memories
                                    that
                                    will last a lifetime.</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-sub">
                        <h4 class="sub-title">Safari</h4>
                        <div class="content-sub-divide">
                            <div class="left">
                                <div class="img-box">
                                    <img src="../assets/activities/Safari.webp" alt="">
                                </div>
                            </div>
                            <div class="right">
                                <p>Embark on an unforgettable wildlife adventure! Explore the untamed beauty of Sri Lanka’s
                                    wildlife through our expert-guided tours. Witness majestic creatures in their natural
                                    habitat, from elusive leopards to majestic elephants & vibrant birdlife. Immerse
                                    yourself in the wonders of nature with our Wildlife Safari.</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-sub">
                        <h4 class="sub-title">River Safari</h4>
                        <div class="content-sub-divide">
                            <div class="left">
                                <div class="img-box">
                                    <img src="../assets/activities/river_safari.webp" alt="">
                                </div>
                            </div>
                            <div class="right">
                                <p>Embark on a serene journey through Sri Lanka's lush landscapes with our mesmerizing River
                                    Safari! Drift along tranquil waterways, surrounded by verdant forests and diverse
                                    wildlife. Our
                                    guided tours offer a unique opportunity to spot exotic birds, elusive reptiles, and
                                    other
                                    fascinating creatures in their native habitat. Let the rhythmic flow of the river lead
                                    you to
                                    unforgettable encounters with nature's hidden treasures.</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-sub">
                        <h4 class="sub-title">Water Sports</h4>
                        <div class="content-sub-divide">
                            <div class="left">
                                <div class="img-box">
                                    <img src="../assets/activities/water_sports.webp" alt="">
                                </div>
                            </div>
                            <div class="right">
                                <p>Dive into a world of thrilling aquatic adventures with our exhilarating Water Sports
                                    packages in
                                    Sri Lanka! Whether you seek adrenaline-pumping activities or laid-back fun, we have
                                    something
                                    for everyone. Experience the rush of surfing the perfect waves, glide atop crystal-clear
                                    waters
                                    with kayaking, or delve into the vibrant underwater realm while snorkeling and scuba
                                    diving.
                                    Unleash your inner water enthusiast and make unforgettable memories with us!</p>
                            </div>
                        </div>
                    </div><br>
                    <h2>Addons</h2>
                    <div class="content-sub">
                        <h4 class="sub-title">Rent a Car</h4>
                        <div class="content-sub-divide">
                            <div class="left">
                                <div class="img-box">
                                    <img src="../assets/activities/rent-car.webp" alt="">
                                </div>
                            </div>
                            <div class="right">
                                <p>Explore your destination on your terms with our flexible car rental services! Choose from
                                    two convenient options: Self-Driving, giving you the freedom to navigate the roads
                                    independently, or With a Driver, ensuring a relaxing journey with our skilled chauffeur.
                                    Rent a car with us and embark on a seamless travel experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Inquiry />
        </div>
    </div>
</template>
<script>
import Navi from '../components/navigation-com.vue'
import Skeleton from '../components/skeleton-com.vue'
import Inquiry from '../components/inquiry-com.vue'

export default {
    data() {
        return {
            imgIsLoading: true,
        }
    },

    components: {
        Navi,
        Skeleton,
        Inquiry,
    },

    methods: {
        mainImgLoading() {
            this.imgIsLoading = false;
        }
    }
}
</script>

<style scoped>
h2 {
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

.sub-title {
    text-decoration: underline;
    text-decoration-color: #3CB615;
}

.top-banner-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
}

.content-main {
    max-width: 700px;
    margin: 0 auto;
    padding-bottom: 50px;
    text-align: center;
}

.content-sub {
    margin-bottom: 50px;
}

.content-sub-divide {
    display: flex;
}

.img-box {
    width: 320px;
    height: 230px;
    margin-right: 20px;
    position: relative;
    overflow: hidden;
}

.img-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media only screen and (max-width: 991px) {

    .top-banner {
        height: 350px;
    }

    .vr-style-div-wrp {
        bottom: 6%;
    }

}

@media only screen and (max-width: 767px) {

    .top-banner {
        height: 280px;
    }


    .vr-style-div-wrp {
        bottom: 4%;
    }

    .content-sub-divide {
        display: block;
    }

    .img-box {
        width: 100%;
        height: 400px;
        margin-right: 0;
        margin-bottom: 20px;
    }
}

@media only screen and (max-width: 575px) {
    .img-box {
        height: 300px;
    }
}

@media only screen and (max-width: 400px) {
    .img-box {
        height: 250px;
    }
}</style>