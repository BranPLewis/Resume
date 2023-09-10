Vue.createApp({
    data() {
      return {
        infoHover: false,
        fusionBackdrop: false,
        fusionShowHydro: false,
        fusionShowSwitch: false,
      };
    },
    methods: {
    showFusionHydro: function(){
      this.fusionShowHydro = true;
      this.fusionBackdrop = true;
    },

    showFusionSwitch: function(){
      this.fusionShowSwitch = true;
      this.fusionBackdrop = true;
    },

    fusionImage: function(){
      this.fusionBackdrop = false;
      this.fusionShowHydro = false;
      this.fusionShowSwitch = false;
    }
    },
    computed: {
    },
  }).mount("#app");
  