<template>
  <!-- <RouterLink>Category</RouterLink> -->

    <div class="container">
      <Head></Head>
      <div class="menuitemRow ">
        <div style="display: flex;align-items: center;">
          <button
            style="
            width: 250px;   
            height: 44px;     
            background-color: #3BB77E; 
            display: flex;
            justify-content: space-around;margin-right: 50px;">
            <div>
              <img src="../assets/image/4square.svg" alt="">
            </div>
              <div
              style="font-size: 16px;font-weight: 700;font-family: Quicksand;"
              >Browse All Categories</div>
              <i class="fa-solid fa-chevron-down" style="color: #fcfcfc;"></i>
            </button>
            <div class="menuitem">
              <menuitem 
                v-for="j in MenuItem" 
                :text="j.text" 
                :iconString="j.iconString"
                :key="j.id"
              ></menuitem>
          </div>
        </div>

        <div class="supportCenter">
          <div><i class="fa-solid fa-headphones-simple fa-2xl"></i></div>
          <div>
              <div 
              style="
                  font-size: 24px;
                  font-family:Quicksand; 
                  color: #3BB77E;
                  font-weight: 700;">099 777 888</div> 
            <div 
              style="
                font-size: 12px;
                font-family:Lato; 
                color: #253D4E;
                font-weight: 400;">24/7 Support Center</div>
          </div>
        </div>

      </div>
      <showcase></showcase>
      
      <div style="width: 1584px">
        <div>
          <headRow text="Featured Categories"></headRow>
          <div class="Category">
            <Category
              v-for="i in Category"
              :key="i.id"
              :bg="i.bg"
              :Name="i.Name"
              :Img="i.Img"
              :Amount="i.Amount"
              :bd="i.bd"
              
            />
          </div>
        </div>
        <div>
            
        </div>
        <br /><br />
        <div class="Promotion">
          <Promotion
            v-for="p in Promotion"
            :bannerBg="p.bannerBg"
            :img="p.img"
            :key="p.id"
            :Title="p.Title"
            :btnColor="p.btnColor"
            :icon="p.icon"
          ></Promotion>
        </div>
         
        <br /><br />
        <headRow text="Popular Products"></headRow>
        <div>
          <div class="cardRow">
            <productCard
              v-for="pc in productCard"
              :key="pc"
              :text="pc.text"
              :labelBg="pc.labelBg"
              :btntxt="pc.btntxt"
              :btnColor="pc.btnColor"
              :color="pc.color"
              :icon="pc.icon"
              :cardImg="pc.cardImg"
              :bd="pc.bd"
              :box="pc.box"
            ></productCard>
          </div>
        </div>
      </div>
    </div>
  
    <!-- http://127.0.0.1:5500/dist/index.html -->
  </template>
  <script>
  import { mapState } from "pinia";
  import MyButton from "../components/MyBotton.vue";
  import Category from "../components/Category.vue";
  import Promotion from "../components/Promotion.vue";
  import headRow from "../components/header.vue";
  import Head from "../components/Head.vue";
  import menuitem from "../components/MenuItem.vue";
  import showcase from "../components/showcase.vue";
 
  import productCard from "../components/productCard.vue";
  import { useProductStore } from "../stores/product";
  
  export default {
    name: "App",
    components: {
      MyButton,
      Category,
      Promotion,
      headRow,
      productCard,
      Head,
      showcase,
      menuitem,
    },
  
    computed: {
      ...mapState(useProductStore, ["Category"]),
      ...mapState(useProductStore, ["Promotion"]),
      ...mapState(useProductStore, ["productCard"]),
      ...mapState(useProductStore, ["MenuItem"]),
    },
  };
  </script>
  
  <style scoped>
body {
  width: 100%;
  height: 100vh;

  /* display: flex; */
  /* flex-direction: row; */
  align-items: center;
  /* justify-content: center; */
}
.container {
  width: 1812px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.Category {
  width: 1584px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.Promotion {
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.cardRow {
  width: 1584px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.menuitem{
  width: 738px;
  height: 20px;
  display: flex;
  justify-content: space-around;
  /* background-color: aqua; */
}
.menuitemRow{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1584px;
  height: 65px;
  border-top:  #E5E5E5 solid 1px;
  border-bottom:  #E5E5E5 solid 1px;
  margin: 10px;
  padding: 5px;
  margin-bottom: 30px;
  /* background-color: palevioletred; */
}
.supportCenter{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 175px;
}

</style>


