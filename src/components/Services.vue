<template>
    <div style="border-bottom: 2px solid white; border-radius: 3px;">
        <h1 id="services" class="text-center my-5">Our Services</h1>
        <div class="container-fluid" ref="containerRef">
            <div class="row text-center">
                <div
                    v-for="service in services"
                    :key="service.id"
                    class="service-card col-sm-6 col-md-4 col-lg-3 mb-4 mx-auto"
                    style="width: 13rem;"
                >
                    <div
                        class="card mt-3 shadow-lg"
                        style="height: 80%;"
                        @click="hoverCardId = service.id"
                    >
                        <img
                            class="card-img-top p-5"
                            :src="service.img"
                            alt="Service Icon"
                        />
                        <p class="info position-absolute shadow-lg">i</p>
                        <div class="card-body position-relative">
                            <h5 class="card-title" style="color: #e0e0fd">[[ service.name ]]</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal-wrapper" :class="{ show: hoverCardId !== null }">
            <div class="modal-content animate">
                <span
                    @mouseover="handleCloseMouseOver($event)"
                    @mouseout="handleCloseMouseOut($event)"
                    class="close"
                    @click="hoverCardId = null"
                    >&times;</span
                >
                <h3
                    class="text-center font-weight-bold mb-4 pb-2"
                    style="font-weight: 900; border-bottom: 1px solid #fff;"
                >
                    [[ getServiceFooter() ]]
                </h3>
                <p class="text-center">[[ getServiceDesc() ]]</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted, nextTick } from "vue";
    import services from "../data/services.json";

    const hoverCardId = ref(null);

    const getServiceFooter = () => {
        if (hoverCardId.value !== null) {
            const service = services.find((s) => s.id === hoverCardId.value);
            return service.footer;
        } else {
            return "";
        }
    };
    const getServiceDesc = () => {
        if (hoverCardId.value !== null) {
            const service = services.find((s) => s.id === hoverCardId.value);
            return service.desc;
        } else {
            return "";
        }
    };

    const handleCloseMouseOver = (event) => {
        event.target.style.color = 'red';
    };
    const handleCloseMouseOut = (event) => {
        event.target.style.color = '#515185';
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
    });

    onUnmounted(() => {
        observer.disconnect();
    });

</script>

<style scoped>
    .container {
        width: 100%;
    }

    .info {
        width: 1.6em;
        height: 1.6em;
        top: 10px;
        right: 10px;
        background-color: #e0e0fd;
        color: #212155;
        
        border-radius: 50%;
        transition: all 0.2s ease-in-out;
    }

    .info:hover {
        color: white;
        background-color: #000;
        border: 1px solid white;
    }

    h1 {
        color: #e0e0fd;
        font-weight: 900;
    }

    .card {
        transition: all 0.3s ease;
        border-radius: 15px;
        cursor: pointer;
        background-image: linear-gradient(#000001 90%, #000);
        border: 1px solid white;
        background-color: white;
    }
    .card-img-top {
        background-color: white;
        transition: all 0.3s ease;
        border-radius: 15px 15px 1px 1px;
        /*background-image: linear-gradient(#002, #101010);*/
        background-image: linear-gradient(#002, #001010, #000001);

    }


    .card:hover{
        border: none;
        background-image: none !important;
        background-color: black !important;
        transform: translateY(-5px) rotate(3deg) scale(1.1);
        box-shadow: 0px 0px 10px #846eb6 !important;
    }
    .card:hover .card-img-top{
        background-image: none !important;
        background-color: black !important;
        transform: translateY(-5px);
    }
    

    
    
    .card-body {
      bottom: 30px;
    }

    .card-title {
      font-size: 1em;
      font-weight: 500;
    }


    .card-img-top:hover {
        opacity: 0.85;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    .modal-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
        display: none;
    }

    .modal-wrapper.show {
        display: block;
        animation: fade-in 0.3s ease forwards;
    }

    .modal-content {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: linear-gradient(#002, #001, #010);
        border: 1px solid white;
        width: 90%;
        padding: 50px;
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        color: #e0e0fd;
    }

    @media screen and (min-width: 756px) {
        .modal-content {
            width: 50%;
        }
    }

    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
    }

    @media screen and (max-width: 580px) {
        .container {
            width: 65%;
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
