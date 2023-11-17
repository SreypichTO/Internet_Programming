<template>
    <div class="pro-card">
        <div class="productLabel" :style="{ backgroundColor:LabelBg}">
            <div class="textLabel" >{{ text }}</div>
        </div>
        <img src="../assets/image/mango.svg" alt="Mango">
    </div>
</template>

<script>
    export default {
        name: "productCard",
        props: {
            text: String,
            LabelBg: String,
        },
  };
    
</script>

<style scoped>
.pro-card{
    width: 298px;
    height: 402px;
    border-radius: 10px;
    border: 1px solid rgba(188, 227, 201, 1);
    background-color: white;

}
img{
    width: 201.89px;
    height: 144.93px;
    position: relative;
    top: 61.81px;
    left: 37.11px;
}
.productLabel{
    width:  58px;
    height: 32px;
    position: relative;
    top: 20px;
    /* background-color: rgba(59, 183, 126, 1); */
    padding: 10px, 15px, 10px, 15px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    
    
}
.textLabel{
    text-align: center;
    font-family: Lato;
    color: rgba(255, 255, 255, 1);
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
    position: relative;
    top: 10px;
    
    

}

</style>