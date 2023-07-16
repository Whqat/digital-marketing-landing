<script setup>
    import Ladder from "./Ladder.vue";
    import Services from "./Services.vue";
    import Reviews from './Reviews.vue'
    import Contact from './Contact.vue'
</script>

<template>
    <div class="div">

        <Ladder />
        <Services />
        <Reviews />
        <Contact />
    </div>
</template>

<style scoped>
    .div {
        padding: 15px;
        background: rgb(1, 0, 21);
    }
</style>
