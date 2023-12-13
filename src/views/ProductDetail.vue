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
                <div class="img">
                    <img class="subimg" src="../assets/image/mango.svg" alt="">
                </div>
                

                <div> 
                    <div style="width: 545,.4px;display: flex;align-items: center ;gap: 25px;">
                    <div class="icon"><i class="fa-solid fa-arrow-left" style="color: white;"></i></div>

                        <div class="image" style="border:#3BB77E 1px solid">
                            <img src="../assets/image/neworange.svg" style="
                                width: 99px;
                                height: 85px;
                        ">
                        </div>
                        <div class="image">
                            <img src="../assets/image/dryper.svg" style="
                                width: 99px;
                                height: 85px;
                        ">
                        </div>
                        <div class="image">
                            <img src="../assets/image/straw.svg" style="
                                width: 99px;
                                height: 85px;
                        ">
                        </div>
                        <div class="image">
                            <img src="../assets/image/lemon.svg" style="
                                width: 99px;
                                height: 85px;
                        ">
                        </div>
                    <div  style="width:40px;height: 40px;border-radius: 30px ;background-color: #CDCDCD;display: flex;justify-content: center;align-items: center;">
                        <i class="fa-solid fa-arrow-right" style="color: white;"></i></div>

                    </div>
                </div>

            </div>
             
            <div class="content">
                <div><Mybutton
                    btntext="In stock"
                    btnBg="#DEF9EC"
                    txtColr="#3BB77E"
                ></Mybutton></div>
                <div>


                <div>
                    <div class="large-text">Seeds of Change Organic Quinoa, Brown</div>
                    <div style="margin-top: 30px;margin-bottom: 30px;">
              <i
                class="fa-solid fa-star i"
                style="color: rgba(246, 200, 81, 1)"
              ></i>
              <i
                class="fa-solid fa-star i"
                style="color: rgba(246, 200, 81, 1)"
              ></i>
              <i
                class="fa-solid fa-star i"
                style="color: rgba(246, 200, 81, 1)"
              ></i>
              <i
                class="fa-solid fa-star i"
                style="color: rgba(246, 200, 81, 1)"
              ></i>
              <i
                class="fa-solid fa-star i"
                style="color: rgba(205, 205, 205, 1)"
              ></i>
                <div style=" display: inline;
                color: #CDCDCD;
                margin-left: 15px;
                font-family:Quicksand ;
                font-size: 12px;
                font-weight: 400;"
                        
                >(4.0)</div>
                    </div>
                    <div style="width:281.1px ; display: flex; justify-content: space-between;align-items: baseline;">
                        <div class="large-text2">$40</div>
                        <div class="large-text2 " style="text-decoration: line-through;color: #B6B6B6;font-size: 32px;">$45</div>
                    
                    </div>
                
                </div>

                </div>
                <div class="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident doloribus vitae fugit fuga temporibus reprehenderit, eaque recusandae! Sint incidunt ipsa, facere, neque iure, distinctio quod temporibus praesentium quos nemo quas!
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
                <div>
                    <div class="description" style="color: #253D4E;height: 26px;"> Vendor:
                            <div   style="color: #B6B6B6;display: inline;
                            ">NestMart</div>
                    </div>  
                    <div class="description" style="color: #253D4E;height: 26px;"> SKU:
                        <div   style="color: #B6B6B6;display: inline;
                        ">FWM15VKT</div>
                    </div> 
                </div>
               
            </div>
        </div>

        <div class="Footer">
              <div class="subFooter">
                <div class="Footerblog1">
                <button class="button">Description</button>

                <button class="button" style="
                color: #B6B6B6;border: 1px solid #F2F3F4;width: 187px;
                ">Additional info</button>
                <button class="button" style=" color: #B6B6B6;border: 1px solid #F2F3F4;">Reviews (3)</button>

            </div>   
            <p class="description"
             style="width: 1440.78px;height:158.08px ;  font-size: 16px;">
                Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.
Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because. 
                <br>
                Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.
Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because. 
              

            </p> 
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* background-color: aqua; */
}
.img{
    Width:865.16px;
    Height:696.14px;
    border-radius: 15px;
    border: 1px #E5E5E5 solid;  
    box-shadow: #E5E5E5 3px 5px 9px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.subimg{
    Width:784.8px;
    Height:421px;
     
}
.content{
    width: 656.36px;
    height: 700.05px;
    /* top: -160.89px; */
    /* background-color: antiquewhite; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.wrap-btn{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 423.55px;
    height: 50.26px;

}
.i{
    width: 11.48px;
    height: 11px;
    padding-right: 10px;
}
.large-text{
    font-family:Quicksand ;
    font-size: 40px;
    font-weight: 700;
    color: #253D4E;
}
.large-text2{
    font-family:Quicksand ;
    font-size: 72px;
    font-weight: 700;
    color: #3BB77E;
}
.description{
    width: 656.34px;
    height: 117.44px;
    font-family: Lato ;
    font-size: 18px;
    font-weight: 400;
    color: #7E7E7E;
    /* background-color:aquamarine; */
} 
.icon{
    width: 53.57px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-color: #3BB77E;
}
.image{
    width: 117.6px;
    height: 117.6px;
    border-radius: 15px;
    border: 1px solid #F2F3F4;
    display: flex;
    justify-content: center;
    align-items: center;

}
.Footer{
    margin-top: 50px;
    width: 1583px;
    height: 324px;
    border-radius: 15px;
    /* background-color: #3BB77E; */
    border: 1px solid #F2F3F4;
    display: flex;
    justify-content: center;
    
}
.subFooter{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:baseline;
    /* background-color: rgb(183, 149, 149); */
}
.Footerblog1{
    width: 553px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.button{
    height: 45px;
    width: 158px;
    border-radius: 30px;
    color: #3BB77E;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Quicksand;
    font-size: 18px;
    font-weight: 700;
    border: 1px solid #F2F3F4;
}
p{
    padding-top: 20px;
}
</style>