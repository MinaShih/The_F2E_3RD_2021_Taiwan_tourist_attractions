import { createWebHashHistory } from "vue-router";

export default {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/The_F2E_3RD_2021_Taiwan_tourist_attractions/'
    : '/',

    history: createWebHashHistory()
}