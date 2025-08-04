<template>
    <div>
        <Navi />
        <div class="top-banner-wrp">
            <div class="top-banner">
                <Skeleton v-if="mainImgIsLoading" />
                <img v-show="!mainImgIsLoading" class="top-banner-img" src="../../assets/trip-plans/9-nights.jpg" @load="mainImgLoad()"
                    alt="">
            </div>
            <div class="vr-style-div-wrp">
                <div class="vr-style-div col-theme-bg"></div>
            </div>
        </div>
        <div class="main container-xxl">
            <h3><span class="col-theme">09</span> Nights <span class="col-theme">10</span> Days</h3>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 01</h4>
                <h4>AIRPORT - NEGOMBO (<span class="col-theme">1<sup>ST</sup> NIGHT</span>)</h4>
                <p>Arrive in Sri Lank, You will be meet by our representatives of Yathra Tours at the Airport and
                    transferred to Negombo. Negombo is a major city in Sri Lanka, situated on the west coast
                    and at the mouth of the Negombo Lagoon, in Western Province, 38 km (24 mi) from
                    Colombo via Colombo - Katunayake Expressway.</p>
                <p>Negombo is one of the major commercial hubs in the country and the administrative centre
                    of Negombo Division. Negombo has about 142,136 population within its divisional
                    secretariat division. Negombo municipal boundary is fully extended throughout its Divisional
                    Secretariat area.</p>
                <p>Negombo is known for its long sandy beaches and centuries old fishing industry. Negombo
                    has a large bilingual (Sinhala/Tamil) population with a clear Roman Catholic majority.</p>
                <p>Covered Places</p>
                <ul>
                    <li>Main Fish Market. Each day, fishers take their oruvas (outrigger canoes) and go out in search of the
                        fish for which Negombo is famous</li>
                    <li>Negombo Beach</li>
                    <li>Hamilton Canal</li>
                    <li>Fish Market</li>
                    <li>Dutch Fort</li>
                    <li>Negombo Beach Park</li>
                    <li>Angurukaramulla Temple</li>
                    <li>St Mary's Church</li>
                </ul>
                <p>Overnight stay & Dinner at the Hotel.</p>
                <div class="img-box">
                    <img class="img-place" src="../../assets/trip-plans/9-days-10-nights/1-min.png" alt="">
                </div>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 02</h4>
                <h4>NIGAMBO - PINNAWALA - KANDY (<span class="col-theme">2<sup>ND</sup> NIGHT</span>)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>En-route to your destination, you can visit one of the most important tourist attraction in sir lanka,
                    the Pinnawala Elephant Orphanage. Volunteers and caretakers provide shelter and take care of
                    orphaned, abandoned and injured elephants within the park. You can watch caretakers feed, bathe
                    and help these gentle giants. You want walk with the herd to the nearby river to watch the elephants
                    bathe and play around in water.</p>
                <p>Covered Places</p>
                <ul>
                    <li>Pinnawala Elephant Orphanage</li>
                    <li>Most Fames Spice & Herbal Garden</li>
                    <li>Kandy Cultural Dance Show</li>
                </ul>
                <div class="img-box">
                    <img class="img-place" src="../../assets/trip-plans/9-days-10-nights/2-min.png" alt="">
                </div>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 03</h4>
                <h4>KANDY CITY TOUR (<span class="col-theme">3<sup>RD</sup> NIGHT</span>)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>Lying amidst the hills, Kandy is the last capital of the ancient King of Sri Lanka. While being the
                    second largest city in Sri Lank it is also famous for its immense beauty and is named as One of the
                    seven UNESCO declared World Heritage sites in the country .With it’s luxuriant Prairie, picturesque
                    lake, longest river of the country and misty mountains, Kandy successfully mesmerizes every visitor
                    unsurprisingly.</p>
                <p>Covered Places</p>
                <ul>
                    <li>Temple of the Tooth Relic</li>
                    <li>Kandy View Point</li>
                    <li>Royal Botanical</li>
                    <li>World fames Gem museum</li>
                    <li>Wood carving workshop</li>
                    <li>Sri Lankan batik Centre</li>
                </ul>
                <p>Overnight stay & Dinner at the Hotel. </p>
                <div class="img-box">
                    <img class="img-place" src="../../assets/trip-plans/9-days-10-nights/3-min.png" alt="">
                </div>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 04</h4>
                <h4>KANDY - NUWARA ELIYA (<span class="col-theme">4<sup>TH</sup> NIGHT</span>)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>YEn-route to your destination, you can see a beautiful tea states, Ramboda waterfall, Tea Factory.
                    Nuwara Eliya (City of Lights), blessed with salubrious climate, breath-taking views of valleys,
                    meadows, mountains and greenery; Surrounded by hills and tea plantations, the town of Nuwara
                    Eliya enjoys spring like weather throughout the year.
                </p>
                <p>It is also known as “Little England”, which was the favourite hill station of the British who tried to
                    create Nuwara Eliya into a typical English Village. The old brick Post Office, country house like hill
                    club with its hunting pictures, trophies and strict formal dinner attire; the 18 hole golf course, hours
                    race course, etc., All remind you of “England”.</p>
                <p>Covered Places</p>
                <ul>
                    <li>Golf course</li>
                    <li>Trout streams</li>
                    <li>Victoria park</li>
                    <li>Boating or fishing on Lake Gregory</li>
                    <li>Tea Factory where the slow-growing tea bushes of this highland region produce some of the
                        world’s finest Orange Pekoe tea</li>
                </ul>
                <p>Overnight stay & Dinner at the Hotel.</p>
                <div class="img-box">
                    <img class="img-place" src="../../assets/trip-plans/9-days-10-nights/4-min.png" alt="">
                </div><br>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 05</h4>
                <h4>NUWARA ELIYA - ELLA - YALA (<span class="col-theme">5<sup>TH</sup> NIGHT</span>)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>Ella is a small town in the Badulla District of Uva Province, Sri Lanka governed by an Urban Council. It
                    is approximately 200 kilometres (120 mi) east of Colombo and is situated at an elevation of 1,041
                    metres (3,415 ft.) above sea level.
                </p>
                <p>The area has a rich bio-diversity, dense with numerous varieties of flora and fauna. Ella is
                    surrounded by hills covered with cloud forests and tea plantations. The town has a cooler climate
                    than surrounding lowlands, due to its elevation.</p>
                <p>The Ella Gap allows views across the southern plains of Sri Lanka. Located on the Colombo-Badulla
                    railway line, and the A16 highway (Beragala-Hali Ela) a part of the Colombo-Badulla road. Ella railway
                    station is the 75th station on the Main Line and is located 271.03 km (168.41 mi) from Colombo.</p>
                <p>The station has one platform and all trains running on the Main Line stop at the station. The station
                    opened in July 1918. En-route to your destination.</p>
                <p>Covered Places</p>
                <ul>
                    <li>Seetha Amman Kovil</li>
                    <li>Little Adam's Peak</li>
                    <li>Nine Arches Bridge</li>
                    <li>Ella Rock</li>
                    <li>Ravana Ella Falls</li>
                </ul>
                <p>Overnight stay & Dinner at the Hotel.</p>
                <div class="img-box">
                    <img class="img-place" src="../../assets/trip-plans/9-days-10-nights/5-min.png" alt="">
                </div><br>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 06</h4>
                <h4>YALA - MIRISSA (<span class="col-theme">6<sup>TH</sup> NIGHT</span>)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>Yala National Park is the most visited and second largest national park in Sri Lanka, bordering the
                    Indian Ocean. The park consists of five blocks, two of which are now open to the public, and also
                    adjoining parks
                </p>
                <p>The park covers 979 square kilometres (378 Sq. mi) and is located about 300 kilometres (190 mi)
                    from Colombo. Yala was designated as a Wildlife sanctuary in 1900, and, along with wilpattu was
                    one of the first two national parks in Sri Lanka, having been designated in 1938.</p>
                <p>The park is best known for its variety of wild animals. It is important for the conservation of Sri
                    Lankan elephants, Sri Lankan leopards and aquatic birds.</p>
                <p>Covered Places</p>
                <ul>
                    <li>Yala National Park Safari</li>
                </ul>
                <p>Overnight stay & Dinner at the Hotel.</p>
                <div class="img-box">
                    <img class="img-place" src="../../assets/trip-plans/9-days-10-nights/6-min.png" alt="">
                </div><br>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 07</h4>
                <h4>MIRISSA - BENTOTA (<span class="col-theme">7<sup>TH</sup> NIGHT</span>)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>Whale watching is the practice of observing whales and dolphins (cetaceans) in their natural
                    habitat. Whale watching is mostly a recreational activity (cf. bird watching), but it can also serve
                    scientific and/or educational purposes. A study prepared for International Fund for Animal Welfare
                    in 2009 estimated that 13 million people went whale watching globally in 2008. Whale watching
                    generates $2.1 billion per annum in tourism revenue worldwide, employing around 13,000 workers.
                    The size and rapid growth of the industry has led to complex and continuing debates with the
                    whaling industry about the best use of whales as a natural resource.
                </p>
                <p>Galle Fort in the Bay of Galle on the southwest coast of Sri Lanka, was built first in 1588 by the
                    Portuguese, then extensively fortified by the Dutch during the 17th century from 1649 onwards. It is
                    a historical, archaeological and architectural heritage monument, which even after more than 432
                    years maintains a polished appearance, due to extensive reconstruction work done by
                    Archaeological Department of Sri Lanka.</p>
                <p>The fort has a colourful history, and today has a multi-ethnic and multi-religious population. The Sri
                    Lankan government and many Dutch people who still own some of the properties inside the fort are
                    looking at making this one of the modern wonders of the world. The heritage value of the fort has
                    been recognized by the UNESCO and the site has been inscribed as a cultural heritage UNESCO
                    World Heritage Site under criteria iv, for its unique exposition of "an urban ensemble which
                    illustrates the interaction of European architecture and South Asian traditions from the 16th to the
                    19th centuries.</p>
                <p>The Galle Fort, also known as the Dutch Fort or the "Ramparts of Galle", withstood the Boxing Day
                    tsunami which damaged part of coastal area Galle town. It has been since restored.</p>
                <p>The name moonstone derives from the stone's characteristic visual effect, called adularescence (or
                    schiller), which produces a milky, bluish interior light. This effect is caused by light diffraction
                    through alternating layers of orthoclast and albite within the stone. The diffracted light varies from
                    white to blue, depending on the thinness of the albite layers. More technically, this micro-structure
                    consists of regular exsolution layers (lamellae) of different alkali feldspars (orthoclase and
                    sodium-rich plagioclase). </p>
                <p>Polished moonstones often display chatoyancy ("cat's eye" effect), where a luminous streak appears
                    through the stone. Asterism is rare and produces four-legged stars.</p>
                <p>Covered Places</p>
                <ul>
                    <li>Whales Watching</li>
                    <li>Galle Dutch Fort</li>
                    <li>Galle Fish Market </li>
                    <li>Blue Moonstone Mine</li>
                </ul>
                <p>Overnight stay & Dinner at the Hotel.</p>
                <div class="img-box">
                    <img class="img-place" src="../../assets/trip-plans/9-days-10-nights/7-min.png" alt="">
                </div><br>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 08</h4>
                <h4>BANTOTA CITY TOUR (<span class="col-theme">8<sup>TH</sup> NIGHT</span>)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>Bentota is a coastal town in Sri Lanka, located in the Galle District of the Southern Province. It is
                    approximately 65 kilometres (40 mi) south of Colombo and 56 kilometres (35 mi) north of Galle.
                    Bentota is situated on the southern bank of the Bentota River mouth, at an elevation of 3 metres
                    (9.8 ft) above the sea level. The name of the town is derived from a mythical story which claims a
                    demon named 'Bem' ruled the tota or river bank.
                </p>
                <p>Madu Ganga is a minor watercourse which originates near Uragasmanhandiya in the Galle District of
                    Sri Lanka, before widening into the Madu Ganga Lake at Balapitiya. The river then flows for a further
                    a 4.4 km (2.7 mi) before draining into the Indian Ocean. It is located 88 km (55 mi) south of Colombo
                    and 35 km (22 mi) north of Galle. Many foreigners visit to see beauty of the madu river via boat
                    safari .if you visit to downsouth in srilanka do not forget to visit madu river .you can get madu river
                    boat ride contaking.</p>
                <p>The Buddhist Amarapura Nikaya sect had its first upasampada (higher ordination ceremony) on a
                    fleet of boats anchored upon it in 1803. The Buddhist Kothduwa temple is situated on an isolated
                    island in the lake.</p>
                <p>Madu Ganga Lake, together with the smaller Randombe Lake, to which it is connected by two
                    narrow channels, forms the Madu Ganga wetland. Its estuary and the many mangrove islets on it
                    constitute a complex coastal wetland ecosystem. It has a high ecological, biological and aesthetic
                    significance, being home to approximately 303 species of plants belonging to 95 families and to 248
                    species of vertebrate animals.</p>
                <p>The inhabitants of its islets produce peeled cinnamon and cinnamon oil. The Madu Ganga Wetland
                    was formally declared in 2003, in terms of the Ramsar Convention. Kosgoda is a small coastal town
                    located in Southern Province in Sri Lanka. The area of Kosgoda is home to a population of nearly
                    3,000 people. It is approximately 72 kilometres (45 mi) south of Colombo and is situated at an
                    elevation of 1 metre (3.3 ft.) above the sea level. The area is becoming one of the most vibrant
                    tourist areas in Galle District in Sri Lanka due to the locations beautiful beaches, Kosgoda Lagoon
                    (perfect place for watching birds and boat trips) and its Turtles and Turtle hatcheries.</p>
                <p>Covered Places</p>
                <ul>
                    <li>Madu River Canal Bot Ride</li>
                    <li>Turtle Hatchery</li>
                    <li>Water Sport</li>
                </ul>
                <p>Overnight stay & Dinner at the Hotel.</p>
                <div class="img-box">
                    <img class="img-place" src="../../assets/trip-plans/9-days-10-nights/8-min.png" alt="">
                </div><br>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 09</h4>
                <h4>BANTOTA COLOMBO (<span class="col-theme">9<sup>TH</sup> NIGHT</span>)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>Colombo is the executive and judicial capital and largest city of Sri Lanka by population. According to
                    the Brookings Institution, Colombo metropolitan area has a population of 5.6 million, and 752,993 in
                    the Municipality. It is the financial centre of the island and a tourist destination. It is located on
                    the
                    west coast of the island and adjacent to the Greater Colombo area which includes Sri
                    Jayewardenepura Kotte, the legislative capital of Sri Lanka, and Dehiwala-Mount Lavinia. Colombo is
                    often referred to as the capital since Sri Jayewardenepura Kotte is itself within the urban/suburban
                    area of Colombo. It is also the administrative capital of the Western Province and the district capital
                    of Colombo District. Colombo is a busy and vibrant city with a mixture of modern life, colonial
                    buildings and monuments.</p>
                <p>Due to its large harbour and its strategic position along the East–West sea trade routes, Colombo
                    was known to ancient traders 2,000 years ago. It was made the capital of the island when Sri Lanka
                    was ceded to the British Empire in 1815, and its status as capital was retained when the nation
                    became independent in 1948. In 1978, when administrative functions were moved to Sri
                    Jayewardenepura Kotte, Colombo was designated as the commercial capital of Sri Lanka.</p>
                <p>Like many cities, Colombo's urban area extends well beyond the boundaries of a single local
                    authority, encompassing other municipal and urban councils such as Sri Jayewardenepura Kotte
                    Municipal Council, Dehiwala Mount Lavinia Municipal Council, Kolonnawa Urban Council, Kaduwela
                    Municipal Council, and Kotikawatte Mulleriyawa Pradeshiya Sabha. The main city is home to a
                    majority of Sri Lanka's corporate offices, restaurants, and entertainment venues.</p>
                <p>Covered Places</p>
                <ul>
                    <li>Galle Face Green</li>
                    <li> Viharamahadevi Park</li>
                    <li>Beira Lake</li>
                    <li>Colombo Racecourse</li>
                    <li>Planetarium</li>
                    <li>University of Colombo</li>
                    <li>Nelum Pokuna Theatre</li>
                    <li>One Galle Face</li>
                    <li>Gangaramaya Temple</li>
                    <li>Dutch Museum</li>
                    <li>Colombo Lotus Tower</li>
                    <li>National Museum</li>
                    <li>Independence Memorial Hall</li>
                    <li>Odel Shopping Mall</li>
                    <li>House Of Fashion</li>
                </ul>
                <p>Overnight stay & Dinner at the Hotel</p>
                <div class="img-box">
                    <img class="img-place" src="../../assets/trip-plans/9-days-10-nights/9-min.png" alt="">
                </div><br>
            </div>
            <div class="section">
                <h4><span class="col-theme">DAY</span> 10</h4>
                <h4>COLOMBO AIRPORT (<span class="col-theme">9<sup>TH</sup> NIGHT</span>)</h4>
                <p>Enjoy a delicious breakfast at your hotel.</p>
                <p>After Breakfast you will be transferred to Airport for your departure flight.</p>
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