// see syntax define store
import { defineStore } from "pinia";

export const useProductStore = defineStore('product',{
    state:() => ({
        Category: [
            {
              Img: "./src/assets/image/burger.svg",
              bg: "rgba(242, 252, 228, 1)",
              Name: "Burger",
              Amount: "14 items",
              bd: "1px solid rgba(129, 177, 61, 1)",
              
            },
            {
              Img: "./src/assets/image/peach.svg",
              bg: "rgba(255, 252, 235, 1)",
              Name: "Peach",
              Amount: "17 items",
              bd: "#ECFFEC",
            },
            {
              Img: "./src/assets/image/kiwi.svg",
              bg: "#ECFFEC",
              Name: "Organic Kiwi",
              Amount: "21 items",
              bd: "#ECFFEC",
            },
            {
              Img: "./src/assets/image/apple.svg",
              bg: "#FEEFEA",
              Name: "Red Apple",
              Amount: "68 items",
              bd: "#ECFFEC",
            },
            {
              Img: "./src/assets/image/snack.svg",
              bg: "rgba(255, 243, 235, 1)",
              Name: "Snack",
              Amount: "34 items",
              bd: "#ECFFEC",
            },
            {
              Img: "./src/assets/image/blackplum.svg",
              bg: "#FFF3FF",
              Name: "Black plun",
              Amount: "25 items",
              bd: "#ECFFEC",
            },
            {
              Img: "./src/assets/image/cabbage.svg",
              bg: "#F2FCE4",
              Name: "Vegetables",
              Amount: "65 items",
              bd: "#ECFFEC",
            },
            {
              Img: "./src/assets/image/headphone.svg",
              bg: "#FFFCEB",
              Name: "Headphone",
              Amount: "33 items",
              bd: "#ECFFEC",
            },
            {
              Img: "./src/assets/image/package.svg",
              bg: "#F2FCE4",
              Name: "Cake & Milk",
              Amount: "54 items",
              bd: "#ECFFEC",
            },
            {
              Img: "./src/assets/image/orange.svg",
              bg: "#FFF3FF",
              Name: "Orange",
              Amount: "63 items",
              bd: "#ECFFEC",
            },
          ],

          Promotion: [
            {
              img: "./src/assets/image/onion.svg",
              bannerBg: "rgba(240, 232, 213, 1)",
              Title: "Everyday Fresh & Clean with Our Products",
              btnColor: "#3BB77E",
            },
            {
              img: "./src/assets/image/pinkbottle.svg",
              bannerBg: "#F3E8E8",
              Title: "Make your Breakfast Healthy and Easy",
              btnColor: "#3BB77E",
            },
            {
              img: "./src/assets/image/vegetable.svg",
              bannerBg: "#E7EAF3",
              Title: "The best Organic Products Online",
              btnColor: "rgba(253, 192, 64, 1)",
            },
          ],  
         
    })
})