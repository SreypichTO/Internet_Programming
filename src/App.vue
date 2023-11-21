<template>
  <div class="container">
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
import MyButton from "./components/MyBotton.vue";
import Category from "./components/Category.vue";
import Promotion from "./components/Promotion.vue";
import headRow from "./components/header.vue";
import productCard from "./components/productCard.vue";
import { useProductStore } from "./stores/product";

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

<style>
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
</style>
