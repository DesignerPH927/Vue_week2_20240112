



const app = Vue.createApp({
  data () {
    return {
      login: {
        username: '',
        password: ''
      },
      apiUrl: 'https://vue3-course-api.hexschool.io/v2'
    }
  },
  methods: {
    loginAdmin () {
      if (this.login.username === '' || this.login.password === '') {
        alert('不可以空白')
        return
      }
      axios.post(`${this.apiUrl}/admin/signin`, this.login)
        .then((res) => {
          alert("已登入", res)          
          const { token, expired } = res.data
          document.cookie = `zack0111=${token}; expires=${new Date(expired)};`;
          window.location = 'products.html'
        })
        .catch((err) => {          
          alert("未登入", err.response);
        })
    },
    reset () {
      this.login.username = ''
      this.login.password = ''
    },
    message () {
      alert('祝：老師、助教 ☆萬事興龍，龍福齊天☆')
    }
  },
  mounted () {
    const eyeIcon = document.querySelector('.eyeIcon')
    const pwd = document.querySelector('.pwd')
    eyeIcon.addEventListener('click', () => {
      eyeIcon.classList.toggle('bi-eye')
      if (eyeIcon.classList.toggle('bi-eye-slash')) {
        pwd.type = 'password'
      }else {
        pwd.type = 'text'
      }
    })
  }
})

app.mount('#app')