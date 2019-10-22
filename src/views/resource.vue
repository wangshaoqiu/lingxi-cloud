
<style scoped lang="scss">

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
  padding: 25px 30px 0 25px;
}
@media (min-width: 768px) {
  .pt-md-8,
  .py-md-8 {
    padding-top: 100px !important;
  }
}
.button2 {
  color: #fff;
}
.button2:hover {
  color: #53b4b3;
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
 
  border-radius: 4px;
  position: relative;
  /* margin-right: 30px; */
  margin-bottom: 30px;
}
.departItem:hover{
 box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.04);
 cursor: pointer;
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
  right: 15px;
  width: 30px;
  display:flex !important;
}
.custom-control {
  width: auto;
}
.more_edit {
  font-size: 12px;
  color: rgba(51, 51, 51, 1);
  // text-decoration: underline;
}
.more_del {
  font-size: 12px;
  color: rgba(51, 51, 51, 1);
}
.el-drawer__header {
  margin: 0;
  padding: 0;
}
.dialog_head_box {
  width: 100%;
  height: 9.4vh;
  border-bottom: 1px solid #eee;
  min-height: 60px;
}
.dialog_head_box2 {
  width: 100%;
  height: 9.4vh;
  border-bottom: 1px solid #eee;
  min-height: 60px;
  padding:0 30px;
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
.XHX {
  width: 50px;
  height: 4px;
  background: rgba(94, 114, 228, 1);
  border-radius: 4px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -25px;
}
.fileImg_box {
  width: 140px;
  height: 125px;
  overflow: hidden;
  background-color: #fff;
  box-sizing: border-box;
  margin: 0 8px 8px 0;
  border-radius: 6px;
  border: 1px solid #c0ccda;
  position: relative;
}

.fileImg {
  width: 140px;
  height: 125px;
}
.fileImg_box:hover .mask {
  display: block;
}
.fileImg_box2 {
  width: 200px;
  height: 144px;
  overflow: hidden;
  background-color: #fff;
  box-sizing: border-box;
  margin: 0 8px 8px 0;
  border-radius: 6px;
  border: 1px solid #c0ccda;
  position: relative;
}

.fileImg2 {
  width: 200px;
  height: 144px;
}
.fileImg_box2:hover .mask {
  display: block;
}
.el-upload--picture-card {
  height: 125px;
  width: 140px;
  line-height: 125px;
}
.el-upload-list--picture-card .el-upload-list__item {
  height: 125px;
  width: 140px;
}
.mask {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}

.mask_box {
  width: 100%;
  height: 100%;
}
.suggest {
  margin-left: 66px;
  font-size: 12px;
  color: rgba(153, 153, 153, 1);
}
.suggest2{
  margin-left: 120px;
  font-size: 12px;
  color: rgba(153, 153, 153, 1);
  margin-top:5px;
  margin-bottom:20px;
}
.el-form-item__label {
  color: rgba(153, 153, 153, 1);
  font-size: 14px;
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
.newFile_upload{
  width:200px;
height:144px;
border-radius:4px;
border:1px solid rgba(235,238,245,1);
}
.upload_add{
  width:100%;
  text-align: center;
  font-size: 27px;
  margin-top:47px;
  color:#EBEEF5;

}
.upload_txt{
  width:100%;
  text-align: center;
  font-size: 14px;
  color:#999999;
  margin-top:9px;
}
.el-dialog__wrapper{
  z-index: 9999 !important;
}
.tab1{
  padding:20px 30px 0 30px;

}
.tab1_head{
  font-size:13px;
  color:rgba(102,102,102,1);
}
.bgmask{
  width:100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top:0;
  left:0;
  z-index: 2100;

}
.transfer{
   position: absolute;
   top:200px;
   left: 50%;
    margin-left: -441px;
    text-align: center;
    z-index:9999;
    background: #fff;
}
.el-dialog__body{
  padding: 30px 0px !important;
}
.el-icon-close{
  cursor: pointer;
}
.el-icon-upload{
  color:#5E72E4;
}
.uploadFile_box{
  padding:30px;
}
.uploadFile{
  width:100%;
  height:220px;
border-radius:4px;
border:2px solid rgba(235,238,245,1);
}
.uploadFile_icon{
  width:100%;
  text-align: center;
  margin-top:60px;
}
.upload_txt{
  font-size:16px;
}
.canSee{
  padding:0 30px;
  margin-top:10px;
}
.haha{
  width:100px;
  height: 20px;
  margin-left:30px;
  margin-top:-29px;
  line-height: 20px;
}
.avatar:hover{
    color:#fff;
  }
  .selectForm1{
    position: fixed;
    width:500px;
    top:100px;
    height:500px;
    left:50%;
    margin-left:-250px;
    z-index:99999;
    background: #fff;
    
  }
  .delMember{
    position: fixed;
    width:400px;
    top:150px;
    height:238px;
    left:50%;
    margin-left:-200px;
    z-index:99999;
    background: #fff;
  }
  .delMt{
    width:100%;
    margin-top: 50px;
    font-size:20px;
font-family:PingFangSC-Regular,PingFangSC;
font-weight:400;
color:rgba(51,51,51,1);
text-align: center;
  }
  .delContent{
    width:100%;
    margin-top: 10px;
    font-size:14px;
font-family:PingFangSC-Regular,PingFangSC;
font-weight:400;
color:rgba(153,153,153,1);
text-align: center;
  }
  .delBtns{
    width:100%;
    height: 40px;
    margin-top:40px;
  }
  .selectForm1_left{
    width:48%;
    height:380px;
  }
  .selectForm1_title{
    font-size:14px;
font-family:PingFangSC-Regular,PingFangSC;
font-weight:400;
color:rgba(51,51,51,1);
margin-bottom: 20px;
  }
  .selected_box{
    width:1005;
    height: 340px;
    border:1px solid #EBEEF5;
    margin-top:8px;overflow-y:auto

  }
  .select_footer{
    position: absolute;
    width:100%;
    bottom:30px;
  }
  .selectForm1_wrap{
    position: relative;
    width:500px;
     height:500px;
     padding:25px 25px 30px 25px;
  }
   .searchArea{
    position: absolute;
    z-index:999;
    top:14px;
    right: 140px;
  }

</style>

<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-2 pt-md-8">
      <!-- <base-button type="secondary" style="color:#53B4B3" @click="dialog2=true">上传文件</base-button> -->
      <base-button v-if="admin==1" type="secondary" style="color:#53B4B3" @click="dialogFormVisible = true">新建文件夹</base-button>
    </base-header>

    <div class="searchArea">
                  <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                    <div class="form-group mb-0">
                            <base-input placeholder="搜索文件"
                                    class="input-group-alternative"
                                    alternative=""
                                    v-model="keyword"
                                    @keyup.enter="search"
                                    addon-right-icon="">
                            </base-input>
                            </div>
                </form>
                </div>
    <div class="content">
      <div class="main">
        <div class="flex flex-wrap row">
          <div
            class="departItem_wrap col-lg-4 col-md-6"
            v-for="(item,index) in topDir"
            :key="index"
            @click.stop="gotoDetail(item.id,item.name)"
          >
            <div class="departItem flex">
              <div class="departItem-left">
                <img :src="item.coverUrl" alt />
              </div>
              <div class="departItem-right">
                <div class="departName">{{item.name}}</div>
                <div class="departFiles">(包含{{item.fileCnt}}个文件)</div>
                <!-- <base-checkbox class="departSelect">
                </base-checkbox>-->
                <div @click.stop="stopClick">
                <el-dropdown trigger="click" class="departSelect flex justify-center" v-if="item.canOp&&admin==1">
                  <img src="../assets/images/more2.png"  @click.stop="stopClick" />
                  <el-dropdown-menu slot="dropdown">
                    <div @click="showDialog(item.id)">
                      <el-dropdown-item class="more_edit">编辑</el-dropdown-item>
                    </div>
                    <div @click="showDelDialog(item.id)">
                    <el-dropdown-item class="more_del">删除</el-dropdown-item>
                    </div>
                  </el-dropdown-menu>
                  
                </el-dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



<!-- ==start==新建文件夹dialog -->
    <el-dialog title="新建文件夹 " :visible.sync="dialogFormVisible" width="430px" :show-close="show_close">
      <el-form :model="newFile">
        <el-form-item label="文件名：" label-width="120px" required style="margin-bottom:14px;">
          <el-input v-model="newFile.name" autocomplete="off" style="width:80%;"></el-input>
        </el-form-item>
        <div class="flex">
          <el-form-item label="封面:" style="padding-left: 68px;width:120px;" />
          <div class="fileImg_box2" v-if="newFile.coverUrl!==''">
            <img class="fileImg2" preview="0" :src="newFile.coverUrl" alt />
            <div class="mask">
              <div class="mask_box flex justify-center align-center">
                <div>
                  <i class="el-icon-delete colorFFF font20 ml10" @click="delNewFileImg"></i>
                </div>
              </div>
            </div>
          </div>

          <el-upload
          v-if="newFile.coverUrl==''"
  class="avatar-uploader"
  auto-upload
  :data="uploadParams"
  :action="actionUrl"
  :show-file-list="false"
  :limit="limit"
  :on-success="handleAvatarSuccess">
  <div class="newFile_upload">
            <div class="upload_add"><i class="el-icon-plus"></i></div>
            <div class="upload_txt">上传图片</div>
          </div>
</el-upload>
          
        </div>
        <div class="suggest2">*建议尺寸325*235像素</div>
        <el-form-item label="排序：" label-width="120px" style="margin-bottom:0;">
          <el-input v-model="newFile.showOrder" autocomplete="off" style="width:200px;"></el-input>
        </el-form-item>
      </el-form>
      <div class="suggest2" style="margin-top:0;margin-bottom: 0;">*排序依照数字由低到高依次排列</div>
      <div slot="footer" class="dialog-footer flex justify-center">

        <base-button  type="secondary" @click="cancelAddFile" style="color:#666;font-weight:500;">取消</base-button>
     <base-button  type="primary"  @click="sureAddFile" style="margin-left:55px;font-weight:500;">确认</base-button>
      </div>
    </el-dialog>
<!-- ==end==新建文件夹dialog -->



<!-- ==start==删除文件夹dialog -->
<el-dialog
  title="确认删除该文件夹吗？"
  :visible.sync="centerDialogVisible"
  width="30%"
  :show-close="show_close"
  center class="text-center">
  <div class="text-center"><span>删除后，将无法还原文件</span></div>
  
  <span slot="footer" class="dialog-footer">

    <base-button  type="secondary" @click="centerDialogVisible = false" style="color:#666;font-weight:500;">取消</base-button>
     <base-button  type="primary"  @click="sureDelDir" style="margin-left:55px;font-weight:500;">确认</base-button>

  </span>
</el-dialog>
<!-- ==end==删除文件夹dialog -->






<!-- ==start==抽屉 编辑 -->
    <el-drawer
      :before-close="handleClose"
      :visible.sync="dialog"
      :direction="direction"
      custom-class="demo-drawer"
      :show-close="showClose"
      ref="drawer"
      
    >
      <div class="demo-drawer__content" style="height:100vh;overflow-y:auto;padding-bottom:9.3vh;">
        <div class="dialog_head_box flex justify-around">
          <div :class="tab==0?'dialog_head weight500':'dialog_head'" @click="checkTab(0)">
            基础信息
            <div v-if="tab==0" class="XHX"></div>
          </div>
          <div :class="tab==1?'dialog_head weight500':'dialog_head'" @click="checkTab(1)">
            查看专属文件成员
            <div v-if="tab==1" class="XHX"></div>
          </div>
          <div :class="tab==2?'dialog_head weight500':'dialog_head'" @click="checkTab(2)">
            查看保密文件成员
            <div v-if="tab==2" class="XHX"></div>
          </div>
        </div>
        <div v-if="tab==0" class="tab0">
        <el-form :model="selectDir" class="mt40 pd30">
          <el-form-item label="文件名:">
            <el-input v-model="selectDir.name" autocomplete="off" style="width:60%"></el-input>
          </el-form-item>

          <div class="flex">
            <el-form-item label="封面:" style="margin-left:14px;" />
            <div class="fileImg_box" v-if="selectDir.coverUrl!==''">
              <img class="fileImg" :src="selectDir.coverUrl" alt />
              <div class="mask">
                <div class="mask_box flex justify-center align-center">
                  <div>
                  </div>
                  <div>
                    <i class="el-icon-delete colorFFF font20 ml10" @click="delInfoImg"></i>
                  </div>
                </div>
              </div>
            </div>

            <el-upload
              v-if="selectDir.coverUrl==''"
              class="avatar-uploader"
              auto-upload
              :data="uploadParams"
              :action="actionUrl"
              :show-file-list="false"
              :limit="limit"
              :on-success="handleAvatarSuccess2">
            <div class="newFile_upload" style="width:140px;height:125px;">
                      <div class="upload_add" style="margin-top:30px"><i class="el-icon-plus"></i></div>
                      <div class="upload_txt">上传图片</div>
                    </div>
          </el-upload>
          </div>
          <div class="suggest">*建议尺寸325*235像素</div>
          <el-form-item class="mt20" label="排序：" style="margin-bottom:0">
            <el-input v-model="selectDir.showOrder" autocomplete="off" style="width:50%"></el-input>
          </el-form-item>
          <div class="suggest">排列顺序依照数字由低到高依次升序排列，例如：1，2，3，4...</div>
        </el-form>
        
        </div>
        <div v-if="tab==1" class="tab1">
          <div class="tab1_head">专属文件：组内成员可查阅专属该文件夹的文件，即在上传文件时资料权限设置为“该文件夹相关人员可见”的文件。</div>
          
          <base-button class="mt30" type="primary" size="sm" @click="showAddForm1">添加成员</base-button>
          <base-button v-if="exclusiveArr.length>0" class="mt30" outline type="primary" size="sm" @click="showMuchDel">移除</base-button>
          <div v-if="exclusiveArr.length>0" class="card shadow mt25" :class="type === 'dark' ? 'bg-default': ''">
                    <div class="table-responsive">
                        <base-table class="table align-items-center table-flush" :class="type === 'dark' ? 'table-dark': ''" :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'" tbody-classes="list" :data="exclusiveArr">
                            <template slot="columns">
                        <th>
                            <base-checkbox v-model="checkboxes">
                            </base-checkbox>
                        </th>
                        
                      <th>*</th>
                      <th>姓名</th>
                      <th>部门</th>
</template>

<template slot-scope="{row}">
    <th scope="row">
        <base-checkbox v-model="row.checked">
        </base-checkbox>
    </th>
    <td scope="row">
        <a href="#!" class="avatar rounded-circle">
       {{row.nickname}}
       </a>
    </td>
    <td class="budget">
        {{row.name}}
    </td>
    <td class="budget">
        {{row.orgName}}
    </td>
</template>

      </base-table>
    </div>


  </div>
          
        </div>

        <div v-if="tab==2" class="tab1">
          <div class="tab1_head">保密文件：组内成员可查阅本文件夹下的保密文件，即在上传文件时资料权限设置为“该文件夹保密文件”的文件。</div>
          
          <base-button class="mt30" type="primary" size="sm" @click="showAddForm2">添加成员</base-button>
          <base-button v-if="privacyArr.length>0" class="mt30" outline type="primary" size="sm" @click="showMuchDel2">移除</base-button>
          <div v-if="privacyArr.length>0" class="card shadow mt25" :class="type === 'dark' ? 'bg-default': ''">
                    <div class="table-responsive">
                        <base-table class="table align-items-center table-flush" :class="type === 'dark' ? 'table-dark': ''" :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'" tbody-classes="list" :data="privacyArr">
                            <template slot="columns">
                        <th>
                            <base-checkbox v-model="checkboxes2">
                            </base-checkbox>
                        </th>
                        
                      <th>*</th>
                      <th>姓名</th>
                      <th>部门</th>
</template>

<template slot-scope="{row}">
    <th scope="row">
        <base-checkbox  v-model="row.checked">
        </base-checkbox>
    </th>
    <td scope="row">
        <a href="#!" class="avatar rounded-circle">
       {{row.nickname}}
       </a>
    </td>
    <td class="budget">
        {{row.name}}
    </td>
    <td class="budget">
        {{row.orgName}}
    </td>
</template>

      </base-table>
    </div>


  </div>

        </div>


        <div class="drawer_footer_box">
          <div class="drawer_footer flex align-center justify-center">
            <base-button  type="secondary" @click="cancelEdit" style="color:#666;font-weight:500;">取消</base-button>
            <base-button  type="primary" @click="sureEdit" style="margin-left:55px;font-weight:500;">确认</base-button>
          </div>
        </div>
      </div>
    </el-drawer>
<!-- ==end==抽屉 -->



 <!-- start专属文件选择成员的弹框 -->
   <div class="selectForm1" v-if="selectForm1">
     <div class="selectForm1_wrap flex justify-between">
     <div class="selectForm1_left">
       <div class="selectForm1_title">添加成员</div>
     <el-input
  placeholder="搜索成员"
  v-model="filterText">
</el-input>

<el-tree
  class="filter-tree"
  :data="memberStructures"
  :props="defaultProps"
  accordion
  show-checkbox
    highlight-current
  :filter-node-method="filterNode"
  @check-change="treeCheck"
  style="border:1px solid #EBEEF5;padding:5px;height:290px;margin-top:8px;overflow-y:auto"
  ref="tree">
</el-tree>

</div>

<div class="selectForm1_left">
  <div class="selectForm1_title">已选成员</div>
  <div class="selected_box">
    <div class="card" :class="type === 'dark' ? 'bg-default': ''">
                    <div class="table-responsive">
                        <base-table class="table align-items-center table-flush" :class="type === 'dark' ? 'table-dark': ''" :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'" tbody-classes="list" :data="selectedMember">
                            <template slot="columns">
                       
                      <th>姓名</th>
                      <th>操作</th>
</template>

<template slot-scope="{row}">
    <td class="budget">
        {{row.name}}
    </td>
    <td class="budget">
        <i class="el-icon-delete" @click="delSelectId(row.id)"></i>
    </td>
</template>

      </base-table>
    </div>


  </div>

  </div>
</div>

  <div class="select_footer flex justify-center">
    <base-button  type="secondary" @click="cancelSelect" style="color:#666;font-weight:500;">取消</base-button>
    <base-button  type="primary" @click="sureSelect" style="margin-left:55px;font-weight:500;">确认</base-button>
  </div>

    </div>
   </div>
    <!-- end专属文件选择成员的弹框 -->







     <!-- start保密文件选择成员的弹框 -->
   <div class="selectForm1" v-if="selectForm2">
     <div class="selectForm1_wrap flex justify-between">
     <div class="selectForm1_left">
       <div class="selectForm1_title">添加成员</div>
     <el-input
  placeholder="搜索成员"
  v-model="filterText">
</el-input>

<el-tree
  class="filter-tree"
  :data="memberStructures"
  :props="defaultProps"
  accordion
  show-checkbox
    highlight-current
  :filter-node-method="filterNode"
  @check-change="treeCheck2"
  style="border:1px solid #EBEEF5;padding:5px;height:290px;margin-top:8px;overflow-y:auto"
  ref="tree">
</el-tree>

</div>

<div class="selectForm1_left">
  <div class="selectForm1_title">已选成员</div>
  <div class="selected_box">
    <div class="card" :class="type === 'dark' ? 'bg-default': ''">
                    <div class="table-responsive">
                        <base-table class="table align-items-center table-flush" :class="type === 'dark' ? 'table-dark': ''" :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'" tbody-classes="list" :data="selectedMember2">
                            <template slot="columns">
                       
                      <th>姓名</th>
                      <th>操作</th>
</template>

<template slot-scope="{row}">
    <td class="budget">
        {{row.name}}
    </td>
    <td class="budget">
        <i class="el-icon-delete" @click="delSelectId2(row.id)"></i>
    </td>
</template>

      </base-table>
    </div>


  </div>

  </div>
</div>

  <div class="select_footer flex justify-center">
    <base-button  type="secondary" @click="cancelSelect2" style="color:#666;font-weight:500;">取消</base-button>
    <base-button  type="primary" @click="sureSelect2" style="margin-left:55px;font-weight:500;">确认</base-button>
  </div>

    </div>
   </div>
    <!-- start保密文件选择成员的弹框 -->




    <!-- 移除成员的dialog -->
    <div class="delMember" v-if="delMemberDialog">
      <div class="delMt">确认移除该成员吗？</div>
      <div class="delContent">移除后，该成员将无法查看相关权限文件</div>
      <div class="delBtns flex justify-center">
        <base-button  type="secondary" @click="delMemberDialog = false" style="color:#666;font-weight:500;">取消</base-button>
    <base-button  type="primary" @click="sureDM" style="margin-left:55px;font-weight:500;">确认</base-button>
      </div>
    </div>


    <!-- 移除成员的dialog2 -->
    <div class="delMember" v-if="delMemberDialog2">
      <div class="delMt">确认移除该成员吗？</div>
      <div class="delContent">移除后，该成员将无法查看相关权限文件</div>
      <div class="delBtns flex justify-center">
        <base-button  type="secondary" @click="delMemberDialog2 = false" style="color:#666;font-weight:500;">取消</base-button>
    <base-button  type="primary" @click="sureDM2" style="margin-left:55px;font-weight:500;">确认</base-button>
      </div>
    </div>

  </div>
</template>

<script>
import { addTopDir,getTopDir,updateDir,delDir,getExclusive,editExclusive,getPrivacy,editPrivacy } from '../api/knowledge'
import { memberStructures } from '../api/organization'
import { getStorage } from "../utils/auth";
import axios from 'axios'
  
export default {
  data() {
    return {
      memberStructures: '',
      filterText: '',
      defaultProps: {
          children: 'children',
          label: 'label'
        },
      radio: 3,
      show_close: false,
       centerDialogVisible: false,
      dialog: false,
      direction: "rtl",
      tab: 0,
      showClose: false,
      picUrl: "",
      dialogVisible: false,
      dialogImageUrl: "",
      actionUrl: "",
      limit: 1,
      newFile: {
        name: "",
        showOrder: "",
        coverUrl: ''
      },
      dialogFormVisible: false,
      type: '',
       topDir: '',
       baseURL: '',
       uploadParams: {
        business: 'knowledge-base-dir-cover'
      },
      selectDir: '',
      delId: '',
      exclusiveArr: [],
      privacyArr: [],
      selectForm1: false,
      selectForm2: false,
      selectedMember: [],
      selectedMember2: [],
      aa:[],
      editId: '',
      checkboxes: false,
      checkboxes2: false,
      delMemberDialog: false,
      delMemberDialog2: false,
      keyword: '',
      admin: ''

    };
  },
  watch: {
    filterText(val) {
        this.$refs.tree.filter(val);
      },
      dialog: 'handleDialog',
      checkboxes: 'checkboxChange',
      checkboxes2: 'checkboxChange2',
    },
  created() {
    this.admin = JSON.parse(getStorage("ents")).superAdminFlag
    this.baseURL = axios.defaults.baseURL
    this.actionUrl = 'http://tapi.neets.cc/tm/v1/image-utils/ext/upload'
    this.getTopDir()
    if(this.admin == 1){
      this.getStructures()
    }
    
  },
  methods: {
    stopClick() {

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
    // 确认删除成员
      sureDM() {
        // for(let i=0;i<this.exclusiveArr.length;i++){
        //   if(this.exclusiveArr[i].checked){
        //     this.exclusiveArr[i].id = null
        //   }
        // }
        const arr = []
        for(let i=0;i<this.exclusiveArr.length;i++){
          if(!this.exclusiveArr[i].checked){
            arr.push(this.exclusiveArr[i].id)
          }
          
        }

        this.delMemberDialog = false
        this.checkboxes = false


        const param = {
          memberIds: arr
        }
        editExclusive(this.editId,param).then(()=>{
            this.$notify({
          title: '成功',
          message: '移除成功！',
          type: 'success'
        });
        
        }).catch(()=>{
          this.$notify({
          title: '失败',
          message: '移除失败',
          type: 'warning'
        });
        })

      // 刷新列表
         getExclusive(this.editId).then(res=>{
        
        for(let i=0;i<res.length;i++){
            res[i].checked = false
            const name1= res[i].name.split("").reverse()
            res[i].nickname = name1[1]+name1[0]
          }
          this.exclusiveArr = res
      })

      },

       // 私密文件确认删除成员2
      sureDM2() {
        
        const arr = []
        for(let i=0;i<this.privacyArr.length;i++){
          if(!this.privacyArr[i].checked){
            arr.push(this.privacyArr[i].id)
          }
          
        }

        this.delMemberDialog2 = false
        this.checkboxes = false


        const param = {
          memberIds: arr
        }
        editPrivacy(this.editId,param).then(()=>{
            this.$notify({
          title: '成功',
          message: '移除成功！',
          type: 'success'
        });
        
        }).catch(()=>{
          this.$notify({
          title: '失败',
          message: '移除失败',
          type: 'warning'
        });
        })


        // 刷新列表
        getPrivacy(this.editId).then(res=>{
        
        for(let i=0;i<res.length;i++){
            res[i].checked = false
            const name1= res[i].name.split("").reverse()
            res[i].nickname = name1[1]+name1[0]
          }
          this.privacyArr = res
      })

      },
    // 显示批量删除dialog
      showMuchDel() {
        if(this.exclusiveArr.length==0){
          this.$notify({
          title: '失败',
          message: '没有可移除的成员',
          type: 'warning'
        });
        return
        }
        const tempArr = []
        for(let i=0;i<this.exclusiveArr.length;i++){
          if(this.exclusiveArr[i].checked){
            tempArr.push(this.exclusiveArr[i].id)
          }
        }
        if(tempArr.length==0){
          this.$notify({
          title: '失败',
          message: '请先勾选需要删除的成员！',
          type: 'warning'
        });
        return
        }
        this.delMemberDialog = true
      },
      // 私密显示批量删除dialog2
      showMuchDel2() {
        if(this.privacyArr.length==0){
          this.$notify({
          title: '失败',
          message: '没有可移除的成员',
          type: 'warning'
        });
        return
        }
        const tempArr = []
        for(let i=0;i<this.privacyArr.length;i++){
          if(this.privacyArr[i].checked){
            tempArr.push(this.privacyArr[i].id)
          }
        }
        if(tempArr.length==0){
          this.$notify({
          title: '失败',
          message: '请先勾选需要删除的成员！',
          type: 'warning'
        });
        return
        }
        this.delMemberDialog2 = true
      },
     // 监听全选box的改变1
      checkboxChange() {
        if(this.checkboxes){
          for(let i=0;i<this.exclusiveArr.length;i++){
          this.exclusiveArr[i].checked = true
          }
        } else {
          for(let i=0;i<this.exclusiveArr.length;i++){
          this.exclusiveArr[i].checked = false
          }
        }
        
      },
      // 监听全选box的改变2
      checkboxChange2() {
        if(this.checkboxes2){
          for(let i=0;i<this.privacyArr.length;i++){
          this.privacyArr[i].checked = true
          }
        } else {
          for(let i=0;i<this.privacyArr.length;i++){
          this.privacyArr[i].checked = false
          }
        }
        
      },
    // 当抽屉关闭的时候把添加成员的dialog也关闭
    handleDialog() {
      if(!this.dialog){
        this.selectForm1 = false
        this.selectForm2 = false
        this.aa = []
        this.checkboxes = false
        this.checkboxes2 = false
      this.selectedMember = []
      this.selectedMember2 = []
      this.delMemberDialog = false
      this.delMemberDialog2 = false
      }
    },
    // 删除预选成员
    delSelectId(id) {
      for(let i=0;i<this.selectedMember.length;i++){
        if(id==this.selectedMember[i].id){
          this.selectedMember.splice(i,1)
        }
      }
    },
    // 删除预选成员2
    delSelectId2(id) {
      for(let i=0;i<this.selectedMember2.length;i++){
        if(id==this.selectedMember2[i].id){
          this.selectedMember2.splice(i,1)
        }
      }
    },
    uniqueArr(arr1,arr2) {
        //合并两个数组
        arr1.push(...arr2)//或者arr1 = [...arr1,...arr2]
        //去重
        let arr3 = Array.from(new Set(arr1))//let arr3 = [...new Set(arr1)]
        // console.log(arr3)
        this.exclusiveArr = arr3
    },
    uniqueArr2(arr1, arr2){
        var arr3 = arr1.concat(arr2)
        var arr4 = []
        for(var i=0,len=arr3.length; i<len; i++) {
            if(arr4.indexOf(arr3[i]) === -1) {
                arr4.push(arr3[i])
            }
        }
        // console.log(arr4)
        this.privacyArr = arr4
    },
    // 专属确认选择
    sureSelect() {
      if(this.selectedMember.length==0){
        this.$notify({
          title: '失败',
          message: '请至少选择一名成员！',
          type: 'warning'
        });
        return
      }
      this.uniqueArr(this.exclusiveArr,this.selectedMember)


      this.aa = []
      this.selectedMember = []
      this.selectForm1 = false
      },
      // 保密确认选择
    sureSelect2() {
      if(this.selectedMember2.length==0){
        this.$notify({
          title: '失败',
          message: '请至少选择一名成员！',
          type: 'warning'
        });
        return
      }
      this.uniqueArr2(this.privacyArr,this.selectedMember2)


      this.aa = []
      this.selectedMember2 = []
      this.selectForm2 = false
      },
    
    cancelSelect() {
      this.selectForm1 = false
      this.aa = []
      this.selectedMember = []
    },
    cancelSelect2() {
      this.selectForm2 = false
      this.aa = []
      this.selectedMember2 = []
    },
    // 添加成员的输入框选择1
    treeCheck() {
      this.selectedMember = []
      this.getCheckedNodes()
      const aa = this.aa
      for(let i=0;i<aa.length;i++){
          if(aa[i].type==2){
            const name1= aa[i].label.split("").reverse()
            const nickname = name1[1]+name1[0]
            let obg = {
              name: aa[i].label,
              id: aa[i].id,
              checked:false,
              nickname: nickname,
              orgName: aa[i].memOrgName
            }
            this.selectedMember.push(obg)
          }
        }

    },
    // 添加成员的输入框选择2
    treeCheck2() {
      this.selectedMember2 = []
      this.getCheckedNodes()
      const aa2 = this.aa
      for(let i=0;i<aa2.length;i++){
          if(aa2[i].type==2){
            const name1= aa2[i].label.split("").reverse()
            const nickname = name1[1]+name1[0]
            let obg = {
              name: aa2[i].label,
              id: aa2[i].id,
              checked:false,
              nickname: nickname,
              orgName: aa2[i].memOrgName
            }
            this.selectedMember2.push(obg)
          }
        }

    },
    getCheckedNodes() {
        this.aa = this.$refs.tree.getCheckedNodes()
      },
    // 获取完整组织成员架构
      getStructures() {
        memberStructures().then(res=>{
          this.memberStructures = res
        })
      },
    // 树形控件过滤
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
    // 打开选择专属成员的tree
    showAddForm1(){
      this.selectForm1 = true
    },
    // 打开选择专属成员的tree
    showAddForm2(){
      this.selectForm2 = true
    },
    // 确定删除顶级文件
    sureDelDir() {
      this.centerDialogVisible = false
      delDir(this.delId).then(()=>{
        this.$notify({
          title: '成功',
          message: '删除成功！',
          type: 'success'
        });
        this.getTopDir()
      }).catch(()=>{
          this.$notify({
          title: '失败',
          message: '删除失败',
          type: 'warning'
        });
        })
    },
    showDelDialog(id) {
      this.centerDialogVisible = true
      this.delId = id
    },
    // 取消编辑文件基础信息
    cancelEdit() {
      this.dialog = false
    },
    // 确认编辑文件基础信息
    sureEdit() {

      // 1编辑基础信息
      updateDir(this.editId,this.selectDir).then(()=>{
        if(this.selectDir.name==''){
          this.$notify({
          title: '失败',
          message: '请输入文件名称',
          type: 'warning'
        });
        return
        }

        this.getTopDir()
        
      }).catch(()=>{
          this.$notify({
          title: '失败',
          message: '编辑文件夹失败',
          type: 'warning'
        });
        })

        // 2编辑专属文件
        const arr = []
        for(let i=0;i<this.exclusiveArr.length;i++){
          arr.push(this.exclusiveArr[i].id)
        }
        const param = {
          memberIds: arr
        }
        editExclusive(this.editId,param).then(()=>{
          
        
        }).catch(()=>{
          this.$notify({
          title: '失败',
          message: '编辑文件夹失败',
          type: 'warning'
        });
        })

        // 3编辑私密文件

        const arr2 = []
        for(let i=0;i<this.privacyArr.length;i++){
          arr2.push(this.privacyArr[i].id)
        }
        const param2 = {
          memberIds: arr2
        }
        editPrivacy(this.editId,param2).then(()=>{
          
        
        }).catch(()=>{
          this.$notify({
          title: '失败',
          message: '编辑文件夹失败',
          type: 'warning'
        });
        })


        this.$notify({
          title: '成功',
          message: '编辑文件夹成功！',
          type: 'success'
        });






        
        this.dialog = false
    },
    // 取消新建文件夹
    cancelAddFile() {
      this.dialogFormVisible = false
      this.newFile= {
        name: "",
        showOrder: "",
        coverUrl: ''
      }
      
    },
    // 确认新建文件夹
    sureAddFile() {
      this.dialogFormVisible = false
      addTopDir(this.newFile).then(()=>{
        if(this.newFile.name==''){
          this.$notify({
          title: '失败',
          message: '请输入文件名称',
          type: 'warning'
        });
        return
        }
        this.$notify({
          title: '成功',
          message: '新建文件夹成功！',
          type: 'success'
        });
        this.newFile={
          name: "",
        showOrder: "",
        coverUrl: ''
        }
        this.getTopDir()
      }).catch(()=>{
          this.$notify({
          title: '失败',
          message: '新建文件夹失败',
          type: 'warning'
        });
        this.newFile={
          name: "",
        showOrder: "",
        coverUrl: ''
        }
        })

    },
    // 获取顶级组织
    getTopDir() {
      getTopDir().then(res=>{
        this.topDir = res
      })
    },
    delInfoImg() {
      this.selectDir.coverUrl = ''
    },
    delNewFileImg() {
      this.newFile.coverUrl = ''
    },
    checkTab(index) {
      this.tab = index;
      this.selectForm1 = false
      this.selectForm2 = false
      this.aa = []
      this.selectedMember = []
      this.selectedMember2 = []
    },
    // 展开编辑文件夹的抽屉
    showDialog(id) {
      this.editId = id
      this.dialog = true;
      for(let i=0;i<this.topDir.length;i++){
        if(this.topDir[i].id == id){
          this.selectDir = JSON.parse(JSON.stringify(this.topDir[i]))
        }
      }
      getExclusive(this.editId).then(res=>{
        
        for(let i=0;i<res.length;i++){
            res[i].checked = false
            const name1= res[i].name.split("").reverse()
            res[i].nickname = name1[1]+name1[0]
          }
          this.exclusiveArr = res
      })
      getPrivacy(this.editId).then(res=>{
        
        for(let i=0;i<res.length;i++){
            res[i].checked = false
            const name1= res[i].name.split("").reverse()
            res[i].nickname = name1[1]+name1[0]
          }
          this.privacyArr = res
      })



    },
    gotoDetail(id,name) {
      this.$router.push({ 
        path: "/department",
        query: {
              id: id,
              name:name
            }
 });
    },
    handleClose() {
      this.dialog = false;
    },
    handleAvatarSuccess(res) {
      this.newFile.coverUrl = res[0].imageUrl;
    },
    handleAvatarSuccess2(res) {
      this.selectDir.coverUrl = res[0].imageUrl;
    }
  }
  
};
</script>

