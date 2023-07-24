<template>
    <div
        id="reviews"
        class="container-fluid py-5 mx-0"
        ref="containerRef"
    >
        <h1
            class="text-center my-5"
            style="font-weight: 900; font-family: Roboto"
        >
            Reviews
        </h1>
        <div class="row gy-4 justify-content-evenly pb-5">
            <div
                v-for="review in reviews"
                :key="review.id"
                class="review-card col-12 col-sm-10 col-lg-5 shadow-lg rounded"
            >
                <div class="review-header d-flex align-items-center mb-4">
                    <img
                        :src="review.img"
                        :class="['rounded-circle', imgMarginClass]"
                        width="58"
                        height="58"
                    />
                    <div>
                        <h3 class="m-0 ms-1">[[review.name]]</h3>
                        <div class="d-flex align-items-center">
                            <img
                                v-for="n in review.rating"
                                :key="n"
                                :src="'../../star-fill.svg'"
                                class="mx-1"
                                width="20"
                                height="20"
                            />
                        </div>
                    </div>
                </div>
                <p class="review-text">[[review.desc]]</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import reviews from "../data/reviews.json";
    import {ref, computed, onMounted, onUnmounted, nextTick} from 'vue';

    const imgMarginClass = computed(() => {
        return screenSize.value < 330 ? "me-2" : screenSize.value < 370 ? 'me-3': "me-4";
    });

    const screenSize = ref(window.innerWidth);

    const handleResize = () => {
        screenSize.value = window.innerWidth;
    };

    const containerRef = ref(null);

    const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            containerRef.value.classList.add("fade-up");
        } else {
            containerRef.value.classList.remove("fade-up");
        }
    });
}, { rootMargin: "50px" });

    onMounted(() => {
        nextTick(() => {
        if (containerRef.value) {
            observer.observe(containerRef.value);
        }
    });
        window.addEventListener("resize", handleResize);
    });

    onUnmounted(() => {
        observer.disconnect();
        window.removeEventListener("resize", handleResize);
    });
    
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";

    h1 {
        color: $primary;
        text-shadow: 2px 2px 30px black;
    }
    .review-header h3 {
        text-shadow: 1px 1px 50px black;
        font-size: 1.25rem;
    }

    .review-header .text-muted {
        font-size: 0.875rem;
        margin-left: 0.5rem;
    }

    .review-card {
        transition: all 0.5s ease;
        color: $primary;
        background-color: $secondary;
        backdrop-filter: blur(5px);
        padding: 20px 30px;
        border: 2px solid $primary;
    }

    .review-card:hover {
        transform: scale(1.01) translateY(-5px);
        background-color: opacify($secondary, 0.7) !important;
        cursor: pointer;
        box-shadow: 0px 0px 10px #c71dff
 !important;
    }

    @media screen and (max-width: 512px) {

        .review-card {
            padding: 15px 20px;
        }
        .review-text {
            font-size: 92%;
        }
    }

    @media screen and (max-width: 380px) {
        .review-text {
            font-size: 88%;
        }
    }

    @media screen and (max-width: 350px) {

        .review-card {
            padding: 10px 18px;
       }

        .review-text {
            font-size: 82%;
        }
    }

    .fade-up {
        animation: fade-up 1s ease;
    }

    @keyframes fade-up {
        from {
            visibility: hidden;
            transform: translateY(50px);
        }
        to {
            visibility: visible;
            transform: translateY(0);
        }
    }

</style>