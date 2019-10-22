
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
    width:-webkit-calc(100% - 200px);
    min-height: 500px;
  }
  .mainRight{
    width:calc(82.7% - 40px);
  }
  .select{
    width:100%;
height:45px;
background:rgba(255,255,255,1);
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
border:1px solid rgba(221,221,221,1);
text-align: center;
line-height: 45px;
margin:0 auto;
margin-top:65px;
margin-bottom: 16px;
font-size:14px;
font-family:PingFangSC-Regular,PingFangSC;
font-weight:400;
color:rgba(153,153,153,1);
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
  .el-dialog__header{
    border-bottom: 1px solid #EEEEEE !important;
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
  .mainLeft_wrap{
    width:100%;
    padding:0 10px;
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
    right: 140px;
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

</style>

<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>
                <div class="searchArea">
                  <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                    <div class="form-group mb-0">
                            <base-input placeholder="搜索成员"
                                    class="input-group-alternative"
                                    alternative=""
                                    v-model="allMember_Param.keyword"
                                    @keyup.enter="search"
                                    addon-right-icon="">
                            </base-input>
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
          <div class="addDepart"  @click="showDialogForm"><i class="el-icon-circle-plus-outline"></i>&nbsp;添加部门</div>
          </div>


    <el-tree
  :data="allOrg"
  :props="defaultProps"
  :indent="indent"
  icon-class="el-icon-arrow-down"
  highlight-current
  style="background:#F6F9FC"
  @node-click="nodeClick6">
</el-tree>


        </div>
        <div class="mainRight">
          <!-- <iframe src='https://view.officeapps.live.com/op/view.aspx?src=http://storage.xuetangx.com/public_assets/xuetangx/PDF/1.xls' width='100%' height='100%' frameborder='1'>
</iframe> -->
          <div class="rightHead flex justify-between align-center">
            <div class="allMember" v-if="tab==0">全部成员（{{allMember_total}}）</div>
            <div class="allMember" v-if="tab==1">未分配成员（{{noAllocate_total}}）</div>
            <div class="allMember"  v-if="tab==null" >{{selectDepart2}}</div>
            <div class="flex align-center">
              
             <base-button type="primary" size="sm" style="font-weight:500;" @click="showDialogForm2">添加成员</base-button>
             <base-button outline type="primary" size="sm" v-if="tab==null" @click="showDialogAddChild">添加子部门</base-button>
             <base-button outline type="danger" size="sm" @click="muchDel">批量删除</base-button>
                <el-dropdown trigger="click" v-if="tab==null" style="cursor:pointer">
                <span class="el-dropdown-link getMore">
                  更多<i class="el-icon-caret-bottom"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <div  @click="showEditDepart"><el-dropdown-item class="more_edit">编辑部门</el-dropdown-item></div>
                  <div  @click="showDelDepart = true"><el-dropdown-item class="more_del">删除部门</el-dropdown-item></div>
                </el-dropdown-menu>
              </el-dropdown>
             </div>
          </div>

          <div class="card shadow" :class="type === 'dark' ? 'bg-default': ''">
                    <div class="table-responsive">
                        <base-table class="table align-items-center table-flush" :class="type === 'dark' ? 'table-dark': ''" :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'" tbody-classes="list" :data="allMember.list">
                            <template slot="columns">
                        <th>
                            <base-checkbox v-model="checkboxes">
                            </base-checkbox>

                             <!-- <el-checkbox v-model="checkboxes" ></el-checkbox> -->
                        </th>
                        
                      <th>头像</th>
                      <th>姓名</th>
                      <th>部门</th>
                      <th>手机</th>
                      <th>操作</th>
</template>

<template slot-scope="{row}">
  
    <th scope="row">
        <base-checkbox v-model="row.checked">
        </base-checkbox>

        <!-- <el-checkbox v-model="row.checked" size="medium "></el-checkbox> -->
    </th>
    <td>
      <a href="#!" class="avatar rounded-circle">
       <!-- <img :src="row.avater" alt="Image placeholder">  -->
       {{row.nickname}}
       </a>
    </td>
    <td class="budget">
        {{row.name}}
    </td>
    <td class="budget">
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
    </div>



<!-- ==start==添加部门form -->
    <el-dialog title="添加部门 " :show-close="show_close" :visible.sync="dialogFormVisible" width="420px">
  <el-form :model="addDepart_param">
    <el-form-item label="部门名称：" label-width="120px" required>
      <el-input v-model="addDepart_param.name" autocomplete="off" style="width:90%;"></el-input>
    </el-form-item>
    <el-form-item label="部门主管：" label-width="120px">
      <el-input v-model="orgLabel4" autocomplete="off" @focus="selectLeader2" style="width:90%;"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer flex justify-center">

    <base-button  type="secondary" @click="cancelDialog"  style="color:#666;font-weight:500;">取消</base-button>
     <base-button  type="primary" @click="sureAddDepart"  style="margin-left:55px;font-weight:500;">确认</base-button>
  </div>
</el-dialog>
<!-- ==end==添加部门form -->





<!-- ==start==添加子部门form -->
    <el-dialog title="添加子部门 " :show-close="show_close" :visible.sync="dialogAddChild" width="420px">
  <el-form :model="addChildDepart">
    <el-form-item label="上级部门" label-width="120px">
      <el-input v-model="selectDepart2" autocomplete="off" style="width:90%;" disabled></el-input>
    </el-form-item>
    <el-form-item label="子部门名称：" label-width="120px" required>
      <el-input v-model="addChildDepart.name" autocomplete="off" style="width:90%;"></el-input>
    </el-form-item>
    <el-form-item label="部门主管：" label-width="120px">
      <el-input v-model="orgLabel8" autocomplete="off" @focus="selectLeader4" style="width:90%;"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer flex justify-center">

    <base-button  type="secondary" @click="cancelDialog"  style="color:#666;font-weight:500;">取消</base-button>
     <base-button  type="primary" @click="sureAddChildDepart"  style="margin-left:55px;font-weight:500;">确认</base-button>
  </div>
</el-dialog>
<!-- ==end==添加子部门form -->



<!-- ==start==编辑成员form -->
    <el-dialog title="编辑成员 " :show-close="show_close" :visible.sync="dialogFormEdit" width="420px">
   <el-form :model="editMember">
    <el-form-item label="姓名：" label-width="110px" style="margin-bottom:18px;" required>
      <el-input v-model="editMember.name" autocomplete="off" style="width:70%;"></el-input>
    </el-form-item>
    <el-form-item label="手机：" label-width="110px" style="margin-bottom:18px;" required>
      <el-input v-model="editMember.phone" maxlength="11" autocomplete="off" disabled style="width:70%;"></el-input>
    </el-form-item>
    <el-form-item label="部门：" label-width="110px" style="margin-bottom:18px;">
      <el-input v-model="orgLabel6" autocomplete="off"  @focus="selectLeader3" style="width:70%;"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer flex justify-center">

    <base-button  type="secondary" @click="cancelDialog"  style="color:#666;font-weight:500;">取消</base-button>
     <base-button  type="primary" @click="sureEditMember"  style="margin-left:55px;font-weight:500;">确认</base-button>
  </div>
</el-dialog>
<!-- ==end==编辑成员form -->





<!-- ==start==编辑部门form -->
    <el-dialog title="编辑部门 " :show-close="show_close" :visible.sync="dialogEditDepart" width="420px">
  <el-form :model="editDepart">
    <el-form-item label="部门名称：" label-width="120px" required>
      <el-input v-model="editDepart.name" autocomplete="off" style="width:90%;"></el-input>
    </el-form-item>
    <el-form-item label="部门主管：" label-width="120px">
      <el-input v-model="orgLabel10" autocomplete="off" @focus="selectLeader5" style="width:90%;"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer flex justify-center">

    <base-button  type="secondary" @click="cancelDialog"  style="color:#666;font-weight:500;">取消</base-button>
     <base-button  type="primary" @click="sureEditDepart"  style="margin-left:55px;font-weight:500;">确认</base-button>
  </div>
</el-dialog>
<!-- ==end==编辑部门form -->









<!-- ==start==添加成员form -->
    <el-dialog title="添加成员 " :show-close="show_close" :visible.sync="dialogFormVisible2" width="420px">
  <el-form :model="addMemberform">
    <el-form-item label="姓名：" label-width="120px" style="margin-bottom:18px;" required>
      <el-input v-model="addMemberform.name" autocomplete="off" style="width:90%;"></el-input>
    </el-form-item>
    <el-form-item label="手机：" label-width="120px" style="margin-bottom:18px;" required>
      <el-input v-model="addMemberform.phone" maxlength="11" autocomplete="off" style="width:90%;"></el-input>
    </el-form-item>
    <el-form-item v-if="tab!==null" label="部门：" label-width="120px" style="margin-bottom:18px;">
      <el-input v-model="orgLabel" autocomplete="off"  @focus="selectLeader" style="width:90%;"></el-input>
    </el-form-item>

  </el-form>
  <div slot="footer" class="dialog-footer flex justify-center">

    <base-button  type="secondary" @click="cancelDialog"  style="color:#666;font-weight:500;">取消</base-button>
     <base-button  type="primary" @click="sureAddMember"  style="margin-left:55px;font-weight:500;">确认</base-button>
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
  accordion
  :filter-node-method="filterNode"
  @node-click="nodeClick"
  style="overflow-y: auto;max-height: 200px;"
  ref="tree">
</el-tree>

<div class="btn-footer mt30 flex justify-center">
<base-button  type="secondary" @click="cancelLeader"  style="color:#666;font-weight:500;">取消</base-button>
     <base-button  type="primary" @click="sureLeader"  style="margin-left:5px;font-weight:500;">确认</base-button>
     </div>
</div>
<!-- ==end==添加成员-选择主管form -->





<!-- ==start==新建部门-选择主管form -->
<div v-if="leaderDialog2" class="leader_form">
  <div class="addLeader_txt color333">选择主管</div>
  <el-input
  placeholder="输入关键字进行过滤"
  class="mt20"
  style="margin-bottom:10px;"
  v-model="filterText">
</el-input>

<el-tree
  class="filter-tree mt10"
  :data="memberStructures[0].children"
  :props="defaultProps"
  accordion
  :filter-node-method="filterNode"
  @node-click="nodeClick2"
  style="max-height:200px;overflow-y:auto"
  ref="tree">
</el-tree>

<div class="btn-footer mt30 flex justify-center">
<base-button  type="secondary" @click="cancelLeader2"  style="color:#666;font-weight:500;">取消</base-button>
     <base-button  type="primary" @click="sureLeader2"  style="margin-left:5px;font-weight:500;">确认</base-button>
     </div>
</div>
<!-- ==end==新建部门-选择主管form -->




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
  accordion
  :filter-node-method="filterNode"
  @node-click="nodeClick3"
  style="max-height:200px;overflow-y:auto"
  ref="tree">
</el-tree>

<div class="btn-footer mt30 flex justify-center">
<base-button  type="secondary" @click="cancelLeader3"  style="color:#666;font-weight:500;">取消</base-button>
     <base-button  type="primary" @click="sureLeader3"  style="margin-left:5px;font-weight:500;">确认</base-button>
     </div>
</div>
<!-- ==end==编辑成员-选择主管form -->




<!-- ==start==新建子部门-选择主管form -->
<div v-if="leaderDialog4" class="leader_form">
  <div class="addLeader_txt color333">选择主管</div>
  <el-input
  placeholder="输入关键字进行过滤"
  class="mt20"
  style="margin-bottom:10px;"
  v-model="filterText">
</el-input>

<el-tree
  class="filter-tree mt10"
  :data="memberStructures[0].children"
  :props="defaultProps"
  accordion
  :filter-node-method="filterNode"
  @node-click="nodeClick4"
  style="max-height:200px;overflow-y:auto;"
  ref="tree">
</el-tree>

<div class="btn-footer mt30 flex justify-center">
<base-button  type="secondary" @click="cancelLeader4"  style="color:#666;font-weight:500;">取消</base-button>
     <base-button  type="primary" @click="sureLeader4"  style="margin-left:5px;font-weight:500;">确认</base-button>
     </div>
</div>
<!-- ==end==新建子部门-选择主管form -->



<!-- ==start==编辑部门-选择主管form -->
<div v-if="leaderDialog5" class="leader_form">
  <div class="addLeader_txt color333">选择主管</div>
  <el-input
  placeholder="输入关键字进行过滤"
  class="mt20"
  style="margin-bottom:10px;"
  v-model="filterText">
</el-input>

<el-tree
  class="filter-tree mt10"
  :data="orgAndNoAllocated"
  :props="defaultProps"
  accordion
  :filter-node-method="filterNode"
  @node-click="nodeClick5"
  style="max-height:200px;overflow-y:auto"
  ref="tree">
</el-tree>

<div class="btn-footer mt30 flex justify-center">
<base-button  type="secondary" @click="cancelLeader5"  style="color:#666;font-weight:500;">取消</base-button>
     <base-button  type="primary" @click="sureLeader5"  style="margin-left:5px;font-weight:500;">确认</base-button>
     </div>
</div>
<!-- ==end==编辑部门-选择主管form -->





<!-- ==start==删除文件夹dialog -->
<el-dialog
  title="提示"
  :visible.sync="centerDialogVisible"
  width="30%"
  :show-close="show_close"
  center class="text-center">
  <div class="text-center"><span>确认删除该成员吗？</span></div>
  
  <span slot="footer" class="dialog-footer">

 <base-button  type="secondary" @click="cancelDelMember" style="color:#666;font-weight:500;">取消</base-button>
     <base-button  type="primary"  @click="sureDelMember" style="margin-left:55px;font-weight:500;">确定</base-button>

  </span>
</el-dialog>
<!-- ==end==删除文件夹dialog -->


<!-- ==start==删除部门dialog -->
<el-dialog
  title="确认删除该部门吗？"
  :visible.sync="showDelDepart"
  width="30%"
  :show-close="show_close"
  center class="text-center">
  <div class="text-center" style="padding:0 15px;"><span>删除部门后相关子部门同时被删除，部门成员将归入未分配成员列表</span></div>
  
  <span slot="footer" class="dialog-footer">

 <base-button  type="secondary" @click="showDelDepart = false" style="color:#666;font-weight:500;">取消</base-button>
     <base-button  type="primary"  @click="sureDelDepart" style="margin-left:55px;font-weight:500;">确定</base-button>

  </span>
</el-dialog>
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
          managerId: ''
        },
        addChildDepart:{
          name:'',
          managerId: ''
        },
        editDepart:{
          name:'',
          managerId: '',
          showOrder: ''
        },
        addIndex: 0,
        allOrg: [],
        selectId: '',
        selectDepart: '',
        selectDepart2: '',
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
        leaderDialog2: false,
        leaderDialog3: false,
        leaderDialog4: false,
        leaderDialog5: false,
        orgLabel: '',
        orgLabel2: '',
        orgLabel3: '',
        orgLabel4: '',
        orgLabel5: '',
        orgLabel6: '',
        orgLabel7: '',
        orgLabel8: '',
        orgLabel9: '',
        orgLabel10: '',
        memberStructures: '',
        editMember:{
          name: '',
          phone: '',
          orgId: ''
        },
        orgAndNoAllocated: [],
        editMemberId: '',
        dialogAddChild: false
      };
    },
    watch: {
    checkboxes: 'checkboxChange',
    dialogFormVisible: 'cancelDialog2',
dialogFormVisible2: 'cancelDialog2',
dialogFormEdit: 'cancelDialog2',
dialogAddChild: 'cancelDialog2',
dialogEditDepart: 'cancelDialog2',
    filterText(val) {
        this.$refs.tree.filter(val);
      }
    },
    created() {
      this.getAllOrg()
      this.getAllMember()
      this.getNoAllocate2()
      this.getStructures()
      
    },
    methods: {
      search() {
        this.getAllMember()
      },
      // 打开添加部门
      showDialogForm() {
        this.dialogFormVisible = true
        this.addDepart_param={
          name:'',
          managerId: ''
        }
        this.orgLabel4 = ''
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
          managerId: ''
         }
         this.orgLabel8 = ''
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
        }).catch(()=>{
          this.$notify({
          title: '失败',
          message: '删除失败',
          type: 'warning'
        });
        this.showDelDepart = false
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
        this.getNoAllocate2()
        this.dialogEditDepart = false
        this.leaderDialog5 = false
        }).catch(()=>{
          this.$notify({
          title: '失败',
          message: '编辑失败',
          type: 'warning'
        });
        this.dialogEditDepart = false
        })
        // 更新部门名称
        await orgDetail(this.selectId).then(res=>{
         this.selectDepart2 = res.name
       })
      },
      // 展示编辑部门dialog
     async showEditDepart() {
        this.dialogEditDepart = true
       await orgDetail(this.selectId).then(res=>{
         this.editDepart.name = res.name
         this.editDepart.managerId = res.managerId
         this.orgLabel10 = res.managerName
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
        // 清空输入数据
        this.addChildDepart = {
          name:'',
          managerId: ''
        }
        this.orgLabel8 = ''
        }).catch(()=>{
          this.$notify({
          title: '失败',
          message: '添加失败',
          type: 'warning'
        });
        this.dialogAddChild = false
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

        }).catch(()=>{
          this.$notify({
          title: '失败',
          message: '编辑失败',
          type: 'warning'
        });
        this.dialogFormEdit = false
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
        this.leaderDialog2 = false
        this.leaderDialog3 = false
        this.leaderDialog4 = false
        this.leaderDialog5 = false
      },

      // 监听主form框关闭的时候，次form框也关闭
      cancelDialog2() {
        if(!this.dialogFormVisible){
          this.leaderDialog = false
        }
        if(!this.dialogFormVisible2){
          this.leaderDialog2 = false
        }
        if(!this.dialogFormEdit){
          this.leaderDialog3 = false
        }
        if(!this.dialogAddChild){
          this.leaderDialog4 = false
        }
        if(!this.dialogEditDepart){
          this.leaderDialog5 = false
        }
      },
      // 获取组织下成员
      getMemberFromOrg() {
        this.allMember_Param={
          keyword: '',
          pageNo: 1,
          pageSize: 10
        }
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
      // 分页
      handleSizeChange(val) {
      this.allMember_Param.pageSize = val
      if(this.tab==0){
        this.getAllMember()
      } else if(this.tab==1){
        this.getNoAllocate()
      }
    },
    // 分页
    handleCurrentChange(val) {
      this.allMember_Param.pageNo = val
      if(this.tab==0){
        this.getAllMember()
      } else if(this.tab==1){
        this.getNoAllocate()
      }
    },

    // 添加主管选择部门取消添加
    cancelLeader() {
      this.leaderDialog = false
        this.addMemberform.orgId = ''
        this.orgLabel2 = ''
      },
      cancelLeader2() {
        this.leaderDialog2 = false
        this.addDepart_param.managerId = ''
        this.orgLabel3 = ''
      },
      cancelLeader3() {
        this.leaderDialog3 = false
        this.editMember.orgId = ''
        this.orgLabel5 = ''
      },
      cancelLeader4() {
        this.leaderDialog4 = false
        this.addChildDepart.managerId = ''
        this.orgLabel7 = ''
      },
      cancelLeader5() {
        this.leaderDialog5 = false
        this.editDepart.managerId = ''
        this.orgLabel9 = ''
      },

      // 添加主管选择部门确定添加
      sureLeader() {
        this.leaderDialog = false
        this.orgLabel = this.orgLabel2
      },
      sureLeader2() {
        this.leaderDialog2 = false
        this.orgLabel4 = this.orgLabel3
      },
      sureLeader3() {
        this.leaderDialog3 = false
        this.orgLabel6 = this.orgLabel5
      },
      sureLeader4() {
        this.leaderDialog4 = false
        this.orgLabel8 = this.orgLabel7
      },
      sureLeader5() {
        this.leaderDialog5 = false
        this.orgLabel10 = this.orgLabel9
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
      nodeClick3(e) {
        this.editMember.orgId = e.id
        this.orgLabel5 = e.label
      },
      nodeClick4(e) {
        this.addChildDepart.managerId = e.id
        this.orgLabel7 = e.label
      },
      nodeClick5(e) {
        this.editDepart.managerId = e.id
        this.orgLabel9 = e.label
      },

      // 侧边栏组织树形控件，选择组织
      nodeClick6(e) {
        this.selectId = e.id
        this.addMemberform.orgId = e.id
        this.tab = null
        this.getMemberFromOrg()
        //  this.selectDepart = name1
         this.selectDepart2 = e.label
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
      selectLeader2() {
        this.leaderDialog2 = true
      },
      selectLeader3() {
        this.leaderDialog3 = true
      },
      selectLeader4() {
        this.leaderDialog4 = true
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
        
        }).catch(()=>{
          this.$notify({
          title: '失败',
          message: '删除失败',
          type: 'warning'
        });
        this.centerDialogVisible = false
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
        }).catch(()=>{
          this.$notify({
          title: '失败',
          message: '添加失败',
          type: 'warning'
        });
        this.dialogFormVisible = false
        this.leaderDialog2 = false
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
      
        }).catch(()=>{
          this.$notify({
          title: '失败',
          message: '添加失败',
          type: 'warning'
        });
        this.dialogFormVisible2 = false
        this.leaderDialog = false
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
          this.allMember_total = res.total
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
        this.getAllMember()
        this.selectId = ''
      },
      // 点击未分配成员
      selectNo() {
        this.tab=1
        this.getNoAllocate()
        this.selectId = ''
      },
      gotoDetail() {
        this.$router.push({ path:'/department'  })
      }
    }
  };
</script>

