<template>
        <div class="searchBox">
            <div style="display: flex;align-items: center;">
                <button >
                    <div>AllCategories</div>
                    <font-awesome-icon :icon="['fas', 'angle-down']" />
                </button>
                <font-awesome-icon :icon="['fas', 'minus']" rotation=90 size="xl" style="color:grey;" />
                <input type="text" placeholder="Search for items">
            </div>
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" style="color: gray;margin-right: 20px;" />
                   
        </div>   
</template>

<script>
export default{
    name : "searchbox",
}
</script>


<style scoped>
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
input{
    
    height: 50px;
    border-radius: 5px;
    border: 0px;
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
</style>