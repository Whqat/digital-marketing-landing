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

<template>
    <h1 id="pricing" class="text-center my-5" style="font-weight: 900; font-family: Roboto">
        Pricing
    </h1>
    <div class="container-fluid" ref="containerRef">
        <div
            class="row gy-5 p-5 d-flex justify-content-center align-items-center"
        >
            <div
                class="col-10 p-4 col-md-4 col-lg-4 d-flex flex-column justify-content-center align-items-center"
            >
                <h4 class="mb-3 text-center">Starter</h4>
                <ul class="list-unstyled">
                    <li><i class="bi bi-patch-check-fill"></i> 50 keywords</li>
                    <li>
                        <i class="bi bi-patch-check-fill"></i> 1 ad campaign
                    </li>
                    <li>
                        <i class="bi bi-patch-check-fill"></i> 2 social media
                        accounts
                    </li>
                </ul>
                <RouterLink to="/book" class="text-decoration-none button mx-auto px-3 py-2 mt-3">
                    $397/month
                </RouterLink>
            </div>
            <div
                class="col-10 p-4 col-md-4 col-lg-4 d-flex flex-column justify-content-center align-items-center"
            >
                <h4 class="mb-3 text-center">Pro</h4>
                <ul class="list-unstyled">
                    <li><i class="bi bi-patch-check-fill"></i> 150 keywords</li>
                    <li>
                        <i class="bi bi-patch-check-fill"></i> 2 ad campaigns
                    </li>
                    <li>
                        <i class="bi bi-patch-check-fill"></i> 4 social media
                        accounts
                    </li>
                </ul>
                <RouterLink to="/book" class="text-decoration-none button mx-auto px-3 py-2 mt-3">
                    $777/month
                </RouterLink>
            </div>
            <div
                class="col-10 p-4 col-md-4 col-lg-4 d-flex flex-column justify-content-center align-items-center"
            >
                <h4 class="mb-3">Premium</h4>
                <ul class="list-unstyled">
                    <li><i class="bi bi-patch-check-fill"></i> 200 keywords</li>
                    <li>
                        <i class="bi bi-patch-check-fill"></i> 3 ad campaigns
                    </li>
                    <li>
                        <i class="bi bi-patch-check-fill"></i> 8 social media
                        accounts
                    </li>
                </ul>
                <RouterLink to="/book" class="text-decoration-none button mx-auto px-3 py-2 mt-3">
                    $1497/month
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import "../assets/variables.scss";

    h1 {
        color: $primary;
        text-shadow: 2px 2px 30px black;
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

    .container-fluid {
        line-height: 200%;
        color: $primary !important;
        background-color: opacify($secondary, 0.75) !important;
        border: 1px solid $primary;
        border-radius: 5px;
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
        box-shadow: 0 0 10px black;
        &:hover {
            box-shadow: 0px 0px 10px #c71dff;
            background-color: opacify($secondary, 0.85) !important;
        }
    }

    /* remove default list styles */
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    h4,
    li {
        font-weight: 900;
        text-shadow: 2px 2px 2px black;
    }

    /* add spacing between list items */
    li {
        position: relative;
        left: 10px;
        margin-bottom: 0.5rem;
    }
    .btn {
        margin-top: 1rem;
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
            transform: translateY(0px);
        }
    }

    
</style>
