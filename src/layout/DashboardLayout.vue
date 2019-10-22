<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
      autoClose
    >
      <template  slot="links">
        <sidebar-item
        v-if="admin==1"
          :link="{
            name: '组织架构',
            icon: 'ni ni-building text-primary',
            path: '/organization'
          }"
        />

        <!-- <sidebar-item :link="{name: '角色管理', icon: 'ni ni-single-02 text-yellow ', path: '/role'}"/> -->
        <sidebar-item :link="{name: '知识库', icon: 'ni ni-archive-2 text-orange', path: '/resource'}"/>
        <!-- <sidebar-item :link="{name: '分享模板', icon: 'ni ni-planet text-info', path: '/share'}"/> -->
        <!-- <sidebar-item :link="{name: 'Tables', icon: 'ni ni-bullet-list-67 text-red', path: '/tables'}"/>
        <sidebar-item :link="{name: 'Login', icon: 'ni ni-key-25 text-info', path: '/login'}"/>
        <sidebar-item :link="{name: 'Register', icon: 'ni ni-circle-08 text-pink', path: '/register'}"/> -->

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
        admin: ''
      };
    },
    created() {
      this.admin = JSON.parse(getStorage("ents")).superAdminFlag
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
</style>
