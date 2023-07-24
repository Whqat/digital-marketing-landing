<script setup>
    // import Nav from "./components/Nav.vue";
    // import Content from "./components/Content.vue";
    import Footer from "./components/Footer.vue";

    const onScroll = () => {
    const scrollY = window.scrollY;
    const initial_position = 1 * scrollY;
    const position = initial_position / 10;
    document.getElementById('bg-img').style.backgroundPositionX = (50 + position) + "%";
};

    window.addEventListener("scroll", onScroll);

</script>

<!-- CHANGES IN CONTENT.VUE STYLE TAG, LADDER.VUE, ADDED VIDEO, APP.VUE  -->

<template>
    <div class="myApp">
        <!-- <Nav /> -->
        <!-- <div id="bg-img" class="background-img"></div>
        <Nav />
        <Content /> -->
        <Transition name="fade">
            <RouterView />
        </Transition>
        <!-- <Footer /> -->
    </div>
</template>

<style scoped lang="scss">

    @import "./assets/variables.scss";

    

        .secondary-navbar {
            background-image: linear-gradient(to right, $secondary, lighten($secondary, 10%));
        }

    .fade-enter-from {
        filter: blur(5px);
        opacity: 0;
    }

    .fade-enter-to {
        opacity: 1;
    }

    .fade-enter-active {
        transition: all 0.3s ease;
    }
    .fade-leave-from {
        filter: blur(5px);
        opacity: 0;
    }

    .fade-leave-to {
        opacity: 1;
    }

    .fade-leave-active {
        transition: all 0.3s ease;
    }

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

    @media screen and (min-width: 800px) {
        .container-fluid {
            height: 30rem !important;
        }
    }
    .container-fluid {
        padding: 20px;
        height: fit-content;
    }

    .intro-video:hover {
        opacity: 0.7;
        box-shadow: 0px 0px 12px #846eb6 !important;
    }
    .intro-video {
        transition: all 0.5s ease;
        width: 100%;
        border-radius: 10px;
        border: 1px solid white;
        object-fit: cover;
        box-shadow: 0px 0px 10px #000;
    }

    .d-flex {
        border-top: 2px outset rgba(0, 0, 0, 0.377);
    }

    @media (min-width: 768px) {
        .intro-video {
            height: 100%;
        }
    }
</style>

