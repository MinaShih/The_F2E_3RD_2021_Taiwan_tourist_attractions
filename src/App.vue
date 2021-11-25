<template>
  <header class="flex justify-between h-30 bg-bgGray px-52">
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
        class="hover_like"
      />
      <img alt="問號icon" src="@/assets/icon/faq_default.png" class="hover_faq"/>
    </div>
  </header>

  <div class="mt-12 px-52" style="color: #737373">
    <router-view></router-view>
  </div>

  <footer class="flex justify-between py-5 bg-bgGray px-52">
    <div class="flex">
      <a class="text-sm text-gray" style="margin: auto">Follow us</a>
      <a href=""><img src="@/assets/icon/fb_default.png" alt="fb-icon" /></a>
      <a href=""
        ><img src="@/assets/icon/instagram_default.png" alt="ig-icon" 
      /></a>
      <a href=""
        ><img src="@/assets/icon/youtube_default.png" alt="yt-icon"
      /></a>
    </div>
    <p class="text-xs text-lightGray" style="margin: auto">
      Copyright © 2021 TRAVEL. All rights reserved.
    </p>
    <div class="flex">
      <img src="@/assets/icon/CH.png" alt="CH-icon" />
      <img src="@/assets/icon/EN.png" alt="EN-icon" />
      <img src="@/assets/icon/JA.png" alt="JA-icon" />
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      redirectUrl: "/",
    };
  },
  mounted() {
    this.$router.push(this.redirectUrl);
  },
  methods: {},
};
</script>

<style>
#app {
  /* padding: 0 200px; */
  font-family: "Shippori Antique B1", sans-serif;
}

</style>
