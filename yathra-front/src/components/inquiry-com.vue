<template>
    <div>
        <loading v-model:active="isLoading" loader="bars" color="#EB1221" background-color="black" />
        <div class="inquiry" id="inq">
            <p v-if="titleShow" class="sup">Explore the world with Yathra Tours & Travels</p>
            <p v-if="titleShow" class="we-ve">WE'VE GOT SOMETHING FOR EVERY TRAVELLER.</p>
            <div class="inquiry-wrp">
                <div class="row">
                    <div class="field-box col-lg-3 col-md-6">
                        <div class="field-icon-name-wrp">
                            <div class="field-icon">
                                <img src="../assets/icons/location.png" alt="">
                            </div>
                            <p class="field-name pad-mar-no">DEPARTURE</p>
                        </div>
                        <input :class="!errors.departure ? 'inp' : 'inp-err'" v-model="departure" class="form-control"
                            type="text" name="" id="" placeholder="Eg: Auckland">
                        <div class="error f-sz-sm" v-if="errors.departure">{{ errors.departure }}</div>
                    </div>
                    <div class="field-box col-lg-3 col-md-6">
                        <div class="field-icon-name-wrp">
                            <div class="field-icon">
                                <img src="../assets/icons/location.png" alt="">
                            </div>
                            <p class="field-name pad-mar-no">DESTINATION</p>
                        </div>
                        <input :class="!errors.destination ? 'inp' : 'inp-err'" v-model="destination" class="form-control"
                            type="text" name="" id="" placeholder="Eg: Colombo">
                        <div class="error f-sz-sm" v-if="errors.destination">{{ errors.destination }}</div>
                    </div>
                    <div class="field-box col-lg-3 col-md-6">
                        <div class="field-icon-name-wrp">
                            <div class="field-icon">
                                <img src="../assets/icons/calendar.png" alt="">
                            </div>
                            <p class="field-name pad-mar-no">DEPARTURE DATE</p>
                        </div>
                        <input :class="!errors.deDate ? 'inp' : 'inp-err'" v-model="deDate" class="form-control" type="date"
                            name="" id="">
                        <div class="error f-sz-sm" v-if="errors.deDate">{{ errors.deDate }}</div>
                    </div>
                    <div class="field-box col-lg-3 col-md-6">
                        <div class="field-icon-name-wrp">
                            <div class="field-icon">
                                <img src="../assets/icons/calendar.png" alt="">
                            </div>
                            <p class="field-name pad-mar-no">RETURN DATE</p>
                        </div>
                        <input :class="!errors.reDate ? 'inp' : 'inp-err'" v-model="reDate" class="form-control" type="date"
                            name="" id="">
                        <div class="error f-sz-sm" v-if="errors.reDate">{{ errors.reDate }}</div>
                    </div>
                </div>
                <div class="row">
                    <div class="field-box col-lg-3 col-md-6">
                        <div class="field-icon-name-wrp">
                            <div class="field-icon">
                                <img src="../assets/icons/name.png" alt="">
                            </div>
                            <p class="field-name pad-mar-no">NAME</p>
                        </div>
                        <input :class="!errors.name ? 'inp' : 'inp-err'" v-model="name" class="form-control" type="text"
                            name="" id="" placeholder="Eg: Joel">
                        <div class="error f-sz-sm" v-if="errors.name">{{ errors.name }}</div>
                    </div>
                    <div class="field-box col-lg-3 col-md-6">
                        <div class="field-icon-name-wrp">
                            <div class="field-icon">
                                <img src="../assets/icons/telephone.png" alt="">
                            </div>
                            <p class="field-name pad-mar-no">MOBILE</p>
                        </div>
                        <input :class="!errors.mobile ? 'inp' : 'inp-err'" v-model="mobile" class="form-control"
                            type="number" name="" id="" placeholder="Eg: +64 XXXXXXXXXX">
                        <div class="error f-sz-sm" v-if="errors.mobile">{{ errors.mobile }}</div>
                    </div>
                    <div class="field-box col-lg-2 col-md-4 col-sm-4">
                        <div class="field-icon-name-wrp">
                            <div class="field-icon">
                                <img src="../assets/icons/person.png" alt="">
                            </div>
                            <p class="field-name pad-mar-no">ADULT</p>
                        </div>
                        <div class="num-box">
                            <button @click="adultsCountReduce()" class="btn-min-plus" id="btn-min">
                                <img src="../assets/icons/minus.png" alt="">
                            </button>
                            <p class="count pad-mar-no">{{ adults }}</p>
                            <button @click="adultsCountIncrease()" class="btn-min-plus" id="btn-plus">
                                <img src="../assets/icons/plus-bl.png" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="field-box col-lg-2 col-md-4 col-sm-4">
                        <div class="field-icon-name-wrp">
                            <div class="field-icon">
                                <img src="../assets/icons/person.png" alt="">
                            </div>
                            <p class="field-name pad-mar-no">CHILD</p>
                        </div>
                        <div class="num-box">
                            <button @click="childrenCountReduce()" class="btn-min-plus" id="btn-min">
                                <img src="../assets/icons/minus.png" alt="">
                            </button>
                            <p class="count pad-mar-no">{{ childrens }}</p>
                            <button @click="childrenCountIncrease()" class="btn-min-plus" id="btn-plus">
                                <img src="../assets/icons/plus-bl.png" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="field-box col-lg-2 col-md-4 col-sm-4">
                        <div class="field-icon-name-wrp">
                            <div class="field-icon">
                                <img src="../assets/icons/person.png" alt="">
                            </div>
                            <p class="field-name pad-mar-no">INFANT</p>
                        </div>
                        <div class="num-box">
                            <button @click="infantsCountReduce()" class="btn-min-plus" id="btn-min">
                                <img src="../assets/icons/minus.png" alt="">
                            </button>
                            <p class="count pad-mar-no">{{ infants }}</p>
                            <button @click="infantsCountIncrease()" class="btn-min-plus" id="btn-plus">
                                <img src="../assets/icons/plus-bl.png" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="field-box col-lg-6 col-md-6">
                        <div class="field-icon-name-wrp">
                            <div class="field-icon">
                                <img src="../assets/icons/email.png" alt="">
                            </div>
                            <p class="field-name pad-mar-no">EMAIL</p>
                        </div>
                        <input :class="!errors.email ? 'inp' : 'inp-err'" v-model="email" class="form-control" type="text"
                            name="" id="" placeholder="Eg: example@gmail.com">
                        <div class="error f-sz-sm" v-if="errors.email">{{ errors.email }}</div>
                    </div>
                    <div class="field-box col-lg-6 col-md-6">
                        <div class="field-icon-name-wrp">
                            <div class="field-icon">
                                <img src="../assets/icons/chat.png" alt="">
                            </div>
                            <p class="field-name pad-mar-no">MESSAGE</p>
                        </div>
                        <input :class="!errors.message ? 'inp' : 'inp-err'" v-model="message" class="form-control"
                            type="text" name="" id="" placeholder="Your Message here">
                        <div class="error f-sz-sm" v-if="errors.message">{{ errors.message }}</div>
                    </div>
                    <hr>
                    <div class="inq-bot">
                        <div class="inq-bot-rad">
                            <div style="display: flex; align-items: center;">
                                <input v-model="type" value="One Way" style="margin-right: 5px;" type="radio" name="" id="">
                                <p class="inq-bot-type-p pad-mar-no">ONE WAY</p>
                            </div>
                            <div style="display: flex; align-items: center;">
                                <input v-model="type" value="Round Trip" style="margin-right: 5px;" type="radio" checked
                                    name="" id="">
                                <p class="inq-bot-type-p pad-mar-no">ROUND TRIP</p>
                            </div>
                            <div class="check-b" style="display: flex; align-items: center;">
                                <input v-model="directFlight" style="margin-right: 5px;" type="checkbox" name="" id="">
                                <p class="inq-bot-type-p pad-mar-no">DIRECT FLIGHT</p>
                            </div>
                        </div>
                        <div class="inq-bot-btn">
                            <button @click="submit()" class="btn-inq col-theme-bg">INQUIRY</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
