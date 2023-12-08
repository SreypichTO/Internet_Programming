<template>
    <div class="Hero">
        
        <div style="position: absolute; left: 100px;top: 70px;">
          <div class="text-large">Don’t miss amazing grocery deals</div> <br><br>
          <div class="text-small">Sign up for the daily newsletter </div>
            <br><br><br><br>

            <form action="">
              <div>
                <i class="fa-regular fa-paper-plane"></i>
                <input type="text" placeholder="your email address">
              </div>
              <div class="subscribe">
                <div>Subscribe</div>
              </div>
            </form>
          
        
        </div>
        <img src="../assets/image/fresh-apples .svg" alt="" style="position: absolute; right: 0px;top: 0px;">
        
    </div>
</template>

<script>
export default{
    name : "showcase",
}
</script>

<style scoped>
.Hero{
  width: 1584px;
  height: 538px;
  background-color: beige;
  border-radius: 30px;
  position: relative;
  margin-bottom: 50px;
}
.text-large{
    width: 727px;
    font-family: Quicksand;
    font-size: 72px;
    font-weight: 700;
    line-height: 78px;
    color: #253D4E;
}
.text-small{
    font-family: Lato;
    font-size: 30px;
    font-weight: 400;
    /* padding-top: 30px; */
    color: #7E7E7E;
}
form{
  position: relative;
  width: 442px;
  height: 50px;
  background-color: white;
  border-radius: 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
}
input{
  border: 0px;
}
i{
  color: grey;
  padding-left: 20px;
  padding-right: 5pt;
}
.subscribe{
  position: absolute;
  right: 0px;
  width: 149px;
  height: 50px;
  background-color: #3BB77E;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Quicksand;
  font-size: 16px;
  font-weight: 700;
  color: white;
}
</style>