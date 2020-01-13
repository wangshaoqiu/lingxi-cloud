
<style style="scss" scoped>
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
    top: 110px;
    /* left:5%; */
    padding: 0 40px;
  }
  .main {
    width: 100%;
    z-index: 999;
    background: #fff;
    min-height: 700px;
    box-shadow: 0px 0px 11px 6px rgba(0, 0, 0, 0.03);
    border-radius: 4px;
    /* padding: 30px 30px 0 25px; */
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
  .mainLeft{
    width:200px;
min-height: 500px;
background:rgba(246,249,252,1);
border-radius:6px 0px 0px 0px;
padding-top:30px;
/* min-width: 167px; */
  }
  .mainRight{
    width:100%;
    min-height: 500px;
  }
  .select{
    width:100%;
height:45px;
/* background:rgba(255,255,255,1); */
background:rgba(227,241,241,1);
border-radius:4px;
font-size:14px;
font-family:PingFangSC-Regular,PingFangSC;
font-weight:400;
color:rgba(51,51,51,1);
padding:0 20px;
line-height: 45px;
  }
  .select,.noSelect,.addDepart{
    cursor:pointer
  }
  .noSelect{
width:100%;
height:45px;
border-radius:4px;
font-size:14px;
font-family:PingFangSC-Regular,PingFangSC;
font-weight:400;
color:rgba(102,102,102,1);
padding:0 20px;
line-height: 45px;
  }
  .addDepart{
    width:100%;
height:45px;
border-radius:4px;
/* border:1px solid rgba(221,221,221,1); */
/* text-align: center; */
line-height: 45px;
margin:0 auto;
/* margin-top:65px; */
margin-bottom: 16px;
font-size:14px;
font-family:PingFangSC-Regular,PingFangSC;
font-weight:400;
/* color:rgba(153,153,153,1); */
color:rgba(83,180,179,1);
    padding-left: 18px;
  }
  .el-col{
    background:rgba(246,249,252,1);
  }
  .rightHead{
    width:100%;
    height: 80px;
    padding:0 25px 0 30px;
  }
  .allMember{
    font-size:16px;
font-family:PingFangSC-Medium,PingFangSC;
font-weight:500;
color:rgba(51,51,51,1);
  }
  .mask{
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.397);
    z-index:9999;
    position: fixed;
    top:0;
    left:0;
  }
  .addMember{
    width:525px;
    height: 463px;
    background:rgba(255,255,255,1);
border-radius:4px;
z-index:99999;
    position: fixed;
    top:50%;
    margin-top:-230px;
    left:50%;
    margin-left:-262px;
    border-bottom: 1px solid #EEEEEE;
  }
  .addHeader{
    width:100%;
    height: 65px;
    padding-left:25px;
    position: relative;
        border-bottom: 1px solid #eee;
            margin-bottom: 40px;
  }
  .addSelect{
    font-size:16px;
font-family:PingFangSC-Medium,PingFangSC;
font-weight:500;
color:rgba(51,51,51,1);
cursor: pointer;

  }
  .addNoSelect{
font-size:16px;
font-family:PingFangSC-Regular,PingFangSC;
font-weight:400;
color:rgba(153,153,153,1);
cursor: pointer;
  }
  .modalCancel{
    position: absolute;
    /* height: 72px; */
    line-height: 72px;
    right:25px;
    cursor: pointer;
    /* top:25px; */
  }
  .xx00{
    z-index:99999;
    padding-bottom:50px;
  }
  .dialog .el-dialog__header{
    padding:0;
    
  }
  .dialog .el-dialog__body{
    padding:0;
  }
  .el-menu-vertical-demo{
    background:rgba(246,249,252,1);
  }
  .el-menu-item{
    background:rgba(246,249,252,1);
    color:#666;
  }
  .el-submenu__title{
    color:#666;
  }
  .bgFFF{
    background: #fff;
  }
  .table-responsive{
    overflow-y: hidden;
  }
  .memberTable{
    width:100%;
    padding:0 82px 0 73px;
    height: 40px;
  }
  .tableBox{
    margin-left:10px;
    border-radius:4px;
border:1px solid rgba(235,238,245,1);
height: 40px;
width: 100%;
    flex: 1;
    cursor: pointer;
  }
  .tableBox img{
    width:16px;
    height: 16px;
  }
  .downLoad{
    color:rgba(94,114,228,1);
    /* margin-left:153px; */
    text-decoration: underline;
    width:100%;
    /* padding:0 260px 0 153px; */
    margin-top:30px;
    margin-bottom: 70px;
    cursor: pointer;
  }
  .getMore{
    font-weight:500;
color:rgba(102,102,102,1);
font-size:12px;
  }
  .more_edit{
    font-size:12px;
    color:rgba(51,51,51,1);
    /* text-decoration: underline; */
  }
  .more_del{
    font-size:12px;
    color:rgba(51,51,51,1);
  }
  a{
    text-decoration:none;
  }
  .avatar:hover{
    color:#fff;
  }
  .avatar{
    background: #53B4B3;
  }
  .mainLeft_wrap{
    width:100%;
  }
  .leader_form{
    position: fixed;
    width: 300px;
    max-height: 400px;
    z-index: 199999;
    left: 50%;
    margin-left:170px;
    background: #fff;
    top: 190px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    padding:25px 25px 30px 25px;
  }
  .el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content{
    color:#fff;
  }
  .el-tree-node__content{
    height: 42px;
    padding-left:24px !important;
  }
  .searchArea{
    position: absolute;
    z-index:999;
    top:14px;
    right: 252px;
  }
  .toolbtn{
    cursor: pointer;
    opacity: 0.8;
  }
  .toolbtn:hover{
    opacity: 1;
  }
  .hover1{
    cursor: pointer;
    
  }
    .menu_item {
    width:110px;
height:35px;
line-height: 35px;
padding-left:10px;
font-size:12px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(51,51,51,1);
display: block;
cursor: pointer;

  }
    .menu {
    height: 113px;
    width: 110px;
    position: fixed;
    background-color: #fff;
    box-shadow:0px 0px 11px 6px rgba(0,0,0,0.06);
border-radius:4px;
z-index:99999;
    padding: 0;
  }
  li{
    list-style:none;
  }
   .menu_item:hover {
    background:rgba(241,250,250,1);
  }
