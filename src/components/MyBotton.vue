
<template>
<!-- to enter the text parameter , we use it in App.vue -->
<!-- creating button wich we can chenge it's value -->
<button :style="{ backgroundColor:btnBg}">
    <p class="text">{{btntext}}</p>
    <font-awesome-icon :icon="['fas', 'arrow-right']" style="color: white; margin-left: 10px;"/>
</button>
    
</template>


<script>
    export default{
        name: "Mybutton",
        // inside props is the parameter
        props:{
            btnBg:String,
            btntext:String, 
        }
    }
</script>


<style scope>
 /* @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lato:ital,wght@0,300;0,400;1,300&family=Quicksand:wght@300;400;700&display=swap'); */
 
 /* copy from figma */
 button{
        color:white;
        
        display: flex;
        align-items: center;
        flex-direction: row;
        padding: 8px 15px 8px 15px;
        width: 120px;
        height: 30px;
        border:0;
        border-radius: 5px;
 }
 .text{
    font-weight: 600;
    font-size: 12px;
 }

</style>