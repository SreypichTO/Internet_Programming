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
                        :iconString2="j.iconString2"
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

        <div class="figure">
            <div class="text-latge">Coke & Milk</div>
            <div class="text-small">Home > Category >  Coke & Milk</div>
        </div>





    </div>
      

</template>
<script>
    import { mapState } from "pinia";
    import Head from "../components/Head.vue";
    import menuitem from "../components/MenuItem.vue";
    import { useProductStore } from "../stores/product";
    export default{
        name: "categoryView",
        components: {
            menuitem,
            Head,
        },
        computed: {

        ...mapState(useProductStore, ["MenuItem"]),
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
.figure{
    width: 1584px;
    height: 235px;
    border-radius: 20px;
    background-color: #3BB77E33;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    
}
.text-latge{
    font-family: Quicksand;
    font-size: 48px;
    font-weight: 700;
    color: #253D4E;
    margin-left: 60px;
}
.text-small{
    font-family: Lato;
    font-size: 18px;
    font-weight: 400;
    color: #7E7E7E;
    margin-left: 60px;
}
</style>