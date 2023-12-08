<template>
    <div class="itemRow">
        <div class="text" >{{ text }}</div>
        <!-- <i class="fa-solid fa-angle-down"></i> -->
        <i class="fa-solid" :class="iconString" ></i>
         
    </div>
</template>

<script>
export default{
    name : "menuitem",
    props:{
        text: String,
        iconString: String,
    }
}
</script>

<style scoped>
.text{
    margin-right: 5px;
    font-family: Quicksand;
    font-size:16px ;
    font-weight: 700;
    color: #253D4E;
}
.itemRow{
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: aqua; */
    
}
</style>