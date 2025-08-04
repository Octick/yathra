<template>
    <div>
        <div class="main row">
            <div class="col-lg-3 col-md-6">
                <div class="crd">
                    <div class="main-img-box">
                        <img src="../assets/others/sl.jpg" alt="">
                    </div>
                    <div class="content-box">
                        <h4 class=" pad-mar-no">Explore Sri Lanka</h4>
                        <div class="con-mid">
                            <p class="days pad-mar-no">3 Nights 4 Days</p>
                            <!-- <p class="price pad-mar-no"></p> -->
                            <!-- <p class="includes pad-mar-no"></p> -->
                            <p class="per pad-mar-no">(PER PERSON / TWIN SHARE)</p>
                            <!-- <p class="valid pad-mar-no"></p> -->
                        </div>
                        <button @click="scrollToSection()"
                            class="btn-inq col-theme-bg">Inquire Now</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="crd">
                    <div class="main-img-box">
                        <img src="../assets/others/6-nights.webp" alt="">
                    </div>
                    <div class="content-box">
                        <h4 class=" pad-mar-no">Explore Sri Lanka</h4>
                        <div class="con-mid">
                            <p class="days pad-mar-no">6 Nights 7 Days</p>
                            <!-- <p class="price pad-mar-no"></p> -->
                            <!-- <p class="includes pad-mar-no"></p> -->
                            <p class="per pad-mar-no">(PER PERSON / TWIN SHARE)</p>
                            <!-- <p class="valid pad-mar-no"></p> -->
                        </div>
                        <button @click="scrollToSection()"
                            class="btn-inq col-theme-bg">Inquire Now</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="crd">
                    <div class="main-img-box">
                        <img src="../assets/others/8-nights.webp" alt="">
                    </div>
                    <div class="content-box">
                        <h4 class=" pad-mar-no">Explore Sri Lanka</h4>
                        <div class="con-mid">
                            <p class="days pad-mar-no">08 Nights 09 Days</p>
                            <!-- <p class="price pad-mar-no"></p> -->
                            <!-- <p class="includes pad-mar-no"></p> -->
                            <p class="per pad-mar-no">(PER PERSON / TWIN SHARE)</p>
                            <!-- <p class="valid pad-mar-no"></p> -->
                        </div>
                        <button @click="scrollToSection()"
                            class="btn-inq col-theme-bg">Inquire Now</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="crd">
                    <div class="main-img-box">
                        <img src="../assets/others/maldives.jpg" alt="">
                    </div>
                    <div class="content-box">
                        <h4 class=" pad-mar-no">Explore Sri Lanka</h4>
                        <div class="con-mid">
                            <p class="days pad-mar-no">9 Nights 10 Days</p>
                            <!-- <p class="price pad-mar-no"></p> -->
                            <!-- <p class="includes pad-mar-no"></p> -->
                            <p class="per pad-mar-no">(PER PERSON / TWIN SHARE)</p>
                            <!-- <p class="valid pad-mar-no"></p> -->
                        </div>
                        <button @click="scrollToSection()"
                            class="btn-inq col-theme-bg">Inquire Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        scrollToSection() {
            const element = document.getElementById('inq-home');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
</script>
<style scoped>

.row{
    padding: 0;
    margin: 0;
}

.main{
    padding: 0 10px;
}

.crd {
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.032);
    border-radius: 5px;
    padding: 0;
    margin-bottom: 20px;
}

.main-img-box {
    width: 100%;
    height: 0;
    margin-bottom: 10px;
    padding-bottom: 60%;
    position: relative;
    overflow: hidden;
}

.main-img-box img{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    display: flex;
    justify-content: center;
}

.content-box {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.con-mid {
    margin-top: 10px;
}

.con-mid p {
    text-align: center;
}

.days {
    margin-bottom: 10px;
}

.price {
    line-height: 7px;
    font-weight: bold;
    color: #eb1221;
}

.includes {
    margin-bottom: 5px;
    font-size: 13px;
    color: #eb1221;
}

.per {
    margin-bottom: 5px;
    color: rgba(0, 0, 0, 0.479);
}

.valid {
    margin-bottom: 5px;
    font-size: 13px;
}

.btn-inq {
    width: 95%;
    height: 40px;
    margin-bottom: 10px;
    border: none;
    color: white;
    border-radius: 5px;
}
</style>