<template>
  <div>
    <div class="flex justify-between text-sm mb-12">
      <a href="">首頁 / 景點 / {{ travelInfo_product[0].Name }}</a>
      <a href="" class="flex"
        >分享給你的伴侶
        <img src="@/assets/icon/share_default-1.png" alt="分享-icon" />
      </a>
    </div>
    <div class="flex justify-between mb-11">
      <div>
        <div class="text-green text-sm mb-2">
          <span class="mr-4" v-if="travelInfo_product[0].Class1">
            {{ "# " + travelInfo_product[0].Class1 }}</span
          >
          <span class="mr-4" v-if="travelInfo_product[0].Class2">{{
            "# " + travelInfo_product[0].Class2
          }}</span>
          <span class="mr-4" v-if="travelInfo_product[0].Class3">{{
            "# " + travelInfo_product[0].Class3
          }}</span>
        </div>

        <h1 class="font-bold" style="font-size: 28px">
          <!-- 馬沙溝海洋休閒運動度假中心 -->
          {{ travelInfo_product[0].Name }}
        </h1>
        <div class="flex my-2">
          <img
            src="@/assets/icon/position.png"
            alt="定位-icon"
            style="margin: auto 12px auto 0"
          />
          <span>{{
            travelInfo_product[0].Address
              ? travelInfo_product[0].Address
              : "暫無地址資訊"
          }}</span
          >&ensp;
          <button class="border border-solid rounded-full px-3 text-sm">
            查看地圖
          </button>
        </div>
        <div class="flex mb-12">
          <img
            src="@/assets/icon/phone_default.png"
            alt="電話-icon"
            style="margin: auto 12px auto 0"
          />
          <span>{{ travelInfo_product[0].Phone }}</span
          >&ensp;
          <button class="border border-solid rounded-full px-3 text-sm">
            點擊撥號
          </button>
        </div>
        <div class="mb-4">
          <div class="flex">
            <span class="font-bold text-lg">開放時間</span>&ensp;
            <span
              class="
                border border-solid
                rounded-full
                border-greenpx-3
                text-sm text-green
              "
              style="padding: 5px 10px"
            >
              開放中
            </span>
          </div>
        </div>
        <div>
          <table cellpadding="4" class="text-sm">
            <tr>
              <td>星期日</td>
              <td>10:00 - 18:00</td>
            </tr>
            <tr>
              <td>星期一</td>
              <td>10:00 - 18:00</td>
            </tr>
            <tr>
              <td>星期二</td>
              <td>休息</td>
            </tr>
            <tr>
              <td>星期三</td>
              <td>10:00 - 18:00</td>
            </tr>
            <tr>
              <td>星期四</td>
              <td>休息</td>
            </tr>
            <tr>
              <td>星期五</td>
              <td>10:00 - 18:00</td>
            </tr>
            <tr>
              <td>星期六</td>
              <td>10:00 - 18:00</td>
            </tr>
          </table>
        </div>
      </div>
      <img
        :src="travelInfo_product[0].Picture.PictureUrl1"
        alt="圖片"
        style="width: 600px; height: 420px"
      />
    </div>
    <section class="mt-11 py-11 mb-10">
      {{ travelInfo_product[0].DescriptionDetail }}
    </section>
    <section class="flex justify-between mb-14">
      <div class="">
        <p class="font-bold text-lg mb-4">服務設施</p>
        <p class="text-sm">停車場 / 公廁 / 淋浴設備 / 販售部</p>
      </div>
      <div class="" style="max-width: 700px;">
        <p class="font-bold text-lg mb-4">交通方式</p>
        <p class="text-sm">
          {{
            travelInfo_product[0].TravelInfo
              ? travelInfo_product[0].TravelInfo
              : "暫無提供資訊"
          }}
        </p>
        <!-- <p class="text-sm">自行開車 / 搭乘大眾運輸</p> -->
      </div>
      <div>
        <p class="font-bold text-lg mb-4">相關連結</p>
        <a
          :src="travelInfo_product[0].WebsiteUrl"
          class="border border-solid rounded-full px-3 text-sm"
          style="padding: 0 12px"
        >
          官方粉絲團
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useStore } from "@/store/index";
import { mapActions } from "pinia";
import { useRoute } from "vue-router";
// import { computed } from "@vue/reactivity";

const route = useRoute();

const api = useStore();
let id = route.params.id;
const travelInfo_product = api.list.filter((element) => {
  return element.ID == id;
});
</script>

<style>
/* table tr td:first-child{
    width: 30%;;
} */
</style>
