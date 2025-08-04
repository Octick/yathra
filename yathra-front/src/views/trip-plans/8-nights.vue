<template>
    <div>
        <Navi />
        <div class="top-banner-wrp">
            <div class="top-banner">
                <Skeleton v-if="mainImgIsLoading" />
                <img v-show="!mainImgIsLoading" class="top-banner-img" src="../../assets/trip-plans/8-nights.jpg" @load="mainImgLoad()"
                    alt="">
            </div>
            <div class="vr-style-div-wrp">
                <div class="vr-style-div col-theme-bg"></div>
            </div>
        </div>
        <div class="main container-xxl">
            <h3><span class="col-theme">08</span> Nights <span class="col-theme">09</span> Days</h3>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 01</h4>
                <h4>AIRPORT - COLOMBO (<span class="col-theme">1<sup>ST</sup> NIGHT</span>)</h4>
                <p>Arrive in Sri Lank, You will be meet by our representatives of Yathra Tours at the Airport and
                    transferred to Colombo.</p>
                <p>Colombo, the capital of Sri Lanka, has a long history as a port on ancient east-west trade routes,
                    ruled successively by the Portuguese, Dutch and British. That heritage is reflected in
                    itsitsarchitecture, mixing colonial buildings with high-rises and shopping malls. The imposing
                    Colombo National Museum, dedicated to Sri Lankan history, borders sprawling Viharamahadevi
                    Park and its giant Buddha.</p>
                <p>Covered Places</p>
                <ul>
                    <li>National Museum</li>
                    <li> Gangarama Buddhist Temple</li>
                    <li> Galle Face Green</li>
                    <li> Red Mosque</li>
                    <li> Colombo City Tour</li>
                    <li>Local Shopping Market</li>
                </ul>
                <p>Overnight stay & Dinner at the Hotel.</p>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 02</h4>
                <h4>COLOMBO - BENTOTA (<span class="col-theme">2<sup>ND</sup> NIGHT</span>)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>Bentota and its breath taking sandy beach pretty much transform your dreams and
                    visions of a tropical paradise into an everyday reality.</p>
                <p>Covered Places</p>
                <ul>
                    <li>Water Sports</li>
                    <li>Turtle Hatchery</li>
                    <li>Madu River Safar</li>
                </ul>
                <div class="img-box">
                    <img class="img-place" src="../../assets/trip-plans/8-days-9-Nights/1-min.png" alt="">
                </div>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 03</h4>
                <h4>BENTOTA - GALLE - YALA (<span class="col-theme">3<sup>RD</sup> NIGHT</span>)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>Galle Fort, in the Bay of Galle on the southwest coast of Sri Lanka, was built first in 1588 by
                    the Portuguese, then extensively fortified by the Dutch during the 17th century from 1649
                    onwards. It is a historical, archaeological and architectural heritage monument, which even after
                    more than 432 years maintains a polished appearance, due to extensive reconstruction work
                    done by Archaeological Department of Sri Lanka.</p>
                <p>The fort has a colourful history, and today has a multi-ethnic and multi-religious population. The
                    Sri Lankan government and many Dutch people who still own some of the properties inside the
                    fort are looking at making this one of the modern wonders of the world. The heritage value of the
                    fort has been recognized by the UNESCO and the site has been inscribed as a cultural
                    heritage UNESCO World Heritage Site under criteria iv, for its unique exposition of "an urban
                    ensemble which illustrates the interaction of European architecture and South Asian traditions
                    from the 16th to the 19th centuries.</p>
                <p>The Galle Fort, also known as the Dutch Fort or the "Ramparts of Galle", withstood the Boxing
                    Day tsunami which damaged part of coastal area Galle town. It has been since restored. </p>
                <p>The most common moonstone is of the orthoclase feldspar mineral adularia, named for an early
                    mining site near Mt. Adular in Switzerland, now the town of St. Gotthard. A solid solution of
                    the plagioclase feldspar oligoclase +/− the potassium feldspar orthoclase also produces
                    moonstone specimens.
                </p>
                <p>Deposits of moonstone occur in Armenia (mainly from Lake Sevan), Australia, the Austrian
                    Alps, Mexico, Madagascar, Myanmar, Norway, Poland, India, Sri Lanka, and the United
                    States. Historically, the most valuable, transparent moonstones with strong blue sheen came
                    from Myanmar. Today, most commercial moonstones come from Sri Lanka</p>
                <ul>
                    <li>Galle Dutch Fort</li>
                    <li>Blue Moonstone Mine</li>
                </ul>
                <p>Overnight stay & Dinner at the Hotel. </p>
                <div class="img-box">
                    <img class="img-place" src="../../assets/trip-plans/8-days-9-Nights/2-min.png" alt="">
                </div>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 04</h4>
                <h4>YALA (<span class="col-theme">4<sup>TH</sup> NIGHT</span>)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>Yala National Park is a huge area of forest, grassland and lagoons bordering the Indian Ocean,
                    in southeast Sri Lanka. Its home to wildlife such as leopards, elephants and crocodiles, as well
                    as hundreds of bird species. Inland, Sithulpawwais an ancient Buddhist monastery. Nearby
                    caves contain centuries-old rock paintings. Southwest, Magul MahaViharaya also has ancient
                    Buddhist ruins. Both are pilgrimage sites.
                </p>
                <ul>
                    <li>Yala Safari</li>
                </ul>
                <p>Overnight stay & Dinner at the Hotel.</p>
                <div class="img-box">
                    <img class="img-place" src="../../assets/trip-plans/8-days-9-Nights/3-min.png" alt="">
                </div><br>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 05</h4>
                <h4>YALA - ELLA - NUWARA ELIYA (<span class="col-theme">5<sup>TH</sup> NIGHT</span>)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>YEn-route to your destination, you can visit on Ella is a small town in the Badulla District of Uva
                    Province, Sri Lanka governed by an Urban Council. It is approximately 200 kilometres east of
                    Colombo and is situated at an elevation of 1,041 metres above sea level. The area has a rich
                    bio-diversity, dense with numerous varieties of flora and fauna.
                </p>
                <p>You can see a beautiful tea states, Ramboda waterfall, Tea Factory. Nuwara Eliya (City of
                    Lights), blessed with salubrious climate, breath-taking views of valleys, meadows, mountains
                    and greenery; Surrounded by hills and tea plantations, the town of Nuwara Eliya enjoys
                    spring like weather throughout the year. It is also known as “Little England”, which was the
                    favourite hill station of the British who tried to create Nuwara Eliya into a typical English
                    Village. The old brick Post Office, country house like hill club with its hunting pictures,
                    trophies and strict formal dinner attire; the 18 hole golf course, hours race course, etc., all
                    remind you of “England”.</p>
                <p>Covered Places</p>
                <ul>
                    <li>Rawana Waterfall</li>
                    <li>Mini Adam Speak</li>
                    <li>Golf course</li>
                    <li>Victoria park</li>
                    <li>Boating or fishing on Lake Gregory</li>
                    <li>Tea Factory</li>
                    <li>Hanuman Kovil</li>
                    <li>Seethammann Kovil</li>
                    <li>Haggala Botanical Garden</li>
                </ul>
                <p>Overnight stay & Dinner at the Hotel.</p>
                <div class="img-box">
                    <img class="img-place" src="../../assets/trip-plans/8-days-9-Nights/4-min.png" alt="">
                </div><br>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 06</h4>
                <h4>NUWARA ELIYA - KANDY (<span class="col-theme">6<sup>TH</sup> NIGHT</span>)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>Lying amidst the hills, Kandy is the last capital of the ancient King of Sri Lanka. While being
                    the second largest city in Sri Lank it is also famous for its immense beauty and is named as
                    One of the seven UNESCO declared World Heritage sites in the country .With its luxuriant
                    Prairie, picturesque lake, longest river of the country and misty mountains, Kandy
                    successfully mesmerizes every visitor unsurprisingly.
                </p>
                <p>Covered Places</p>
                <ul>
                    <li>Temple of the Tooth Relic</li>
                    <li>Kandy View Point</li>
                    <li>Royal Botanical</li>
                    <li>World fames Gem museum</li>
                    <li>Wood carving workshop</li>
                    <li>Sri Lankan batik Centre</li>
                </ul>
                <p>Overnight stay & Dinner at the Hotel.</p>
                <div class="img-box">
                    <img class="img-place" src="../../assets/trip-plans/8-days-9-Nights/5-min.png" alt="">
                </div><br>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 07</h4>
                <h4>KANDY - SIGIRIYA (<span class="col-theme">7<sup>TH</sup> NIGHT</span>)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>En-route to your destination, you can visit,Sri Lanka’s world renowned spices at their
                    source. Visit a spice garden, where smells of cinnamons, pepper, cardamom, nutmeg
                    and mace overwhelm the senses and the visitors are provided an insight into an age
                    old industry of spice production, which attracted many a European and Asian
                    merchants to the ports of ancient Sri Lanka.
                </p>
                <p>Sigiriya is an ancient rock fortress located in the northern Matale District near the town
                    of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological
                    significance that is dominated by a massive column of rock approximately 180 m (590 ft.) high.</p>
                <p>According to the ancient Sri Lankan chronicle the Cūḷavaṃsa, this area was a large forest, then
                    after storms and landslides it became a hill and was selected by King Kashyapa (AD 477–495)
                    for his new capital. He built his palace on top of this rock and decorated its sides with
                    colourful frescoes. On a small plateau about halfway up the side of this rock he built a gateway in
                    the form of an enormous lion. The name of this place is derived from this structure; Sīnhāgiri, the
                    Lion Rock (an etymology similar to Sinhapura, the Sanskrit name of Singapore, the Lion City).</p>
                <p>The capital and the royal palace were abandoned after the king's death. It was used as a
                    Buddhist monastery until the 14th century. Sigiriya today is a UNESCO listed World Heritage
                    Site. It is one of the best preserved examples of ancient urban planning.</p>
                <p>Covered Places</p>
                <ul>
                    <li>Most Fames Spice & Herbal Garden</li>
                </ul>
                <p>Overnight stay & Dinner at the Hotel.</p>
                <div class="img-box">
                    <img class="img-place" src="../../assets/trip-plans/8-days-9-Nights/6-min.png" alt="">
                </div><br>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 08</h4>
                <h4>SIGIRIYA - POLONNARUWA UP AND DOWN (<span class="col-theme">8<sup>TH</sup> NIGHT</span>)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>Polonnaruwa was the second capital of Sri Lanka after the destruction of Anuradhapura in 993. It
                    comprises, besides the Brahmanic monuments built by the Cholas, the monumental ruins of the
                    fabulous garden-city created by Parakramabahu I in the 12th century.
                </p>
                <p>Minnariya National Park is a national park in North Central Province of Sri Lanka. The area was
                    designated as a national park on 12 August 1997, having been originally declared as a wildlife
                    sanctuary in 1938. The reason for declaring the area as protected is to protect
                    the catchment of Minnariya tank and the wildlife of the surrounding area. The tank is of historical
                    importance, having been built by King Mahasen in third century AD. The park is a dry season
                    feeding ground for the elephant population dwelling in forests of Matale, Polonnaruwa,
                    and Trincomalee districts. The park earned revenue of Rs.10.7 million in the six months ending in
                    August 2009. Along with Kaudulla and Girithale, Minnariya forms one of the 70 Important Bird
                    Areas (IBAs) of Sri Lanka. The park is situated 182 kilometres (113 mi) from Colombo.</p>
                <p>Explore the rural but beautiful village of Hiriwadunna, Sri Lanka.The journey to the
                    village is very interesting.</p>
                <p>The tour start with a Bullock cart ride to the village. Then a walk through the tiny
                    village of Hiriwadunna while enjoying the views and the cooling breeze.
                    At a house in the village relax & taste a delicious Sri Lankan Lunch, that you helped
                    prepare. After a relaxed time in the village house, return back to the hotel.
                    Experience a boat ride to the next side of the rural village while the sun sets. Finish
                    the tour by taking a tuk tuk ride back to the hotel.</p>
                <p>Dambulla cave temple also known as the Golden Temple of Dambulla is a World Heritage
                    Site (1991) in Sri Lanka, situated in the central part of the country.</p>
                <p>Dambulla is the largest and best-preserved cave temple complex in Sri Lanka. The rock towers
                    160 m over the surrounding plains. There are more than 80 documented caves in the
                    surrounding area. Major attractions are spread over five caves, which contain statues and
                    paintings. These paintings and statues are related to Gautama Buddha and his life. There are a
                    total of 153 Buddha statues, three statues of Sri Lankan kings and four statues of gods and
                    goddesses. The latter include Vishnu and the Ganesha. The murals cover an area of 2,100
                    square metres (23,000 sq. ft). Depictions on the walls of the caves include the temptation by the
                    demon Mara, and Buddha's first sermon.</p>
                <p>Prehistoric Sri Lankans would have lived in these cave complexes before the arrival of Buddhism
                    in Sri Lanka as there are burial sites with human skeletons about 2700 years old in this area,
                    at Ibbankatuwa near the Dambulla cave complexes.</p>
                <p>Covered Places</p>
                <ul>
                    <li>Sigiriya Lion Rock</li>
                    <li>Dabulla Cave Tempele</li>
                    <li>Polonnaruwa Ruins</li>
                    <li>Minnariya National Park Safari</li>
                    <li>Village Safari</li>
                </ul>
                <p>Overnight stay & Dinner at the Hotel.</p>
                <div class="img-box">
                    <img class="img-place" src="../../assets/trip-plans/8-days-9-Nights/8-min.png" alt="">
                </div><br>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 09</h4>
                <h4>SIGIRIYA - AIRPORT (<span class="col-theme">9<sup>TH</sup> NIGHT</span>)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>After breakfast you will be transferred to Airport for your departure flight.</p><br>
            </div>
            <div class="section">
                <h4>TOUR END.</h4>
                <h4 class="col-theme">THE ABOVE PRICE IS INCLUSIV OF</h4>
                <ul>
                    <li>Accommodation at the hotels mentioned or similar with on HB basis.</li>
                    <li>Transportation in a pvt air condition vehicle.</li>
                    <li>Service of an English speaking Chauffer.</li>
                    <li>Airport transfer.</li>
                    <li>Toll charges.</li>
                    <li>Kilometres 1200 included ,Extra mileage. ( kilometres 10 – USD 3 Dollars Charge )</li>
                </ul>
                <h4 class="col-theme">THE PRICE IS EXCLUSIVE OF</h4>
                <ul>
                    <li>Entrance Fee to any sites.</li>
                    <li>Tips to Chauffeurs.</li>
                    <li>Any fluctuations in the dollar component will affect the costing.</li>
                    <li>Lunch or any extra meal not mentioned on the above program during the tour.</li>
                    <li>Early check in or late checkout charges.</li>
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