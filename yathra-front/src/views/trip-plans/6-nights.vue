<template>
    <div>
        <Navi />
        <div class="top-banner-wrp">
            <div class="top-banner">
                <Skeleton v-if="mainImgIsLoading" />
                <img v-show="!mainImgIsLoading" class="top-banner-img" src="../../assets/trip-plans/6-nights.jpg"
                    @load="mainImgLoad()" alt="">
            </div>
            <div class="vr-style-div-wrp">
                <div class="vr-style-div col-theme-bg"></div>
            </div>
        </div>
        <div class="main container-xxl">
            <h3><span class="col-theme">06</span> Nights <span class="col-theme">07</span> Days</h3>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 01 / 02</h4>
                <h4>AIRPORT - KANDY (<span class="col-theme">1<sup>ST</sup> 2<sup>ND</sup> NIGHTS</span>)</h4>
                <p>Arrive in Sri Lank, You will be meet by our representatives of Yathra Tours at the Airport and
                    transferred to Kandy. En-route to your destination, you can visit one of the most important
                    tourist attraction in sir lanka, the Pinnawala Elephant Orphanage, Herbal & Spice garden. </p>
                <p>The Kandy city is situated in the central of the Sri Lanka and it is the socio-cultural capital of the
                    country.
                    Settled in the middle of a glorious mountain, the Kandy city is a delightful and holiday destination for
                    the
                    travellers who want to experience the natural beauty as well as it is rich and bright culture of the
                    island.</p>
                <p>Covered Places</p>
                <ul>
                    <li>Pinnawala Elephant orphanage</li>
                    <li>Herbal & Spice garden </li>
                    <li>Batik Factory </li>
                    <li>Gem Museum</li>
                    <li>Cultural Show</li>
                    <li>Wood Cawing work shop</li>
                    <li>Temple of Tooth Relic</li>
                </ul>
                <p>Overnight stay & Dinner at the Hotel.</p>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 03</h4>
                <h4>KANDY - NUWARA ELIYA (<span class="col-theme">3<sup>RD</sup> NIGHT</span>)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>Nuwara Eliya is a city in the tea country hills of central Sri Lanka. The naturally landscaped Hakgala
                    Botanical
                    Gardens displays roses and tree ferns, and shelters monkeys and blue magpies. Nearby Seetha Amman
                    Temple, a colourful Hindu shrine is decorated with religious figures. Densely forested Galway’s Land
                    National
                    Park is a sanctuary for endemic and migratory bird species, including bulbuls and flycatchers.</p>
                <p>Covered Places</p>
                <ul>
                    <li>Ramboda Waterfall</li>
                    <li>Tea Factory</li>
                    <li>Hanuman Kovil</li>
                    <li>Victoria Park</li>
                    <li>Gregory Lake</li>
                    <li>Seethammann Kovil</li>
                    <li>Haggala Botanical Garden</li>
                    <li>Arvada Spa</li>
                </ul>
                <div class="img-box">
                    <img class="img-place" src="../../assets/trip-plans/6-Days-7-Nights/1-min.png" alt="">
                </div>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 04</h4>
                <h4>NUWARA ELIYA - ELLA (<span class="col-theme">4<sup>TH</sup> NIGHT</span>)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>Nuwara Eliya to Ella Train ride</p>
                <p>Ella is a small town in the Badulla District of Uva Province, Sri Lanka governed by an
                    Urban Council. It is approximately 200 kilometres east of Colombo and is situated at an
                    elevation of 1,041 metres above sea level. The area has a rich bio-diversity, dense with
                    numerous varieties of flora and fauna.</p>
                <p>Covered Places</p>
                <ul>
                    <li>Rawana waterfall</li>
                    <li>Ella Rock</li>
                    <li>Nine Arch Bridge</li>
                    <li>Mini Adams Peak</li>
                </ul>
                <p>Overnight stay & Dinner at the Hotel.</p>
                <div class="img-box">
                    <img class="img-place" src="../../assets/trip-plans/6-Days-7-Nights/2-min.png" alt="">
                </div>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 05</h4>
                <h4>Ella - Yala (<span class="col-theme">5<sup>TH</sup> NIGHT</span>)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>Yala National Park is a huge area of forest, grassland and lagoons bordering the Indian
                    Ocean, in southeast Sri Lanka. It’s home to wildlife such as leopards, elephants and
                    crocodiles, as well as hundreds of bird species. Inland, Sithulpawwais an ancient
                    Buddhist monastery. Nearby caves contain centuries-old rock paintings. Southwest,
                    Magul MahaViharaya also has ancient Buddhist ruins. Both are pilgrimage sites.
                </p>
                <ul>
                    <li>Yala Safari</li>
                </ul>
                <div class="img-box">
                    <img class="img-place" src="../../assets/trip-plans/6-Days-7-Nights/3-min.png" alt="">
                </div><br>
                <p>After city tour you will be transferred to Airport for your departure flight.</p>
                <h4>TOUR END.</h4>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 06</h4>
                <h4>Yala - Benthota (<span class="col-theme">6<sup>TH</sup> NIGHT</span>)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>Bentota and its breath taking sandy beach pretty much transform your dreams and
                    visions of a tropical paradise into an everyday reality.
                </p>
                <p>Covered Places</p>
                <ul>
                    <li>Water Sports</li>
                    <li>Turtle Hatchery</li>
                    <li>Madu River Safar</li>
                </ul>
                <div class="img-box">
                    <img class="img-place" src="../../assets/trip-plans/6-Days-7-Nights/4-min.png" alt="">
                </div><br>
                <p>Overnight stay & Dinner at the Hotel.</p>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 07</h4>
                <h4>Benthota - Colombo (Airport Drop)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>Colombo, the capital of Sri Lanka, has a long history as a port on ancient east-west trade
                    routes, ruled successively by the Portuguese, Dutch and British. That heritage is reflected
                    in itsitsarchitecture, mixing colonial buildings with high-rises and shopping malls. The
                    imposing Colombo National Museum, dedicated to Sri Lankan history, borders sprawling
                    Viharamahadevi Park and its giant Buddha.
                </p>
                <p>Covered Places</p>
                <ul>
                    <li>National Museum</li>
                    <li>Gangarama Buddhist Temple</li>
                    <li>Galle Face Green</li>
                    <li>Red Mosque</li>
                    <li>Colombo City Tour</li>
                    <li>Local Shopping Market</li>
                </ul>
                <div class="img-box">
                    <img class="img-place" src="../../assets/trip-plans/6-Days-7-Nights/5-min.png" alt="">
                </div><br>
                <p>Overnight stay & Dinner at the Hotel.</p>
            </div>
            <div class="section">
                <h4>TOUR END</h4>
                <h4 class="col-theme">THE ABOVE PRICE IS INCLUSIV OF</h4>
                <ul>
                    <li>Accommodation at the hotels mentioned or similar with on HB basis.</li>
                    <li>Transportation in a pvt air condition vehicle.</li>
                    <li>Service of an English speaking Chauffer.</li>
                    <li>Airport transfer.</li>
                    <li>Toll charges.</li>
                    <li>Kilometres 1200 included ,Extra mileage.</li>
                </ul>
                <h4 class="col-theme">THE PRICE IS EXCLUSIVE OF</h4>
                <ul>
                    <li>Entrance Fee to any sites.</li>
                    <li>Tips to Chauffeurs.</li>
                    <li>Any fluctuations in the dollar component will affect the costing.</li>
                    <li>Lunch or any extra meal not mentioned on the above program during the tour.</li>
                    <li>Early check in or late checkout charges.</li>
                    <li>Camera or Video permit.</li>
                </ul>
            </div>
            <button @click="$router.push('/contact-us')" class="btn-inq col-theme-bg">INQUIRE NOW</button>
        </div>
    </div>
</template>

<script>
import Navi from '../../components/navigation-com.vue'
import Skeleton from '../../components/skeleton-com.vue'

export default {
    data() {
        return {
            mainImgIsLoading: true,
        }
    },

    components: {
        Navi,
        Skeleton,
    },

    methods: {
        mainImgLoad() {
            this.mainImgIsLoading = false;
        }
    }
}
</script>

<style scoped>
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
    object-position: top left;
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

.main {
    padding-top: 50px;
}

.img-box {
    width: 100%;
    height: 400px;
    position: relative;
}

.img-place {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
}

.section {
    margin: 50px 0;
}

.btn-inq {
    padding: 5px 20px;
    margin-bottom: 50px;
    border-radius: 5px;
    border: none;
    color: white;
}

@media only screen and (max-width: 991px) {
    .top-banner {
        height: 400px;
    }

    .vr-style-div-wrp {
        bottom: 6%;
    }

    .section {
        margin: 30px 0;
    }

    .img-box {
        height: 300px;
    }
}

@media only screen and (max-width: 767px) {

    .top-banner {
        height: 300px;
    }

    .vr-style-div-wrp {
        bottom: 4%;
    }

    .section {
        margin: 20px 0;
    }

    .img-box {
        height: 200px;
    }
}
</style>