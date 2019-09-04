<template>
  <div class="activity-slide-container">
    <div class="swiper-container" ref="activitySlide">
      <div class="swiper-wrapper">
        <div 
          class="swiper-slide"
          v-for="{title, image} of activities" 
          :key="title"
          >
          <a href="javascript:void(0)">
            <img :src="image" style="width: 720px; height: 240px">
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import SwiperImg_1 from '../assets/swiper_img/1.jpg'
  import SwiperImg_2 from '../assets/swiper_img/2.jpg'
  import SwiperImg_3 from '../assets/swiper_img/3.jpg'
  import SwiperImg_4 from '../assets/swiper_img/4.jpg'
  import SwiperImg_5 from '../assets/swiper_img/5.jpg'

  export default {
    name: 'ActivitySlide',
    data () {
      return {
        activities: [
          {
            title: '书香节',
            image: SwiperImg_1
          },
          {
            title: '童书',
            image: SwiperImg_2
          },
          {
            title: '作家评选',
            image: SwiperImg_3
          },
          {
            title: '阅读丈量世界',
            image: SwiperImg_4
          },
          {
            title: '名店好书',
            image: require('../assets/swiper_img/5.jpg')
          }
        ]
      }
    },
    mounted () {
      new Swiper(this.$refs.activitySlide, {
        direction: 'horizontal',
        loop: true,
        autoplay: {
          delay: 2000
        },
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });
    }
  }
</script>

<style lang="scss" scoped>
.activity-slide-container {
  width: 60%;
}

.swiper-container {
    width: 702px;
    height: 240px;
    margin: 0 auto;
}
</style>


