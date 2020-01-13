
<style scoped>
    .allFiles {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        position: absolute;
        z-index: 999;
        top: 173px;
        left: 40px;
    }
    .content {
        width: 100%;
        /* background:rgba(245,245,245,1); */
        min-height: 300px;
        position: absolute;
        top: 170px;
        /* left:5%; */
        padding: 0 40px;
    }
    .main {
        width: 100%;
        z-index: 999;
        background: #fff;
        min-height: 500px;
        box-shadow: 0px 0px 11px 6px rgba(0, 0, 0, 0.03);
        border-radius: 4px;
        padding-top: 25px;
    }
    @media (min-width: 768px) {
        .pt-md-8,
        .py-md-8 {
            padding-top: 7rem !important;
        }
    }
    .button2 {
        color: #fff;
    }
    .button2:hover {
        color: #53B4B3
    }
    .count {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
    }
    .departItem {
        /* width: 360px; */
        height: 125px;
        background: rgba(247, 249, 252, 1);
        box-shadow: 0px 0px 8px 7px rgba(0, 0, 0, 0.04);
        border-radius: 4px;
        position: relative;
        /* margin-right: 30px; */
        margin-bottom: 30px;
    }
    .departItem-left {
        width: 140px;
        height: 125px;
    }
    .departItem-left img {
        width: 140px;
        height: 125px;
    }
    .departName {
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFangSC;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        margin-top: 38px;
        margin-left: 20px;
    }
    .departFiles {
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        margin-top: 10px;
        margin-left: 20px;
    }
    .departSelect {
        position: absolute;
        top: 10px;
        right: -13px;
    }
    .el-dialog__header {
        border: none !important;
    }
    .dialog_head_box2 {
        width: 100%;
        height: 9.4vh;
        border-bottom: 1px solid #eee;
        min-height: 60px;
        padding: 0 30px;
    }
    .dialog_head {
        color: rgba(51, 51, 51, 1);
        height: 9.4vh;
        /* line-height: 9.4vh; */
        font-size: 16px;
        position: relative;
        min-height: 60px;
        display: flex;
        align-items: center;
    }
    .uploadFile_box {
        padding: 30px;
    }
    .uploadFile {
        width: 100%;
        height: 220px;
        border-radius: 4px;
        /* border: 2px solid rgba(235, 238, 245, 1); */
    }
    .uploadFile_icon {
        width: 100%;
        text-align: center;
        margin-top: 60px;
    }
    .upload_txt {
        font-size: 16px;
        text-align: center;
    }
    .canSee {
        padding: 0 30px;
        margin-top: 10px;
    }
    .haha {
        width: 100px;
        height: 20px;
        margin-left: 30px;
        margin-top: -29px;
        line-height: 20px;
        font-weight: 400;
    }
    .drawer_footer_box {
        width: 100%;
        height: 9.2vh;
        position: absolute;
        bottom: 0;
        min-height: 60px;
        border-top: 1px solid rgba(238, 238, 238, 1);
        background: #fff;
    }
    .drawer_footer {
        position: relative;
        width: 100%;
        height: 100%;
    }
    @media (min-width: 768px) {
        .pt-md-8,
        .py-md-8 {
            padding-top: 100px !important;
        }
    }
    .el-radio-wrap {
        margin-left: 44px;
    }
    .noFile {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .noFile img {
        width: 300px;
        height: 195px;
        position: absolute;
        left: 50%;
        margin-left: -150px;
        top: 150px;
    }
    .noFile_text {
        width: 100%;
        font-size: 21px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        text-align: center;
        position: absolute;
        top: 350px;
    }
    .media-body:hover {
        cursor: pointer;
    }
    .searchArea {
        position: absolute;
        z-index: 999;
        top: 14px;
        right: 252px;
    }
    .toolbtn {
        cursor: pointer;
        opacity: 0.8;
    }
    .toolbtn:hover {
        opacity: 1;
    }
    .hover1 {
        cursor: pointer;
    }
    .tagsArea {
        width: 100%;
        height: 100%;
        /* background:rgba(255,255,255,1);
    box-shadow:0px 0px 8px 7px rgba(0,0,0,0.04);
    border-radius:4px;
    padding:25px 25px 30px 25px; */
    }
    .tagTitle {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(83, 180, 179, 1);
    }
    .tagChecks {
        width: 335px;
        height: 240px;
        border-radius: 4px;
        border: 1px solid rgba(235, 238, 245, 1);
        margin-top: 15px;
        margin-bottom: 20px;
    }
    .tagBtns {
        margin-top: 20px;
    }
    .selectTag_area {
        margin-top: 50px;
        padding: 0 30px;
        width: 100%;
    }
    .selectTag_tit {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
    }
    .selectTag_tag {
        width: 100%;
        flex-wrap: wrap;
        /* margin-top:10px; */
        padding: 10px;
    }
    .selectTag {
        height: 30px;
        background: rgba(246, 249, 252, 1);
        border-radius: 4px;
        font-size: 14px;
        color: rgba(102, 102, 102, 1);
        padding: 0 25px;
        text-align: center;
        line-height: 30px;
        margin-right: 15px;
        margin-bottom: 15px;
        display: inline-block;
    }
    .selectTag2 {
        height: 30px;
        background: rgba(83, 180, 179, 1);
        border-radius: 4px;
        font-size: 14px;
        color: rgba(255, 255, 255, 1);
        padding: 0 25px;
        text-align: center;
        line-height: 30px;
        margin-bottom: 15px;
        margin-right: 15px;
        display: inline-block;
    }
    .editTag {
        width: 100%;
        height: 200px;
        padding: 0 30px;
        margin-top: 5px;
    }
    .editTag_wrap {
        width: 100%;
        height: 200px;
        border: 1px solid #eee;
        overflow: auto;
        padding: 15px;
    }
    .tagBox {
        width: 100%;
    }
    .tag_title img {
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
    .tag_title div {
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
        margin-left: 15px;
    }
    .tags {
        width: 100%;
        flex-wrap: wrap;
        margin-top: 10px;
    }
    .tagSelected {
        color: #53B4B3 !important;
    }
    .noTagSelected {
        color: #bbb;
    }
    .avatar:hover {
        color: #fff;
    }
    .avatar {
        background: #53B4B3;
    }
    .leader_form {
        position: fixed;
        width: 300px;
        max-height: 400px;
        z-index: 199999;
        left: 50%;
        margin-left: 170px;
        background: #fff;
        top: 190px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        padding: 25px 25px 30px 25px;
    }
    .tree_wrap{
        width:240px;
        margin-left:120px;
        height:200px;
border-radius:4px;
border:1px solid rgba(235,238,245,1);
margin-top:-2.5px;
padding:0px 0px;
    overflow: hidden;
/* overflow: auto; */
    }
    
</style>

<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <base-button type="secondary" style="color:#53B4B3" @click="addAdmin">添加管理员</base-button>
            <base-button v-if="showDelBtn" outline type="secondary" class="button2" @click="muchDel">删除</base-button>
        </base-header>
        <img src="../assets/images/chicken.png" class="icon-warning" alt="">
        <div class="searchArea">
            <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                <div class="form-group mb-0">
                    <base-input placeholder="搜索文件" class="input-group-alternative" alternative="" v-model="keyword" @keyup.enter.native="search" addon-right-icon="">
                    </base-input>
                    <!-- 这个input阻止回车事件刷新页面 也就是去掉了默认的submit -->
          <input type="text" style="opacity:0;width:0;height:0">
                </div>
            </form>
        </div>
        <div class="content">
            <div class="main">
                <div class="flex justify-between" style="margin-left:25px;">
                    <!-- <div class="count">分类 - {{classifyName}}</div> -->
                    <div class="count">共{{total}}个管理员</div>
                </div>
                <div v-if="total==0" class="noFile">
                    <img src="../assets/images/noFile.png" alt="">
                    <div class="noFile_text">暂无管理员，赶快去添加吧~</div>
                </div>
                <div v-if="total>0" class="table-responsive mt25">
                    <base-table class="table align-items-center table-flush" :class="type === 'dark' ? 'table-dark': ''" :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'" tbody-classes="list" :data="adminList">
                        <template slot="columns">
                                <th  style="padding:0 0 0 25px;width:65px;">
                                     <el-checkbox v-model="checkboxes"></el-checkbox>
                                </th>
                                
                              <th>&nbsp;&nbsp;头像</th>
                              <th>姓名</th>
                              <th>手机</th>
                              <th>添加时间</th>
                              <th>操作</th>
</template>

<template slot-scope="{row}">
    <th scope="row"  style="padding:0 0 0 25px;">
        <el-checkbox v-model="row.checked"></el-checkbox>
    </th>
    <td>
        <a href="#!" class="avatar rounded-circle">
           {{row.nickname}}
           </a>
    </td>
    <td>
        {{row.name}}
    </td>
    <td>
        {{row.phone}}
    </td>
    <td>
        {{row.createTimeStr}}
    </td>
    <td>
        <div class="flex">
            <div class="toolbtn flex justify-center align-center" @click="showDelDialog(row.id)">
                <img class="hover1" src="../assets/images/delete2.png" style="width:14px;height:14px;" alt="">
                <div class="font14 ml10" style="color:#999">删除</div>
            </div>
        </div>
    </td>
</template>

      </base-table>
    </div>

    <div v-if="total>0" class="card-footer d-flex justify-content-end"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <!-- <base-pagination :total="total"  ></base-pagination> -->
      <el-pagination
        :current-page.sync="getListParam.pageNo"
        :page-sizes="[10,20,30,50]"
        :page-size="getListParam.pageSize"
        :total="total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>



  </div>
  </div>




  

<!-- ==start==添加管理员form -->
    <div class="admin_page">
    <el-dialog title="添加管理员 " :show-close="show_close" :visible.sync="dialogFormVisible2" width="420px">
  <el-form :model="addMemberform">
    <el-form-item  label="姓名：" label-width="120px" style="margin-bottom:0px;">
      <!-- <el-input v-model="adminName2" maxlength=0 autocomplete="off" style="width:80%;"></el-input> -->
            <el-input
        placeholder="输入关键字进行检索"
        autocomplete="off" style="width:80%;"
        v-model="filterText">
        </el-input>
    </el-form-item>


    


    <div class="tree_wrap">
        <el-tree
            class="filter-tree mt10"
            :data="allMember"
            :props="defaultProps"
            :indent="indent"
            default-expand-all
            highlight-current
            :filter-node-method="filterNode"
            @node-click="nodeClick2"
            style="overflow-y: auto;max-height: 200px;"
            ref="tree">
        </el-tree>
    </div>






  </el-form>
  <div slot="footer" class="dialog-footer flex justify-center">

    <el-button   @click="cancelDialog"  style="background: rgba(238,238,238,1);color:#666;font-weight:500;">取消</el-button>
     <el-button  type="primary" @click="sureAddMember"  style="margin-left:55px;font-weight:500;">确认</el-button>
  </div>
</el-dialog>
</div>
<!-- ==end==添加管理员form -->


<!-- ==start==添加管理员form-选择人员 -->
<div v-if="leaderDialog" class="leader_form">
  <div class="addLeader_txt color333">选择人员</div>
  <el-input
  placeholder="输入关键字进行过滤"
  class="mt20"
  style="margin-bottom:10px;"
  v-model="filterText">
</el-input>

<el-tree
  class="filter-tree mt10"
  :data="allMember"
  :props="defaultProps"
  accordion
  :filter-node-method="filterNode"
  @node-click="nodeClick"
  style="overflow-y: auto;max-height: 200px;"
  ref="tree">
</el-tree>

<div class="btn-footer mt30 flex justify-center">
<el-button  @click="cancelLeader"  style="background: rgba(238,238,238,1);color:#666;font-weight:500;">取消</el-button>
     <el-button  type="primary" @click="sureLeader"  style="margin-left:5px;font-weight:500;">确认</el-button>
     </div>
</div>
<!-- ==end==添加管理员form选择人员 -->




<!-- ==start==删除文件夹dialog -->
<div class="noFGX">
<el-dialog
  title="提示"
  :visible.sync="centerDialogVisible"
  width="30%"
  :show-close="show_close"
  center class="text-center">
  <div class="text-center"><span>确认删除该管理员吗？</span></div>
  
  <span slot="footer" class="dialog-footer">

 <el-button @click="cancelDelMember" style="background: rgba(238,238,238,1);color:#666;font-weight:500;">取消</el-button>
     <el-button  type="primary"  @click="sureDelMember" style="margin-left:55px;font-weight:500;">确定</el-button>

  </span>
</el-dialog>
</div>
<!-- ==end==删除文件夹dialog -->




  </div>
</template>

<script>
    import {
        getAdminList,
        addAdmin,
        delAdmin
    } from "../api/admin";
    import {
        memberStructures
    } from "../api/organization";
    export default {
        data() {
            return {
                filterText: '',
                getListParam: {
                    pageNo: 1,
                    pageSize: 10
                },
                centerDialogVisible: false,
                total: 0,
                type: '',
                checkboxes: false,
                keyword: '',
                adminList: [],
                show_close: false,
                dialogFormVisible2: false,
                addMemberform: {},
                leaderDialog: false,
                adminName: '',
                adminName2: '',
                adminId: '',
                adminId2: {},
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                allMember: [],
                selectedId: '',
                showDelBtn: false,
                delArr: [],
                indent: 18
            };
        },
        watch: {
            checkboxes: 'checkboxChange',
            filterText(val) {
                this.$refs.tree.filter(val);
            },
            adminList: {
                handler: function() { //特别注意，不能用箭头函数，箭头函数，this指向全局
                    for (let i = 0; i < this.adminList.length; i++) {
                        if (this.adminList[i].checked) {
                            this.showDelBtn = true
                            return
                        }
                    }
                    this.showDelBtn = false
                },
                deep: true //深度监听
            },
        },
        created() {
            this.getList()
            this.getAllMember()
        },
        methods: {
            addAdmin() {
                this.dialogFormVisible2 = true
                this.adminId2 = {}
                this.filterText = ''

            },
            // 监听全选box的改变
            checkboxChange() {
                if (this.checkboxes) {
                    for (let i = 0; i < this.adminList.length; i++) {
                        this.adminList[i].checked = true
                    }
                } else {
                    for (let i = 0; i < this.adminList.length; i++) {
                        this.adminList[i].checked = false
                    }
                }
            },
            // 分页
            handleSizeChange(val) {
                this.getListParam.pageSize = val
                this.getList()
            },
            // 分页
            handleCurrentChange(val) {
                this.getListParam.pageNo = val
                this.getList()
            },
            sureDelMember() {
                // const selectedId = [this.selectedId]
                const param = {
                    ids: this.delArr
                }
                delAdmin(param).then(() => {
                    this.$notify({
                        title: '成功',
                        message: '删除成功',
                        type: 'success'
                    });
                    this.getList()
                })
                this.centerDialogVisible = false
                this.checkboxes = false
            },
            cancelDelMember() {
                this.centerDialogVisible = false
            },
            getAllMember() {
                memberStructures().then(res => {
                    this.allMember = res
                })
            },
            cancelDialog() {
                this.dialogFormVisible2 = false
                this.adminId2 = {}
                // this.adminName2 = ''
                this.leaderDialog = false
            },
            sureAddMember() {
               
                addAdmin(this.adminId2).then(() => {
                    this.$notify({
                        title: '成功',
                        message: '添加成功',
                        type: 'success'
                    });
                    
                    this.getList()
                     this.dialogFormVisible2 = false
                })
                 
            },
            sureLeader() {
                this.leaderDialog = false
                this.adminId2 = {
                    memberId: this.adminId
                }
                // this.adminName2 = this.adminName
            },
            cancelLeader() {
                this.leaderDialog = false
            },
            // 树形控件选中事件
            nodeClick(e) {
                this.adminId = e.id
                this.adminName = e.label
            },
            // 树形控件选中事件
            nodeClick2(e) {
                // console.log(e)
                if(e.type==2){
                    this.adminId2 = {
                    memberId: e.id
                }
                // this.adminName2 = e.label
                this.filterText = e.label
                }
                
                // this.adminId = e.id
                // this.adminName = e.label
            },
            // 树形控件过滤
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            // 打开树形控件
            selectLeader() {
                this.leaderDialog = true
            },
            getList() {
                getAdminList(this.getListParam).then(res => {
                    this.total = res.total
                    for (let i = 0; i < res.list.length; i++) {
                        res.list[i].checked = false
                        const name1 = res.list[i].name.split("").reverse()
                        res.list[i].nickname = name1[1] + name1[0]
                    }
                    this.adminList = res.list
                })
            },
            search() {
                if (this.keyword == '') {
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
                        keyword: this.keyword
                    }
                })
            },
            muchDel() {
                this.delArr = []
                for (let i = 0; i < this.adminList.length; i++) {
                    if (this.adminList[i].checked) {
                        this.delArr.push(this.adminList[i].id)
                    }
                }
                this.centerDialogVisible = true
            },
            showDelDialog(id) {
                this.delArr = [id]
                this.centerDialogVisible = true
            }
        }
    };
</script>

