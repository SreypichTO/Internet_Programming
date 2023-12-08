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

          <searchbox></searchbox>

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
import searchbox from './SearchBox.vue';


    export default{
        name: "Head",
        components:{
                IconText,
                searchbox,
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

.iconText{
    display: flex;
    align-items: center;
    padding-left: 10px;
    margin-left: 210px;
}

</style>