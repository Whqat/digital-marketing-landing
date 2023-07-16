<template>
    <div class="container-fluid d-flex flex-column py-5 mt-1">
        <h1
            id="contact"
            class="mt-5 text-center py-5"
            style="color: #e0e0fd; font-weight: 900;"
        >
        Contact Us
        </h1>
        <div class="contact mt-1 mb-5 border border-1 border-black shadow-lg">
            <p>
                For inquiries and more information about our pricing and services, you can
                reach us through the following:
            </p>
            <ul>
                <li><strong>📞  Phone:</strong> [[ phone ]]</li>
                <li><strong>✉️  Email:</strong> [[ email ]]</li>
                <li><strong>📍  Address:</strong> [[ address ]]</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";

    const phone = ref("+1-555-555-5555");
    const email = ref("info@boostdigitalmarketing.com");
    const address = ref("1234 Main St, Anytown USA");
</script>

<style scoped>

    .container-fluid {
        background-color: rgb(1, 0, 21);
    }

    .contact {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: #f9f9f9;
    }

    h2 {
        margin-top: 0;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin-bottom: 10px;
    }
</style>