import Loading from 'vue-loading-overlay';

export default {

    props: {
        titleShow: Boolean,
    },

    data() {
        return {
            isLoading: false,
            name: '',
            mobile: null,
            email: '',
            destination: '',
            departure: '',
            message: '',
            deDate: null,
            reDate: null,
            directFlight: false,
            type: 'Round Trip',
            adults: 0,
            childrens: 0,
            infants: 0,
            errors: {
                name: '',
                mobile: '',
                email: '',
                departure: '',
                destination: '',
                deDate: '',
                reDate: '',
                type: '',
            },
        }
    },

    components: {
        Loading,
    },

    computed: {
        ...mapState(['api'])
    },

    methods: {
        childrenCountReduce() {
            if (this.childrens !== 0) {
                this.childrens -= 1;
            }
        },

        childrenCountIncrease() {
            this.childrens += 1;
        },

        adultsCountReduce() {
            if (this.adults !== 0) {
                this.adults -= 1;
            }
        },

        adultsCountIncrease() {
            this.adults += 1;
        },

        infantsCountReduce() {
            if (this.infants !== 0) {
                this.infants -= 1;
            }
        },

        infantsCountIncrease() {
            this.infants += 1;
        },

        validation() {
            if (!this.name) {
                this.errors.name = 'Name is required!';
            } else {
                this.errors.name = '';
            }

            if (!this.mobile) {
                this.errors.mobile = 'Phone number is required!';
            } else {
                this.errors.mobile = '';
            }

            if (!this.email) {
                this.errors.email = 'Email is required!';
            } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
                this.errors.email = 'Invalid email format!';
            } else {
                this.errors.email = '';
            }
        },

        async submit() {
            this.validation();
            if (this.errors.name === '' && this.errors.mobile === '' && this.errors.email === '') {
                this.isLoading = true;
                await axios.post(`${this.api}inquiry/booking`, {
                    name: this.name,
                    mobile: this.mobile,
                    departure: this.departure,
                    destination: this.destination,
                    departureDate: this.deDate,
                    returnDate: this.reDate,
                    adults: this.adults,
                    children: this.childrens,
                    infants: this.infants,
                    message: this.message,
                    type: this.type,
                    directFlights: this.directFlight
                }).then((response) => {
                    this.isLoading = false;
                    if (response.status === 201) {
                        Swal.fire({
                            title: 'Success',
                            text: "Your inquiry has been successfuly submited!",
                            icon: 'success',
                        });
                    } else {
                        Swal.fire({
                            title: 'Error',
                            text: "Something went wrong!",
                            icon: 'error',
                        });
                    }
                    this.name = '';
                    this.email = '';
                    this.mobile = '';
                    this.departure = '';
                    this.destination = '';
                    this.deDate = '';
                    this.reDate = '';
                    this.adults = 0;
                    this.childrens = 0;
                    this.infants = 0;
                    this.message = '';
                    this.type = 'Round Trip';
                    this.directFlight = false;
                })
            }
        },
    }
}
</script>
<style scoped>
.inquiry {
    padding: 50px;
    background-image: url('../assets/banners/inquiry-pc.webp');
    background-repeat: no-repeat;
    background-size: cover;
}

