<template>
    <div>
        <loading v-model:active="isLoading" loader="bars" color="#EB1221" background-color="black" />
        <div class="main res-py">
            <div class="le">
                <h4>Be Inspired</h4>
                <p class="p-subs">Subscribe to our newsletter for the latest offers for your next holiday with Yathra Tours & Travels.</p>
                <div class="subscribe">
                    <input v-model="email" @input="validation()" :class="!errors.email ? 'subscribe-def' : 'subscribe-err'"
                        type="text" name="" id="">
                    <button @click="subscribe()" class="col-theme-bg">Subscribe</button>
                </div>
                <div class="error f-sz-sm" v-if="errors.email">{{ errors.email }}</div>
                <div class="subs-note">
                    <button @click="subsExpand()">
                        <div>
                            <img id="plus" src="../assets/icons/plus.png" alt="">
                        </div>
                        <p class="pad-mar-no">Relax, your data is safe with us.</p>
                    </button>
                    <transition name="subs-trans">
                        <p v-if="subsNoteIsVisible" class="pad-mar-no">
                            By subscribing to our newsletter you agree to receive emails with the latest offers and news
                            from Yathra Tours & Travels. You can unsubscribe th these at any time. Your information will be not
                            shared
                            with any organization outside of Yathra Tours & Travels. Read our full privacy policy.
                        </p>
                    </transition>
                </div>
            </div>
            <div class="ri">
                <div class="animated-logo">
                    <img src="../assets/logo/yathra_tours_logo_black.png" alt="">
                </div>
            </div>
        </div>
        <div class="n-con">
            <div class="left">
                <div class="icn">
                    <img src="../assets/icons/to-do.png" alt="">
                </div>
                <div>
                    <p class="p-lg pad-mar-no">Get your tailor made holiday quote</p>
                    <p class="f-sz-sm pad-mar-no">We're here to make it easy...</p>
                </div>
            </div>
            <div class="right">
                <div class="icn">
                    <img src="../assets/icons/customer-service.png" alt="">
                </div>
                <div>
                    <p class="pad-mar-no">For bookings & latest offers <br>Call our Travel Experts now</p>
                    <a href="tel:+6194732673" class="p-lg pad-mar-no">+94 77 160 2526</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex';
import Swal from 'sweetalert2';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    data() {
        return {
            isLoading: false,
            subsNoteIsVisible: false,
            email: '',
            errors: {
                email: '',
            }
        }
    },

    computed: {
        ...mapState(['api'])
    },

    components: {
        Loading,
    },

    methods: {
        subsExpand() {
            this.subsNoteIsVisible = !this.subsNoteIsVisible;
            let el = document.getElementById("plus");
            if (this.subsNoteIsVisible === false) {
                el.style.transform = "rotate(0deg)";
            } else {
                el.style.transform = "rotate(45deg)";
            }
        },

        validation() {
            if (!this.email) {
                this.errors.email = 'Email is required!';
            } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
                this.errors.email = 'Invalid email format!';
            } else {
                this.errors.email = '';
            }
        },

        subscribe() {
            this.validation();
            if (!this.errors.email) {
                this.isLoading = true;
                try {
                    axios.post(`${this.api}newsletter/subscribe`, {
                    email: this.email,
                }).then((response) => {
                    this.isLoading = false;
                    if (response.status === 201) {
                        Swal.fire({
                            title: 'Success',
                            text: "You have successfully subscribed in to Yathra Tours & Travels Newsletters!",
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
                this.email = '';
                } catch (error) {
                    this.isLoading = false;
                    Swal.fire({
                            title: 'Error',
                            text: "Something went wrong!",
                            icon: 'error',
                        });
                }
            }
        }
    }
}
</script>
<style scoped>

a {
    color: white;
    text-decoration: none;
}

.p-subs {
    font-family: 'agency', sans-serif;
    font-weight: normal;
}

.main {
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    justify-content: space-between;
    background-color: rgba(128, 128, 128, 0.281);
}

.le,
.ri {
    width: 50%;
}

.le {
    padding-right: 10px;
}

.subscribe {
    display: flex;
}

.subscribe-def {
    width: 100%;
    height: 45px;
    padding-left: 20px;
    outline: none;
    border: none;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.subscribe-err {
    width: 100%;
    height: 45px;
    padding-left: 20px;
    outline: none;
    border: 1px solid red;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.subscribe button {
    width: 150px;
    height: 45px;
    border: none;
    color: white;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}

.subs-note button {
    margin-top: 20px;
    margin-bottom: 10px;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
}

.subs-note button p {
    text-align: left;
    color: black;
}

.subs-note button div {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    background-color: black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.subs-note button div img {
    max-width: 80%;
    max-height: 80%;
    transition: all .3s ease;
}

.ri {
    padding-left: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.animated-logo{
    max-width: 300px;
}

.animated-logo img{
    max-width: 100%;
    max-height: 100%;
}

.brochures-img {
    height: 220px;
}

.brochures-img img {
    max-width: 100%;
    max-height: 100%;
}

.brochures-con {
    display: flex;
    flex-direction: column;
}

.brochures-con p {
    text-align: right;
}

.brochures-con button {
    width: 180px;
    height: 45px;
    border: none;
    color: white;
    border-radius: 20px;
}

.subs-trans-enter-from,
.subs-trans-leave-to {
    opacity: 0;
}

.subs-trans-enter-active,
.subs-trans-leave-active {
    transition: all .3s ease;
}

.n-con {
    display: flex;
    color: white;
}

.n-con .left {
    width: 50%;
    display: flex;
    padding: 10px 0;
    padding-right: 40px;
    justify-content: flex-end;
    align-items: center;
    background-color: #2c3640;
}

.n-con .right {
    width: 50%;
    display: flex;
    padding: 10px 0;
    justify-content: flex-start;
    align-items: center;
    background-color: #4e6e85;
}

.icn {
    width: 60px;
    height: 70px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icn img {
    max-width: 100%;
    max-height: 100%;
}

.f-sz-sm {
    font-family: 'agency', sans-serif;
    font-weight: normal;
}

.error {
    color: red;
    text-align: left;
    padding-left: 10px;
    font-family: 'Font-2', sans-serif;
}

@media only screen and (max-width: 767px) {

    .le,
    .ri {
        width: 100%;
    }

    .le {
        padding-right: 0;
    }

    .ri {
        padding-top: 20px;
        justify-content: center;
    }

    .main {
        flex-direction: column;
    }

    .brochures-img {
        width: 120px;
        height: 150px;
    }

    .n-con {
        flex-direction: column;
    }

    .n-con .left,
    .n-con .right {
        width: 100%;
        padding-right: 0;
        justify-content: center;
    }
}
</style>