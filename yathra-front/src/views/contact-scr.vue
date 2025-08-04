<template>
    <div>
        <loading v-model:active="isLoading" loader="bars" color="#EB1221" background-color="black" />
        <Navi />
        <div class="main">
            <div class="top-banner-wrp res-py">
                <div class="moonstone-img-box">
                    <img class="img-moonstone" src="../assets/contact/Moonstone.webp" alt="">
                </div>
                <h1>Contact us</h1>
                <div class="row">
                    <div class="col-lg-4">
                        <p>We’re here to assist you. <br><br> Please make and inquiry and we will get back to you with the
                            best assistance we can render you at our earliest.</p><br>
                        <h6>Emergency <span>24/7</span> Assistance</h6>
                        <p>Call / Whatsapp +94 77 160 2526 (24/7) <br> Or Email Us at info@yathratour.com</p>
                        <div class="address-qr-container">
                            <p>Yathra Tours & Travels Pvt Ltd <br> No 14/2, Ruwan Place, <br> Bandartawaththa, Gampaha <br>
                                Sri Lanka</p>
                        </div>
                    </div>
                    <div class="qr-container col-lg-4">
                        <img class="img-qr" src="../assets/contact/qr.jpg" alt="">
                        <p>SCAN ME</p>
                        <img src="../assets/contact/we-chat.png" alt="" class="we-chat">
                    </div>
                </div>
            </div>
            <div class="what-can-we-help res-py">
                <div class="row">
                    <div v-for="(type, index) in contactTypes" :key="index" class="col-lg-3 col-md-6 col-sm-6 col-6">
                        <button @click="contactTypeClick(index)"
                            :class="type.isSelected === true ? 'btn-what-can-we-help-active' : 'btn-what-can-we-help'">
                            <div class="icon">
                                <img :src="require(`../assets/contact/${type.img}`)" alt="">
                            </div>
                            <div class="text-con">
                                <p class="pad-mar-no" :class="type.isSelected === true ? 'text-active' : 'text'">{{
                                    type.name }}</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div class="inquiry" id="inq">
                <div class="inquiry-wrp">
                    <p class="pad-mar-no">Make an<br>INQUIRY</p><br>
                    <input @input="validation()" :class="!errors.name ? 'inp' : 'inp-err'" v-model="name" type="text"
                        ref="name" @keydown.enter="this.$refs.mobile.focus()" name="" id="" placeholder="Name">
                    <div class="error f-sz-sm" v-if="errors.name">{{ errors.name }}</div>
                    <input @input="validation()" :class="!errors.mobile ? 'inp' : 'inp-err'" v-model="mobile" type="number"
                        ref="mobile" @keydown.enter="this.$refs.email.focus()" name="" id="" placeholder="Contact Number">
                    <div class="error f-sz-sm" v-if="errors.mobile">{{ errors.mobile }}</div>
                    <input @input="validation()" :class="!errors.email ? 'inp' : 'inp-err'" v-model="email" type="text"
                        ref="email" @keydown.enter="this.$refs.message.focus()" name="" id="" placeholder="Email">
                    <div class="error f-sz-sm" v-if="errors.email">{{ errors.email }}</div>
                    <textarea @input="validation()" :class="!errors.message ? 'inp-t-area' : 'inp-err-t-area'" ref="message"
                        @keydown.enter="submit()" v-model="message" name="" id="" cols="30" rows="5"
                        placeholder="Message"></textarea>
                    <div class="error f-sz-sm" v-if="errors.message">{{ errors.message }}</div>
                    <button class="button-submit col-theme-bg" @click="submit()">Submit</button>
                </div>
            </div>
            <div class="contact-details-wrp">
                <p>You can get in touch with our team of experts on <a href="tel:+94771602526">+94 77 160 2526</a></p>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import Navi from '../components/navigation-com.vue';
import { mapState } from 'vuex';
import axios from 'axios';
import Swal from 'sweetalert2';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Skeleton from '../components/skeleton-com.vue'

