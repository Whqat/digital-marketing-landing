<template>
    <footer
        class="footer bg-black"
        style="box-shadow: 0 0 5px rgba(0, 0, 0, 0.497)"
    >
        <div class="container pt-2 pb-1">
            <div class="row d-flex p-3 justify-content-between">
                <div class="col-sm-6 text-center mb-3">
                    <h4 class="mb-1">Contact Me</h4>
                    <a
                        href="https://github.com/Whqat"
                        target="_blank"
                        rel="noopener"
                        class="me-3"
                        ><i class="bi bi-github"></i
                    ></a>
                    <a
                        href="https://instagram.com/_whqat?igshid=MzNlNGNkZWQ4Mg=="
                        target="_blank"
                        rel="noopener"
                        class="me-3"
                        ><i class="bi bi-instagram"></i
                    ></a>
                    <a
                        href="https://discordapp.com/users/453684620056330252"
                        target="_blank"
                        rel="noopener"
                        ><i class="bi bi-discord"></i
                    ></a>
                </div>
                <div class="col-sm-6 text-center mb-3">
                    <h4 class="mb-1">Follow Us</h4>
                    <a
                        href="https://twitter.com/Whqat2"
                        target="_blank"
                        rel="noopener"
                        class="me-3"
                        ><i class="bi bi-twitter"></i
                    ></a>
                    <a
                        href="https://instagram.com/_whqat?igshid=MzNlNGNkZWQ4Mg=="
                        target="_blank"
                        rel="noopener"
                        class="me-3"
                        ><i class="bi bi-instagram"></i
                    ></a>
                    <a
                        href="https://discordapp.com/users/453684620056330252"
                        target="_blank"
                        rel="noopener"
                        ><i class="bi bi-discord"></i
                    ></a>
                </div>
            </div>
            <div class="row mb-0">
                <div class="col-12 text-center">
                    <h6>Copyright 2023 &copy; All rights reserved</h6>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
    @import "../assets/variables.scss";

    h4 {
      font-weight: 900;
        text-shadow: 12px 12px 30px black;    }
    .footer {
        color: #f1f1ff;
    }

    .footer a {
        position: relative;
        left: 2px;
        color: #f1f1ff;
        transition: color 0.2s ease;
    }

    .footer a:hover {
        color: $hover;
    }

    .d-flex a {
        color: #f1f1ff;
        font-size: 1rem;
        margin-right: 0.5rem;
    }

    .fa-twitter,
    .fa-instagram,
    .fa-discord {
        color: #f1f1ff;
        font-size: 1.5rem;
        margin-right: 0.5rem;
        vertical-align: middle;
    }
</style>
