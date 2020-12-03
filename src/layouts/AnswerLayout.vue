<template xmlns="http://www.w3.org/1999/html">
  <div id="userLayout" :class="['user-layout-wrapper', isMobile && 'mobile']">
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="mail" @click="toIndex"> <a-icon type="mail" />速查 </a-menu-item>
      <a-menu-item key="app" @click="toList"> <a-icon type="appstore" />题库 </a-menu-item>

    </a-menu>
    <div class="container">
      <div class="top">
        <div class="header">
          <a href="/">
            <img src="~@/assets/logo.svg" class="logo" alt="logo">
            <span class="title">熊猫大胜</span>
          </a>
        </div>
        <div class="desc">
          梦幻西游H5科举答案快查,微信关注"熊猫说产品"，有不在题库的题多劳驾各位的反馈，
          希望各位每次科举都能当状元
        </div>

      </div>
      <div class="main">

      </div>
      <router-view />

      <div class="footer">
        <div class="copyright">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { deviceMixin } from '@/store/device-mixin'

export default {
  name: 'AnswerLayout',
  mixins: [deviceMixin],
  data() {
    return {
      current: ['mail'],
    };
  },
  mounted () {
    document.body.classList.add('userLayout')
  },
  beforeDestroy () {
    document.body.classList.remove('userLayout')
  },
  methods:{
    toIndex(){
      console.log("toIndex")
      this.$router.push({path: '/'});
    },
    toList(){
      this.$router.push({path: '/answer/list'});
    }
  }
}
</script>

<style lang="less" scoped>
#userLayout.user-layout-wrapper {
    height: 100%;

    &.mobile {
      .container {
        .main {
          max-width: 368px;
          width: 98%;
        }
      }
    }

    .container {
      width: 100%;
      min-height: 100%;
      background: #f0f2f5 url(~@/assets/background.svg) no-repeat 50%;
      background-size: 100%;
      padding: 110px 0 144px;
      position: relative;

      a {
        text-decoration: none;
      }

      .top {
        text-align: center;

        .header {
          height: 44px;
          line-height: 44px;

          .badge {
            position: absolute;
            display: inline-block;
            line-height: 1;
            vertical-align: middle;
            margin-left: -12px;
            margin-top: -10px;
            opacity: 0.8;
          }

          .logo {
            height: 44px;
            vertical-align: top;
            margin-right: 16px;
            border-style: none;
          }

          .title {
            font-size: 33px;
            color: rgba(0, 0, 0, .85);
            font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
            font-weight: 600;
            position: relative;
            top: 2px;
          }
        }
        .desc {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.45);
          margin-top: 12px;
          margin-bottom: 40px;
        }
      }

      .mycenter{
        text-align: center;
        .main2 {
          min-width: 260px;
          width: 368px;
          margin: 0 auto;
        }
      }

      .main {
        min-width: 260px;
        width: 368px;
        margin: 0 auto;
      }

      .footer {
        position: absolute;
        width: 100%;
        bottom: 0;
        padding: 0 16px;
        margin: 48px 0 24px;
        text-align: center;

        .links {
          margin-bottom: 8px;
          font-size: 14px;
          a {
            color: rgba(0, 0, 0, 0.45);
            transition: all 0.3s;
            &:not(:last-child) {
              margin-right: 40px;
            }
          }
        }
        .copyright {
          color: rgba(0, 0, 0, 0.45);
          font-size: 14px;
        }
      }
    }
  }
</style>
