


const app = Vue.createApp({
  data () {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io/v2',
      apiPath: 'vuejs2024',
      remoteData : [],
      temp: {}
    }
  },
  methods: {
    checkAdmin () {
      const token = document.cookie.replace(
  /(?:(?:^|.*;\s*)zack0111\s*\=\s*([^;]*).*$)|^.*$/,
  "$1",);
      axios.defaults.headers.common['Authorization'] = token;

      axios.post(`${this.apiUrl}/api/user/check`)
        .then((res) => {
          alert("已驗證", res);
          this.getProducts()
        })
        .catch((err) => {
          alert("未驗證", err.response);
        })
    },
    getProducts () {
      axios(`${this.apiUrl}/api/${this.apiPath}/admin/products`)
        .then((res) => {          
          this.remoteData = res.data.products
        })
        .catch((err) => {
          alert("未取得", err.response);
        })
    },
    detailItem (item) {      
      this.temp = item
    },
    delDetailItem () {
      this.temp = {}
    },
    logout () {
      axios.post(`${this.apiUrl}/logout`)
        .then((res) => {
          alert("已登出", res);
          window.location = 'index.html'
        })
        .catch((err) => {
          alert("未登出", err.response);
        })
    }
  },
  mounted() {
    this.checkAdmin()
  },
})

app.mount('#app')