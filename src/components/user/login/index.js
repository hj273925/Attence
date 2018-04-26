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
          this.$Message.success('验证码发送成功！')
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
              this.$store.commit('setOrgInfo', res.org)
              sessionStorage.setItem('orgInfo', JSON.stringify(res.org))
              console.log(sessionStorage.getItem('orgInfo'))
              this.$store.commit('setUserInfo', res.user)
              this.checkIditify(res.userType)
            })
            .catch(() => {
              this.$Message.error('登录失败！')
            })
        }
      })
    },
    checkIditify(value) {
      if (value === 'SYS_ADMIN') {
        this.$router.push({name: 'Manage'})
      } else {
        this.$router.push({name: 'Console'})
      }
    },
    handleReset(name) {
      this.$refs[name].resetFields()
    }
  }
}

