<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
      autoClose
    >


      <template  slot="links">

        <sidebar-item v-if="path!=='/admin'&&path!=='/organization'" :link="{name: '最新文件', icon: 'iconfont icon-shijian-copy', path: '/latest'}"/>
        <sidebar-item v-if="path!=='/admin'&&path!=='/organization'" :link="{name: '分类', icon: 'iconfont icon-leimupinleifenleileibie-copy', path: '/classify'}"/>
       
        <sidebar-item v-if="path!=='/admin'&&path!=='/organization'" :link="{name: '部门文件', icon: 'iconfont icon-wenjian-copy', path: '/resource'}"/>
        
        <div class="FGX" v-if="path!=='/admin'&&path!=='/organization'"></div>


        <sidebar-item
        v-if="((admin==1||admin2==1)&&(path=='/admin'||path=='/organization')) "
          :link="{
            name: '组织架构',
            icon: 'iconfont icon-jiagouguanli_icox-copy',
            path: '/organization'
          }"
        />

        <sidebar-item v-if="((admin==1||admin2==1) && (path!=='/admin'&&path!=='/organization'))" :link="{name: '标签管理', icon: 'iconfont icon-biaoqian1-copy', path: '/tags'}"/>
        <sidebar-item v-if="admin==1&&(path=='/admin'||path=='/organization')" :link="{name: '管理员设置', icon: 'iconfont icon-gerenzhongxin-copy', path: '/admin'}"/>
      </template>


     


    </side-bar>

      

    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';
  import { getStorage } from "../utils/auth";
  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'vue', //vue|blue|orange|green|red|primary
        admin: '',
        admin2: '',
        path: ''
      };
    },
    watch:{
      '$route.path':function(path) {
        this.path = path
      }
    },
    created() {
      this.path = this.$route.path
      this.admin = JSON.parse(getStorage("ents")).superAdminFlag
      this.admin2 = JSON.parse(getStorage("ents")).adminFlag
      
    },
    methods: {
      
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style lang="scss">
.FGX{
  width:100%;
height:1px;
background:rgba(235,238,245,1);
-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		-webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    margin-top:35px;
    margin-bottom: 35px;
}
</style>