export default {

    data() {
        return {
            mainImgIsLoading: true,
            isLoading: false,
            subject: '',
            name: '',
            mobile: '',
            email: '',
            message: '',
            destination: '',
            dates: '',
            errors: {
                name: '',
                mobile: '',
                email: '',
                message: '',
                destination: '',
                dates: '',
            },
            contactTypes: [
                { name: 'Book a flight', img: '1-theme.png', isSelected: false },
                { name: 'Prepare to fly', img: '2-theme.png', isSelected: false },
                { name: 'Baggage', img: '3-theme.png', isSelected: false },
                { name: 'Book a holiday', img: '4-theme.png', isSelected: false },
                { name: 'Manage my booking', img: '5-theme.png', isSelected: false },
                { name: 'Special assistance', img: '6-theme.png', isSelected: false },
                { name: 'Flight distruptions', img: '7-theme.png', isSelected: false },
                { name: 'Complains and feedback', img: '8-theme.png', isSelected: false },
            ],
            selectedContactType: null,
        }
    },

    computed: {
        ...mapState(['api'])
    },

    components: {
        Navi,
        Loading,
        Skeleton,
    },

    methods: {
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

            if (!this.message) {
                this.errors.message = 'message is required!';
            } else {
                this.errors.message = '';
            }

            if (!this.destination) {
                this.errors.destination = 'Destination is required!';
            } else {
                this.errors.destination = '';
            }

            if (!this.dates) {
                this.errors.dates = 'Travel dates are required!';
            } else {
                this.errors.dates = '';
            }
        },

        async submit() {
            this.validation();
            if (this.errors.name === '' && this.errors.mobile === '' && this.errors.email === '' && this.errors.message === '') {
                this.isLoading = true;
                let selectedSubject = this.subject === '' ? this.email : this.subject;
                await axios.post(`${this.api}inquiry/contact`, {
                    subject: selectedSubject,
                    name: this.name,
                    mobile: this.mobile,
                    email: this.email,
                    message: this.message,
                }).then((response) => {
                    for (let i = 0; i < this.contactTypes.length; i++) {
                        this.contactTypes[i].isSelected = false;
                        this.contactTypes[i].img = i + 1 + '-theme.png';
                    }
                    this.isLoading = false;
                    this.name = '';
                    this.mobile = '';
                    this.email = '';
                    this.subject = '';
                    this.message = '';
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
                })
            }
        },

        mainImgLoad() {
            this.mainImgIsLoading = false;
        },

        contactTypeClick(index) {
            this.subject = this.contactTypes[index].name;
            for (let i = 0; i < this.contactTypes.length; i++) {
                this.contactTypes[i].isSelected = false;
                this.contactTypes[i].img = i + 1 + '-theme.png';
            }
            if (index === 0) {
                this.contactTypes[0].isSelected = true;
                this.contactTypes[0].img = '1.png';
                this.selectedContactType = this.contactTypes[0].name;
            } else if (index === 1) {
                this.contactTypes[1].isSelected = true;
                this.contactTypes[1].img = '2.png';
                this.selectedContactType = this.contactTypes[1].name;
            } else if (index === 2) {
                this.contactTypes[2].isSelected = true;
                this.contactTypes[2].img = '3.png';
                this.selectedContactType = this.contactTypes[2].name;
            } else if (index === 3) {
                this.contactTypes[3].isSelected = true;
                this.contactTypes[3].img = '4.png';
                this.selectedContactType = this.contactTypes[3].name;
            } else if (index === 4) {
                this.contactTypes[4].isSelected = true;
                this.contactTypes[4].img = '5.png';
                this.selectedContactType = this.contactTypes[4].name;
            } else if (index === 5) {
                this.contactTypes[5].isSelected = true;
                this.contactTypes[5].img = '6.png';
                this.selectedContactType = this.contactTypes[5].name;
            } else if (index === 6) {
                this.contactTypes[6].isSelected = true;
                this.contactTypes[6].img = '7.png';
                this.selectedContactType = this.contactTypes[6].name;
            } else if (index === 7) {
                this.contactTypes[7].isSelected = true;
                this.contactTypes[7].img = '8.png';
                this.selectedContactType = this.contactTypes[7].name;
            } else {
                return;
            }
            const secInq = document.getElementById("inq");
            secInq.scrollIntoView({ behavior: "smooth" });
        }
    }
}
</script>
<style scoped>
/* h1 {
    text-align: center;
} */

