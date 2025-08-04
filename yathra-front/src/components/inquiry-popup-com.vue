<template>
    <div>
        <loading v-model:active="isLoading" loader="bars" color="#EB1221" background-color="black" />
        <div class="main">
            <div class="form">
                <button @click="passInqVisible()" class="btn btn-close"></button><br>
                <h3>Easy Inquiry</h3>
                <p>Tell us more about your holiday - eg. your dates, the tour you are interested in, number of
                    passengers, sight you would like to see etc.. Altrenatively, speak to a travel expert on <a
                        href="tel:+61394732673">+61 9473
                        2673</a></p>
                <div class="content row">
                    <div class="col-lg-12">
                        <div>
                            <label for="">Message</label><br>
                            <textarea class="form-control" name="" id="" cols="30" rows="4" v-model="message"></textarea>
                            <div class="error f-sz-sm" v-if="errors.destination">{{ errors.destination }}</div>
                        </div><br>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div>
                            <label for="">Your Name</label><br>
                            <input @input="validation()" v-model="name" :class="!errors.name ? 'input-def' : 'input-err'"
                                type="text" name="" id="">
                            <div class="error f-sz-sm" v-if="errors.name">{{ errors.name }}</div>
                        </div><br>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div>
                            <label for="">Contact Number</label><br>
                            <input @input="validation()" v-model="mobile"
                                :class="!errors.mobile ? 'input-def' : 'input-err'" type="text" name="" id="">
                            <div class="error f-sz-sm" v-if="errors.mobile">{{ errors.mobile }}</div>
                        </div><br>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div>
                            <label for="">Email</label><br>
                            <input @input="validation()" v-model="email" :class="!errors.email ? 'input-def' : 'input-err'"
                                type="text" name="" id="">
                            <div class="error f-sz-sm" v-if="errors.email">{{ errors.email }}</div>
                        </div><br>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <label for="">Travel Dates</label><br>
                        <input @input="validation()" v-model="dates" :class="!errors.dates ? 'input-def' : 'input-err'"
                            name="" id="">
                        <div class="error f-sz-sm" v-if="errors.dates">{{ errors.dates }}</div>
                    </div><br>
                    <div class="col-lg">
                        <div>
                            <label for="">Destination</label><br>
                            <input @input="validation()" v-model="destination"
                                :class="!errors.destination ? 'input-def' : 'input-err'" type="text" name="" id="">
                            <div class="error f-sz-sm" v-if="errors.destination">{{ errors.destination }}</div>
                        </div><br>
                    </div>
                </div>
                <div class="news-lttr-acc">
                    <input class="chk-bx" type="checkbox" name="" id="" @input="updateCheckbox">
                    <p class="pad-mar-no">I want emails from Travel Prime with the latest offers, news and travel
                        inspiration</p>
                </div>
                <p style="font-family: 'agency', sans-serif; font-weight: normal;">In accordance with the latest NZD data
                    regulations, you can unsubscribe from our emails at any time. You can read our privacy policy that
                    provides further information about how we use personal data.</p>
                <button @click="submit()" class="submit col-theme-bg">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';
import Swal from 'sweetalert2';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {

    props: {
        location: String,
    },

    data() {
        return {
            isLoading: false,
            name: '',
            mobile: '',
            email: '',
            destination: this.location,
            dates: '',
            message: '',
            errors: {
                name: '',
                mobile: '',
                email: '',
                destination: '',
                dates: '',
            },
            newsletter: false,
        }
    },

    components: {
        Loading,
    },

    computed: {
        ...mapState(['api'])
    },

    methods: {
        passInqVisible() {
            this.$emit('inquiryIsVisible', { isVisible: false, des: '' });
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

        updateCheckbox() {
            this.newsletter = !this.newsletter;
        },

        submit() {
            this.validation();
            if (!this.errors.name && !this.errors.mobile && !this.errors.email && !this.errors.destination && !this.errors.dates) {
                this.isLoading = true;
                axios.post(`${this.api}inquiry/send`, {
                    name: this.name,
                    mobile: this.mobile,
                    email: this.email,
                    destination: this.destination,
                    dates: this.dates,
                    message: this.message,
                }).then((response) => {
                    this.isLoading = false;
                    this.$emit('inquiryIsVisible', { isVisible: false, des: '' });
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
                if (this.newsletter === true) {
                    axios.post(`${this.api}newsletter/subscribe`, {
                        email: this.email,
                    });
                }
            }
        }
    }
}
</script>
<style scoped>
* {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}

.input-def {
    width: 100%;
    height: 35px;
    border-radius: 5px;
    padding-left: 10px;
    outline: none;
    border: 2px solid rgb(214, 214, 214);
}

.input-err {
    width: 100%;
    height: 35px;
    border-radius: 5px;
    padding-left: 10px;
    outline: none;
    border: 2px solid red;
}

.error {
    color: red;
    text-align: left;
    padding-left: 10px;
}

.chk-bx {
    width: 15px;
    height: 15px;
    border-radius: 2px;
    margin-right: 10px;
}

.main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.555);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
    overflow: auto;
}

.form {
    width: 700px;
    max-height: 100vh;
    padding: 20px;
    border-radius: 10px;
    background-color: rgb(241, 241, 241);
    position: relative;
    overflow-x: auto;
}

.form::-webkit-scrollbar {
    width: .5vw;
}

.form::-webkit-scrollbar-thumb {
    background-color: rgba(128, 128, 128, 0.308);
    border-radius: 20px;
}

.form::-webkit-scrollbar-thumb:hover {
    background-color: rgb(95, 95, 95);
}

.form::-webkit-scrollbar-track {
    background-color: transparent;
}

.btn-close {
    float: right;
}

.content {
    margin-top: 20px;
}

.submit {
    width: 100px;
    height: 40px;
    border: none;
    color: white;
    border-radius: 20px;
    margin-top: 20px;
    float: right;
}

.news-lttr-acc {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.news-lttr-acc p {
    font-family: 'agency', sans-serif;
    font-weight: normal;
}

@media only screen and (max-width: 991px) {

    .form {
        width: 100%;
        height: auto;
        border-radius: 0;
    }
}

@media only screen and (max-width: 767px) {
    .main {
        align-items: flex-start;
    }
}
</style>