.inquiry-wrp {
    padding: 50px;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.753);
}

.sup {
    font-size: 40px;
    text-align: center;
    line-height: 40px;
    font-weight: bold;
    color: white;
}

.we-ve {
    font-size: 20px;
    font-weight: bold;
    color: white;
    text-align: center;
}

.error {
    color: red;
    text-align: left;
}

.field-icon-name-wrp {
    margin-bottom: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.field-icon {
    width: 17px;
    height: 17px;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.field-icon img {
    max-width: 100%;
    max-height: 100%;
}

.field-name {
    padding-top: 2px;
    font-weight: bold;
    font-size: 13px;
}

.field-box {
    margin-bottom: 20px;
}

.num-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.226);
    border-radius: 5px;
}

.btn-min-plus {
    width: 35px;
    height: 35px;
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-min-plus img {
    max-width: 30%;
    max-height: 30%;
}

#btn-min {
    border-right: 1px solid rgba(0, 0, 0, 0.226);
}

#btn-plus {
    border-left: 1px solid rgba(0, 0, 0, 0.226);
}

.inq-bot {
    display: flex;
}

.inq-bot-rad {
    width: 50%;
    display: flex;
    justify-content: space-between;
}

.inq-bot-btn {
    width: 50%;
    display: flex;
    justify-content: flex-end;
}

.btn-inq {
    width: 200px;
    height: 35px;
    border: none;
    color: white;
    font-weight: bold;
}

.inq-bot-type-p {
    padding-top: 3px;
}

@media only screen and (max-width: 991px) {

    .inquiry,
    .inquiry-wrp {
        padding: 50px 30px;
    }

    .inquiry {
        background-image: url('../assets/banners/inquiry-tab.webp');
    }
}

@media only screen and (max-width: 767px) {

    .inquiry,
    .inquiry-wrp {
        padding: 50px 10px;
    }

    .inq-bot {
        flex-direction: column;
    }

    .inquiry {
        background-image: url('../assets/banners/inquiry-mob.webp');
    }
}

@media only screen and (max-width: 575px) {
    .inq-bot-rad {
        flex-direction: column;
    }

    .check-b {
        margin-top: 10px;
    }

    .btn-inq {
        width: 100%;
    }
}
</style>