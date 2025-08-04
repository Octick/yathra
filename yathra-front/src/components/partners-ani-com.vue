<template>
  <div>
    <div class="slider">
      <div class="slide-track">
        <div class="slide">
          <img src="../assets/logo/aus-air.png" alt="" />
        </div>
        <div class="slide">
          <img src="../assets/logo/cath-air.png" alt="" />
        </div>
        <div class="slide">
          <img src="../assets/logo/emi-air.png" alt="" />
        </div>
        <div class="slide">
          <img src="../assets/logo/kor-air.png" alt="" />
        </div>
        <div class="slide">
          <img src="../assets/logo/mal-air.png" alt="" />
        </div>
        <div class="slide">
          <img src="../assets/logo/nz-air.png" alt="" />
        </div>
        <div class="slide">
          <img src="../assets/logo/phili-air.png" alt="" />
        </div>
        <div class="slide">
          <img src="../assets/logo/quat-air.png" alt="" />
        </div>
        <div class="slide">
          <img src="../assets/logo/sing-air.png" alt="" />
        </div>
        <div class="slide">
          <img src="../assets/logo/sl-air.png" alt="" />
        </div>
        <div class="slide">
          <img src="../assets/logo/aus-air.png" alt="" />
        </div>
        <div class="slide">
          <img src="../assets/logo/cath-air.png" alt="" />
        </div>
        <div class="slide">
          <img src="../assets/logo/emi-air.png" alt="" />
        </div>
        <div class="slide">
          <img src="../assets/logo/kor-air.png" alt="" />
        </div>
        <div class="slide">
          <img src="../assets/logo/mal-air.png" alt="" />
        </div>
        <div class="slide">
          <img src="../assets/logo/nz-air.png" alt="" />
        </div>
        <div class="slide">
          <img src="../assets/logo/phili-air.png" alt="" />
        </div>
        <div class="slide">
          <img src="../assets/logo/quat-air.png" alt="" />
        </div>
        <div class="slide">
          <img src="../assets/logo/sing-air.png" alt="" />
        </div>
        <div class="slide">
          <img src="../assets/logo/sl-air.png" alt="" />
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-2582px);
  }
}

.slider {
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
  /* margin: 20px 0; */
}

.slider::before,
.slider::after {
  content: "";
  height: 100px;
  position: absolute;
  z-index: 2;
}

.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}

.slider::before {
  left: 0;
  top: 0;
}

.slider .slide-track {
  animation: scroll 30s linear infinite;
  display: flex;
  width: 5164px;
}

.slider .slide {
  height: 60px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider .slide img{
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 767px) {
  .slider .slide-track {
    animation: scroll 60s linear infinite;
  }
}
</style>