.FGX{
  width:92.73%;
  margin: 0 auto;
  margin-top:52px;
  margin-bottom: 52px;
height:1px;
background:rgba(235,238,245,1);

}
.flag{
  width:37px;
height:18px;
border-radius:4px;
border:1px solid rgba(83,180,179,1);
font-size:11px;
font-family:PingFangSC-Medium,PingFang SC;
font-weight:500;
color:rgba(83,180,179,1);
text-align: center;
/* line-height: 18px; */
margin-left:15px;

}
.el-tree-node__content :hover{
  background-color: #fff !important;
}

</style>

<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>
    <img src="../assets/images/chicken.png" class="icon-warning" alt="">
                <div class="searchArea">
                  <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                    <div class="form-group mb-0">
                            <base-input placeholder="搜索成员"
                                    class="input-group-alternative"
                                    alternative=""
                                    v-model="allMember_Param.keyword"
                                    @keyup.enter.native="search"
                                    addon-right-icon="">
                            </base-input>
                            <!-- 这个input阻止回车事件刷新页面 也就是去掉了默认的submit -->
          <input type="text" style="opacity:0;width:0;height:0">
                            </div>
                </form>
                </div>
    <div class="content">
      <div class="main flex">
        <div class="mainLeft">
          <div class="mainLeft_wrap">
          <div :class="tab==0?'select':'noSelect'" @click="selectAll" class="flex justify-between">
            <div>全部成员</div>
            <div>{{allMember_total}}</div>
            </div>
          <div :class="tab==1?'select':'noSelect'" @click="selectNo" class="flex justify-between">
            
            <div>未分配成员</div>
            <div>{{noAllocate_total}}</div>
            </div>
          <!-- <div class="addDepart"  @click="showDialogForm"><i class="el-icon-circle-plus-outline"></i>&nbsp;添加部门</div> -->
          </div>



<div class="FGX"></div>
<div class="ORG">
    <el-tree
  :data="allOrg"
  :props="defaultProps"
  :indent="indent"
  highlight-current
  style="background:#F6F9FC"
  default-expand-all
   @node-contextmenu="rightClick"
  @node-click="nodeClick6">
</el-tree>
</div>

<div class="addDepart"  @click="showDialogForm">添加部门&nbsp;<i class="el-icon-circle-plus-outline"></i></div>


 <div v-show="menuVisible">
                <ul id="menu" class="menu">
                    <li class="menu_item" @click="showDialogAddChild">添加子部门</li>
                    <li class="menu_item" @click="showEditDepart">编辑部门</li>
                    <li class="menu_item" @click="showDelDepart = true">删除部门</li>
                </ul>
            </div>






        </div>
        <div class="mainRight">
          <!-- <iframe src='https://view.officeapps.live.com/op/view.aspx?src=http://storage.xuetangx.com/public_assets/xuetangx/PDF/1.xls' width='100%' height='100%' frameborder='1'>
</iframe> -->
          <div class="rightHead flex justify-between align-center">
            <div class="allMember" v-if="tab==0">全部成员（{{total}}）</div>
            <div class="allMember" v-if="tab==1">未分配成员（{{noAllocate_total}}）</div>
            <div class="allMember"  v-if="tab==null" >{{parentOrgName}}<span v-if="parentOrgName!==''&&parentOrgName!==null"> | </span>{{selectDepart2}}（{{total}}）</div>
            <div class="flex align-center">

              <el-button v-if="showDelBtn" plain type="primary" size="medium" @click="muchDel" style="background:#fff;color:#53B4B3">删除</el-button>
             <el-button type="primary" size="medium" style="font-weight:500;" @click="showDialogForm2">添加成员</el-button>
             </div>
          </div>

                    <div class="table-responsive" style="width:100%">
                        <base-table class="table align-items-center table-flush" :class="type === 'dark' ? 'table-dark': ''" :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'" tbody-classes="list" :data="allMember.list">
                            <template slot="columns">
                        <th style="padding:0 0 0 25px;width:65px;">
                            <el-checkbox v-model="checkboxes"  ></el-checkbox>

                        </th>
                        
                      <th>&nbsp;头像</th>
                      <th>姓名</th>
                      <th v-if="tab!==1">部门</th>
                      <th>手机</th>
                      <th>操作</th>
