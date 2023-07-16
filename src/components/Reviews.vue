<template>
    <div
        class="container-fluid py-5 my-1 mx-0"
        style="background-color: rgb(1, 0, 21); border-bottom: 2px solid white; border-radius: 3px;"
        ref="containerRef"
    >
        <h1
            class="text-center my-5"
            style="color: #e0e0fd; font-weight: 900; font-family: Roboto"
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

<style scoped>
    .review-header h3 {
        font-size: 1.25rem;
    }

    .review-header .text-muted {
        font-size: 0.875rem;
        margin-left: 0.5rem;
    }

    .review-card {
        transition: all 0.5s ease;
        background-image: linear-gradient(#002, #001010, #000001);
        color: #fafafa;
        background-color: white;
        padding: 20px 30px;
        border: 1px solid #e0e0fd;
    }

    .review-card:hover {
        transform: scale(1.01) translateY(-5px);
        background-image: none !important;
        background-color: black !important;
        cursor: pointer;
        box-shadow: 0px 0px 10px #846eb6 !important;

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
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

</style>