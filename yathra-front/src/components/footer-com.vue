<template>
  <div class="foo">
    <div class="main res-py">
      <div class="le">
        <p class="txt-main pad-mar-no">Need our Assistance?</p><br>
        <a href="tel:+61394732673" class="call-wrp">
          <div class="icn-call">
            <img src="../assets/icons/phone-col.png" alt="phone-icon">
          </div>
          <p class="txt-main pad-mar-no">Call Us: +94 77 160 2526</p>
        </a><br>
        <div class="social">
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/yathratoursandtravels/">
            <div class="social-icon">
              <img src="../assets/icons/insta.png" alt="">
            </div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100095350033578">
            <div class="social-icon">
              <img src="../assets/icons/fb.png" alt="">
            </div>
          </a>
          <a target="_blank" rel="noopener noreferrer"
            href="https://youtube.com/@YathraToursTravelspvtLtd-tz4ks?si=79duTfA2MtL2VvIO">
            <div class="social-icon">
              <img src="../assets/icons/youtube.png" alt="">
            </div>
          </a>
        </div>
      </div>
      <div class="mid">
        <p class="txt-main">Useful Links</p>
        <div class="links-wrp">
          <div class="links-wrp-left">
            <div class="link-icn-wrp">
              <img src="../assets/icons/forward-white.png" alt="">
              <router-link to="/">Home</router-link>
            </div>
            <div class="link-icn-wrp">
              <img src="../assets/icons/forward-white.png" alt="">
              <router-link to="/tours">Tours</router-link>
            </div>
            <div class="link-icn-wrp">
              <img src="../assets/icons/forward-white.png" alt="">
              <router-link to="/about-us">About</router-link>
            </div>
          </div>
          <div class="links-wrp-right">
            <div class="link-icn-wrp">
              <img src="../assets/icons/forward-white.png" alt="">
              <router-link to="/contact-us">Contact</router-link>
            </div>
            <div class="link-icn-wrp">
              <img src="../assets/icons/forward-white.png" alt="">
              <router-link to="/privacy-policy">Privacy Policy</router-link>
            </div>
            <div class="link-icn-wrp">
              <img src="../assets/icons/forward-white.png" alt="">
              <router-link to="/terms-&-conditions">Terms & Conditions</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="ri">
      </div>
    </div>
    <div class="divider"></div>
    <div class="row">
      <div class="col-lg-6 col-md-6">
        <p class="copyright res-py">Copyright © 2023 yathratour All rights reserved</p>
      </div>
      <div class="developed-wrp col-lg-6 col-md-6">
        <p class="copyright res-py">design and developed by <a target="_blank" href="https://octick.com">octick</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a {
  text-decoration: none;
}

.developed-wrp{
  display: flex;
  justify-content: flex-end;
}

.copyright, .developed-wrp a{
  color: rgb(136, 136, 136);
}

.divider{
  height: 1px;
  background-color: rgb(116, 116, 116);
  margin-bottom: 30px;
}

.foo{
  background-image: url('../assets/others/Footer.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-bottom: 20px;
}

.main {
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
}

.call-wrp {
  display: flex;
  align-items: center;
}

.icn-call {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #EB1221;
  border-radius: 50%;
}

.icn-call img {
  max-width: 80%;
  max-height: 80%;
}

.txt-main {
  color: white;
}

.txt-sub {
  color: rgb(173, 173, 173);
}

.social {
  width: 100px;
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

.mid {
  display: flex;
  flex-direction: column;
}

.mid a {
  color: rgb(173, 173, 173);
  transition: all .3s ease;
}

.mid a:hover {
  color: white;
}

.payment {
  width: 200px;
  display: flex;
  justify-content: space-between;
}

.payment-card {
  width: 50px;
  height: 30px;
}

.payment-card img {
  max-width: 100%;
  max-height: 100%;
}

.links-wrp {
  width: 280px;
  display: flex;
  justify-content: space-between;
}

.link-icn-wrp {
  display: flex;
  align-items: center;
}

.link-icn-wrp img {
  width: 15px;
  height: 15px;
  margin-right: 10px;
}

@media only screen and (max-width: 767px) {

  .developed-wrp{
    justify-content: flex-start;
  }

  .main {
    flex-direction: column;
    align-items: center;
  }

  .le,
  .mid,
  .ri {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .links-wrp {
    width: 100%;
    flex-direction: column;
  }
}
</style>