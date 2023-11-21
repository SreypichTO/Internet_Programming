<template>
    <div class="header">
        <div class="header-text">{{ text }}</div>

        <div class="wrap1">
            <div style="font-family: Montserrat;font-size: 16px;font-weight: 700;line-height: 24px;letter-spacing: 0em;text-align: left;"
            >All</div>
            <div>Milks & Diaries</div>
            <div>Coffee & Tea</div>
            <div>Pet Foods</div>
            <div>Meats</div>
            <div>Vegetables</div>
            <div>Fruits</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "headRow",
        props:{
            text:String,
            
        }
    }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lato:ital,wght@0,300;0,400;1,300&family=Quicksand:wght@300;400;700&display=swap");
.header{
    /* width: 1584px; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:end;
    padding-bottom: 50px ;
}
.wrap1{
    display: flex;
    justify-content: space-between; /* background-color: aqua; */
    width: 637px;
    font-size: 16px;
    font-weight: 400;
    font-family: Lato;
}
.header-text{
    font-family: Quicksand;
    font-size: 32px;
    font-weight: 700;
    /* line-height: 40px; */
    letter-spacing: -0.0004em;
    text-align: left;

}
</style>