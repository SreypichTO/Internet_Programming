<template>

    <div style="height: 27.67px;display: flex;align-items: center;gap: 10px;margin-left: 10px;">
        <i class="fa-regular" :class="iconString"></i>
        <div class="text" :style="{color:textColor, }">{{ text }}</div>
        <i class="" :class="iconString1"></i>
    </div>
</template>

<script>
    export default{
        name: "iconText",
        props:{
            text: String,
            iconString: String,
            iconString1: String,
            textColor: String,
            
        }
    }
</script>

<style scope>
i{
    width: 12px;
    height: 12px;
    color: #253D4E;
    /* margin-left: 10px; */
}
.text{
    
    font-family: Lato;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color:#7E7E7E;
}
</style>