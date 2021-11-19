<script setup>
import { ref } from "vue";
</script>

<template>
<!-- grid grid-cols-5 gap-4 -->
  <div class="flex">
    <div class="col-span-1 text-left mr-12">
      <div class="text-sm mb-8">首頁 / 景點</div>
      <div class="grid gap-4">
        <p class="font-bold text-lg">你正在搜尋</p>
        <p class="hover:text-green">景點</p>
        <p class="hover:text-green">美食</p>
        <p class="hover:text-green">活動</p>
        <hr />
      </div>
      <div>
        <div class="flex mb-4">
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
            style="margin: 16px 0 27px 0; padding: 0 10px"
            class="w-full border border-solid border-gray-500 rounded-full"
          >
            <option value="請選擇縣市">請選擇縣市</option>
          </select>
        </div>
        <div class="grid gap-4">
          <p>景點主題</p>
          <button
            class="
              border-gray-500 border border-solid
              rounded-full
              hover:bg-green hover:text-white
            "
          >
            花海漫遊
          </button>
          <button
            class="
              border-gray-500 border border-solid
              rounded-full
              hover:bg-green hover:text-white
            "
          >
            水上活動
          </button>
          <button
            class="
              border-gray-500 border border-solid
              rounded-full
              hover:bg-green hover:text-white
            "
          >
            星空露營
          </button>
          <button
            class="
              border-gray-500 border border-solid
              rounded-full
              hover:bg-green hover:text-white
            "
          >
            溫泉湯屋
          </button>
          <button
            class="
              border-gray-500 border border-solid
              rounded-full
              hover:bg-green hover:text-white
            "
          >
            親子同遊
          </button>
          <button
            class="
              border-gray-500 border border-solid
              rounded-full
              hover:bg-green hover:text-white
            "
          >
            歷史文化
          </button>
        </div>
      </div>
    </div>
    <div class="col-span-4">
      <div class="flex">
        <div class="flex ">
          <input type="text" placeholder="台南" class="border-gray-500 border border-solid
            rounded relative pl-12 mr-7" style="width: 300px;height:50px;"/>
          <img src="../assets/icon/search_default.png" alt="搜尋-icon" class="absolute"/>
          <button 
          class="text-green
                 border  
                 border-green 
                 border-solid
                 rounded-full
                 absolute"
          style="width:70px"       
          >
            Go
          </button>
        </div>
        <div>
          <span>排序方式</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
