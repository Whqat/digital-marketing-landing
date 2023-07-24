<script setup>
    import Ladder from "./Ladder.vue";
    import Services from "./Services.vue";
    import Reviews from './Reviews.vue'
    import Contact from './Contact.vue'
    import Pricing from "./Pricing.vue"
    import Process from "./Process.vue"
    import Footer from "./Footer.vue"
</script>

<template>
    <div class="div">
        <Ladder />
        <Process />
        <Services />
        <Reviews />
        <Pricing />
        <Contact />
        <div class="footer">
            <Footer />
        </div>
    </div>
</template>


<!-- CHANGES HERE -->
<style scoped lang="scss">
@import "../assets/variables.scss";

    .div {
        padding: 1px;
    }
    
</style>
