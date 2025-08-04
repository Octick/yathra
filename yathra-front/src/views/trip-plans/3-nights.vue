<template>
    <div>
        <Navi />
        <div class="top-banner-wrp">
            <div class="top-banner">
                <Skeleton v-if="mainImgIsLoading" />
                <img v-show="!mainImgIsLoading" class="top-banner-img" src="../../assets/trip-plans/3-nights.png"
                    @load="mainImgLoad()" alt="">
            </div>
            <div class="vr-style-div-wrp">
                <div class="vr-style-div col-theme-bg"></div>
            </div>
        </div>
        <div class="main container-xxl">
            <h3><span class="col-theme">03</span> Nights <span class="col-theme">04</span> Days</h3>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 01</h4>
                <h4>AIRPORT - BENTOTA (<span class="col-theme">1<sup>ST</sup> NIGHT</span>)</h4>
                <p>Arrive in Sri Lank, You will be meet by our representatives of Yathra Tours And Travels and
                    transferred to Bentota.</p>
                <p>Bentota is a historical place described in ancient messenger poems.The Galapatha
                    Viharaya is one of a cluster of five ancient temples in the region. In the 17th Century
                    the Portuguese built a small fort at the mouth of the Bentota River (Bentara Ganga),
                    which in Sinhala was called Parangi Kotuwa, meaning the fort of the Portuguese.
                    The river marked the southern extremity of Portuguese held territory in Sri Lanka.
                    The Dutch subsequently allowed the fort to fall into disrepair, converting one of the
                    large buildings within the fort into a colonial rest house for Dutch Officers travelling
                    between Colombo and Galle. The British subsequently converted the rest house into
                    a coastal sanatorium. Sir James Emerson Tennent (1804-1869), the colonial
                    secretary of Ceylon (1845-1850) in his book, Ceylon, An Account of the
                    Island (1859), stated that the rest house at Bentota, situated within a little park,
                    deeply shaded by lofty Tamarind trees on the point of the beach where the river
                    forms its junction with the sea, is one of the coolest and most agreeable in Ceylon.
                    The British introduced the railway in the early 19th century, mainly to transport the
                    coconut produce from the deep south to the capital, building a permanent bridge
                    (Bentota Palama) to cross the river.</p>
                <ul>
                    <li>Bentota Beach</li>
                    <li> Kosgoda Turtle Hatchery - located 11 km (6.8 mi) south of Bentota, is a
                        community based turtle hatchery and turtle watching project set up by the Turtle Conservation
                        Project (TCP) in association with the Wildlife Department of Sri
                        Lanka.
                    </li>
                    <li> Brief Garden - located 11 km (6.8 mi) inland from Bentota, is the house and
                        garden of renowned Sri Lankan landscape architect, Bevis Bawa, the older
                        brother of architect Geoffrey Bawa. Established in 1929 on the grounds of a
                        former rubber plantation Bawa continued to develop the property until his death
                        in 1992.</li>
                    <li> Galapatha Raja Maha Vihare Buddhist temple, located in Bentota, contains stone
                        inscriptions, stone carvings, pillars, ponds and troughs from the medieval period.</li>
                    <li> Richy Skylark Helipad. This helipad operates helicopter joyrides in Bentota near
                        the estuary operated by Skylark Aviation Helicopters.
                    </li>
                </ul>
                <p>Overnight stay & Dinner at the Hotel.</p>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 02</h4>
                <h4>BENTOTA CITY TOUR (<span class="col-theme">2<sup>ND</sup> NIGHT</span>)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>Bentota and its breath taking sandy beach pretty much transform your dreams and
                    visions of a tropical paradise into an everyday reality.</p>
                <p>Covered Places</p>
                <ul>
                    <li>Water Sports</li>
                    <li>Turtle Hatchery</li>
                    <li>Madu River Safari</li>
                </ul>
                <div class="img-box">
                    <img class="img-place" src="../../assets/trip-plans/3-Days-4-Nights/1-min.jpg" alt="">
                </div>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 03</h4>
                <h4>MIRISSA AND GALLE EXCURSION CITY TOUR (<span class="col-theme">3<sup>RD</sup> NIGHT</span>)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>Whale watching is the practice of observing whales and dolphins (cetaceans) in their
                    natural habitat. Whale watching is mostly a recreational activity (cf. birdwatching),
                    but it can also serve scientific and/or educational purposes. A study prepared
                    for International Fund for Animal Welfare in 2009 estimated that 13 million people
                    went whale watching globally in 2008. Whale watching generates $2.1 billion per
                    annum in tourism revenue worldwide, employing around 13,000 workers. The size
                    and rapid growth of the industry has led to complex and continuing debates with
                    the whaling industry about the best use of whales as a natural resource.</p>
                <p>It is an incredible experience and we would recommend everybody to add Mirissa to
                    your Sri Lanka route. Sri Lanka is known as one of the best places in the world to
                    spot blue whales, and we can't disagree! Whale watching is one of the top things to
                    do in Mirissa and is very popular.</p>
                <p>Some of the most commonly spotted whales include sperm whales, killer whales,
                    Bryde whales, short finned whales, while you'll be able to see schools of bottlenose
                    dolphins and striped dolphins as they playfully frolic around your boat!</p>
                <p>Galle Fort in the Bay of Galle on the southwest coast of Sri Lanka, was built first in
                    1588 by the Portuguese, then extensively fortified by the Dutch during the 17th
                    century from 1649 onwards. It is a historical, archaeological and architectural
                    heritage monument, which even after more than 432 years maintains a polished appearance, due to
                    extensive reconstruction work done by Archaeological
                    Department of Sri Lanka.</p>
                <p>The fort has a colourful history, and today has a multi-ethnic and multi-religious
                    population. The Sri Lankan government and many Dutch people who still own some
                    of the properties inside the fort are looking at making this one of the modern wonders
                    of the world. The heritage value of the fort has been recognized by the UNESCO and
                    the site has been inscribed as a cultural heritage UNESCO World Heritage
                    Site under criteria iv, for its unique exposition of "an urban ensemble which illustrates
                    the interaction of European architecture and South Asian traditions from the 16th to
                    the 19th centuries.</p>
                <p>The Galle Fort, also known as the Dutch Fort or the "Ramparts of Galle", withstood
                    the Boxing Day tsunami which damaged part of coastal area Galle town. It has been
                    since restored.</p>
                <div class="img-box">
                    <img class="img-place" src="../../assets/trip-plans/3-Days-4-Nights/2-min.jpg" alt="">
                </div>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 04</h4>
                <h4>Benthota - Colombo (Airport Drop)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>Colombo, the capital of Sri Lanka, has a long history as a port on ancient east-west
                    trade routes, ruled successively by the Portuguese, Dutch and British. That heritage
                    is reflected in itsitsarchitecture, mixing colonial buildings with high-rises and
                    shopping malls. The imposing Colombo National Museum, dedicated to Sri Lankan
                    history, borders sprawling Viharamahadevi Park and its giant Buddha.
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
                    <img class="img-place" src="../../assets/trip-plans/3-Days-4-Nights/3-min.jpg" alt="">
                </div><br>
                <p>After city tour you will be transferred to Airport for your departure flight.</p>
                <h4>TOUR END.</h4>
                <h4 class="col-theme">THE ABOVE PRICE IS INCLUSIV OF</h4>
                <ul>
                    <li>Accommodation at the hotels mentioned or similar with on HB basis.</li>
                    <li>Transportation in a pvt air condition vehicle.</li>
                    <li>Service of an English speaking Chauffer.</li>
                    <li>Airport transfer.</li>
                    <li>Toll charges.</li>
                    <li>Kilometres 1000 included ,Extra mileage.</li>
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

.img-place{
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