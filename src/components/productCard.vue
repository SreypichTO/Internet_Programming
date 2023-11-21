<template>
  <div class="pro-card" :style="{ border: bd, boxShadow: box }">
    <div class="productLabel" :style="{ backgroundColor: labelBg }">
      <div class="textLabel">{{ text }}</div>
    </div>

    <div
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      "
    >
      <img class="img" :src="cardImg" alt="" />
      <div
        class="content"
        style="display: flex; justify-content: space-between"
      >
        <div>
          <div class="grayText">Hodo Foods</div>
          <div
            style="
              font-family: Quicksand;
              font-size: 14px;
              font-weight: 700;
              width: 261px;
              height: 49px;
              display: flex;
              align-items: center;
            "
          >
            Seeds of Change Organic Quinoa, Brown, & Red Rice
          </div>
          <div style="display: flex; gap: 10px">
            <div>
              <i
                class="fa-solid fa-star"
                style="color: rgba(246, 200, 81, 1)"
              ></i>
              <i
                class="fa-solid fa-star"
                style="color: rgba(246, 200, 81, 1)"
              ></i>
              <i
                class="fa-solid fa-star"
                style="color: rgba(246, 200, 81, 1)"
              ></i>
              <i
                class="fa-solid fa-star"
                style="color: rgba(246, 200, 81, 1)"
              ></i>
              <i
                class="fa-solid fa-star"
                style="color: rgba(205, 205, 205, 1)"
              ></i>
            </div>
            <div>(4.0)</div>
          </div>
          <div class="grayText">500 grams</div>
        </div>
        <div
          style="
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            font-family: Quicksand;
          "
        >
          <div
            style="
              width: 86px; 
              display: flex;
              align-items: flex-end;
              justify-content: space-between;
              font-weight: 700;
            "
          >
            <div style="font-size: 20px;color: rgba(59, 183, 126, 1);">$2.50</div>
            <div style="text-decoration: line-through; font-size: 12px;color: gray;">
              $2.80
            </div>
          </div>
          <Mybutton
            class="cartBtn"
            :btntext="btntxt"
            :btnBg="btnColor"
            :iconString="icon"
            :txtColr="color"
          ></Mybutton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mybutton from "./MyBotton.vue";
export default {
  name: "productCard",
  components: {
    Mybutton,
  },
  props: {
    text: String,
    labelBg: String,
    btntxt: String,
    btnColor: String,
    color: String,
    icon: String,
    cardImg: String,
    bd: String,
    box: String,
  },
};
</script>

<style scoped>
.pro-card {
  width: 298px;
  height: 402px;
  border-radius: 10px;
  /* border: 1px solid rgba(188, 227, 201, 1); */
  background-color: white;
  margin-bottom: 24px;
  /* box-shadow: 0 2px 0px 0 rgb(214, 209, 209), 0 6px 10px 0 rgb(180, 177, 177); */
}
img {
  width: 201.89px;
  height: 144.93px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 37.11px;
}
.productLabel {
  width: 58px;
  height: 32px;
  position: relative;
  top: 20px;
  /* background-color: rgba(59, 183, 126, 1); */
  padding: 10px, 15px, 10px, 15px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}
.textLabel {
  text-align: center;
  font-family: Lato;
  color: white;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  position: relative;
  top: 10px;
}
.grayText {
  font-family: Lato;
  font-size: 12px;
  color: rgba(126, 126, 126, 1);
}
.cardBtn {
  border: 1px solid rgba(59, 183, 126, 1);
  color: rgba(59, 183, 126, 1);
}
.content {
  width: 261px;
  height: 148px;
  display: flex;
  flex-direction: column;
  /* justify-content: baseline; */
}
</style>
