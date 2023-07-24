<template>
    <h1 id="process" class="text-center my-5" style="font-weight: 900; font-family: Roboto">
        Our Process
    </h1>
    <div class="container" ref="containerRef">
        <div
            class="row gy-5 my-1 p-3 d-flex justify-content-center align-items-center"
        >
            <div
                class="col-10 col-md-4 col-lg-7 d-flex flex-column justify-content-center align-items-center"
            >
                <i class="bi bi-brightness-high-fill mb-4 fs-1"></i>
                <h4 class="mb-3">Discovery</h4>
                <p>
                    We start by understanding your business goals and target
                    audience to create a customized marketing plan.
                </p>
                <i class="bi bi-arrow-down fs-1 my-5"></i>
            </div>
            <div
                class="col-10 col-md-4 col-lg-7 d-flex flex-column justify-content-center align-items-center"
            >
                <i class="bi bi-tools mb-4 fs-1"></i>
                <h4 class="mb-3">Optimization</h4>
                <p>
                    We optimize your website and landing pages for search
                    engines and improve your ad campaigns to maximize
                    conversions.
                </p>
                <i class="bi bi-arrow-down fs-1 my-5"></i>
            </div>
            <div
                class="col-10 col-md-4 col-lg-7 d-flex flex-column justify-content-center align-items-center"
            >
                <i class="bi bi-graph-up-arrow mb-4 fs-1"></i>
                <h4 class="mb-3">Promotion</h4>
                <p>
                    We use various digital marketing channels such as social
                    media, email, and content marketing to promote your business
                    and drive traffic.
                </p>
                <RouterLink class="button mx-auto px-4 py-2 mt-4 mb-5 text-decoration-none" to="/book">
                    Get Started
                </RouterLink>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref, onMounted, onUnmounted, nextTick } from "vue";
    const containerRef = ref(null);
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    containerRef.value.classList.add("fade-up");
                } else {
                    containerRef.value.classList.remove("fade-up");
                }
            });
        },
        { rootMargin: "50px" }
    );
    onMounted(() => {
        nextTick(() => {
            if (containerRef.value) {
                observer.observe(containerRef.value);
            }
        });
    });
    onUnmounted(() => {
        observer.disconnect();
    });
</script>
<style scoped lang="scss">
    @import "../assets/variables.scss";
    .container {
        line-height: 200%;
        color: $primary !important;
        border-radius: 5px;
        transition: all 0.3s ease;
    }

    .row {
        background-color: $secondary;
        backdrop-filter: blur(5px) brightness(30%);
        border-radius: 50px;
        transition: all 0.5s ease;
        &:hover {
            box-shadow: 0px 0px 10px #c71dff;
        }
    }

    .button {
        background-color: opacify($secondary, 0.7) !important;
        color: $hover;
        border: 2px solid $hover;
        font-weight: 900;
        transition: all 0.2s ease;
        border-radius: 5px;
        &:hover {
            color: $hover;
            border-color: $hover;
            border-radius: 5px 5px 0 5px;
            background-color: rgba(255, 255, 255, 0.033) !important;
            transform: translateY(-5px);
            box-shadow: 3px 6px 1px darken($hover, 5%);
        }
    }

    h1 {
        color: $primary;
        text-shadow: 2px 2px 30px black;
    }

    h4 {
        font-weight: 900;
        text-shadow: 2px 2px 2px black;
        color: $primary;
    }
    img {
        max-width: 100%;
        height: auto;
    }
    p {
        text-align: center;
    }
    .fade-up {
        animation: fade-up 1s ease;
    }
    @keyframes fade-up {
        from {
            visiblity: hidden;
            transform: translateY(50px);
        }
        to {
            visibility: visible;
            transform: translateY(0px);
        }
    }
</style>