</template>

<template slot-scope="{row}">
  
    <th scope="row" style="padding:0 0 0 25px;">
        <!-- <base-checkbox v-model="row.checked">
        </base-checkbox> -->

        <el-checkbox v-model="row.checked"></el-checkbox>
    </th>
    <td>
      <a href="#!" class="avatar rounded-circle">
       <!-- <img :src="row.avater" alt="Image placeholder">  -->
       {{row.nickname}}
       </a>
    </td>
    <td class="budget">
      <div class="flex">
        <div>{{row.name}}</div>
        <div class="flag" v-if="row.managerFlag==1">负责人</div>
      </div>
        
    </td>
    <td v-if="tab==0" class="budget">
        {{row.parentOrgName}} <span v-if="row.orgName!==null&&row.parentOrgName!==null">|</span> {{row.orgName}}
    </td>
    <td v-if="tab==null" class="budget">
        {{row.orgName}}
    </td>
    <td class="budget">
        {{row.phone}}
    </td>
    <td>
  <div class="flex">
        <div class="toolbtn flex justify-center align-center"  @click="showEditMember(row.id)" >
        <img class="hover1"  src="../assets/images/edit2.png" style="width:14px;height:14px;" alt="">
        <div class="font14 ml10 color999">编辑</div>
        </div>
        <div class="toolbtn flex justify-center align-center" style="margin-left:50px" @click="delMember(row.id)">
        <img class="hover1" src="../assets/images/delete2.png" style="width:14px;height:14px;" alt="">
        <div class="font14 ml10 color999">删除</div>
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
        :current-page.sync="allMember_Param.pageNo"
        :page-sizes="[10,20,30,50]"
        :page-size="allMember_Param.pageSize"
        :total="total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>

          
        </div>
      </div>
    </div>



<!-- ==start==添加部门form -->
    <el-dialog title="添加部门 " :show-close="show_close" :visible.sync="dialogFormVisible" width="420px">
  <el-form :model="addDepart_param">
    <el-form-item label="部门名称：" label-width="120px" required>
      <el-input v-model="addDepart_param.name" autocomplete="off" style="width:80%;"></el-input>
    </el-form-item>
    <el-form-item label="部门主管：" label-width="120px">

      <el-select
    v-model="addDepart_param.managerIds"
    multiple
    collapse-tags
    
    style="width:80%;"
    placeholder="请选择">
    <el-option
      v-for="(item,index) in memberStructures[0].children"
      :key="index"
      :label="item.label"
      :value="item.id">
    </el-option>
  </el-select>

    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer flex justify-center">

    <el-button @click="cancelDialog"  style="background: rgba(238,238,238,1);color:#666;font-weight:500;">取消</el-button>
     <!-- <base-button  type="primary" @click="sureAddDepart"  style="margin-left:55px;font-weight:500;">确认</base-button> -->
      <el-button type="primary" @click="sureAddDepart"  style="margin-left:55px;font-weight:500;">确认</el-button>
  </div>
</el-dialog>
<!-- ==end==添加部门form -->





<!-- ==start==添加子部门form -->
    <el-dialog title="添加子部门 " :show-close="show_close" :visible.sync="dialogAddChild" width="420px">
  <el-form :model="addChildDepart">
    <el-form-item label="上级部门" label-width="120px">
      <el-input v-model="selectDepart3" autocomplete="off" style="width:80%;" disabled></el-input>
    </el-form-item>
    <el-form-item label="子部门名称：" label-width="120px" required>
      <el-input v-model="addChildDepart.name" autocomplete="off" style="width:80%;"></el-input>
    </el-form-item>
    <el-form-item label="部门主管：" label-width="120px">

      <el-select
    v-model="addChildDepart.managerIds"
    multiple
    collapse-tags
    
    style="width:80%;"
    placeholder="请选择">
    <el-option
      v-for="(item,index) in memberStructures[0].children"
      :key="index"
      :label="item.label"
      :value="item.id">
    </el-option>
  </el-select>



    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer flex justify-center">

    <el-button  @click="cancelDialog"  style="background: rgba(238,238,238,1);color:#666;font-weight:500;">取消</el-button>
     <el-button  type="primary" @click="sureAddChildDepart"  style="margin-left:55px;font-weight:500;">确认</el-button>
  </div>
</el-dialog>
<!-- ==end==添加子部门form -->



<!-- ==start==编辑成员form -->
    <el-dialog title="编辑成员 " :show-close="show_close" :visible.sync="dialogFormEdit" width="420px">
   <el-form :model="editMember">
    <el-form-item label="姓名：" label-width="110px" style="margin-bottom:18px;" required>
      <el-input v-model="editMember.name" autocomplete="off" style="width:80%;"></el-input>
    </el-form-item>
    <el-form-item label="手机：" label-width="110px" style="margin-bottom:18px;" required>
      <el-input v-model="editMember.phone" maxlength="11" autocomplete="off" disabled style="width:80%;"></el-input>
    </el-form-item>
    <el-form-item label="部门：" label-width="110px" style="margin-bottom:18px;">
      <el-input v-model="orgLabel6" autocomplete="off" readonly  @focus="selectLeader3" style="width:80%;"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer flex justify-center">

    <el-button  @click="cancelDialog"  style="background: rgba(238,238,238,1);color:#666;font-weight:500;">取消</el-button>
     <el-button  type="primary" @click="sureEditMember"  style="margin-left:55px;font-weight:500;">确认</el-button>
  </div>
