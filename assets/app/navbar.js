Vue.createApp({
  data() {
    return {
      resources: [],
      selectedResource: window.localStorage.getItem("resource")
    }
  },
  watch: {
    selectedResource() {
      console.log("resource:" + this.selectedResource);
      window.localStorage.setItem("resource", this.selectedResource)
    }
  },

  mounted() {
    // this.loadResources();
  },

  methods: {
    loadResources() {
      let $this = this;
      axios.get('/resources')
      .then(function (response) {
        console.log(response.data);
        $this.resources = response.data;

        if ($this.selectedResource == null) {
          $this.selectedResource = $this.resources[0].name;
        }

      });
    }
  }

})
.mount('#navbar');