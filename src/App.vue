<template>
  <div class="container">
    <div>
      <headRow text="Featured Categories"></headRow>
      <div class="Category">
        <Category
          v-for="i in Category"
          :bg="i.bg"
          :Name="i.Name"
          :Img="i.Img"
          :Amount="i.Amount"
          :bd="i.bd"
        ></Category>
      </div>
    </div>
    <br /><br />
    <div class="Promotion">
      <Promotion
        v-for="p in Promotion"
        :bannerBg="p.bannerBg"
        :img="p.img"
        :Title="p.Title"
        :btnColor="p.btnColor"
      ></Promotion>
    </div>
    <br /><br />
    <div>
      <headRow text="Popular Products"></headRow>
      <productCard text="-17%" LabelBg="rgba(59, 183, 126, 1)"></productCard>
    </div>
  </div>
  <div></div>

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
  },

  data() {
    return {
      productCard: [],
    };
  },
};
</script>

<style>
body {
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
.Category {
  display: flex;
  flex-direction: row;
}
.Promotion {
  margin-top: 40px;
  display: flex;
  flex-direction: row;
}
</style>