</el-dialog>
<!-- ==end==编辑成员form -->





<!-- ==start==编辑部门form -->
    <el-dialog title="编辑部门 " :show-close="show_close" :visible.sync="dialogEditDepart" width="420px">
  <el-form :model="editDepart">
    <el-form-item label="部门名称：" label-width="120px" required>
      <el-input v-model="editDepart.name" autocomplete="off" style="width:80%;"></el-input>
    </el-form-item>
    <el-form-item label="部门主管：" label-width="120px">
      <!-- <el-input v-model="orgLabel10" autocomplete="off" @focus="selectLeader5" style="width:80%;"></el-input> -->
        <el-select
    v-model="editDepart.managerIds"
    multiple
    collapse-tags
    
    style="width:80%;"
    placeholder="请选择">
    <el-option
      v-for="(item,index) in orgAndNoAllocated"
      :key="index"
      :label="item.label"
      :value="item.id">
    </el-option>
  </el-select>


    </el-form-item>


    




  </el-form>
  <div slot="footer" class="dialog-footer flex justify-center">

    <el-button  @click="cancelDialog"  style="background: rgba(238,238,238,1);color:#666;font-weight:500;">取消</el-button>
     <el-button  type="primary" @click="sureEditDepart"  style="margin-left:55px;font-weight:500;">确认</el-button>
  </div>
</el-dialog>
<!-- ==end==编辑部门form -->









<!-- ==start==添加成员form -->
    <el-dialog title="添加成员 " :show-close="show_close" :visible.sync="dialogFormVisible2" width="420px">
  <el-form :model="addMemberform">
    <el-form-item label="姓名：" label-width="120px" style="margin-bottom:18px;" required>
      <el-input v-model="addMemberform.name" autocomplete="off" style="width:80%;"></el-input>
    </el-form-item>
    <el-form-item label="手机：" label-width="120px" style="margin-bottom:18px;" required>
      <el-input v-model="addMemberform.phone" maxlength="11" autocomplete="off" style="width:80%;"></el-input>
    </el-form-item>
    <el-form-item v-if="tab!==null" label="部门：" label-width="120px" style="margin-bottom:18px;">
      <el-input v-model="orgLabel" autocomplete="off" readonly  @focus="selectLeader" style="width:80%;"></el-input>
    </el-form-item>

  </el-form>
  <div slot="footer" class="dialog-footer flex justify-center">

    <el-button  @click="cancelDialog"  style="background: rgba(238,238,238,1);color:#666;font-weight:500;">取消</el-button>
     <el-button  type="primary" @click="sureAddMember"  style="margin-left:55px;font-weight:500;">确认</el-button>
  </div>
</el-dialog>
<!-- ==end==添加成员form -->



<!-- ==start==添加成员-选择部门form -->
<div v-if="leaderDialog" class="leader_form">
  <div class="addLeader_txt color333">选择部门</div>
  <el-input
  placeholder="输入关键字进行过滤"
  class="mt20"
  style="margin-bottom:10px;"
  v-model="filterText">
</el-input>

<el-tree
  class="filter-tree mt10"
  :data="allOrg"
  :props="defaultProps"
  default-expand-all
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
<!-- ==end==添加成员-选择部门form -->








<!-- ==start==编辑成员-选择部门form -->
<div v-if="leaderDialog3" class="leader_form">
  <div class="addLeader_txt color333">选择部门</div>
  <el-input
  placeholder="输入关键字进行过滤"
  class="mt20"
  style="margin-bottom:10px;"
  v-model="filterText">
</el-input>

<el-tree
  class="filter-tree mt10"
  :data="allOrg"
  :props="defaultProps"
  default-expand-all
  :filter-node-method="filterNode"
  @node-click="nodeClick3"
  style="max-height:200px;overflow-y:auto"
  ref="tree">
</el-tree>

<div class="btn-footer mt30 flex justify-center">
<el-button  @click="cancelLeader3"  style="background: rgba(238,238,238,1);color:#666;font-weight:500;">取消</el-button>
     <el-button  type="primary" @click="sureLeader3"  style="margin-left:5px;font-weight:500;">确认</el-button>
     </div>
</div>
<!-- ==end==编辑成员-选择主管form -->











<!-- ==start==删除文件夹dialog -->
<div class="noFGX">
<el-dialog
  title="提示"
  :visible.sync="centerDialogVisible"
  width="30%"
  :show-close="show_close"
  center class="text-center">
  <div class="text-center"><span>确认删除该成员吗？</span></div>
  
  <span slot="footer" class="dialog-footer">

 <el-button  @click="cancelDelMember" style="background: rgba(238,238,238,1);color:#666;font-weight:500;">取消</el-button>
     <el-button  type="primary"  @click="sureDelMember" style="margin-left:55px;font-weight:500;">确定</el-button>

  </span>
</el-dialog>
</div>
<!-- ==end==删除文件夹dialog -->


