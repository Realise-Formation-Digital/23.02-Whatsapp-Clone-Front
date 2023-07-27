<template>
    <div class="custom-link">
        <router-link to="/login" class="custom-link-el">Login</router-link>
        <router-link to="/messages" class="custom-link-el">Messages</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
</script>

<style>
# {
    position: relative;
}
.custom-link {
    margin-top: 20px; 
}
.custom-link-el {

  border-radius: 20%;
  background-color: rgb(8, 240, 178);
  padding-top: 12px;
  /*float: left;*/
  border-bottom: 8px solid rgb(6, 184, 137);
  border-right: 10px solid rgb(6, 184, 137);
  text-shadow: 1px -1px rgb(4, 35, 137);
  transition: all 0.1s;
  -webkit-transition: all 0.1s;
}
.custom-link-el:hover {
  color: #fd2104;
  transition: all 0.3s;
  background-color: rgb(255, 166, 0);
  border-bottom: 18px solid;
  border-right: 15px solid;
  box-shadow: 0 0 0 4px #000, 0 0 0 6px #fff;
  padding: 20px;
}
.custom-link-el:active {
  transform: translate(5px, 5px);
  -webkit-transform: translate(5px, 5px);
  border-bottom: 2px solid;
  border-right: 2px solid;
  transition: 0.3s;
  color: rgb(8, 0, 255);
}
</style>
