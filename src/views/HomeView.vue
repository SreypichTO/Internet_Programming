<template>
  <!-- <RouterLink>Category</RouterLink> -->

    <div class="container">
      <div class="Hero">
        
        <div style="position: absolute; left: 100px;top: 70px;">
          <div class="text-large">Don’t miss amazing grocery deals</div> <br><br>
          <div class="text-small">Sign up for the daily newsletter </div>
            <br><br><br><br>
            <form action="">
              <div>
                <i class="fa-regular fa-paper-plane"></i>
                <input type="text" placeholder="your email address">
              </div>
              <div class="subscribe">
                <div>Subscribe</div>
              </div>
            </form>
          
        
        </div>
        <img src="../assets/image/fresh-apples .svg" alt="" style="position: absolute; right: 0px;top: 0px;">
        

      </div>

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
    },
  
    computed: {
      ...mapState(useProductStore, ["Category"]),
      ...mapState(useProductStore, ["Promotion"]),
      ...mapState(useProductStore, ["productCard"]),
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
.Hero{
  width: 1584px;
  height: 538px;
  background-color: beige;
  border-radius: 30px;
  position: relative;
  margin-bottom: 50px;
}
.text-large{
    width: 727px;
    font-family: Quicksand;
    font-size: 72px;
    font-weight: 700;
    line-height: 78px;
    color: #253D4E;
}
.text-small{
    font-family: Lato;
    font-size: 30px;
    font-weight: 400;
    /* padding-top: 30px; */
    color: #7E7E7E;
}
form{
  position: relative;
  width: 442px;
  height: 50px;
  background-color: white;
  border-radius: 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
}
input{
  border: 0px;
}
i{
  color: grey;
  padding-left: 20px;
  padding-right: 5pt;
}
.subscribe{
  position: absolute;
  right: 0px;
  width: 149px;
  height: 50px;
  background-color: #3BB77E;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Quicksand;
  font-size: 16px;
  font-weight: 700;
  color: white;
}
</style>


