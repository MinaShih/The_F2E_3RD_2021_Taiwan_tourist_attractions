<script setup>
import { ref } from "vue";
</script>

<template>
<!--  -->
  <div class="grid grid-cols-12 ">
    <div class="col-span-2 text-left">
      <div class="text-sm mb-8">首頁 / 景點</div>
      <div class="grid gap-4">
        <p class="font-bold text-lg">你正在搜尋</p>
        <p class="hover:text-green">景點</p>
        <p class="hover:text-green">美食</p>
        <p class="hover:text-green">活動</p>
        <hr />
      </div>
      <div>
        <div class="flex">
          <span class="font-bold text-lg" style="margin: 24px 12px 27px 0"
            >縮小搜尋範圍</span
          >
          <span class="text-sm" style="color: #769763; margin: auto"
            >清除條件</span
          >
        </div>
        <div>
          <p>地理區域</p>
          <select
            name=""
            id=""
            style="margin: 16px 0 27px 0; padding:0 10px"
            class="w-full border border-solid border-gray-500 rounded-full h-8"
          >
            <option value="請選擇縣市">請選擇縣市</option>
          </select>
        </div>
        <div class="grid gap-4">
          <p>景點主題</p>
          <button
            class="
            h-8
            border-gray-500 
            border 
            border-solid
            rounded-full
            hover:bg-green 
            hover:text-white
            "
          >
            花海漫遊
          </button>
          <button
            class="
            h-8
            border-gray-500 
            border 
            border-solid
            rounded-full
            hover:bg-green 
            hover:text-white
            "
          >
            水上活動
          </button>
          <button
            class="
            h-8
            border-gray-500 
            border 
            border-solid
            rounded-full
            hover:bg-green 
            hover:text-white
            "
          >
            星空露營
          </button>
          <button
            class="
            h-8
            border-gray-500 
            border 
            border-solid
            rounded-full
            hover:bg-green 
            hover:text-white
            "
          >
            溫泉湯屋
          </button>
          <button
            class="
            h-8
            border-gray-500 
            border 
            border-solid
            rounded-full
            hover:bg-green 
            hover:text-white
            "
          >
            親子同遊
          </button>
          <button
            class="
            h-8
            border-gray-500 
            border 
            border-solid
            rounded-full
            hover:bg-green 
            hover:text-white
            "
          >
            歷史文化
          </button>
        </div>
      </div>
    </div>
    <div class="col-span-10 ml-12">
      <div class="grid grid-cols-5">
        <div class="col-span-3">
          <form action="" class="relative">
            <input type="text" value="台南" class="border-gray-500 border border-solid
            rounded pl-20 top-4 right-5" style="width:512px;height:58px;"/>
            
            <img src="@/assets/icon/search_default.png" alt="搜尋-icon" class="absolute top-4 left-8"/>
            <button 
            class="text-green
                  border  
                  border-green 
                  border-solid
                  rounded-full
                  absolute
                  top-4 
                  right-14"
            style="width:70px"       
            >
              Go
            </button>
          </form>
        </div>
        <div class="flex w-full col-span-2">
          <span class="font-bold mr-4" style="line-height:58px;">排序方式</span>
          <div class="grid grid-row-3 gap-1 border border-solid rounded-3xl w-40 h-20 py-2 px-4">
            <div class="flex justify-between">
              <p class="hover:text-green">熱門優先</p>
              <img src="@/assets/icon/direction_bottom.png" alt="向下箭頭-icon" class="w-5 h-5" style="margin:auto 0">
            </div>
            <hr class="text-lightGray">
            <div>
              <p class="hover:text-green">距離優先</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full grid  grid-flow-row grid-cols-3 gap-4 mt-4">
        <div>
          <img src="@/assets/participate_01.jpeg" alt="圖片" class="bg-auto rounded-t-lg ">
          <div class="px-4 border border-solid border-lightGray rounded-b-lg" >
            <p style="margin:11px 0 5.5px 0" class="truncate">將軍觀光漁港</p>
            <div class="flex text-center" style="margin:5.5px 0 18.5px 0">
              <img src="@/assets/icon/position.png" alt="定位-icon" class="h-4" style="margin:auto 0">
              &ensp;<span class="text-sm" style="margin:auto 0">台南市</span>&ensp;
              <span class="text-sm" style="margin:auto 0">將軍區</span>
              <img src="@/assets/icon/like_default.png" alt="愛心-icon" class="h-5" style="margin:auto 0 auto auto;">
            </div>
          </div>
        </div>
        <div>
          <img src="@/assets/participate_01.jpeg" alt="圖片" class="bg-auto rounded-t-lg ">
          <div class="px-4 border border-solid border-lightGray rounded-b-lg" >
            <p style="margin:11px 0 5.5px 0" class="truncate">將軍觀光漁港</p>
            <div class="flex text-center" style="margin:5.5px 0 18.5px 0">
              <img src="@/assets/icon/position.png" alt="定位-icon" class="h-4" style="margin:auto 0">
              &ensp;<span class="text-sm" style="margin:auto 0">台南市</span>&ensp;
              <span class="text-sm" style="margin:auto 0">將軍區</span>
              <img src="@/assets/icon/like_default.png" alt="愛心-icon" class="h-5" style="margin:auto 0 auto auto;">
            </div>
          </div>
        </div>
        <div>
          <img src="@/assets/participate_01.jpeg" alt="圖片" class="bg-auto rounded-t-lg ">
          <div class="px-4 border border-solid border-lightGray rounded-b-lg" >
            <p style="margin:11px 0 5.5px 0" class="truncate">將軍觀光漁港</p>
            <div class="flex text-center" style="margin:5.5px 0 18.5px 0">
              <img src="@/assets/icon/position.png" alt="定位-icon" class="h-4" style="margin:auto 0">
              &ensp;<span class="text-sm" style="margin:auto 0">台南市</span>&ensp;
              <span class="text-sm" style="margin:auto 0">將軍區</span>
              <img src="@/assets/icon/like_default.png" alt="愛心-icon" class="h-5" style="margin:auto 0 auto auto;">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>



.picture{
  width: 250px;
  height: 168px;
}
</style>
