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


<!-- CHANGES HERE -->
<template>
    <div class="container d-flex flex-wrap my-3 py-4 px-2 rounded shadow-lg">
        <div class="row mx-auto">
            <div class="col-12 mb-5 p-0 text-center border-bottom border-1 border-light">
                <h1 class="my-1">
                    
                    <strong
                        class="electric-animation"
                        style="
                            font-family: 'Iceberg';
                            text-shadow: 0.5px 0.5px 0px #515185;
                        "
                        
                        >Ready to<i class="bi bi-lightning-fill"></i>BOOST Your Business?</strong
                    >
                    
                </h1>
            </div>
        </div>
        <div class="row mb-2 justify-content-evenly px-4 py-2">


            <div class="col-12 col-sm-6 col-md-6 col-lg-5">
                <p>
                    At our digital marketing agency we specialize in helping
                    small and medium-sized businesses thrive. We understand that
                    marketing can be challenging, but it's the key to growing
                    your business and driving traffic towards it. That's why we
                    use the most powerful and influential tool available today:
                    social media.
                </p>
            </div>

            <div class="col-6 col-sm-6 col-md-5 col-lg-4 d-flex align-items-center" style="height: fit-content">
                <img
                    class="img-fluid float-start me-3"
                    @load="onImgLoad"
                    ref="imgRef"
                    :src="imgSrc + 'digital-marketing-1.png'"
                />
            </div>


        </div>

        <div class="row justify-content-evenly px-4 py-2">
            
            <div class="col-12 col-sm-6 col-md-6 col-lg-5" style="max-width: 100vw">
                <p>
                    Our team of experts is dedicated to crafting bespoke social
                    media strategies that are tailored to your business's unique
                    needs and goals. We'll help you build a strong online
                    presence, engage with your audience, and ultimately drive
                    sales and revenue.
                </p>
            </div>

            <div class="col-6 col-sm-6 col-md-5 col-lg-4 d-flex align-items-center" style="height: fit-content">
                <img
                    class="img-fluid float-start me-3"
                    @load="onImgLoad"
                    ref="imgRef"
                    :src="imgSrc + 'digital-marketing-2.png'"
                />
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
        <div class="partner-button d-flex align-items-center justify-content-center">
            <RouterLink to="/book" class="text-decoration-none button mx-auto px-5 py-2">Get Started</RouterLink>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "../assets/variables.scss";

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
      font-weight: 900;
        text-shadow: 12px 12px 30px black;        color: $primary;
    }

    p {
        color: $primary;
    }

    img {
        transform: scaleX(-1);
    }

    .container {
        border: 2px solid white;
        transition: all 0.3s ease;
        width: 90%;
        background-image: linear-gradient(to right, $secondary, lighten($secondary, 10%));
        background-color: $secondary;
        backdrop-filter: blur(5px);

        &:hover {
            box-shadow: 0px 0px 10px #c71dff
 !important;
            background-color: opacify($secondary, 0.7) !important;
            p, h1 {
                color: $primary;
            }
        }

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
        background-color:$secondary;
        color: $primary;
        width: 95%;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        backdrop-filter: blur(5px);
        border: 2px solid $primary;

    }

    .partner:hover {
        background-color: black !important;
        box-shadow: 0px 0px 10px #c71dff
 !important;
        border: 1px solid white;
        background-color: opacify($secondary, 0.75) !important;
    }
    .partner p {
        color: inherit;
        font-weight: 500;
    }

    .partner h4 {
        color: inherit;
      font-weight: 900;
        text-shadow: 12px 12px 30px black;    }

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
