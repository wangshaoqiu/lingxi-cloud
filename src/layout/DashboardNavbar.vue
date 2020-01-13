
<style scoped lang="scss">
.logOut{
  padding-left:20px;

}
.avatar{
  background: #fff;
  color:#53B4B3;
  cursor: pointer;
}
.nickname{
  font-size:14px;
font-weight:500;
color:rgba(255,255,255,1);
margin-left:12px;
}
.checkArea{
   padding:0 5px;
height:110px;
background:rgba(255,255,255,1);
box-shadow:0px 0px 8px 7px rgba(0,0,0,0.04);
border-radius:4px;
.checkItem{
  width:120px;
height:64px;
font-size:0;
 margin-top:21px;
border:1px solid #fff;
// margin-right:5px;
cursor: pointer;
&:nth-last-child(1){
  margin-right: 0;
}
img{
  width:66px;
  height: 34px;
  // margin-top:15px;
  margin-left:28px;
}
div{
  margin-top:10px;
  width:100%;
  text-align: center;

}
&:hover{
  border-radius:4px;
border:1px solid rgba(83,180,179,0.3);
}
}
}
.el-popover{
  top:52px;

}
@media(max-width: 1200px){
  .navbar-nav{
    opacity: 0 !important;
  }
}
</style>
<template>
    <base-nav class="navbar-top navbar-dark"
              id="navbar-main"
              :show-toggle-button="false"
              expand>
        <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <div class="form-group mb-0">
              <!-- <base-input placeholder="搜索文件"
                                    class="input-group-alternative"
                                    alternative=""
                                    v-model="keyword"
                                    @keyup.enter="search"
                                    addon-right-icon="">
                            </base-input> -->
            </div>
        </form>
        <ul class="navbar-nav align-items-center d-none d-md-flex" style="margin-right:56px;">
          <el-popover
          v-model="showPanel"
          popper-class="checkPopover"
          placement="bottom-end"
          :visible-arrow="visible"
          trigger="click"
        >
          <div class="checkArea flex">

            <div class="checkItem flex justify-center flex-column" @click="goto(0)">
              <img src="@/assets/images/BPM2.svg" alt="">
              <div class=" Font333">Cloud BPM</div>
            </div>

            <div class="checkItem flex justify-center flex-column" @click="goto(1)">
              <img src="@/assets/images/knowledge2.svg" alt="">
              <div class=" Font333">知识库</div>
            </div>
            <div v-if="hasPermission" class="checkItem flex justify-center flex-column" @click="goto(2)">
              <img src="@/assets/images/organization2.svg" alt="">
              <div class=" Font333">组织架构</div>
            </div>
          </div>
          <img slot="reference" class="left2" style="cursor:pointer" src="@/assets/images/category3.png" alt>
        </el-popover>
            <li class="nav-item dropdown">
                <base-dropdown class="nav-link pr-0">
                    <div class="media align-items-center" slot="title">
                <span class="avatar avatar-sm rounded-circle" v-if="avatarUrl==''">
                  {{avatar}}
                </span>
                <span class="avatar avatar-sm rounded-circle" v-if="avatarUrl!==''">
                  <img alt="avatar" :src="avatarUrl">
                </span>
                        <div class="nickname" style="cursor:pointer">
                            <!-- <span class="mb-0 text-sm  font-weight-bold">{{nickName}}</span> -->
                            {{nickName}}
                        </div>
                    </div>

                    <template>
                        <div class=" dropdown-header noti-title">
                            <h6 class="text-overflow m-0">Welcome!</h6>
                        </div>
                        <div class="dropdown-divider"></div>
                        <div @click="logOut" class="logOut">
                          <a href="">
                            <i class="ni ni-user-run"></i>
                            <span style="margin-left:5px;">退出登录</span>
                            </a>
                        </div>
                    </template>
                </base-dropdown>
            </li>
        </ul>
    </base-nav>
</template>
<script>
import { getStorage,removeToken,removeStorage } from "../utils/auth";
  export default {
    data() {
      return {
        activeNotifications: false,
        showMenu: false,
        searchQuery: '',
        nickName: '',
        keyword: '',
        avatar: '',
        avatarUrl: '',
        showPanel: false,
        hasPermission:false,
        visible:false,
        path: ''
      };
    },
    created() {
       this.path = this.$route.path
      const ents = JSON.parse(getStorage('ents'))
    if ((ents.superAdminFlag && ents.superAdminFlag === 1) || (ents.adminFlag && ents.adminFlag === 1)) {
      this.hasPermission = true
    }
      // console.log(JSON.parse(getStorage("userInfo")))
      this.nickName = JSON.parse(getStorage("ents")).memName
      const avatar = JSON.parse(getStorage("userInfo")).avatar
      if(avatar!==''){
        this.avatarUrl = avatar
      } else {
        const name1= this.nickName.split("").reverse()
        this.avatar = name1[1]+name1[0]
        
      }

    },
    methods: {
      goto(index) {
      this.showPanel = false
      if (index === 0) {
        
        window.open('http://samon-industrial-cloud.xiniu.pro/#/projects', '_blank')
      } else if (index === 1) {
        if(this.path=='/organization'||this.path=='/admin'){
          window.open('http://xiniu.wiki/#/latest', '_blank')
        } else {
          this.$router.push('/latest')
        }
        
      } else if (index === 2) {
        
        if(this.path=='/organization'||this.path=='/admin'){
          this.$router.push('/organization')
        } else {
          console.log('mark')
          window.open('http://xiniu.wiki/#/organization', '_blank')
        }
      }
    },
       search() {
      if(this.keyword==''){
        this.$notify({
          title: '失败',
          message: '请输入搜索内容',
          type: 'warning'
        });
        return
      }
      this.$router.push({
        path: "/department",
        query: {
              keyword: this.keyword,
              name:name
            }
      })
    },
      toggleSidebar() {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
      },
      hideSidebar() {
        this.$sidebar.displaySidebar(false);
      },
      toggleMenu() {
        this.showMenu = !this.showMenu;
      },
      logOut(){
        removeToken()
        removeStorage('ents')
        removeStorage('userInfo')
      }
    }
  };
</script>
