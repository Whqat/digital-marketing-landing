<script setup>
    import Nav from "./Nav.vue";
    import Content from "./Content.vue";
</script>

<template>
    <div class="myApp">
        <div id="bg-img" class="background-img"></div>
        <Nav />
        <Content />
    </div>
</template>

<style scoped>
.myApp {
    position: relative;
    overflow: hidden;
  }
  
  .background-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: 50%;
    background-image: url('https://img.freepik.com/free-vector/glitch-abstract-lightning-logo_23-2148934545.jpg?size=626&ext=jpg&ga=GA1.2.2102069341.1680793427&semt=ais');
    background-repeat: repeat;
    background-attachment:fixed;
    z-index: -1;
  }
</style>