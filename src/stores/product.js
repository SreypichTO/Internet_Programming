// see syntax define store
import { text } from "@fortawesome/fontawesome-svg-core";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
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
        Img: "../src/assets/image/kiwi.svg",
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
        Img: "./src/assets/image/orange.svg",
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
        img: "./src/assets/image/orange.svg",
        bannerBg: "rgba(240, 232, 213, 1)",
        Title: "Everyday Fresh & Clean with Our Products",
        btnColor: "#3BB77E",
        icon: "fa-arrow-right",
        textcolor: "red",
        iconColor: "red",
      },
      {
        img: "./src/assets/image/pinkbottle.svg",
        bannerBg: "#F3E8E8",
        Title: "Make your Breakfast Healthy and Easy",
        btnColor: "#3BB77E",
        icon: "fa-arrow-right",
      },
      {
        img: "./src/assets/image/vegetable.svg",
        bannerBg: "#E7EAF3",
        Title: "The best Organic Products Online",
        btnColor: "rgba(253, 192, 64, 1)",
        icon: "fa-arrow-right",
      },
    ],
    productCard: [
      {
        text: "-17%",
        labelBg: "rgba(59, 183, 126, 1)",
        btntxt: "3",
        icon: "fa-sort",
        color: "green",
        btnColor: "rgba(222, 249, 236, 1)",
        cardImg: "./src/assets/image/mango.svg",
        bd: "1px solid rgba(188, 227, 201, 1)",
        box: "0 2px 0px 0 rgb(214, 209, 209), 0 6px 10px 0 rgb(214, 209, 209)",
      },
      {
        text: "Hot",
        labelBg: "rgba(253, 110, 110, 1)",
        btntxt: "Add",
        icon: "fa-plus",
        color: "green",
        btnColor: "rgba(222, 249, 236, 1)",
        cardImg: "./src/assets/image/corn.svg",
        bd: "1px solid rgba(229, 229, 229, 1)",
      },
      {
        text: "Sale",
        labelBg: "rgba(253, 192, 64, 1)",
        btntxt: "Add",
        icon: "fa-plus",
        color: "green",
        btnColor: "rgba(222, 249, 236, 1)",
        cardImg: "./src/assets/image/kroch.svg",
        bd: "1px solid rgba(229, 229, 229, 1)",
      },
      {
        // text:"Hot",
        // labelBg: "rgba(59, 183, 126, 1)",
        btntxt: "Add",
        color: "green",
        btnColor: "rgba(222, 249, 236, 1)",
        icon: "fa-plus",
        cardImg: "./src/assets/image/chilies.svg",
        bd: "1px solid rgba(229, 229, 229, 1)",
      },
      {
        // text:"Hot",
        // labelBg: "rgba(59, 183, 126, 1)",
        btntxt: "Add",
        icon: "fa-sort",
        color: "green",
        btnColor: "rgba(222, 249, 236, 1)",
        icon: "fa-plus",
        cardImg: "./src/assets/image/lemon.svg",
        bd: "1px solid rgba(229, 229, 229, 1)",
      },
      // ---------------------------------------------------------
      {
        // text:"Hot",
        // labelBg: "rgba(59, 183, 126, 1)",
        btntxt: "Add",
        icon: "fa-sort",
        color: "green",
        btnColor: "rgba(222, 249, 236, 1)",
        icon: "fa-plus",
        cardImg: "./src/assets/image/meat.svg",
        bd: "1px solid rgba(229, 229, 229, 1)",
      },
      {
        text: "Sale",
        labelBg: "rgba(253, 192, 64, 1)",
        btntxt: "Add",
        color: "green",
        btnColor: "rgba(222, 249, 236, 1)",
        icon: "fa-plus",
        cardImg: "./src/assets/image/fillet.svg",
        bd: "1px solid rgba(229, 229, 229, 1)",
      },
      {
        // text:"Hot",
        // labelBg: "rgba(59, 183, 126, 1)",
        btntxt: "Add",
        color: "green",
        btnColor: "rgba(222, 249, 236, 1)",
        icon: "fa-plus",
        cardImg: "./src/assets/image/beef.svg",
        bd: "1px solid rgba(229, 229, 229, 1)",
      },
      {
        // text:"Hot",
        // labelBg: "rgba(59, 183, 126, 1)",
        btntxt: "Add",
        color: "green",
        btnColor: "rgba(222, 249, 236, 1)",
        icon: "fa-plus",
        cardImg: "./src/assets/image/fish.svg",
        bd: "1px solid rgba(229, 229, 229, 1)",
      },
      {
        text: "Hot",
        labelBg: "rgba(253, 110, 110, 1)",
        btntxt: "Add",
        color: "green",
        btnColor: "rgba(222, 249, 236, 1)",
        icon: "fa-plus",
        cardImg: "./src/assets/image/beetroot.svg",
        bd: "1px solid rgba(229, 229, 229, 1)",
      },
    ],

    MenuItem:[
        {
          text: "Home",
        },
        {
          text: "Food",
          iconString: "fa-angle-down",
        },
        {
          text: "Vegetables",
          iconString: "fa-angle-down",
        },
        {
          text: "Drink",
        },
        {
          text: "Cookies",
        },
        {
          text: "Meat & Seafood",
          iconString: "fa-angle-down",
        },
        {
          text: "Bakery",
        },
    ],

    iconText:[
        {
          iconString1:"fa-solid fa-chevron-right",
          text:"Home",
        },
        {
          iconString1:"fa-solid fa-chevron-right",
          text:"Vegetables&Tubers",
        },
        {
          text:'Seed of Change Organic',
          textColor:"#3BB77E",
        }
    ],

  }),
});