<!-- ==start==删除部门dialog -->
<div class="noFGX">
<el-dialog
  title="确认删除该部门吗？"
  :visible.sync="showDelDepart"
  width="30%"
  :show-close="show_close"
  center class="text-center">
  <div class="text-center" style="padding:0 45px;"><span>删除部门后相关子部门同时被删除，部门成员将归入未分配成员列表</span></div>
  
  <span slot="footer" class="dialog-footer">

 <el-button  @click="showDelDepart = false" style="background: rgba(238,238,238,1);color:#666;font-weight:500;">取消</el-button>
     <el-button  type="primary"  @click="sureDelDepart" style="margin-left:55px;font-weight:500;">确定</el-button>

  </span>
</el-dialog>
</div>
<!-- ==end==删除部门dialog -->


  </div>
</template>

<script>
import { addTopOrg,addChildOrg,getAllOrg,orgDetail,updateOrg,delOrg,getMember,memberStructures,addMember,allMember,unAllocated,updateMember,muchDel } from '../api/organization'
  export default {
    data() {
      return {
        indent: 12,
        filterText: '',
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tab: 0,
        show_close: false,
        checkboxes: false,
        total: 0,
        type: '',
        dialogFormVisible: false,
        dialogFormVisible2: false, 
        centerDialogVisible: false,
        dialogFormEdit: false,
        dialogEditDepart: false,
        showDelDepart: false,
        departForm: {
          name: '',
          leader: ''
        },
        addMemberform:{
          name:'',
          phone: '',
          orgId: ''
        },
        showPic: true,
        addDepart_param:{
          name:'',
          managerIds: []
        },
        addChildDepart:{
          name:'',
          managerIds: []
        },
        editDepart:{
          name:'',
          managerIds: [],
          showOrder: ''
        },
        addIndex: 0,
        allOrg: [],
        selectId: '',
        selectDepart: '',
        selectDepart2: '',
        selectDepart3: '',
        allMember_Param:{
          keyword: '',
          pageNo: 1,
          pageSize: 10
        },
        
        allMember:'',
        allMember_total: '',
        noAllocate:'',
        noAllocate_total:'',
        delIdArr: [],
        leaderDialog: false,
        leaderDialog3: false,
        leaderDialog5: false,
        orgLabel: '',
        orgLabel2: '',
        orgLabel3: [],
        orgLabel5: '',
        orgLabel6: '',
        orgLabel9: [],
        orgLabel10: [],
        memberStructures: [
          {
            children:[]
          }
        ],
        editMember:{
          name: '',
          phone: '',
          orgId: ''
        },
        orgAndNoAllocated: [],
        editMemberId: '',
        dialogAddChild: false,
        menuVisible: false,
        managerHoldOn: [],
        showDelBtn: false,
        parentOrgName: ''
      };
    },
    watch: {
    checkboxes: 'checkboxChange',
    dialogFormVisible: 'cancelDialog2',
dialogFormVisible2: 'cancelDialog2',
dialogFormEdit: 'cancelDialog2',
dialogAddChild: 'cancelDialog2',
dialogEditDepart: 'cancelDialog2',
allMember: {
    handler:function() {   //特别注意，不能用箭头函数，箭头函数，this指向全局
    for(let i=0;i<this.allMember.list.length;i++){
          if(this.allMember.list[i].checked){
            this.showDelBtn = true
            return
          }
        }
        this.showDelBtn = false
 
        },

deep: true    //深度监听
},
    filterText(val) {
        this.$refs.tree.filter(val);
      }
    },
    created() {
      this.getStructures()
      this.getAllOrg()
      this.getAllMember()
      this.getAllMember2()
      this.getNoAllocate2()
      
      
    },
    methods: {
      // 监测列表的checkbox变化，选中了才出现删除按钮
      watchAllMember() {
        for(let i=0;i<this.allMember.list.length;i++){
          if(this.allMember.list[i].checked){
            this.showDelBtn = true
          }
        }
      },
      
    getCheckedNodes() {
        this.managerHoldOn = this.$refs.tree.getCheckedNodes()
      },
      //右键点击
            rightClick(MouseEvent, object, Node) { // 鼠标右击触发事件
            // console.log(Node)
            this.selectId = Node.data.id
            this.addMemberform.orgId = Node.data.id
            this.selectDepart3 = Node.label
            this.getMemberFromOrg2()

                this.menuVisible = false // 先把模态框关死，目的是 第二次或者第n次右键鼠标的时候 它默认的是true
                this.menuVisible = true  // 显示模态窗口，跳出自定义菜单栏
                var menu = document.querySelector('#menu')
                document.addEventListener('click', this.foo) // 给整个document添加监听鼠标事件，点击任何位置执行foo方法
                menu.style.display = "block";
                menu.style.left = MouseEvent.clientX  + 'px'
                menu.style.top = MouseEvent.clientY  + 'px'
            },
            foo() { // 取消鼠标监听事件 菜单栏
                this.menuVisible = false
                document.removeEventListener('click', this.foo) // 要及时关掉监听，不关掉的是一个坑，不信你试试，虽然前台显示的时候没有啥毛病，加一个alert你就知道了
            },
      search() {
        this.getAllMember()
      },
      // 打开添加部门
      showDialogForm() {
        this.dialogFormVisible = true
        this.addDepart_param={
          name:'',
          managerIds: []
        }
      },
      // 打开添加成员
      showDialogForm2() {
        this.dialogFormVisible2 = true
        if(this.tab!==null){
            this.addMemberform={
            name:'',
            phone: '',
            orgId: ''
          } 
        } else {
          this.addMemberform.name = '' 
          this.addMemberform.phone = '' 
        }
        
        this.orgLabel = ''
      },
      // 打开添加子部门
      showDialogAddChild() {
         this.dialogAddChild = true
         this.addChildDepart= {
          name:'',
          managerIds: []
         }
      },
      // 上传表格
      uploadExcel(){

      },
      // 确认删除部门
      sureDelDepart() {
        delOrg(this.selectId).then(()=>{
          this.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success'
        });
        this.showDelDepart = false
        this.getAllOrg()
        this.getNoAllocate2()
        this.getStructures()
        })
      },
      // 确认编辑部门
     async sureEditDepart() {
      




       await updateOrg(this.selectId,this.editDepart).then(()=>{
          this.$notify({
          title: '成功',
          message: '编辑成功',
          type: 'success'
        });
        this.getAllOrg()
        this.getStructures()
        this.allMember_Param={
          keyword: '',
          pageNo: 1,
          pageSize: 10
        }
        this.getMemberFromOrg()
        this.getNoAllocate2()
        this.dialogEditDepart = false
        this.leaderDialog5 = false
        })





        // 更新部门名称
        await orgDetail(this.selectId).then(res=>{
         this.selectDepart2 = res.name
       })
      },
      // 展示编辑部门dialog
     async showEditDepart() {
        this.dialogEditDepart = true
        this.editDepart.managerIds = []
       await orgDetail(this.selectId).then(res=>{
         this.editDepart.name = res.name
        //  this.editDepart.managerId = res.managerId
        //  this.orgLabel10 = res.managerName
        var nameArr = []
         for(let i=0;i<res.managers.length;i++){
           const id = res.managers[i].id
           
           nameArr.push(res.managers[i].name)
           this.editDepart.managerIds.push(id)
          // this.orgLabel10 = nameArr.join(',')

         }
        //  this.orgLabel10 = nameArr.join(',')
        // this.orgLabel10 = nameArr


       })
      },
      // 确定添加子部门
      sureAddChildDepart() {
        if(this.addChildDepart.name==''){
          this.$notify({
          title: '失败',
          message: '请输入子部门名称！',
          type: 'warning'
        });
        return
        }
        addChildOrg(this.selectId,this.addChildDepart).then(()=>{
          this.$notify({
          title: '成功',
          message: '添加成功',
          type: 'success'
        });
        this.dialogAddChild = false
        this.getAllOrg()
        this.getStructures()
        this.getNoAllocate2()
        // 清空输入数据
        this.addChildDepart = {
          name:'',
          managerIds: []
        }
        })
      },
      // 确认编辑成员
      sureEditMember() {
        updateMember(this.editMemberId,this.editMember).then(()=>{
          this.$notify({
          title: '成功',
          message: '编辑成功',
          type: 'success'
        });
        this.getStructures()
        this.dialogFormEdit = false
        if(this.tab==0){
          this.getAllMember()
        } else if(this.tab==1){
          this.getNoAllocate()
        } else {
          this.getMemberFromOrg()
        }

        })
      },
      // 打开编辑成员form框
      showEditMember(id) {
        this.dialogFormEdit = true
        this.editMemberId = id
        for(let i=0;i<this.allMember.list.length;i++){
          if(id==this.allMember.list[i].id){

            this.editMember.name = this.allMember.list[i].name
            this.editMember.phone = this.allMember.list[i].phone
            this.editMember.orgId = this.allMember.list[i].orgId
            // this.editMember_depart = this.allMember.list[i].orgName
            this.orgLabel6 = this.allMember.list[i].orgName
          }
        }
      },
      // 取消删除成员
      cancelDelMember() {
        this.centerDialogVisible = false
        this.delIdArr = []
      },
      // 获取完整组织成员架构
      getStructures() {
        memberStructures().then(res=>{
          this.memberStructures = res
        })
      },
      // 新增部门和成员关闭dialog
      cancelDialog() {
        this.dialogFormVisible = false
        this.dialogFormVisible2 = false
        this.dialogFormEdit = false
        this.dialogAddChild = false
        this.dialogEditDepart = false
        this.leaderDialog = false
        this.leaderDialog3 = false
        this.leaderDialog5 = false
        this.managerHoldOn = []
        this.addDepart_param.managerIds = []
        this.editDepart.managerIds = []
        this.addChildDepart.managerIds = []



      },

      // 监听主form框关闭的时候，次form框也关闭
      cancelDialog2() {
        if(!this.dialogFormVisible){
          this.leaderDialog = false
        }
        if(!this.dialogFormEdit){
          this.leaderDialog3 = false
        }
        if(!this.dialogEditDepart){
          this.leaderDialog5 = false
        }
      },
      // 获取组织下成员
      getMemberFromOrg() {
        // this.allMember_Param={
        //   keyword: '',
        //   pageNo: 1,
        //   pageSize: 10
        // }
        // this.allMember_Param.pageNo = 1
        getMember(this.selectId,this.allMember_Param).then(res=>{
          this.total = res.total
          for(let i=0;i<res.list.length;i++){
            res.list[i].checked = false
            const name1= res.list[i].name.split("").reverse()
            res.list[i].nickname = name1[1]+name1[0]
          }
          this.allMember = res
          const list = res.list
          for(let i=0;i<list.length;i++){
            list[i].label = list[i].name
          }
          // orgAndNoAllocated是编辑部门选择主管时候的数据，未分配加组织下的成员
          this.orgAndNoAllocated = list.concat(this.memberStructures[0].children)
        })
      },
      // 获取组织下成员不改变右侧数据
      getMemberFromOrg2() {
        this.allMember_Param={
          keyword: '',
          pageNo: 1,
          pageSize: 10000
        }
        getMember(this.selectId,this.allMember_Param).then(res=>{
          // this.total = res.total
          for(let i=0;i<res.list.length;i++){
            res.list[i].checked = false
            const name1= res.list[i].name.split("").reverse()
            res.list[i].nickname = name1[1]+name1[0]
          }
          // this.allMember = res
          const list = res.list
          for(let i=0;i<list.length;i++){
            list[i].label = list[i].name
          }
          // orgAndNoAllocated是编辑部门选择主管时候的数据，未分配加组织下的成员
          this.orgAndNoAllocated = list.concat(this.memberStructures[0].children)
        })
      },
      // 分页
      handleSizeChange(val) {
      this.allMember_Param.pageSize = val
      if(this.tab==0){
        this.getAllMember()
      } else if(this.tab==1){
        this.getNoAllocate()
      } else {
        this.getMemberFromOrg()
      }
    },
    // 分页
    handleCurrentChange(val) {
      this.allMember_Param.pageNo = val
      if(this.tab==0){
        this.getAllMember()
      } else if(this.tab==1){
        this.getNoAllocate()
      } else {
        this.getMemberFromOrg()
      }
    },

    // 添加主管选择部门取消添加
    cancelLeader() {
      this.leaderDialog = false
        this.addMemberform.orgId = ''
        this.orgLabel2 = ''
      },
      cancelLeader2() {
        this.managerHoldOn = []
      },
      cancelLeader3() {
        this.leaderDialog3 = false
        this.editMember.orgId = ''
        this.orgLabel5 = ''
      },
      cancelLeader5() {
        this.leaderDialog5 = false
        
        this.managerHoldOn = []
      },

      // 添加主管选择部门确定添加
      sureLeader() {
        this.leaderDialog = false
        this.orgLabel = this.orgLabel2
      },
      
      sureLeader3() {
        this.leaderDialog3 = false
        this.orgLabel6 = this.orgLabel5
      },
      sureLeader5() {
        this.leaderDialog5 = false
        // this.orgLabel10 = this.orgLabel9
      this.editDepart.managerIds = []
      this.orgLabel9 = []

         if(this.managerHoldOn.length>0){
         for(let i=0;i<this.managerHoldOn.length;i++){
           const id = this.managerHoldOn[i].id
          const label = this.managerHoldOn[i].label
           this.editDepart.managerIds.push(id)
           this.orgLabel9.push(label)
         }
         this.orgLabel10 =  this.orgLabel9.join(',')
       }


       this.managerHoldOn = []



      },

      // 树形控件选中事件
      nodeClick(e) {
        this.addMemberform.orgId = e.id
        this.orgLabel2 = e.label
      },
      nodeClick2(e) {
        this.addDepart_param.managerId = e.id
        this.orgLabel3 = e.label
      },
       // 新建部门选择主管
    treeCheck() {
      this.getCheckedNodes()

    },
      // 新建子部门选择主管
    treeCheck3() {
      this.getCheckedNodes()

    },
      nodeClick3(e) {
        this.editMember.orgId = e.id
        this.orgLabel5 = e.label
      },
      nodeClick5(e) {
        this.editDepart.managerId = e.id
        this.orgLabel9 = e.label
      },
      treeCheck2() {
        this.getCheckedNodes()

      },

      // 侧边栏组织树形控件，选择组织
      nodeClick6(e) {
        this.selectId = e.id
        this.addMemberform.orgId = e.id
        this.tab = null
        this.allMember_Param={
          keyword: '',
          pageNo: 1,
          pageSize: 10
        }
        this.getMemberFromOrg()
        //  this.selectDepart = name1
         this.selectDepart2 = e.label
          this.parentOrgName = e.parentOrgName
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
      selectLeader3() {
        this.leaderDialog3 = true
      },
      selectLeader5() {
        this.leaderDialog5 = true
      },
      // 删除单个成员
      delMember(id) {
        this.centerDialogVisible = true
        // const idArr = []
        // idArr.push(id)
        this.delIdArr=[id]
        
      },
      // 确认删除成员
      sureDelMember() {
        const param ={
          ids:this.delIdArr
        }
        muchDel(param).then(()=>{
          this.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success'
        });
        this.getStructures()
        this.centerDialogVisible = false
        if(this.tab==0){
          this.getAllMember()
          this.getNoAllocate2()
        } else if(this.tab==1){
          this.getNoAllocate()
          this.getAllMember2()
        } else {
          this.getMemberFromOrg()
          this.getAllMember2()
          // this.getNoAllocate2()
        }
        this.delIdArr = []
        
        })
      },
      // 确认新增部门
      sureAddDepart() {
        this.leaderDialog2 = false
        
        if(this.addDepart_param.name==''){
         this.$notify({
          title: '错误',
          message: '请填写部门名称！',
          type: 'warning'
        });
        return
        }

        this.managerHoldOn = []
        
        addTopOrg(this.addDepart_param).then(()=>{
          this.$notify({
          title: '成功',
          message: '添加成功',
          type: 'success'
        });
        this.dialogFormVisible = false
        this.leaderDialog2 = false
        // 更新数据
        this.getAllOrg()
        this.getStructures()
        this.getNoAllocate2()
        })

      },
      // 确认新增成员
      sureAddMember() {
        this.leaderDialog = false
        if(this.addMemberform.name==''){
         this.$notify({
          title: '错误',
          message: '请填写成员姓名！',
          type: 'warning'
        });
        return
        }
        if(this.addMemberform.phone==''){
          this.$notify({
          title: '错误',
          message: '请填写成员手机号！',
          type: 'warning'
        });
        return
        }
        addMember(this.addMemberform).then(()=>{
          this.$notify({
          title: '成功',
          message: '添加成功',
          type: 'success'
        });
        this.dialogFormVisible2 = false
        this.leaderDialog = false

        if(this.tab==null){
          this.addMemberform.name = '' 
          this.addMemberform.phone = '' 
          this.getMemberFromOrg()
          // 更新数据，侧边栏成员数量
          this.getAllMember2()
          this.getNoAllocate2()
            
        } else if(this.tab==0) {

          this.addMemberform={
            name:'',
            phone: '',
            orgId: ''
          } 
          this.getAllMember()
          this.getNoAllocate2()

        } else {
          this.addMemberform={
            name:'',
            phone: '',
            orgId: ''
          }
          this.getAllMember2()
          this.getNoAllocate()
        }


        this.getStructures()
      
        })
        
      },
      // 批量删除
      muchDel() {
        for(let i=0;i<this.allMember.list.length;i++){
          if(this.allMember.list[i].checked){
            this.delIdArr.push(this.allMember.list[i].id)
          }
        }
        if(this.delIdArr.length==0){
          this.$notify({
          title: '失败',
          message: '请先勾选需要删除的成员！',
          type: 'warning'
        });
        return
        }
        this.centerDialogVisible = true
        this.getStructures()
      },
      // 监听全选box的改变
      checkboxChange() {
        if(this.checkboxes){
          for(let i=0;i<this.allMember.list.length;i++){
          this.allMember.list[i].checked = true
          }
        } else {
          for(let i=0;i<this.allMember.list.length;i++){
          this.allMember.list[i].checked = false
          }
        }
        
      },
      // 选择部门
      // selectOrg(id,name1,name2,name3) {
      //   this.selectId = id
      //   this.tab = null
      //   this.getMemberFromOrg()
      //   if(name3!==undefined){
      //     this.selectDepart = name1+'·'+name2+'·'+name3
      //     this.selectDepart2 = name3
      //     return
      //   } 
      //   if(name2!==undefined){
      //     this.selectDepart = name1+'·'+name2
      //     this.selectDepart2 = name2
      //     return
      //   }
      //    this.selectDepart = name1
      //    this.selectDepart2 = name1
      // },
      // 获取全部成员
      getAllMember() {
        const param = this.allMember_Param
        allMember(param).then(res=>{
          this.total = res.total
          // this.allMember_total = res.total
          for(let i=0;i<res.list.length;i++){
            res.list[i].checked = false
            const name1= res.list[i].name.split("").reverse()
            res.list[i].nickname = name1[1]+name1[0]
          }
          this.allMember = res
        })
      },
       // 获取全部成员数量
      getAllMember2() {
        const param = this.allMember_Param
        allMember(param).then(res=>{
          this.allMember_total = res.total
        })
      },
      // 获取未分配成员
      getNoAllocate() {
        const param = this.allMember_Param
        unAllocated(param).then(res=>{
          
          this.total = res.total
          this.noAllocate_total = res.total
          for(let i=0;i<res.list.length;i++){
            res.list[i].checked = false
            const name1= res.list[i].name.split("").reverse()
            res.list[i].nickname = name1[1]+name1[0]
          }
          this.allMember = res
        })
      },
      // 获取未分配成员数量
      getNoAllocate2() {
        const param = this.allMember_Param
        unAllocated(param).then(res=>{
          
          this.noAllocate_total = res.total
        })
      },
      // 获取全部组织
      getAllOrg() {
        getAllOrg().then(res=>{
          this.allOrg = res
        })
      },
      // 点击全部成员
      selectAll() {
        this.tab=0
        this.allMember_Param={
          keyword: '',
          pageNo: 1,
          pageSize: 10
        }
        this.getAllMember()
        this.selectId = ''
      },
      // 点击未分配成员
      selectNo() {
        this.tab=1
        this.allMember_Param={
          keyword: '',
          pageNo: 1,
          pageSize: 10
        }
        this.getNoAllocate()
        this.selectId = ''
      },
      gotoDetail() {
        this.$router.push({ path:'/department'  })
      }
    }
  };
</script>

