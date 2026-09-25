<template>
  <div>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://wa.me/94771602526"
    >
      <div class="whatsapp"></div>
    </a>
    <transition name="navi-trans">
      <div v-if="showNav" class="main res-py" v-click-outside="onClickOutside">
        <div class="parent">
          <div class="left">
            <router-link to="/">
              <img
                class="logo-mob"
                src="../assets/logo/yathra_tours_logo_white.png"
                alt="logo travel prime"
              />
            </router-link>
            <div class="site-links">
              <router-link to="/">HOME</router-link>
              <router-link to="/tours">TOURS</router-link>
              <router-link to="/activities">ACTIVITIES</router-link>
              <router-link to="/about-us">ABOUT US</router-link>
              <router-link to="/contact-us">CONTACT</router-link>
            </div>
          </div>
          <div class="middle">
            <router-link to="/">
              <img
                src="../assets/logo/yathra_tours_logo_white.png"
                alt="logo travel prime"
              />
            </router-link>
          </div>
          <div class="right">
            <button
              @click="mobNaviItemIsVisible = true"
              class="bur-btn pad-mar-no"
            >
              <div></div>
              <div></div>
              <div></div>
            </button>
            <div class="contact">
              <div>
                <div class="social">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/yathratoursandtravels/"
                  >
                    <div class="social-icon">
                      <img src="../assets/icons/insta.png" alt="" />
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/profile.php?id=100095350033578"
                  >
                    <div class="social-icon">
                      <img src="../assets/icons/fb.png" alt="" />
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://youtube.com/@YathraToursTravelspvtLtd-tz4ks?si=79duTfA2MtL2VvIO"
                  >
                    <div class="social-icon">
                      <img src="../assets/icons/youtube.png" alt="" />
                    </div>
                  </a>
                </div>
                <!-- <div class="icon-box">
                                    <img src="../assets/icons/user.png" alt="my booking">
                                </div>
                                <router-link id="my-booking" to="/my-booking">My Booking</router-link> -->
              </div>
              <div class="icon-box">
                <img src="../assets/icons/phone.png" alt="my booking" />
              </div>
              <a href="tel:+94771602526">+94 77 160 2526</a>
            </div>
          </div>
        </div>
        <transition name="mob-navi-items-trans">
          <div v-if="mobNaviItemIsVisible" class="mob-navi-item">
            <button
              @click="mobNaviItemIsVisible = false"
              class="btn-close btn-close-white"
            ></button>
            <div class="mob-site-links-con">
              <router-link to="/" @click="mobNaviItemIsVisible = false">
                <img
                  class="mob-site-links-main-logo"
                  src="../assets/logo/yathra_tours_logo_white.png"
                  alt=""
                />
              </router-link>
              <router-link to="/" @click="mobNaviItemIsVisible = false"
                >Home</router-link
              >
              <router-link to="/tours" @click="mobNaviItemIsVisible = false"
                >Tours</router-link
              >
              <router-link
                to="/activities"
                @click="mobNaviItemIsVisible = false"
                >Activities</router-link
              >
              <router-link to="/about-us" @click="mobNaviItemIsVisible = false"
                >About Us</router-link
              >
              <router-link
                to="/contact-us"
                @click="mobNaviItemIsVisible = false"
                >Contact</router-link
              >
              <div class="hor-li"></div>
              <!-- <router-link to="/my-booking" @click="mobNaviItemIsVisible = false">My Booking</router-link> -->
              <a href="tel:+94771602526" @click="mobNaviItemIsVisible = false"
                >+94 77 160 2526</a
              >
              <div class="social">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/yathratoursandtravels/"
                >
                  <div class="social-icon">
                    <img src="../assets/icons/insta.png" alt="" />
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/profile.php?id=100095350033578"
                >
                  <div class="social-icon">
                    <img src="../assets/icons/fb.png" alt="" />
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://youtube.com/@YathraToursTravelspvtLtd-tz4ks?si=79duTfA2MtL2VvIO"
                >
                  <div class="social-icon">
                    <img src="../assets/icons/youtube.png" alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import vClickOutside from "click-outside-vue3";

export default {
  data() {
    return {
      showNav: true,
      lastScrollTop: 0,
      mobNaviItemIsVisible: false,
    };
  },

  directives: {
    clickOutside: vClickOutside.directive,
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > this.lastScrollTop) {
        this.showNav = false;
      } else {
        this.showNav = true;
      }
      this.lastScrollTop = st <= 0 ? 0 : st;
    },

    onClickOutside() {
      this.mobNaviItemIsVisible = false;
    },
  },
};
</script>

<style scoped>
.whatsapp {
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 50px;
  right: 20px;
  z-index: 2;
  background-image: url("../assets/icons/whatsapp.png");
  background-repeat: no-repeat;
  background-size: contain;
}

#my-booking {
  pointer-events: none;
}

a {
  color: white;
  text-decoration: none;
  transition: 0.3s ease;
}

p {
  color: white;
}

a:hover,
a.router-link-exact-active {
  color: #5fd068;
}

.hr-ver {
  width: 1px;
  height: 12px;
  background-color: white;
}

.main {
  height: 70px;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.parent {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.left,
.right {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
}

.logo-mob,
.bur-btn,
.mob-navi-item {
  display: none;
}

.contact {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contact div {
  display: flex;
  align-items: center;
}

.icon-box {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-left: 20px;
}

.icon-box img {
  max-width: 100%;
  max-height: 100%;
}

.left {
  left: 0;
}

.site-links {
  width: 380px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.right {
  right: 0;
}

.middle {
  height: 70px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.middle img {
  width: 150px;
}

.social {
  width: 100px;
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
}

.social-icon {
  width: 25px;
  height: 25px;
  border: 1px solid white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-icon img {
  max-width: 70%;
  max-height: 70%;
}

.navi-trans-enter-from,
.navi-trans-leave-to {
  top: -70px;
}

.navi-trans-enter-active,
.navi-trans-leave-active {
  transition: all 0.3s ease;
}

@media only screen and (max-width: 991px) {
  .logo-mob {
    width: 150px;
    display: block;
  }

  .middle,
  .site-links,
  .contact {
    display: none;
  }

  .bur-btn {
    height: 23px;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: transparent;
  }

  .bur-btn div {
    width: 28px;
    height: 2px;
    background-color: white;
  }

  .mob-navi-item {
    width: 300px;
    height: 100vh;
    padding: 30px 20px;
    background-color: black;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
  }

  .mob-site-links-con {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mob-site-links-con a {
    margin-top: 20px;
    font-size: 20px;
  }

  .mob-site-links-main-logo {
    width: 150px;
    margin-bottom: 20px;
  }

  .hor-li {
    width: 100%;
    height: 1px;
    margin-top: 20px;
    background-color: white;
  }

  .social {
    margin: auto;
  }

  .mob-navi-items-trans-enter-from,
  .mob-navi-items-trans-leave-to {
    right: -100%;
  }

  .mob-navi-items-trans-enter-active,
  .mob-navi-items-trans-leave-active {
    transition: all 0.3s ease-in-out;
  }
}

@media only screen and (max-width: 767px) {
  .mob-navi-item {
    width: 100%;
  }

  .bur-btn {
    height: 20px;
  }

  .bur-btn div {
    width: 25px;
  }
}
</style>
