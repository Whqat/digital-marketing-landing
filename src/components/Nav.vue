<script setup>
    import { computed, onMounted, onUnmounted, ref } from "vue";

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
        if (screenSize.value < 321) return "px-0";
        else if (screenSize.value < 385) {
            return "px-1";
        } else if (screenSize.value < 400) {
            return "px-2";
        } else if (screenSize.value < 500) {
            return "px-3";
        } else if (screenSize.value < 600) {
            return "px-4";
        } else {
            return "px-5";
        }
    });

    onMounted(() => {
        const navLinks = document.querySelectorAll(".nav-link");
        const offcanvasCloseButton = document.querySelector(
            "#offcanvasCloseButton"
        );

        navLinks.forEach((navLink) => {
            navLink.addEventListener("click", () => {
                offcanvasCloseButton.click();
            });
        });
        window.addEventListener("resize", handleResize);
    });

    onUnmounted(() => {
        window.removeEventListener("resize", handleResize);
    });
</script>

<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <RouterLink :class="brandClass" aria-current="page" to="/">
                <strong class="brand">
                    <i class="bi bi-lightning-fill"></i>
                    BOOST Digital Marketing
                </strong>

                <span class="nav-link-underline"></span>
            </RouterLink>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                ref="offcanvasNavbarRef"
            >
                <div class="offcanvas-header text-white font-weight-bold">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                        Navigation
                    </h5>
                    <button
                        id="offcanvasCloseButton"
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <RouterLink
                                active-class="active__"
                                :class="linkClass"
                                to="/book"
                            >
                                Get Started
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink
                                active-class="active__"
                                :class="linkClass"
                                v-scroll-to="'#process'"
                                to="#process"
                                data-bs-dismiss="offcanvas"
                            >
                                Our Process
                            </RouterLink>
                            <span class="nav-link-underline"></span>
                        </li>
                        <li class="nav-item">
                            <RouterLink
                                active-class="active__"
                                :class="linkClass"
                                v-scroll-to="'#reviews'"
                                to="#reviews"
                                data-bs-dismiss="offcanvas"
                            >
                                Reviews
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink
                                active-class="active__"
                                :class="linkClass"
                                v-scroll-to="'#pricing'"
                                to="#pricing"
                                data-bs-dismiss="offcanvas"
                            >
                                Pricing
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink
                                active-class="active__"
                                :class="linkClass"
                                v-scroll-to="'#services'"
                                to="#services"
                                data-bs-dismiss="offcanvas"
                            >
                                Services
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink
                                active-class="active__"
                                :class="linkClass"
                                v-scroll-to="'#contact'"
                                to="#contact"
                                data-bs-dismiss="offcanvas"
                            >
                                Contact
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
    @import "../assets/variables.scss";

    .offcanvas.hide {
        display: none;
    }
    /* .navbar {
        border-bottom: 2px solid white;
        --bs-navbar-toggler-border-color: none;
        --bs-navbar-toggler-focus-width: 0;
        --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.9%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    } 

    .btn-close {
        --bs-btn-close-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e");
        --bs-btn-close-opacity: 0.9
        --bs-btn-close-focus-opacity: 0.3;
    }

    .offcanvas.show, .offcanvas.show-hiding, .offcanvas.showing{
        color: $primary;
        backdrop-filter: blur(5px) brightness(30%);
        --bs-offcanvas-bg: #06000fa1;
    } */


    .brand {
        transition: all 0.5s ease;
        font-family: "Iceberg", "sans-serif";
        text-shadow: 0 0 1px $primary;
        &:hover {
            text-shadow: 0 0 0px black;
        }
    }

    .nav-link {
        color: $primary;
        margin-right: 1rem;
        position: relative;
        text-decoration: none;
        &:hover {
            color: $hover;
        }
        &:active {
            color: lighten($hover, 11%) !important;
        }
        &:focus {
            color: lighten($hover, 11%) !important;
        }
    }

    .nav-link > .nav-link-underline {
        position: absolute;
        bottom: -11.3px;
        box-shadow: 0 0 10px white;
        left: 0;
        width: 0;
        height: 2px;
        background-color: $hover;
        border-radius: 0 0 16px 16px;
        transition: width 0.37s ease-in-out;
    }

    .nav-link:hover > .nav-link-underline {
        width: 100%;
    }
</style>
