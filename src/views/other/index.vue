<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Shippori+Antique+B1&display=swap"
    rel="stylesheet"
  />

  <header class="flex justify-between h-30 bg-bgGray">
    <div>
      <img
        alt="Vue logo"
        src="@/assets/20211102_logo-02.png"
        class="w-40"
        style="line-height: 100px"
      />
    </div>
    <div
      class="grid grid-cols-4 gap-11 font-sans text-center"
      style="margin: auto 0; color: #808080"
    >
      <div class="block font-normal">
        <a href="">
          <p class="" style="letter-spacing: 5px">找景點</p>
          <p class="text-xs">ATTRACTION</p>
        </a>
      </div>
      <div class="font-normal">
        <a href="">
          <p class="" style="letter-spacing: 5px">找美食</p>
          <p class="text-xs">DELICACY</p>
        </a>
      </div>
      <div class="font-normal">
        <a href="">
          <p class="" style="letter-spacing: 5px">找活動</p>
          <p class="text-xs">ACTIVITY</p>
        </a>
      </div>
      <div class="font-normal">
        <a href="">
          <p class="" style="letter-spacing: 5px">探索更多</p>
          <p class="text-xs">MORE</p>
        </a>
      </div>
    </div>
    <div class="flex" style="margin: auto 0">
      <img
        alt="愛心icon"
        src="@/assets/icon/like_default.png"
        class="text-xs hover_like"
      />
      <img alt="問號icon" src="@/assets/icon/faq_default.png" class="text-xs" />
    </div>
  </header>

  <div class="mt-12" style="color: #737373">
    <Travel />
    <router-view></router-view>
    <!-- <Prodect /> -->
  </div>
  <footer class="flex justify-between py-5 bg-bgGray">
    <div class="flex">
      <a class="text-sm text-gray" style="margin:auto">Follow us</a>
      <a href=""><img src="@/assets/icon/fb_default.png" alt="fb-icon" /></a>
      <a href=""><img src="@/assets/icon/instagram_default.png" alt="ig-icon" /></a>
      <a href=""><img src="@/assets/icon/youtube_default.png" alt="yt-icon" /></a>
    </div>
    <p class="text-xs text-lightGray" style="margin: auto">
      Copyright © 2021 TRAVEL. All rights reserved.
    </p>
    <div class="flex">
      <img src="@/assets/icon/ch.png" alt="CH-icon" />
      <img src="@/assets/icon/en.png" alt="EN-icon" />
      <img src="@/assets/icon/ja.png" alt="JA-icon" />
    </div>
  </footer>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
//import '@/assets/tailwind.css'
import Prodect from '@/views/product.vue'
import Travel from '@/views/Travel/index.vue'
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  padding: 0 180px;
  font-family: "Shippori Antique B1", sans-serif;
  /* background-color: #FAFAFA; */
}

/* .hover_like img:hover {
  background: url("@/assets/icon/like_hover.png");
} */
</style>
