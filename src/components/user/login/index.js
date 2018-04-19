/**
 * Created by hj on 2018/3/30.
 */
import LoginService from '@/services/login.service'

export default {
  data() {
    return {
      identifyImage: '',
      formCustom: {
        phone: '',
        code: '',
        pwd: ''
      },
      ruleCustom: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.identifyImage = process.env.BASE_URL + '/auth/captcha.jpg'
    // let oriSetItem = localStorage.setItem
    // localStorage.setItem = function (key, value) {
    //   var event = new Event('setItemEvent')
    //   event.newValue = value
    //   console.log(arguments)
    //   window.dispatchEvent(event)
    //   oriSetItem.apply(this, arguments)
    // }
  },
  methods: {
    // 切换验证码
    changeIdentify() {
      this.identifyImage = process.env.BASE_URL + '/auth/captcha.jpg?' + Math.random()
    },
    // 发送验证码
    sendSmsPwd() {
      const params = {phone: this.formCustom.phone, code: this.formCustom.code}
      LoginService.sendSmsPwd(params)
        .then((res) => {
          console.log(res)
        })
        .catch(() => {
          this.$Message.error('验证码错误！')
        })
    },
    handleSubmit(name) {
      const params = {pwd: this.formCustom.pwd, phone: this.formCustom.phone}
      this.$refs[name].validate((valid) => {
        if (valid) {
          LoginService.Login(params)
            .then((res) => {
              console.log(res.data)
              this.$router.push({name: 'Manage'})
            })
            .catch(() => {
              this.$Message.error('登录失败！')
            })
        }
      })
    },
    handleReset(name) {
      this.$refs[name].resetFields()
    }
  }
}

