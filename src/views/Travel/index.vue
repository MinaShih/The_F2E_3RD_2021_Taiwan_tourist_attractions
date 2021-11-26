<template>
  <div class="grid grid-cols-12">
    <div class="col-span-2 text-left">
      <div class="text-sm mb-8">首頁 / 景點</div>
      <div class="grid gap-4">
        <p class="font-bold text-lg">你正在搜尋</p>
        <a href="">景點</a>
        <a href="">美食</a>
        <a href="">活動</a>
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
            style="margin: 16px 0 27px 0; padding: 0 10px"
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
              border-gray-500 border border-solid
              rounded-full
              hover:bg-gray hover:text-white
              focus:bg-green focus:text-white
            "
          >
            花海漫遊
          </button>
          <button
            class="
              h-8
              border-gray-500 border border-solid
              rounded-full
              hover:bg-gray hover:text-white
              focus:bg-green focus:text-white
            "
          >
            水上活動
          </button>
          <button
            class="
              h-8
              border-gray-500 border border-solid
              rounded-full
              hover:bg-gray hover:text-white
              focus:bg-green focus:text-white
            "
          >
            星空露營
          </button>
          <button
            class="
              h-8
              border-gray-500 border border-solid
              rounded-full
              hover:bg-gray hover:text-white
              focus:bg-green focus:text-white
            "
          >
            溫泉湯屋
          </button>
          <button
            class="
              h-8
              border-gray-500 border border-solid
              rounded-full
              hover:bg-gray hover:text-white
              focus:bg-green focus:text-white
            "
          >
            親子同遊
          </button>
          <button
            class="
              h-8
              border-gray-500 border border-solid
              rounded-full
              hover:bg-gray hover:text-white
              focus:bg-green focus:text-white
            "
          >
            歷史文化
          </button>
        </div>
      </div>
    </div>
    <div class="col-span-10 ml-12 mb-10">
      <div class="grid grid-cols-5">
        <div class="col-span-3">
          <form action="" class="relative" @submit.prevent="handleSubmit">
            <input
              type="text"
              class="
                border-gray-500 border border-solid
                rounded
                pl-20
                top-4
                right-5
              "
              v-model="query"
              style="width: 512px; height: 58px"
            />

            <img
              src="@/assets/icon/search_default.png"
              alt="搜尋-icon"
              class="absolute top-4 left-8"
            />
            <button
              class="
                text-green
                border border-green border-solid
                rounded-full
                absolute
                top-4
                right-14
              "
              style="width: 70px"
              type="submit"
            >
              Go
            </button>
          </form>
        </div>
        <div class="flex w-full col-span-2">
          <span class="font-bold mr-4" style="line-height: 58px">排序方式</span>
          <div
            class="
              grid grid-row-3
              gap-1
              border border-solid
              rounded-3xl
              w-40
              h-20
              py-2
              px-4
            "
          >
            <a class="flex justify-between">
              <p class="hover:text-green">熱門優先</p>
              <img
                src="@/assets/icon/direction_top.png"
                alt="向下箭頭-icon"
                style="margin: auto 0"
              />
            </a>
            <hr class="text-lightGray" />
            <a>
              <p class="hover:text-green">距離優先</p>
            </a>
          </div>
        </div>
      </div>
      <div v-if="api" class="grid grid-flow-row grid-cols-3 gap-4 mt-4">
        <div
          v-for="item in api.list"
          :key="item.ID"
          class="card-size grid grid-rows-3"
        >
          <router-link
            :to="{ name: 'travel-product-id', params: { id: item.ID } }"
            class="row-span-2"
          >
            <div class="pic">
              <img
                :src="item.Picture.PictureUrl1"
                alt="圖片"
                class="bg-auto rounded-t-lg pic-size"
              />
            </div>
          </router-link>

          <div
            class="
              px-4
              border border-solid border-lightGray
              rounded-b-lg
              row-span-1
            "
          >
            <p style="margin: 11px 0 5.5px 0" class="truncate">
              {{ item.Name }}
            </p>
            <div class="flex text-center" style="margin: 5.5px 0 18.5px 0">
              <img
                src="@/assets/icon/position.png"
                alt="定位-icon"
                style="margin: auto 0"
              />
              &ensp;<span class="text-sm" style="margin: auto 0">{{
                item.City ? item.City : "暫無相關資訊"
              }}</span
              >&ensp;

              <img
                src="@/assets/icon/like_default.png"
                alt="愛心-icon"
                style="margin: auto 0 auto auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import { useStore } from "@/store/index";

export default {
  setup() {
    // const query = ref('')
    // onMounted(()=>{

    // })
    // return {query}
    const travelInfo = reactive([]);
    const api = useStore();
    api.fetchTravelInfo();

    return { api };
  },
  data() {
    return {
      // travelInfo: {},
      query: "",
    };
  },
  computed: {
    // userId() {
    //   return this.$route.params.userId;
    // },
  },
  watch: {
    // userId: async function (val) {
    //   this.travelInfo = await this.fetchTravelInfo(val);
    // },
  },
  methods: {
    async handleSubmit() {
      const a = "NewTaipei";
      return await fetch(
        `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${a}?$top=10&$skip=30&$filter=Picture/PictureUrl1%20ne%20null&$format=JSON`
      )
        .then((response) => response.json())
        .then((json) => json);
    },
  },
  async created() {
    //this.userId
    // this.travelInfo = await this.fetchTravelInfo();
  },
};
</script>

<style>
.card-size {
}

.pic {
  /* width: 280px;
  height: 300px;
   */
   overflow: hidden;
}

.pic-size {
  transform: scale(1, 1);
  transition: all 1s ease-out;
}
.pic-size:hover {
  transform: scale(1.2, 1.2);
}
</style>