input,
textarea {
    background-color: transparent;
}

.row {
    margin: 0;
    padding: 0;
}

.inp {
    width: 100%;
    height: 40px;
    padding-left: 10px;
    margin-top: 20px;
    border: 1px solid grey;
    outline: none;
}

.inp-err {
    width: 100%;
    height: 40px;
    padding-left: 10px;
    margin-top: 20px;
    border: 1px solid red;
    outline: none;
}

.inp-t-area {
    width: 100%;
    padding-left: 10px;
    margin-top: 20px;
    border: 1px solid grey;
    outline: none;
}

.inp-err-t-area {
    width: 100%;
    padding-left: 10px;
    margin-top: 20px;
    border: 1px solid red;
    outline: none;
}

.button-submit {
    width: 150px;
    height: 45px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 0;
    border-radius: 30px;
    color: white;
}

.top-banner-wrp {
    padding-top: 130px;
    padding-bottom: 50px;
    margin-bottom: 50px;
    position: relative;
    background-color: rgba(0, 0, 0, 0.041);
}

.top-banner-wrp p {
    max-width: 500px;
    margin-top: 30px;
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

.contact-details-wrp {
    width: 600px;
    padding: 20px;
    padding-top: 0;
    margin: 0px auto 0 auto;
}

.txt-lg {
    font-size: 15px;
    color: grey;
}

.txt-sm {
    font-size: 13px;
}

.g-map {
    margin-top: 30px;
}

.inquiry {
    padding: 60px 10px;
    margin: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-image: url('../assets/contact/Contact.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

.inquiry-wrp {
    width: 500px;
    display: flex;
    flex-direction: column;
}

.inquiry-wrp p {
    font-size: 40px;
    text-align: center;
    line-height: 40px;
}

.inquiry-wrp p span i {
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.error {
    color: red;
    text-align: left;
}

.btn-what-can-we-help {
    width: 100%;
    padding: 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.116);
    border-radius: 20px;
    background-color: transparent;
    transition: all .3s ease;
}

.btn-what-can-we-help-active {
    width: 100%;
    padding: 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 1px solid #3CB615;
    background-color: #3CB615;
    transition: all .3s ease;
}

.btn-what-can-we-help:hover {
    border: 1px solid #3CB615;
}

.icon {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
}

.icon img {
    max-width: 100%;
    max-height: 100%;
}

.text {
    font-weight: 500;
}

.text-active {
    font-weight: 500;
    color: white;
}

.address-qr-container {
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.qr-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.img-qr {
    width: 200px;
    height: 200px;
}

.we-chat{
    max-width: 200px;
}

.moonstone-container{
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}

.moonstone-img-box{
    width: 40%;
    position: absolute;
    bottom: 0;
    right: 0;
}

.img-moonstone{
    max-width: 100%;
}

@media only screen and (max-width: 991px) {

    .top-banner {
        height: 400px;
    }

    .vr-style-div-wrp {
        bottom: 6%;
    }

    .what-can-we-help {
        padding-left: 130px;
        padding-right: 130px;
    }
}

@media only screen and (max-width: 767px) {

    .top-banner {
        height: 300px;
    }

    .vr-style-div-wrp {
        bottom: 4%;
    }

    .contact-details-wrp {
        width: 100%;
    }

    .what-can-we-help {
        padding-left: 10px;
        padding-right: 10px;
    }

    .address-qr-container {
        width: 100%;
        display: block;
    }

    .moonstone-img-box{
        display: none;
    }
}

@media only screen and (max-width: 575px) {

    .btn-what-can-we-help {
        padding: 10px;
        padding-top: 20px;
    }

    .btn-what-can-we-help-active {
        padding: 10px;
        padding-top: 20px;
    }

    .icon {
        width: 40px;
        height: 40px;
        margin-bottom: 10px;
    }

    .text-con {
        height: 40px;
    }

    .text {
        font-size: 13px;
    }

    .text-active {
        font-size: 13px;
    }
}</style>