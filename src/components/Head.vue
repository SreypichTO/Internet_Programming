<template>
        <div class="header-fixed">
        <div class="header-fixed2">
          <img src="../assets/image/logo.svg" alt=""
            style="
                width: 78px;
                height: 60px;
                margin-right:5px;
            "
          >
          <div>
              <div 
              style="
                  font-size: 40px;
                  font-family:Quicksand; 
                  color: #3BB77E;
                  font-weight: 700;">Melon</div> 
            
            <div 
              style="
                font-size: 10.9px;
                font-family:Montserrat; 
                color: #253D4E;
                font-weight: 600;">MART & GROCERY</div>
          </div>

            <div class="searchBox">
                <div style="display: flex;align-items: center;">
                    <button >
                        <div>AllCategories</div>
                        <font-awesome-icon :icon="['fas', 'angle-down']" />
                    </button>
                    <font-awesome-icon :icon="['fas', 'minus']" rotation=90 size="xl" style="color:grey;" />
                    <input type="text" placeholder="Search for items">
                </div>
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" 
                    style="color: gray;margin-right: 20px;"
                />   
            </div>

            <div class="iconText">
                <iconText
                    text="Account"
                    iconString="fa-user"
                ></iconText>
                <iconText
                    text="Compare"
                    iconString="fa-user"
                ></iconText>
                <iconText
                    text="WhishList"
                    iconString="fa-user"
                ></iconText>
            </div>
        </div>





      </div>


</template>

<script>
import IconText from './iconText.vue';
import iconText from './iconText.vue';


    export default{
        name: "Head",
        components:{
                IconText

        }
    }

</script>


<style scoped>



.header-fixed{
  display: flex;
  justify-content: center;
  width: 1812px;
  height: 97px;
  /* background-color: grey; */
}
.header-fixed2{
  display: flex;
  
  align-items: center;
  width: 1584px;
  height: 97px;
  /* background-color: pink; */
}
input{
    
    height: 50px;
    border-radius: 5px;
    border: 0px;
}
.searchBox{
    margin-left: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 700px;
    border-radius: 5px;
    border: solid 2px #BCE3C9;
    background-color: white;
}
button{
    color: #000;
    font-family: Quicksand;
    font-weight: 700;
    font-size: 14px;
    width: 135px;height: 25px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    background-color: white;
    
}
.iconText{
    display: flex;
    align-items: center;
    padding-left: 10px;
    margin-left: 210px;
}

</style>