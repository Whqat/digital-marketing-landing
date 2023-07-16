<script setup>
    import { ref } from "vue";

    const imgSrc = import.meta.env.BASE_URL;
    const imgHeight = ref(null);
    const imgRef = ref(null);

    const onImgLoad = () => {
        const imgElement = imgRef.value;
        imgHeight.value = imgElement.offsetHeight;
    };
</script>

<template>
    <div class="container d-flex flex-wrap my-3 py-5 px-4 rounded border border-1 border-light">
        <div class="row mb-5 mx-auto">
            <div class="col-12 mb-5">
                <h1 class="mt-1 mb-2">
                    Ready to
                    <strong
                        style="
                            font-family: 'Iceberg';
                            text-shadow: 0.5px 0.5px 0px #515185;
                        "
                        
                        ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        fill="currentColor"
                        class="bi bi-lightning-fill"
                        viewBox="0 0 16 16"
                        style="position: relative; bottom: 2px"
                    >
                        <path
                            d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"
                        />
                    </svg>BOOST</strong
                    >
                    Your Business?
                </h1>
            </div>
        </div>
        <div class="row mb-5 justify-content-evenly">


            <div class="col-7 col-md-6 col-lg-5" style="max-width: 100vw">
                <p>
                    At our digital marketing agency we specialize in helping
                    small and medium-sized businesses thrive. We understand that
                    marketing can be challenging, but it's the key to growing
                    your business and driving traffic towards it. That's why we
                    use the most powerful and influential tool available today:
                    social media.
                </p>
            </div>

            <div class="col-4 col-lg-4 d-flex align-items-center" style="height: 65%">
                <img
                    class="img-fluid float-start me-3"
                    @load="onImgLoad"
                    ref="imgRef"
                    :src="imgSrc + 'digital-marketing-1.png'"
                />
            </div>


        </div>

        <div class="row mb-5 justify-content-evenly">


            <div class="col-4 col-lg-4 d-flex align-items-center" style="height: 65%">
                <img
                    class="img-fluid float-start me-3"
                    @load="onImgLoad"
                    ref="imgRef"
                    :src="imgSrc + 'digital-marketing-2.png'"
                />
            </div>

            <div class="col-7 col-md-6 col-lg-4" style="max-width: 100vw">
                <p>
                    Our team of experts is dedicated to crafting bespoke social
                    media strategies that are tailored to your business's unique
                    needs and goals. We'll help you build a strong online
                    presence, engage with your audience, and ultimately drive
                    sales and revenue.
                </p>
            </div>

            
        </div>
    </div>
    <div
        class="partner py-4 container-fluid mb-5 mt-5 rounded"
    >
        <h4 class="text-center pt-1 mb-3" style="letter-spacing: 2px; font-weight: 900;">
            ⚠️ Don't let your competition get ahead ⚠️ 
        </h4>
        <p class="text-center" style="letter-spacing: 2px;">
            partner with us today and
            start seeing real results for your business.
        </p>
    </div>
</template>

<style scoped>
    h1 {
        font-weight: 900;
        color: #e0e0fd;
    }

    p {
        color: #e0e0fd;
    }

    img {
        transform: scaleX(-1);
    }

    .container {
        transition: all 0.3s ease;
        width: 90%;
        background-image: linear-gradient(#002, #002);
        background-color: white;
    }

    .container:hover {
        box-shadow: 0px 0px 10px #846eb6 !important;
        background-color: black !important;
        background-image: none !important;
    }

    @media (max-width: 767px) {
        h1 {
            font-size: 1.5rem;
        }

        p {
            font-size: 0.9rem;
        }

        .container {
            width: 90%;
        }
    }

    @media (max-width: 500px) {
        h1 {
            font-size: 1.2rem;
        }

        p {
            font-size: 0.7rem;
        }

        .container {
            width: 95%;
        }
    }

    @media (max-width: 400px) {
        h1 {
            font-size: 1rem;
        }

        p {
            font-size: 0.7rem;
        }

        .container {
            width: 95%;
        }
    }

    .partner {
        border: 1px inset white;
        background-image: linear-gradient(#002, #001010, #000001);
        background-color :#ffffff;
        color: white;
        width: 95%;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }

    .partner:hover {
        transform: scale(1.01);
        background-image: none !important;
        background-color: black !important;
        box-shadow: 0px 0px 10px #846eb6 !important;
        border: 1px solid white;

    }
    .partner p {
        color: white;
        font-weight: 500;
    }

    .partner h4 {
        color: white;
        font-weight: 900;
    }

    h4 {
        font-family: "Lato";
        font-weight: 800;
        color: #515185;
    }



    @media (max-width: 767px) {
        h4 {
            font-size: 1rem;
        }

        .partner p {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 500px) {
        h4 {
            font-size: 0.89rem;
        }

        .partner p {
            font-size: 0.7rem;
        }
    }

    @media (max-width: 400px) {
        h4 {
            font-size: 0.8rem;
        }

        .partner p {
            font-size: 0.69rem;
        }
    }
</style>
