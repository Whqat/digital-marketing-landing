<template>
    <div class="book-view">
      <div
        id="book-container"
        class="d-flex flex-column justify-content-center align-items-center p-3 text-center text-white"
        style="
          height: 100%;
          line-height: 150%;
          letter-spacing: 1px;
          font-family: 'Roboto';
        "
      >
        <RouterLink
          to="/"
          class="fs-1 mt-1 mb-4 link-danger link"
          style="font-family: 'Iceberg'"
        >
          Return to Home
        </RouterLink>
        <h1 class="my-2 mb-4">
          Book a strategy session with us on Calendly
        </h1>
  
        
  
        <p class="my-3">
          Imagine having a customized growth plan for your business. Our team of
          savvy marketers can help take your online presence to the next level.
        </p>
  
        <a
          href="/calendly"
          class="text-decoration-none btn btn-outline-light my-4 mb-5"
          target="_blank"
        >
          Schedule a Call
      </a>
      <i>Please only book a call if you're planning to attend it</i>
      </div>
    </div>
  </template>
  
  <script setup>

  import { onMounted } from "vue";
  import {useRouter} from 'vue-router'

  const router = useRouter();
  
  function showBackdrop() {
      document.getElementById("book-container").style.backdropFilter =
        "brightness(30%) blur(10px)";
  }

  function newTab() { router.push({ name: 'calendly', target: '_blank' }) }
  
  onMounted(() => {
    showBackdrop();
  });
  </script>
  
  <style>
  .book-view {
    height: 100vh;
    background-image: url("https://img.freepik.com/free-vector/glitch-abstract-lightning-logo_23-2148934545.jpg?size=626&ext=jpg&ga=GA1.2.2102069341.1680793427&semt=ais");
    background-size: contain;
    background-position: center;
  }
  
  .fade-enter-from {
    transform: scale(0.9);
    opacity: 0;
  }
  
  .fade-enter-active {
    transition: all 0.5s ease;
  }
  
  .fade-leave-active {
    transition: all 0.5s ease;
  }
  
  .fade-leave-to {
    opacity: 0;
    transform: scale(0.9);
  }
  
  @media screen and (max-width: 768px) {
    #book-container {
      padding: 0.5rem;
      font-size: 0.9rem;
    }
  }
  </style>