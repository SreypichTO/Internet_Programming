<template>
    <div class="container">
      <div class="Category">
        <Category
          v-for="i in Category"
          :bg="i.bg"
          :ItemName="i.ItemName"
          :Img="i.Img"
          :Amount="i.Amount"
          :bd="i.bd"
        ></Category>
      </div>
    <div class="Promotion">
        <Promotion 
          v-for="p in Promotion"
          :bannerBg = "p.bannerBg"
          :img = "p.img"
          :Title = "p.Title"
          :btnColor = "p.btnColor"
        ></Promotion>
    </div>
      
    </div>
    <div>


</div>

    <!-- http://127.0.0.1:5500/dist/index.html -->
  </template>
  <script>
  
  import MyButton from "./components/MyBotton.vue";
  import Category from "./components/Category.vue";
  import Promotion from "./components/Promotion.vue";
  export default {
    name: "App",
    components: {
      MyButton,
      Category,
      Promotion,
    },
  
    data() {
      return {
        Category: [
          {
            Img: "./src/assets/image/burger.svg",
            bg: "rgba(242, 252, 228, 1)",
            ItemName: "Burger",
            Amount: "14 items",
            bd: "1px solid rgba(129, 177, 61, 1)",
            
          },
          {
            Img: "./src/assets/image/peach.svg",
            bg: "rgba(255, 252, 235, 1)",
            ItemName: "Peach",
            Amount: "17 items",
            bd: "#ECFFEC",
          },
          {
            Img: "./src/assets/image/kiwi.svg",
            bg: "#ECFFEC",
            ItemName: "Organic Kiwi",
            Amount: "21 items",
            bd: "#ECFFEC",
          },
          {
            Img: "./src/assets/image/apple.svg",
            bg: "#FEEFEA",
            ItemName: "Red Apple",
            Amount: "68 items",
            bd: "#ECFFEC",
          },
          {
            Img: "./src/assets/image/snack.svg",
            bg: "rgba(255, 243, 235, 1)",
            ItemName: "Snack",
            Amount: "34 items",
            bd: "#ECFFEC",
          },
          {
            Img: "./src/assets/image/blackplum.svg",
            bg: "#FFF3FF",
            ItemName: "Black plun",
            Amount: "25 items",
            bd: "#ECFFEC",
          },
          {
            Img: "./src/assets/image/cabbage.svg",
            bg: "#F2FCE4",
            ItemName: "Vegetables",
            Amount: "65 items",
            bd: "#ECFFEC",
          },
          {
            Img: "./src/assets/image/headphone.svg",
            bg: "#FFFCEB",
            ItemName: "Headphone",
            Amount: "33 items",
            bd: "#ECFFEC",
          },
          {
            Img: "./src/assets/image/package.svg",
            bg: "#F2FCE4",
            ItemName: "Cake & Milk",
            Amount: "54 items",
            bd: "#ECFFEC",
          },
          {
            Img: "./src/assets/image/orange.svg",
            bg: "#FFF3FF",
            ItemName: "Orange",
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
       
      };
    },
  };
  </script>
  
  <style>
  body{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /* .container{
   
    width: 100%;
    height: 100vh;
    display: flex; 
    flex-direction: column; 
    
  } */
  .Category{
    display: flex; 
    flex-direction: row;
   
  }
  .Promotion{
    margin-top: 40px;
    display: flex; 
    flex-direction: row; 
  
  }
  
  </style>