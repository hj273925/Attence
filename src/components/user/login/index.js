/**
 * Created by hj on 2018/5/09.
 */
import LoginService from '@/services/login.service'

export default {
  data() {
    return {
      formCustom: {
        phone: '',
        pwd: ''
      },
      ruleCustom: {
        phone: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      const params = {pwd: this.formCustom.pwd, phone: this.formCustom.phone}
      this.$refs[name].validate((valid) => {
        if (valid) {
          LoginService.Login(params)
            .then((res) => {
              this.$store.commit('setOrgInfo', res.org)
              sessionStorage.setItem('orgInfo', JSON.stringify(res.org))
              this.$store.commit('setUserInfo', res.user)
              this.$router.push({name: 'Console'})
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

