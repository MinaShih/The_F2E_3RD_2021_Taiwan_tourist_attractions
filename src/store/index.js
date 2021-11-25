import { defineStore } from "pinia";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore("main", {
    // other options...
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            counter: 0,
            name: "Eduardo",
            isAdmin: true,
            list: [],
        };
    },

    actions: {
        async fetchTravelInfo() {
            return await fetch(
                    "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=10$filter=Picture/PictureUrl1%20ne%20null&$format=JSON"
                )
                .then((response) => response.json())
                .then((json) => {
                    this.list = json;
                    return json;
                });
        },
    },
});