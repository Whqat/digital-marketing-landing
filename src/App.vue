<script setup>
import Nav from './components/Nav.vue'
import Content from "./components/Content.vue"

import Footer from "./components/Footer.vue"

import {ref} from 'vue'

const imgHeight = ref();

const imgRef = ref(null);

const onImgLoad = () => {
  const imgElement = imgRef.value;
  imgHeight.value = imgElement.offsetHeight;
};

</script>
<template>
    <Nav />
    <Content />
    <Footer />
</template>


<!-- <style scoped>

.landing__img {
  width: 100%;
  object-fit: cover;
}

.d-flex {
  border-top: 2px outset rgba(0, 0, 0, 0.377);
}

@media (min-width: 768px) {

  .landing__img {
    height: 100%;
  }
}
</style> -->