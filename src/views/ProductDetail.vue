<template>

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
        <div class="iconText">
            <iconText
                v-for="j in iconText" 
                :text="j.text" 
                :iconString1="j.iconString1"
                :textColor="j.textColor"
                :key="j.id"
            ></iconText>
        </div>
        <div class="wrap">
            <div class="imageGroup">
                <img class="img" src="../assets/image/mango.svg" alt="">
                <div class="samllImage"></div>
            </div>
             
            <div class="content">
                <div>
                    <Mybutton
                    btntext="In stock"
                    btnBg="#DEF9EC"
                    txtColr="#3BB77E"
                ></Mybutton>
                </div>

                <div class="wrap-btn">
                    <Mybutton style="width:117.47px;height: 50px;
                              display: flex;justify-content: space-between;
                              font-size: 20px;font-family: Quicksand;font-weight: 700;
                              border: 1px solid #3BB77E;"
                              
                        btntext="1"
                        iconString="fa-solid fa-sort"
                        btnBg="white"
                        txtColr="#3BB77E"
                        fontsize ="18px"
                        family="Quicksand"
                        weight="700"
                        iconColor="#3BB77E"
                    ></Mybutton>
                    <Mybutton style="width: 175.56px;height: 50px;
                              display: flex;justify-content: space-between;
                              "
                              
                        btntext="Add to cart"
                        iconString="fa-solid fa-cart-shopping"
                        btnBg="#3BB77E"
                        txtColr="white"
                        fontsize ="18px"
                        family="Quicksand"
                        weight="700"
                        iconColor="white"
                    ></Mybutton>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-shuffle"></i>
                </div>
            </div>
        </div>





    </div>
      

</template>
<script>
    import { mapState } from "pinia";
    import Head from "../components/Head.vue";
    import menuitem from "../components/MenuItem.vue";
    import Mybutton from "../components/MyBotton.vue";
    import { useProductStore } from "../stores/product.js";
    import iconText from '../components/iconText.vue';
    export default{
        name: "productDetail",
        components: {
            menuitem,
            Head,
            Mybutton,
            iconText,
        },
        computed: {

        ...mapState(useProductStore, ["MenuItem"]),
        ...mapState(useProductStore, ["iconText"]),
        },
    };
</script>

<style scoped>
 
.container {
  width: 1812px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 190px;
}
.iconText{
    width: 1584px;
    display: flex;
    margin-left: -60px;
    
}
.wrap{
    width: 1584px;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
}
.imageGroup{
    width: 865.16px;
    height: 840.62px;

    /* background-color: aqua; */
}
.img{
    Width:784.8px;
    Height:421px;
    border-radius: 15px;
    border: 1px #E5E5E5 solid;
}
.samllImage{

}
.content{
    width: 656.36px;
    height: 700.05px;
    /* top: -160.89px; */
    background-color: antiquewhite;

}
.wrap-btn{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 423.55px;
    height: 50.26px;

}
</style>