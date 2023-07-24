<template>
  <div class="calendly-view bg-white">
    <h1 class="theloading">LOADING...</h1>
    <div id="calendly-widget"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    const options = {
      url: "https://calendly.com/whqat",
      prefill: {},
      utm: {},
      closeColor: "#ff0000",
      textColor: "#fff",
      bgColor: "#0800177c",
      hideEventTypeDetails: true,
      hideLandingPageDetails: true,
      primaryColor: "#00a2ff",
      textFont: "Roboto",
    };
    Calendly.initInlineWidget(options);

    Calendly.on('widget:loaded', function() {
      document.querySelector('.calendly-view h1').style.display = 'none';
    });
  },
};
</script>

<style>
.calendly-view {
  height: 100vh;
}

.theloading {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  font-weight: bold;
  color: #000;
}

iframe {
  position: absolute;
  top: 0;
}
</style>