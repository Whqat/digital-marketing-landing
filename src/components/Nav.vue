<script setup>
    import { computed, onMounted, onUnmounted, ref } from "vue";

    const brandName = computed(() => {
        return screenSize.value < 648
            ? "BOOST Digital Marketing"
            : "BOOST Digital Marketing Agency";
    });

    const brandClass = computed(() => {
        return screenSize.value < 400
            ? "nav-link brand font-weight-bold"
            : screenSize.value < 550
            ? "nav-link brand font-weight-bold fs-6"
            : "nav-link brand font-weight-bold fs-4";
    });

    const linkClass = computed(() => {
        return screenSize.value < 550 ? "nav-link" : "nav-link";
    });

    const screenSize = ref(window.innerWidth);

    const handleResize = () => {
        screenSize.value = window.innerWidth;
    };

    const containerClass = computed(() => {
        if (screenSize.value < 321)
          return 'px-0'

         else if (screenSize.value < 385) {
            return "px-1";
        }
         else if (screenSize.value < 400) {
            return "px-2";
        }
         else if (screenSize.value < 500) {
            return "px-3";
        }
         else if (screenSize.value < 600) {
            return "px-4";
        }
          else {
            return "px-5";
        }
    });

    onMounted(() => {
        window.addEventListener("resize", handleResize);
    });

    onUnmounted(() => {
        window.removeEventListener("resize", handleResize);
    });
</script>

<template>
    <div class="nav-background">
        <div
            :class="[
                'container-fluid',
                'p-1',
                containerClass,
                'd-flex',
                'justify-content-between',
                'align-items-center',
            ]"
        >
            <RouterLink :class="brandClass" aria-current="page" to="/">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16.5"
                    fill="currentColor"
                    class="bi bi-lightning-fill"
                    viewBox="0 0 16 16"
                    style="position: relative; bottom: 2px"
                >
                    <path
                        d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"
                    />
                </svg>
                [[ brandName ]]
                <span class="nav-link-underline"></span>
            </RouterLink>
            <ul class="nav">
                <li class="nav-item">
                    <RouterLink
                        :class="linkClass"
                        v-scroll-to="'#services'"
                        to="#services"
                    >
                        Services
                        <span class="nav-link-underline"></span>
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink
                        :class="linkClass"
                        v-scroll-to="'#contact'"
                        to="#contact"
                    >
                        Contact
                        <span class="nav-link-underline"></span>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .nav-background {
        background-color: #002;
        border-bottom: 1px solid white;
    }
    .nav-item {
        padding: 0;
    }
    .container-fluid {
        font-family: "Lato";
        max-width: 1200px;
        background-color: #002;
    }

    .brand {
        font-family: "Iceberg";
        text-decoration: none;
        font-size: 10rem;
    }

    .nav-link {
        transition: color 0.3s ease-in-out;
        margin-right: 1rem;
        position: relative;
        text-decoration: none;
        color: #e0e0fd;
    }

    .nav-link:hover {
        color: #fff;
    }

    .nav-link > .nav-link-underline {
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #fff;
        border-radius: 0 0 16px 16px;
        transition: width 0.37s ease-in-out;
    }

    .brand .nav-link-underline {
        border-radius: 0 0 70px 70px;
        bottom: -6px;
        left: 50%;
        transform: translateX(-50%);
    }

    @media screen and (max-width: 600px) {
        .brand .nav-link-underline {
            bottom: -12px;
        }
        .nav-link:not(first-of-type) {
            font-size: 0.8rem;
            padding: 8px;
        }
    }

    .nav-link:hover > .nav-link-underline {
        width: 100%;
    }

    @media screen and (max-width: 424px) {
        .brand {
            font-size: 0.5rem;
        }
        .nav-link:not(.brand) {
            font-size: 0.7rem;
            padding: 5px;
        }
    }
    @media screen and (max-width: 335px) {
        .nav-link:not(.brand) {
            font-size: 0.65rem;
            padding: 4px;
        }
    }

    @media screen and (max-width: 310px) {
        .brand {
            font-size: 0.7rem !important;
        }
    }
</style>
